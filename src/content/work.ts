import type { CaseStudy } from "@/content/work-types";

/**
 * Case studies.
 *
 * All three entries are reserved slots, marked `status: "placeholder"`. They
 * carry no client name, no metric and no claim. The prose describes what each
 * section will document — which is true of how AIOS Labs works — and never
 * describes a project that did not happen.
 *
 * To publish a real case study: fill the fields, set `status: "published"`,
 * add assets and point each gallery entry's `src` at them. No component
 * changes are required.
 */

const reservedGallery = [
  { label: "Primary visual", ratio: "16 / 10", src: null, alt: null },
  { label: "Campaign or interface detail", ratio: "4 / 3", src: null, alt: null },
  { label: "Supporting visual", ratio: "4 / 3", src: null, alt: null },
];

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "growth-system-01",
    title: "Growth System",
    reference: "Case Study 01",
    category: "Integrated growth",
    client: null,
    year: null,
    summary:
      "Reserved for an engagement spanning search, paid media and conversion — where the work was the system connecting them rather than any single channel.",
    status: "placeholder",
    challenge: {
      heading: "The challenge",
      body: [
        "This section will document the business constraint the engagement was scoped against: what was failing, what it was costing, and what had already been tried before we were brought in.",
        "It will be written from the client's own account of the problem, and published only once they have approved how it is described.",
      ],
    },
    approach: {
      heading: "The approach",
      body: [
        "This section will set out what we decided to do and why — including the options we ruled out, which is usually the more useful half of a strategy.",
      ],
    },
    execution: null,
    services: ["seo", "performance-marketing", "conversion-optimization"],
    outcome: null,
    metrics: [],
    gallery: reservedGallery,
    featured: true,
    published: true,
  },
  {
    slug: "performance-campaign-02",
    title: "Performance Campaign",
    reference: "Case Study 02",
    category: "Paid acquisition",
    client: null,
    year: null,
    summary:
      "Reserved for a paid acquisition engagement — campaign structure, creative testing and the measurement work that made the numbers worth acting on.",
    status: "placeholder",
    challenge: {
      heading: "The challenge",
      body: [
        "This section will document what the account was actually producing when we inherited it, and which part of that was a media problem rather than a measurement one.",
      ],
    },
    approach: {
      heading: "The approach",
      body: [
        "This section will describe the thesis each campaign was built to test, and how spend was allowed to move as those tests resolved.",
      ],
    },
    execution: null,
    services: ["performance-marketing", "meta-ads", "google-ads"],
    outcome: null,
    metrics: [],
    gallery: reservedGallery,
    featured: false,
    published: true,
  },
  {
    slug: "organic-growth-03",
    title: "Organic Growth",
    reference: "Case Study 03",
    category: "Organic search",
    client: null,
    year: null,
    summary:
      "Reserved for an organic engagement — the technical foundation, the intent-led content built on it, and the internal structure that pushed authority toward the pages that mattered.",
    status: "placeholder",
    challenge: {
      heading: "The challenge",
      body: [
        "This section will document the state of the site at the start: what could not be crawled, what was ranking for the wrong intent, and what that was costing in demand the business never saw.",
      ],
    },
    approach: {
      heading: "The approach",
      body: [
        "This section will describe the sequence — foundation, then intent, then authority — and what we chose to consolidate or retire along the way.",
      ],
    },
    execution: null,
    services: ["seo", "conversion-optimization", "social-media"],
    outcome: null,
    metrics: [],
    gallery: reservedGallery,
    featured: false,
    published: true,
  },
];

export const publishedCaseStudies = caseStudies.filter((entry) => entry.published);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return publishedCaseStudies.find((entry) => entry.slug === slug);
}

/** Previous and next in publication order, for case-study footer navigation. */
export function getCaseStudyNeighbours(slug: string) {
  const index = publishedCaseStudies.findIndex((entry) => entry.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: index > 0 ? publishedCaseStudies[index - 1] : undefined,
    next:
      index < publishedCaseStudies.length - 1
        ? publishedCaseStudies[index + 1]
        : undefined,
  };
}
