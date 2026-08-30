import type { MediaSlot } from "@/components/ui/media-frame";

/**
 * Founder profile.
 *
 * No verified founder information has been provided, so name, story and
 * philosophy are `null` and the page renders marked reserved states. Nothing
 * about a person's background, history, education or credentials may be
 * written here without verification.
 *
 * To publish: fill the fields, add a portrait, point `portrait.src` at it.
 */

export type SocialLink = {
  label: string;
  href: string;
};

export type FounderPrinciple = {
  index: string;
  title: string;
  body: string;
};

export type Founder = {
  /** `null` until the verified name is provided. */
  name: string | null;
  role: string;
  portrait: MediaSlot;
  /** One-line introduction. */
  intro: string | null;
  /** Paragraphs, in the founder's own account. */
  story: readonly string[] | null;
  /** Three to five principles. */
  philosophy: readonly FounderPrinciple[] | null;
  social: readonly SocialLink[];
};

export const founder: Founder = {
  name: null,
  role: "Founder, AIOS Labs",
  portrait: {
    label: "Founder portrait",
    ratio: "4 / 5",
    src: null,
    alt: null,
  },
  intro: null,
  story: null,
  philosophy: null,
  social: [],
};
