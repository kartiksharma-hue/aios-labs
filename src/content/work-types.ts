/**
 * Case study content model.
 *
 * CONTENT RULE: no revenue figure, percentage, ROAS, CAC, lead count, traffic
 * number, ranking, testimonial, quote, award, certification or client logo may
 * appear unless it has been verified with the client. None has been.
 *
 * Absence is therefore a first-class state rather than an accident. Every
 * field that would carry a client claim is nullable or empty-able, and the
 * template renders a marked reserved state instead of inventing a value. A
 * case study becomes real by filling these in — never by adding a page.
 */

/**
 * - `placeholder` — not enough verified detail to publish. Renders a marked
 *   reserved state and stays out of the index and the sitemap.
 * - `methodology` — the scope of work is verified, the numbers are not. The
 *   engagement is documented honestly; no results section is invented.
 * - `published`  — scope and verified outcome reporting both exist.
 */
export type CaseStudyStatus = "placeholder" | "methodology" | "published";

export type CaseStudyMetric = {
  label: string;
  value: string;
  /** Where the number came from — required for anything published. */
  source: string;
};

export type CaseStudySection = {
  heading: string;
  /**
   * Paragraphs. For a placeholder these describe what the section will
   * document, which is true of the process — they never describe a client.
   */
  body: readonly string[];
};

export type ExecutionStep = {
  index: string;
  title: string;
  description: string;
};

export type CaseVisual = {
  /** What occupies the slot. Shown on the placeholder frame, and used as the
   *  alt text fallback once a real asset is dropped in. */
  label: string;
  /** CSS aspect-ratio, e.g. "16 / 10". */
  ratio: string;
  /** Real asset path. `null` renders the marked placeholder frame instead. */
  src: string | null;
  /** Required alongside `src`; described for screen readers. */
  alt: string | null;
};

export type CaseStudy = {
  slug: string;
  /** The case study's display name — the client, once they are named. */
  title: string;
  /** e.g. "Case Study 01". */
  reference: string;
  category: string;
  /** Client name. `null` while the engagement is unnamed. */
  client: string | null;
  year: string | null;
  summary: string;
  status: CaseStudyStatus;
  challenge: CaseStudySection;
  approach: CaseStudySection;
  /** `null` until the engagement's real steps are approved. */
  execution: readonly ExecutionStep[] | null;
  /** Slugs from src/content/services.ts. */
  services: readonly string[];
  /** `null` until verified outcome reporting exists. */
  outcome: readonly string[] | null;
  /** Empty until verified. Never rendered as zeroes or dashes. */
  metrics: readonly CaseStudyMetric[];
  gallery: readonly CaseVisual[];
  featured: boolean;
  published: boolean;
};
