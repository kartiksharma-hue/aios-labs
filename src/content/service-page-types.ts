/**
 * Long-form content model for an individual service page.
 *
 * Every service page is rendered from one of these records by a single
 * template — there is no per-service markup. Adding a service means adding a
 * record, not a page.
 *
 * CONTENT RULE: nothing in these records may claim a client result, a
 * percentage, a ranking, a ROAS, a lead count, an award, a certification or a
 * guarantee. No such results have been verified. Copy describes method and
 * scope only.
 */

export type NarrativeSection = {
  /** Mono eyebrow, e.g. "The problem". */
  eyebrow: string;
  heading: string;
  /** One paragraph per entry. */
  body: readonly string[];
};

export type Deliverable = {
  index: string;
  title: string;
  description: string;
};

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type ServicePageContent = {
  /** Matches the slug segment of the service's href. */
  slug: string;
  /** Short category line above the h1. */
  category: string;
  /** The h1. */
  headline: string;
  /** Sentence under the h1. */
  positioning: string;
  /** <title> — the layout appends the site name. */
  metaTitle: string;
  metaDescription: string;
  /** schema.org Service.serviceType */
  serviceType: string;
  problem: NarrativeSection;
  approach: NarrativeSection;
  deliverablesHeading: string;
  deliverables: readonly Deliverable[];
  processHeading: string;
  process: readonly ProcessStep[];
  /** Slugs of 3 related services. */
  related: readonly string[];
  faqs: readonly Faq[];
};
