"use client";

import { useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import {
  emptySubmission,
  hasErrors,
  requiredFields,
  validateSubmission,
  type ContactField,
  type ContactSubmission,
  type FieldErrors,
} from "@/lib/contact-schema";
import { serviceOptions, spendOptions } from "@/content/contact";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "sent" }
  | { kind: "not-configured" }
  | { kind: "failed" };

const fieldBase =
  "border-line bg-transparent text-ink placeholder:text-ink-faint w-full rounded-xs border px-4 py-3 text-body " +
  "transition-colors duration-quick ease-signature hover:border-line-strong focus:border-signal";

/** Labels are always real <label> elements — never placeholder text. */
function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="label text-ink-muted flex items-center gap-2">
      {children}
      {required ? (
        <span className="text-signal" aria-hidden>
          *
        </span>
      ) : null}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-small text-signal">
      {message}
    </p>
  );
}

export function ContactForm() {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  const [values, setValues] = useState<ContactSubmission>(emptySubmission);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const fieldId = (name: ContactField) => `${formId}-${name}`;
  const errorId = (name: ContactField) => `${formId}-${name}-error`;
  const isRequired = (name: ContactField) => requiredFields.includes(name);

  const update = (name: ContactField, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    // Clear a field's error as soon as the visitor starts fixing it.
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const describedBy = (name: ContactField) =>
    errors[name] ? errorId(name) : undefined;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validateSubmission(values);
    setErrors(found);

    if (hasErrors(found)) {
      setStatus({ kind: "idle" });
      // Move focus to the first field that needs attention.
      const first = (Object.keys(found) as ContactField[])[0];
      formRef.current
        ?.querySelector<HTMLElement>(`#${CSS.escape(fieldId(first))}`)
        ?.focus();
      return;
    }

    setStatus({ kind: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      const payload = (await response.json()) as {
        ok: boolean;
        reason?: string;
        errors?: Record<string, string>;
      };

      if (payload.ok) {
        setStatus({ kind: "sent" });
        setValues(emptySubmission);
        return;
      }

      if (payload.reason === "invalid" && payload.errors) {
        setErrors(payload.errors as FieldErrors);
        setStatus({ kind: "idle" });
        return;
      }

      // Values are deliberately left in place: nothing the visitor typed is
      // discarded when delivery could not happen.
      setStatus({
        kind: payload.reason === "not-configured" ? "not-configured" : "failed",
      });
    } catch {
      setStatus({ kind: "failed" });
    }

    summaryRef.current?.focus();
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor={fieldId("name")} required={isRequired("name")}>
            01 — Name
          </Label>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name")}
            className={cn(fieldBase, errors.name && "border-signal")}
          />
          <FieldError id={errorId("name")} message={errors.name} />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor={fieldId("email")} required={isRequired("email")}>
            02 — Work email
          </Label>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email")}
            className={cn(fieldBase, errors.email && "border-signal")}
          />
          <FieldError id={errorId("email")} message={errors.email} />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor={fieldId("company")}>03 — Company</Label>
          <input
            id={fieldId("company")}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            className={fieldBase}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor={fieldId("website")}>04 — Website</Label>
          <input
            id={fieldId("website")}
            name="website"
            type="url"
            inputMode="url"
            autoComplete="url"
            value={values.website}
            onChange={(e) => update("website", e.target.value)}
            aria-invalid={Boolean(errors.website)}
            aria-describedby={describedBy("website")}
            className={cn(fieldBase, errors.website && "border-signal")}
          />
          <FieldError id={errorId("website")} message={errors.website} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={fieldId("improve")} required={isRequired("improve")}>
          05 — What are you trying to improve?
        </Label>
        <textarea
          id={fieldId("improve")}
          name="improve"
          rows={4}
          required
          value={values.improve}
          onChange={(e) => update("improve", e.target.value)}
          aria-invalid={Boolean(errors.improve)}
          aria-describedby={describedBy("improve")}
          className={cn(fieldBase, "resize-y", errors.improve && "border-signal")}
        />
        <FieldError id={errorId("improve")} message={errors.improve} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor={fieldId("spend")}>
            06 — Current monthly marketing spend
          </Label>
          <select
            id={fieldId("spend")}
            name="spend"
            value={values.spend}
            onChange={(e) => update("spend", e.target.value)}
            className={fieldBase}
          >
            <option value="">Select an option</option>
            {spendOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor={fieldId("service")}>07 — Primary area of interest</Label>
          <select
            id={fieldId("service")}
            name="service"
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            className={fieldBase}
          >
            <option value="">Select an option</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={fieldId("context")}>08 — Additional context</Label>
        <textarea
          id={fieldId("context")}
          name="context"
          rows={3}
          value={values.context}
          onChange={(e) => update("context", e.target.value)}
          className={cn(fieldBase, "resize-y")}
        />
      </div>

      {/* Announced when it appears, and focusable so submission outcomes are
          not silently missed by anyone not looking at this part of the page. */}
      <div
        ref={summaryRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className={cn(status.kind === "idle" && "sr-only")}
      >
        {status.kind === "sent" ? (
          <p className="border-line text-ink rounded-xs border px-5 py-4 text-small">
            Thank you — your inquiry has been sent.
          </p>
        ) : null}

        {status.kind === "not-configured" ? (
          <div className="border-signal bg-signal-soft flex flex-col gap-2 rounded-xs border px-5 py-4">
            <p className="label text-signal">Form delivery is not configured yet</p>
            <p className="text-small text-ink-muted">
              Your inquiry has <strong className="text-ink">not</strong> been
              sent, and we would rather tell you than pretend otherwise. Your
              answers are still here — nothing has been lost. Please try again
              once this is live.
            </p>
          </div>
        ) : null}

        {status.kind === "failed" ? (
          <div className="border-signal flex flex-col gap-2 rounded-xs border px-5 py-4">
            <p className="label text-signal">Something went wrong</p>
            <p className="text-small text-ink-muted">
              Your inquiry could not be sent. Your answers are still here —
              please try again.
            </p>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-start gap-4">
        <button
          type="submit"
          disabled={status.kind === "submitting"}
          className={cn(
            "bg-signal text-ink-inverse group/btn inline-flex h-13 items-center justify-center gap-2 rounded-xs px-7 font-medium",
            "transition-colors duration-quick ease-signature",
            "hover:bg-[color-mix(in_srgb,var(--color-signal)_88%,white)]",
            "disabled:pointer-events-none disabled:opacity-40",
          )}
        >
          {status.kind === "submitting" ? "Sending…" : "Start the Conversation"}
          <span
            aria-hidden
            className="transition-transform duration-quick ease-signature group-hover/btn:translate-x-1"
          >
            →
          </span>
        </button>
        <p className="text-small text-ink-faint">
          <span aria-hidden>*</span> Required. We will only use these details to
          reply to your inquiry.
        </p>
      </div>
    </form>
  );
}
