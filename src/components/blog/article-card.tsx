import Link from "next/link";
import { cn } from "@/lib/cn";
import { MediaFrame } from "@/components/ui/media-frame";
import { Reveal } from "@/components/motion/reveal";
import type { BlogPost } from "@/content/blog-types";

/**
 * A journal entry in the index. A draft is labelled a draft — it is never
 * shown with the affordances of a published article.
 */
export function ArticleCard({
  post,
  featured = false,
  className,
}: {
  post: BlogPost;
  featured?: boolean;
  className?: string;
}) {
  return (
    <Reveal as="article" className={className}>
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col gap-6"
        aria-label={`${post.title}${post.published ? "" : " — editorial draft pending"}`}
      >
        <MediaFrame
          slot={post.cover}
          ratio={featured ? "21 / 9" : undefined}
          sizes={
            featured
              ? "(min-width: 1024px) 1280px, 100vw"
              : "(min-width: 768px) 50vw, 100vw"
          }
          priority={featured}
          className="transition-colors duration-base ease-signature group-hover:border-line-strong"
        />

        <div className={cn("flex flex-col gap-4", featured && "md:max-w-[54ch]")}>
          <div className="flex flex-wrap items-center gap-4">
            <span className="label text-signal">{post.category}</span>
            <span aria-hidden className="bg-line-strong h-px w-6" />
            <span className="label text-ink-faint">
              {post.published ? post.reference : "Editorial draft pending"}
            </span>
          </div>

          <h3
            className={cn(
              "text-ink transition-transform duration-base ease-signature group-hover:translate-x-1",
              featured ? "text-h1" : "text-h2",
            )}
          >
            {post.title}
          </h3>

          <p className="text-ink-muted max-w-prose">{post.excerpt}</p>

          <span className="text-small text-ink-muted group-hover:text-ink mt-1 inline-flex items-center gap-2 transition-colors duration-base ease-signature">
            {post.published ? "Read the article" : "Read the draft"}
            <span
              aria-hidden
              className="transition-transform duration-quick ease-signature group-hover:translate-x-1 group-focus-visible:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
