import type { MediaSlot } from "@/components/ui/media-frame";
import type { SocialLink } from "@/content/founder";

/**
 * Team directory.
 *
 * `members` is empty. No name, role, bio, photograph or social profile may be
 * added here unless it belongs to a real person who has agreed to appear.
 *
 * While it is empty the page renders `reservedSeats` marked slots. That number
 * is a layout decision and is labelled as such on the page — it is not a claim
 * about headcount.
 */

export type TeamMember = {
  slug: string;
  /** Required. */
  name: string;
  /** Required. */
  role: string;
  bio: string | null;
  portrait: MediaSlot;
  social: readonly SocialLink[];
  featured: boolean;
};

export const members: readonly TeamMember[] = [];

export const reservedSeats = 3;

export const reservedPortrait: MediaSlot = {
  label: "Portrait",
  ratio: "4 / 5",
  src: null,
  alt: null,
};
