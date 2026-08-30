import type { MediaSlot } from "@/components/ui/media-frame";

/**
 * Journal content model.
 *
 * CONTENT RULE: no client result, traffic or revenue figure, ROAS, ranking,
 * case-study outcome, award, certification, years of experience, client name,
 * testimonial, attributed quote, unsourced statistic or invented author may
 * appear. None has been verified.
 *
 * `published: false` is the honest default. A draft is routable but is never
 * presented as a published article, never indexed, never given Article
 * structured data, and never enters the sitemap.
 */

/** Inline content. A bare string is plain text; the object form is a link. */
export type Inline = string | { text: string; href: string };

export type BlogBlock =
  | { type: "paragraph"; content: readonly Inline[] }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; ordered: boolean; items: readonly (readonly Inline[])[] }
  /** `attribution` stays null unless the speaker is verified. */
  | { type: "quote"; text: string; attribution: string | null }
  | { type: "note"; content: readonly Inline[] }
  | { type: "image"; image: MediaSlot };

export type BlogCategory =
  | "Strategy"
  | "SEO"
  | "Paid Acquisition"
  | "Content"
  | "Conversion"
  | "Automation"
  | "Measurement";

export type BlogAuthor = {
  name: string;
  role: string | null;
  /** Internal profile, e.g. "/founder". Never an invented external profile. */
  href: string | null;
};

export type BlogPost = {
  slug: string;
  /** Editorial reference, e.g. "Article 01". Used while a piece is a draft. */
  reference: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  /** `null` until a real, named author is confirmed. */
  author: BlogAuthor | null;
  /** ISO date. `null` until the piece is actually published. */
  publishedAt: string | null;
  updatedAt: string | null;
  /** Minutes. `null` lets the renderer estimate from the content instead. */
  readingTime: number | null;
  cover: MediaSlot;
  /** `null` while the piece is an outline with no body yet. */
  content: readonly BlogBlock[] | null;
  /** Slugs of other posts. */
  related: readonly string[];
  featured: boolean;
  published: boolean;
  seoTitle: string;
  seoDescription: string;
};
