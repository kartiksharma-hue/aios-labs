import type { MediaSlot } from "@/components/ui/media-frame";

/**
 * Founder profile — Kartik Sharma.
 *
 * Everything here is supplied and verified. Nothing about background,
 * education, previous roles, credentials, awards or results may be added
 * without verification: the page is deliberately built so that an unverified
 * field stays empty rather than being filled in on someone's behalf.
 *
 * The portrait is the one outstanding asset. See `portrait` below.
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

/** A discipline the founder works across. `href` links it to its service page
 *  where one exists; the rest render as plain entries. */
export type FocusArea = {
  label: string;
  href: string | null;
};

export type Founder = {
  /** `null` until the verified name is provided. Drives indexability. */
  name: string | null;
  role: string;
  portrait: MediaSlot;
  /** The page's positioning line. */
  headline: string | null;
  /** One-paragraph introduction. */
  intro: string | null;
  /** Paragraphs, in the founder's own account. */
  story: readonly string[] | null;
  /** The philosophy in the founder's own words, quoted whole. */
  philosophyStatement: string | null;
  /** The same philosophy, set out as the principles it breaks into. */
  philosophy: readonly FounderPrinciple[] | null;
  /** What the founder works across day to day. */
  focus: readonly FocusArea[];
  whyAiosLabs: string | null;
  vision: string | null;
  social: readonly SocialLink[];
};

export const founder: Founder = {
  name: "Kartik Sharma",
  role: "Founder, AIOS Labs",

  /**
   * PENDING ASSET — the only outstanding item on this page.
   *
   * To publish the portrait:
   *   1. Save the supplied photograph to `public/images/kartik-sharma.jpg`
   *   2. Change `src` below to "/images/kartik-sharma.jpg"
   *
   * Nothing else needs to change. `MediaFrame` swaps the marked placeholder
   * for the real asset at the same ratio, `alt` is already written, and the
   * Open Graph card picks the portrait up automatically (see founder/page.tsx).
   */
  portrait: {
    label: "Founder portrait",
    ratio: "4 / 5",
    src: null,
    alt: "Kartik Sharma, Founder of AIOS Labs",
  },

  headline:
    "Building AIOS Labs around a simpler idea: growth should work as a system.",

  intro:
    "Kartik Sharma is the founder of AIOS Labs, a digital growth agency focused on connecting strategy, acquisition, conversion and technology into a more coherent marketing system.",

  story: [
    "Kartik leads AIOS Labs and works across digital growth strategy, SEO, performance marketing, lead generation, website and growth strategy, and marketing systems.",
    "AIOS Labs is built around connecting those disciplines rather than running them separately — strategy, acquisition, conversion and technology designed to support one another instead of competing for the same budget.",
  ],

  philosophyStatement:
    "Marketing should begin with the business problem, not with a list of channels. The goal is not to run more campaigns — it is to understand what needs to change, build the right system around it, measure what matters and keep improving.",

  philosophy: [
    {
      index: "01",
      title: "Start with the problem.",
      body: "Marketing should begin with the business problem, not with a list of channels.",
    },
    {
      index: "02",
      title: "Connect the system.",
      body: "Understand what needs to change, then build the right system around it rather than adding another campaign beside it.",
    },
    {
      index: "03",
      title: "Measure what matters.",
      body: "Decide what a result actually is before the work starts, then measure whether it moved.",
    },
    {
      index: "04",
      title: "Keep improving.",
      body: "A growth system is not finished at launch. What it measures feeds back into what it does next.",
    },
  ],

  focus: [
    { label: "SEO", href: "/services/seo" },
    { label: "Performance Marketing", href: "/services/performance-marketing" },
    { label: "Lead Generation", href: "/services/lead-generation" },
    { label: "Growth Strategy", href: null },
    { label: "Web & Conversion", href: "/services/conversion-optimization" },
    { label: "Marketing Systems", href: "/services/marketing-automation" },
  ],

  whyAiosLabs:
    "AIOS Labs was built around the idea that businesses shouldn't have to treat SEO, paid marketing, content, lead generation and conversion as disconnected activities. They work better when they are designed to support one another.",

  vision:
    "To build AIOS Labs into a modern growth company that combines strategy, marketing, technology and data to help businesses build stronger and more measurable acquisition systems.",

  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kartik-sharma-b1082b34a",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/kar.tikpandat001/",
    },
  ],
};
