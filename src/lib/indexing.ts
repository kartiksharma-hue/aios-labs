import type { Metadata } from "next";
import { servicePages } from "@/content/service-pages";
import { publishedCaseStudies } from "@/content/work";
import { posts } from "@/content/blog";
import { isIndexable as isLocationIndexable, publishedLocations } from "@/content/locations";
import { founder } from "@/content/founder";
import { members } from "@/content/team";
import type { CaseStudy } from "@/content/work-types";
import type { BlogPost } from "@/content/blog-types";

/**
 * One place that decides what may be indexed.
 *
 * Page-level `robots` directives and the sitemap both read from here, so the
 * two can never disagree — a page that says noindex can never be advertised in
 * the sitemap, and vice versa.
 *
 * Every rule is derived from content, never hard-coded. Supplying real content
 * flips a page to indexable and adds it to the sitemap with no code change.
 */

export const INDEX_FOLLOW = { index: true, follow: true } as const;
export const NOINDEX_FOLLOW = { index: false, follow: true } as const;

export function robotsFor(indexable: boolean): Metadata["robots"] {
  return indexable ? INDEX_FOLLOW : NOINDEX_FOLLOW;
}

/** A case study is indexable once it is no longer a reserved slot. */
export function isCaseStudyIndexable(study: CaseStudy): boolean {
  return study.published && study.status === "published";
}

/** An article is indexable once it is actually published. */
export function isPostIndexable(post: BlogPost): boolean {
  return post.published;
}

export { isLocationIndexable };

/** The founder page is indexable once a verified name exists. */
export const isFounderIndexable = founder.name !== null;

/** The team page is indexable once at least one real profile exists. */
export const isTeamIndexable = members.length > 0;

/**
 * Section indexes follow their children. A listing whose entries are all
 * reserved slots or drafts is a thin page; it earns indexing when it has
 * something to list.
 */
export const isWorkIndexIndexable = publishedCaseStudies.some(isCaseStudyIndexable);
export const isBlogIndexIndexable = posts.some(isPostIndexable);

/** Absolute URLs for everything that may currently be indexed. */
export function indexableRoutes(): readonly string[] {
  const routes: string[] = [
    "/",
    "/services",
    "/about",
    "/locations",
    "/contact",
  ];

  for (const service of servicePages) {
    routes.push(`/services/${service.slug}`);
  }

  if (isWorkIndexIndexable) routes.push("/work");
  for (const study of publishedCaseStudies) {
    if (isCaseStudyIndexable(study)) routes.push(`/work/${study.slug}`);
  }

  if (isFounderIndexable) routes.push("/founder");
  if (isTeamIndexable) routes.push("/team");

  for (const location of publishedLocations) {
    if (isLocationIndexable(location)) routes.push(`/locations/${location.slug}`);
  }

  if (isBlogIndexIndexable) routes.push("/blog");
  for (const post of posts) {
    if (isPostIndexable(post)) routes.push(`/blog/${post.slug}`);
  }

  return routes;
}
