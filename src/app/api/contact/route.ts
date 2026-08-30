import { NextResponse } from "next/server";
import {
  emptySubmission,
  hasErrors,
  validateSubmission,
  type ContactSubmission,
} from "@/lib/contact-schema";

/**
 * Inquiry endpoint — and the single configuration boundary for form delivery.
 *
 * There is no verified delivery provider for this project yet, so this handler
 * does not pretend one exists. It validates properly and then reports honestly
 * that delivery is unconfigured, with a 503. It never returns success for a
 * submission it did not deliver.
 *
 * To switch delivery on, set CONTACT_WEBHOOK_URL (and optionally
 * CONTACT_WEBHOOK_TOKEN) in the environment — see .env.example. Both are read
 * server-side only and are never hard-coded or exposed to the browser.
 */

export type ContactResponse =
  | { ok: true }
  | { ok: false; reason: "invalid"; errors: Record<string, string> }
  | { ok: false; reason: "not-configured" }
  | { ok: false; reason: "delivery-failed" };

function readSubmission(body: unknown): ContactSubmission {
  const source = (body ?? {}) as Record<string, unknown>;
  const values = { ...emptySubmission };

  for (const key of Object.keys(values) as (keyof ContactSubmission)[]) {
    const raw = source[key];
    // Cap length so an oversized payload cannot be forwarded downstream.
    values[key] = typeof raw === "string" ? raw.slice(0, 5000) : "";
  }

  return values;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json<ContactResponse>(
      { ok: false, reason: "invalid", errors: { name: "Malformed request." } },
      { status: 400 },
    );
  }

  const values = readSubmission(body);
  const errors = validateSubmission(values);

  if (hasErrors(errors)) {
    return NextResponse.json<ContactResponse>(
      { ok: false, reason: "invalid", errors: errors as Record<string, string> },
      { status: 422 },
    );
  }

  const endpoint = process.env.CONTACT_WEBHOOK_URL;

  if (!endpoint) {
    // The honest path today. 503 rather than 200: nothing was delivered.
    return NextResponse.json<ContactResponse>(
      { ok: false, reason: "not-configured" },
      { status: 503 },
    );
  }

  try {
    const token = process.env.CONTACT_WEBHOOK_TOKEN;
    const delivery = await fetch(endpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        source: "aios-labs-website",
        receivedAt: new Date().toISOString(),
        ...values,
      }),
    });

    if (!delivery.ok) {
      return NextResponse.json<ContactResponse>(
        { ok: false, reason: "delivery-failed" },
        { status: 502 },
      );
    }

    return NextResponse.json<ContactResponse>({ ok: true });
  } catch {
    return NextResponse.json<ContactResponse>(
      { ok: false, reason: "delivery-failed" },
      { status: 502 },
    );
  }
}
