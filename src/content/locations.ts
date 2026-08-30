import type { ApproachStep, LocationPage } from "@/content/location-page-types";
import { services } from "@/content/services";

/**
 * Locations.
 *
 * The four slugs here are the ones already established in src/lib/site.ts and
 * linked from the footer. They are deliberately not extended: adding cities to
 * catch searches is exactly the doorway-page pattern this architecture exists
 * to avoid.
 *
 * Every entry is a service market. No office, address, local team, local
 * client or market statistic appears anywhere, because none is verified.
 */

/** Shared because the method is genuinely the same in every market. */
const approach: readonly ApproachStep[] = [
  {
    index: "01",
    title: "Understand",
    description:
      "Who buys, what they weigh before deciding, and which constraint is actually holding growth back.",
  },
  {
    index: "02",
    title: "Plan",
    description:
      "A sequenced plan with a stated thesis for every channel we commit to, and a definition of what a result is.",
  },
  {
    index: "03",
    title: "Build",
    description:
      "Campaigns, content, pages and tracking shipped together, so nothing depends on a piece that was never built.",
  },
  {
    index: "04",
    title: "Measure",
    description:
      "Instrumentation first. Platform numbers are reconciled against your own records before they inform a decision.",
  },
  {
    index: "05",
    title: "Improve",
    description:
      "Push what compounds, cut what does not, and feed what we learn back into the plan.",
  },
];

/** Shared: these are business situations, not local customer stories. */
const audience: readonly string[] = [
  "Businesses entering a market they have not sold into before",
  "Businesses whose channels are each managed well but not against one another",
  "Businesses that cannot currently tell which spend produced which result",
  "Businesses buying traffic faster than their site can convert it",
  "Businesses preparing to scale and wanting the system built before the spend rises",
];

/** Method, not market facts. Deliberately the same reasoning in every market. */
const marketContext = (city: string): readonly string[] => [
  `Before any channel is chosen for a business operating in ${city}, five things have to be established: who the buyer actually is, what position the business can credibly hold against the alternatives they are weighing, which channels reach them at a cost the economics support, what happens once that attention arrives, and how any of it will be measured.`,
  "Those answers differ by business far more than they differ by city. A B2B services firm and a consumer brand on the same street are solving different problems, and a plan that treats them as one market because of geography will be wrong for both.",
  "So we do not arrive with a local playbook. We establish those five things for your business, then decide what the system should look like.",
];

/** All eight capabilities are referenced by slug from the canonical service list. */
const allServiceSlugs = services.map((service) =>
  service.href.replace("/services/", ""),
);

function serviceMarket(
  slug: string,
  city: string,
  region: string,
  positioning: string,
): LocationPage {
  return {
    slug,
    city,
    region,
    presence: "service-market",
    office: null,
    headline: `Growth systems for businesses in ${city}.`,
    positioning,
    marketContext: marketContext(city),
    marketNotes: null,
    services: allServiceSlugs,
    approach,
    audience,
    metaTitle: `Growth Systems in ${city}`,
    metaDescription: `AIOS Labs works with businesses operating in ${city}, connecting strategy, acquisition, conversion and technology into one growth system.`,
    published: true,
  };
}

export const locations: readonly LocationPage[] = [
  serviceMarket(
    "delhi",
    "Delhi",
    "Delhi NCR",
    "AIOS Labs works with businesses operating in Delhi, building the connected growth system behind their acquisition rather than running one channel in isolation.",
  ),
  serviceMarket(
    "gurgaon",
    "Gurgaon",
    "Delhi NCR",
    "AIOS Labs works with businesses operating in Gurgaon, connecting strategy, acquisition, conversion and measurement into a system their team can actually run.",
  ),
  serviceMarket(
    "noida",
    "Noida",
    "Delhi NCR",
    "AIOS Labs works with businesses operating in Noida, building acquisition and conversion as one system rather than as separate line items.",
  ),
  serviceMarket(
    "mumbai",
    "Mumbai",
    "Maharashtra",
    "AIOS Labs works with businesses operating in Mumbai, joining the channels that bring demand to the ones that convert and measure it.",
  ),
];

export const publishedLocations = locations.filter((entry) => entry.published);

export function getLocation(slug: string): LocationPage | undefined {
  return publishedLocations.find((entry) => entry.slug === slug);
}

/**
 * A location page earns indexing only once it carries researched, market
 * specific content. Until then the pages differ by little more than a city
 * name, and indexing them would build the doorway-page network this
 * architecture is meant to avoid.
 */
export function isIndexable(location: LocationPage): boolean {
  return location.marketNotes !== null && location.marketNotes.length > 0;
}
