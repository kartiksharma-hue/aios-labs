/**
 * Home page content.
 *
 * Capability copy describes what AIOS Labs does. Anything that would be a
 * factual claim about clients, people or results is a marked placeholder —
 * see PLACEHOLDER entries below. Do not replace those with invented content.
 */

export type Service = {
  index: string;
  name: string;
  description: string;
  href: string;
};

export const services: readonly Service[] = [
  {
    index: "01",
    name: "SEO & Organic Growth",
    description: "Visibility that keeps compounding after the spend stops.",
    href: "/services/seo",
  },
  {
    index: "02",
    name: "Performance Marketing",
    description: "Paid media run against contribution margin, not vanity ROAS.",
    href: "/services/performance-marketing",
  },
  {
    index: "03",
    name: "Google Ads",
    description: "Intent captured at the moment it appears.",
    href: "/services/google-ads",
  },
  {
    index: "04",
    name: "Meta Ads",
    description: "Creative and audience testing built as a repeatable system.",
    href: "/services/meta-ads",
  },
  {
    index: "05",
    name: "Lead Generation",
    description: "Qualified pipeline, not form fills.",
    href: "/services/lead-generation",
  },
  {
    index: "06",
    name: "Social Media",
    description: "Presence built to turn attention into demand.",
    href: "/services/social-media",
  },
  {
    index: "07",
    name: "Conversion Optimization",
    description: "The same traffic, asked to work harder.",
    href: "/services/conversion-optimization",
  },
  {
    index: "08",
    name: "Marketing Automation",
    description: "The follow-up that runs whether or not anyone remembers.",
    href: "/services/marketing-automation",
  },
];

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
 * PLACEHOLDER — no case studies have been provided. These are layout slots,
 * not projects. Never fill them with invented clients, industries or results.
 */
export type WorkSlot = {
  index: string;
  fields: readonly { label: string; value: string }[];
};

export const workSlots: readonly WorkSlot[] = [
  {
    index: "01",
    fields: [
      { label: "Client", value: "Awaiting approval" },
      { label: "Industry", value: "To be confirmed" },
      { label: "Result", value: "Pending sign-off" },
    ],
  },
  {
    index: "02",
    fields: [
      { label: "Client", value: "Awaiting approval" },
      { label: "Industry", value: "To be confirmed" },
      { label: "Result", value: "Pending sign-off" },
    ],
  },
  {
    index: "03",
    fields: [
      { label: "Client", value: "Awaiting approval" },
      { label: "Industry", value: "To be confirmed" },
      { label: "Result", value: "Pending sign-off" },
    ],
  },
];

/**
 * PLACEHOLDER — no team members have been provided. These are layout slots.
 * The count here is a grid decision, not a statement about headcount.
 */
export const teamSlots = ["01", "02", "03", "04"] as const;
