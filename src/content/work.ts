import type { CaseStudy } from "@/content/work-types";

/**
 * Case studies.
 *
 * CONTENT RULE, unchanged: no traffic figure, ranking, lead count, revenue,
 * conversion rate, ROAS, CAC, percentage, client quote or approval claim
 * appears anywhere below, because none has been verified. Where a result is
 * not verified the record says what was executed and states plainly that the
 * measurable outcome is pending verified reporting.
 *
 * Three engagements carry a verified scope of work and are published as
 * `methodology` studies: they document what was done, not what it produced.
 * Two carry too little verified detail to publish and stay `placeholder` —
 * routed and listed, but out of the index and the sitemap until real content
 * exists. See `isCaseStudyIndexable` in src/lib/indexing.ts.
 *
 * To move a study from `methodology` to `published`: add verified `metrics`
 * (each with its `source`) and rewrite `outcome` against that reporting.
 */

/** No client screenshots or assets have been supplied. Every slot renders the
 *  marked pending frame; dropping a real asset in needs no layout change. */
const pendingVisuals = [
  { label: "Project visuals", ratio: "16 / 10", src: null, alt: null },
  { label: "Off-page activity detail", ratio: "4 / 3", src: null, alt: null },
  { label: "Supporting visual", ratio: "4 / 3", src: null, alt: null },
];

/** Shared closing line for every study without verified reporting. */
const pendingReporting =
  "No performance figures are published here. Traffic, ranking and enquiry outcomes will be documented only once they are backed by verified reporting agreed with the client.";

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "per4mance-guru",
    title: "Per4mance Guru",
    reference: "Case Study 01",
    category: "SEO / Organic Growth",
    client: "Per4mance Guru",
    year: null,
    summary:
      "Building a stronger organic growth foundation — off-page SEO run as a repeatable operation rather than a scatter of one-off links.",
    status: "methodology",
    challenge: {
      heading: "The challenge",
      body: [
        "The project required consistent off-page SEO execution, authority-building activity and a scalable process for managing backlink acquisition and related SEO work.",
        "Off-page SEO rarely fails for lack of ideas. It fails on consistency — opportunities identified once and never revisited, placements that nobody tracks after they go live, and a pipeline that exists in someone's head rather than in a process. The brief was to fix that shape of problem, not to produce a burst of links.",
      ],
    },
    approach: {
      heading: "The approach",
      body: [
        "We treated off-page as an operation with a pipeline rather than a checklist: research feeding a qualified opportunity list, execution working through that list, and tracking closing the loop so the next cycle starts better informed than the last.",
        "Keyword research set the direction — which topics and which pages authority should be pointed at — so that placements, profiles and supporting content were chosen against a target rather than taken because they were available.",
      ],
    },
    execution: [
      {
        index: "01",
        title: "Keyword and opportunity research",
        description:
          "Establishing which topics and pages the off-page work should support, and building a qualified list of relevant placement opportunities against them.",
      },
      {
        index: "02",
        title: "Profile creation",
        description:
          "Creating and completing supporting profiles so the brand's presence is consistent across the places it can legitimately appear.",
      },
      {
        index: "03",
        title: "Directory submissions",
        description:
          "Working through relevant directory and listing opportunities, prioritised by relevance rather than volume.",
      },
      {
        index: "04",
        title: "Guest posting",
        description:
          "Placing editorial contributions on relevant sites, with the target page and anchor decided by the research rather than by what each host offered.",
      },
      {
        index: "05",
        title: "Supporting content publishing",
        description:
          "Publishing blog and supporting content so that the pages receiving authority have something worth linking to.",
      },
      {
        index: "06",
        title: "Backlink tracking and process refinement",
        description:
          "Recording what was placed and where, monitoring what stayed live, and feeding that back into how the next acquisition cycle is prioritised — the step that makes the process repeatable.",
      },
    ],
    services: ["seo"],
    outcome: [
      "Organic growth infrastructure established and continuously optimized. Performance outcomes are intentionally omitted here until they are backed by verified reporting.",
      "What exists today is the operating system for the channel: a qualified opportunity pipeline, a repeatable execution cycle across profiles, directories, guest placements and supporting content, and tracking that makes each round of acquisition more informed than the one before it.",
      pendingReporting,
    ],
    metrics: [],
    gallery: pendingVisuals,
    featured: true,
    published: true,
  },
  {
    slug: "kr-mangalam-indirapuram",
    title: "KR Mangalam Indirapuram",
    reference: "Case Study 02",
    category: "SEO / Organic Growth",
    client: "KR Mangalam Indirapuram",
    year: null,
    summary:
      "Building consistent off-page visibility for a local education brand, through a structured programme of authority-building activity.",
    status: "methodology",
    challenge: {
      heading: "The challenge",
      body: [
        "An education brand is discovered in a specific catchment, by people comparing a small number of options over a long consideration period. Off-page visibility for that kind of brand has to be steady rather than seasonal — the presence needs to be there whenever someone starts looking.",
        "The engagement was scoped around sustaining that presence: consistent off-page SEO and authority-building activity delivered as an ongoing programme rather than a one-off push.",
      ],
    },
    approach: {
      heading: "The approach",
      body: [
        "Off-page optimisation focused on relevance over volume. For a brand tied to a place and a category, a smaller number of appropriate placements and correctly completed listings is worth more than a large number of unrelated ones.",
        "The work ran as a repeating cycle — qualify, create, submit, verify — so that coverage accumulates rather than resetting each month.",
      ],
    },
    execution: [
      {
        index: "01",
        title: "Opportunity qualification",
        description:
          "Identifying the profile, listing and directory opportunities that are actually relevant to the brand's category and catchment.",
      },
      {
        index: "02",
        title: "Profile creation",
        description:
          "Creating and completing brand profiles consistently, so the same details appear wherever the brand is listed.",
      },
      {
        index: "03",
        title: "Directory submissions",
        description:
          "Submitting to relevant directories and working through the verification each one requires.",
      },
      {
        index: "04",
        title: "Off-page optimisation",
        description:
          "Reviewing and correcting existing off-page presence alongside new placements, so that what already exists is working rather than merely present.",
      },
      {
        index: "05",
        title: "Backlink acquisition and tracking",
        description:
          "Acquiring links against the qualified list and recording what was placed, so coverage can be seen rather than assumed.",
      },
    ],
    services: ["seo"],
    outcome: [
      "SEO execution and authority-building activity delivered as part of an ongoing organic growth program.",
      pendingReporting,
    ],
    metrics: [],
    gallery: pendingVisuals,
    featured: false,
    published: true,
  },
  {
    slug: "gd-goenka-global-school",
    title: "GD Goenka Global School",
    reference: "Case Study 03",
    category: "SEO / Organic Growth",
    client: "GD Goenka Global School",
    year: null,
    summary:
      "Building a stronger search foundation for an education brand — off-page authority supported by the content it points at.",
    status: "methodology",
    challenge: {
      heading: "The challenge",
      body: [
        "A recognised education brand carries name demand, but name demand is only part of search. The engagement was scoped around the rest of it: strengthening the search foundation so the brand is found by people who are not yet searching for it directly.",
        "That is an authority problem before it is a content problem — pages need to be worth surfacing, and the site needs enough standing for them to be surfaced at all.",
      ],
    },
    approach: {
      heading: "The approach",
      body: [
        "Off-page SEO and content-related SEO support were run together rather than in sequence. Authority pointed at pages that had been prepared to receive it, and content was built where the off-page work gave it a reason to rank.",
        "Directory and profile activity established the consistent baseline presence; backlink acquisition was then aimed at the specific pages the brand needed to be found through.",
      ],
    },
    execution: [
      {
        index: "01",
        title: "Off-page audit and prioritisation",
        description:
          "Reviewing existing off-page presence to decide what needed correcting, what needed extending, and which pages the work should point at.",
      },
      {
        index: "02",
        title: "Profile creation and directory activity",
        description:
          "Establishing consistent, correctly completed listings across the placements relevant to the brand and its category.",
      },
      {
        index: "03",
        title: "Backlink acquisition",
        description:
          "Acquiring relevant links against the prioritised target pages rather than against the homepage by default.",
      },
      {
        index: "04",
        title: "Content-related SEO support",
        description:
          "Supporting the pages receiving authority so that they answer the intent they are being surfaced for.",
      },
      {
        index: "05",
        title: "Tracking and iteration",
        description:
          "Recording placements and revisiting priorities as coverage builds, so later cycles target the gaps rather than repeating the wins.",
      },
    ],
    services: ["seo"],
    outcome: [
      "Organic visibility work executed through a structured off-page SEO process.",
      pendingReporting,
    ],
    metrics: [],
    gallery: pendingVisuals,
    featured: false,
    published: true,
  },
  {
    slug: "astrochaitanya",
    title: "AstroChaitanya",
    reference: "Case Study 04",
    category: "SEO / Organic Growth",
    client: "AstroChaitanya",
    year: null,
    summary:
      "An SEO and organic growth engagement focused on making the process consistent. The detailed record is pending verified project information.",
    /**
     * PLACEHOLDER — the engagement and its focus are known; the specific scope
     * of work is not. Rather than assume it mirrors the other SEO engagements,
     * this record stays unpublished and out of the index. Supplying the scope
     * of work is what moves it to `methodology`.
     */
    status: "placeholder",
    challenge: {
      heading: "The challenge",
      body: [
        "This engagement is focused on creating a more consistent organic growth process.",
        "The specific constraint it was scoped against will be documented here once the project detail has been confirmed. It is left blank rather than assumed from the other engagements on this page.",
      ],
    },
    approach: {
      heading: "The approach",
      body: [
        "Verified project detail pending. This section will set out what was decided and why, once the scope of work has been confirmed.",
      ],
    },
    execution: null,
    services: ["seo"],
    outcome: null,
    metrics: [],
    gallery: pendingVisuals,
    featured: false,
    published: true,
  },
  {
    slug: "jj-valaya",
    title: "JJ Valaya",
    reference: "Case Study 05",
    category: "SEO / Digital Growth",
    client: "JJ Valaya",
    year: null,
    summary: "Case study content pending verified project details.",
    /** PLACEHOLDER — no scope of work has been confirmed for this engagement. */
    status: "placeholder",
    challenge: {
      heading: "The challenge",
      body: [
        "Verified project detail pending. Nothing is written here in advance of it.",
      ],
    },
    approach: {
      heading: "The approach",
      body: [
        "Verified project detail pending. This record exists so the engagement is accounted for, not so that a narrative can be written before the facts are.",
      ],
    },
    execution: null,
    services: ["seo"],
    outcome: null,
    metrics: [],
    gallery: pendingVisuals,
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
