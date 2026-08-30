import { services } from "@/content/services";

/**
 * Contact page copy.
 *
 * No phone number, email address, office address, opening hours, social
 * account or response-time promise appears here. None is verified — see
 * `contact` in src/lib/site.ts, which is empty by design. The page renders an
 * explicit pending state instead of inventing a channel.
 */

export type ContactStep = {
  index: string;
  title: string;
  description: string;
};

export const contactHero = {
  eyebrow: "AIOS Labs / Contact",
  headline: "Let's build what comes next.",
  positioning:
    "Tell us where growth is getting stuck. We'll start with the problem, not a package.",
} as const;

/** Deliberately free of any response-time or deliverable promise. */
export const whatHappensNext: readonly ContactStep[] = [
  {
    index: "01",
    title: "You tell us the problem.",
    description:
      "In your words, not a brief. What is failing, what it is costing, and what has already been tried.",
  },
  {
    index: "02",
    title: "We look at the system around it.",
    description:
      "Acquisition, conversion, content, automation and measurement — because the cause is often not where the symptom shows up.",
  },
  {
    index: "03",
    title: "We decide what makes sense next.",
    description:
      "Sometimes that is an engagement. Sometimes it is one change you can make without us. We will say which.",
  },
];

export const fitSection = {
  eyebrow: "Fit",
  heading: "Good conversations start with a real problem.",
  body: [
    "The inquiries we can help with most are the specific ones: a channel that stopped working, numbers that do not reconcile, traffic that arrives and leaves, a follow-up process that depends on somebody remembering.",
    "Before recommending anything we want to understand the system around the symptom — how demand is created, what happens to it on arrival, what is automated, and how any of it is measured. That is usually where the answer is, and it is not always where the brief points.",
    "If what you need is a single channel run well, say so. We would rather scope that honestly than sell a system you do not need yet.",
  ],
} as const;

/** Ranges, not a claim about anyone's budget. "Prefer not to say" is first-class. */
export const spendOptions: readonly string[] = [
  "Not yet spending",
  "Under ₹1,00,000 / month",
  "₹1,00,000 – ₹5,00,000 / month",
  "₹5,00,000 – ₹15,00,000 / month",
  "Over ₹15,00,000 / month",
  "Prefer not to say",
];

/**
 * Built from the canonical service list so the form can never drift from the
 * services the site actually offers. No service is invented here.
 */
export const serviceOptions: readonly string[] = [
  ...services.map((service) => service.name),
  "Other",
];
