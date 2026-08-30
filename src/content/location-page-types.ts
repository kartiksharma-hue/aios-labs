/**
 * Location content model.
 *
 * CONTENT RULE: no office, address, branch, local employee, local client,
 * local case study, ranking, review, award, certification, years-in-market or
 * market statistic may appear unless it has been verified. None has been.
 *
 * A city in a URL does not make AIOS Labs a local business. Every location is
 * a `service-market` until an office is verified, and the copy says "businesses
 * operating in X" rather than "our X office".
 */

export type LocationPresence = "service-market" | "office";

/**
 * Verified office details. `null` for every location today. Adding one later
 * is a content change — the template already reads these fields, so no page
 * architecture has to be rebuilt.
 */
export type LocationOffice = {
  addressLines: readonly string[];
  postalCode: string | null;
  phone: string | null;
  email: string | null;
  openingHours: string | null;
};

export type ApproachStep = {
  index: string;
  title: string;
  description: string;
};

export type LocationPage = {
  slug: string;
  city: string;
  region: string | null;
  presence: LocationPresence;
  /** Non-null only when `presence` is "office". */
  office: LocationOffice | null;
  headline: string;
  positioning: string;
  /** Method, not market facts — what any business in a market must establish. */
  marketContext: readonly string[];
  /**
   * Verified, researched detail specific to this market. `null` until that
   * research exists; the page renders a marked reserved state, and the route
   * stays out of the index so four near-identical pages never become a
   * doorway-page network.
   */
  marketNotes: readonly string[] | null;
  /** Slugs from src/content/services.ts — never duplicated definitions. */
  services: readonly string[];
  approach: readonly ApproachStep[];
  audience: readonly string[];
  metaTitle: string;
  metaDescription: string;
  published: boolean;
};
