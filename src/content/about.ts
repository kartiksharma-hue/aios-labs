/**
 * Company content.
 *
 * Everything here is positioning — how AIOS Labs approaches the work. Nothing
 * claims a client count, a revenue figure, a year founded, an award or a
 * credential, because none is verified.
 */

export type Principle = {
  index: string;
  title: string;
  body: string;
};

export type ConnectedDiscipline = {
  index: string;
  name: string;
  /** What this discipline does for the others. */
  role: string;
};

export const aboutHero = {
  eyebrow: "AIOS Labs / About",
  headline: "Built for businesses that want growth to make sense.",
  positioning:
    "AIOS Labs brings strategy, acquisition, conversion and technology into one connected growth system.",
} as const;

export const whyWeExist = {
  eyebrow: "Why we exist",
  heading: "Channels bought separately end up competing.",
  body: [
    "In most businesses the growth functions are bought and managed independently. Search sits with one team, paid media with another, social with a third, and sales with a fourth. Each is measured on its own numbers and each is doing what it was asked to do.",
    "The cost of that is invisible on any single report. Paid media pays for demand that organic could hold. Content is written for traffic no one has scoped a next step for. Sales chases leads that were never qualified against anything. Every channel looks defensible in isolation and the total does not add up.",
    "AIOS Labs exists to run those functions as one system, against one definition of a result. That is a harder engagement to sell than a single channel — but it is the one that makes the numbers legible.",
  ],
} as const;

export const principles: readonly Principle[] = [
  {
    index: "01",
    title: "Start with the problem.",
    body: "Before any channel is chosen, we want to know what is actually constraining growth. Often it is not the thing the brief names.",
  },
  {
    index: "02",
    title: "Build systems, not campaigns.",
    body: "A campaign ends. A system keeps compounding, and can be handed to someone else without collapsing.",
  },
  {
    index: "03",
    title: "Measure what matters.",
    body: "Platform dashboards report what they can see and take credit generously. We instrument first, so the numbers a decision rests on can be trusted.",
  },
  {
    index: "04",
    title: "Decide from evidence.",
    body: "Opinion is a starting hypothesis, not a conclusion. Tests get a decision rule before they run, and losing results are reported as plainly as winning ones.",
  },
  {
    index: "05",
    title: "Keep improving.",
    body: "The work is a loop. What we learn in one quarter changes what we prioritise in the next, including when that means undoing our own decisions.",
  },
];

export const connectedDisciplines: readonly ConnectedDiscipline[] = [
  { index: "01", name: "Strategy", role: "Decides what the rest of the system is for." },
  { index: "02", name: "Acquisition", role: "Brings demand, paid and organic, to a defined destination." },
  { index: "03", name: "Content", role: "Gives acquisition something worth arriving for." },
  { index: "04", name: "Conversion", role: "Turns arriving attention into an action worth having." },
  { index: "05", name: "Automation", role: "Makes the follow-up happen whether or not anyone remembers." },
  { index: "06", name: "Measurement", role: "Tells the other five whether any of it worked." },
];
