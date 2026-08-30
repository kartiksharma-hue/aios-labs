import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Crawling is open. Only the inquiry endpoint is disallowed — it is a POST
 * handler with nothing to index.
 *
 * Nothing that affects rendering is blocked: no CSS, JS, fonts or images.
 * Pages that should stay out of the index (drafts, reserved case studies,
 * /style-guide, pending location pages) are handled with a noindex directive
 * rather than a Disallow, because a blocked page is a page whose noindex the
 * crawler can never read.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
