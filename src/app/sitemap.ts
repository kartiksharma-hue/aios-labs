import type { MetadataRoute } from "next";
import { indexableRoutes } from "@/lib/indexing";
import { site } from "@/lib/site";

/**
 * The sitemap advertises exactly what may be indexed, and nothing else.
 *
 * The route list comes from src/lib/indexing.ts — the same module the pages
 * use for their own robots directives — so a page that says noindex can never
 * appear here. Draft articles, reserved case studies, the placeholder founder
 * and team pages, location pages awaiting research, /style-guide, API routes
 * and 404s are all excluded by construction rather than by a deny-list.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return indexableRoutes().map((route) => ({
    // The root is emitted without a trailing slash so it matches the canonical
    // Next generates for "/". A sitemap and a canonical disagreeing on the
    // spelling of the same URL is exactly the inconsistency this phase exists
    // to remove.
    url: route === "/" ? site.url : new URL(route, site.url).toString(),
    lastModified,
  }));
}
