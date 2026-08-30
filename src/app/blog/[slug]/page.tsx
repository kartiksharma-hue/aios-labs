import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/blog/article-page";
import { getPost, getRelatedPosts, posts } from "@/content/blog";
import { site } from "@/lib/site";
import { isPostIndexable, robotsFor } from "@/lib/indexing";
import { articleCard } from "@/lib/metadata";

/** Drafts are routable so they can be reviewed; indexing is handled separately. */
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `/blog/${slug}`;

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: url },
    // A draft is never indexed, however it is reached — and the same rule
    // keeps it out of the sitemap. See src/lib/indexing.ts.
    robots: robotsFor(isPostIndexable(post)),
    ...articleCard({
      title: `${post.seoTitle} — ${site.name}`,
      description: post.seoDescription,
      url,
      ...(post.publishedAt ? { publishedTime: post.publishedAt } : {}),
      ...(post.updatedAt ? { modifiedTime: post.updatedAt } : {}),
    }),
  };
}

export default async function ArticleRoute({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const related = getRelatedPosts(post);

  /**
   * Article structured data is emitted for published posts only, and the
   * author is included only when a verified one exists — never an invented
   * Person. A draft emits nothing at all.
   */
  const jsonLd = post.published
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.seoDescription,
        url: `${site.url}/blog/${slug}`,
        ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
        ...(post.updatedAt ? { dateModified: post.updatedAt } : {}),
        ...(post.author
          ? { author: { "@type": "Person", name: post.author.name } }
          : {}),
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
      }
    : null;

  return (
    <>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <ArticlePage post={post} related={related} />
    </>
  );
}
