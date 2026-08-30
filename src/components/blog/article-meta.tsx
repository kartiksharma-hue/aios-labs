import { cn } from "@/lib/cn";
import type { BlogPost } from "@/content/blog-types";
import { estimateReadingTime } from "@/content/blog";

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/**
 * Author, date and reading time. Every one of these is genuinely unknown for a
 * draft, so each renders an explicit pending state rather than a placeholder
 * name or a fabricated date.
 */
export function ArticleMeta({
  post,
  className,
}: {
  post: BlogPost;
  className?: string;
}) {
  const minutes = estimateReadingTime(post);

  return (
    <dl className={cn("flex flex-wrap gap-x-10 gap-y-4", className)}>
      <div className="flex flex-col gap-1">
        <dt className="label text-ink-faint">Author</dt>
        <dd className="text-small text-ink-muted">
          {post.author ? post.author.name : "Author profile pending"}
        </dd>
      </div>
      <div className="flex flex-col gap-1">
        <dt className="label text-ink-faint">Published</dt>
        <dd className="text-small text-ink-muted">
          {post.publishedAt ? (
            <time dateTime={post.publishedAt}>
              {dateFormat.format(new Date(post.publishedAt))}
            </time>
          ) : (
            "Publication date pending"
          )}
        </dd>
      </div>
      <div className="flex flex-col gap-1">
        <dt className="label text-ink-faint">Reading time</dt>
        <dd className="text-small text-ink-muted">
          {minutes ? `${minutes} min` : "—"}
        </dd>
      </div>
    </dl>
  );
}
