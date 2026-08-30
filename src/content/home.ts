/**
 * Home page content.
 *
 * Capability copy describes what AIOS Labs does. Anything that would be a
 * factual claim about clients, people or results is a marked placeholder —
 * see PLACEHOLDER entries below. Do not replace those with invented content.
 */

// The service list is canonical in src/content/services.ts — the home page,
// the services journey and the footer all read the same records.
export { services, type Service } from "@/content/services";

/** The five connected disciplines, set as a typographic equation. */
export const growthPillars = [
  "Strategy",
  "Acquisition",
  "Conversion",
  "Retention",
  "Scale",
] as const;

export type GrowthStep = {
  index: string;
  title: string;
  description: string;
};

export const growthSteps: readonly GrowthStep[] = [
  {
    index: "01",
    title: "Understand",
    description:
      "Business model, margins, buyers and the constraint actually holding growth back.",
  },
  {
    index: "02",
    title: "Strategize",
    description:
      "A sequenced plan with a clear thesis for every channel we commit to.",
  },
  {
    index: "03",
    title: "Execute",
    description:
      "Campaigns, creative, content and tracking shipped on a predictable cadence.",
  },
  {
    index: "04",
    title: "Measure",
    description:
      "Instrumentation first, so decisions rest on evidence rather than opinion.",
  },
  {
    index: "05",
    title: "Scale",
    description:
      "Push what compounds, cut what doesn't, and feed the learning back in.",
  },
];

/**
 * PLACEHOLDER — no team members have been provided. These are layout slots.
 * The count here is a grid decision, not a statement about headcount.
 */
export const teamSlots = ["01", "02", "03", "04"] as const;
