import Link from "next/link";
import { MediaFrame } from "@/components/ui/media-frame";
import type { BlogBlock, Inline } from "@/content/blog-types";

/**
 * Renders structured article content.
 *
 * Blocks are typed data, never an HTML string, so nothing is injected with
 * dangerouslySetInnerHTML and every link is a real element. Internal links go
 * through next/link; external ones open safely.
 */
function InlineContent({ content }: { content: readonly Inline[] }) {
  return (
    <>
      {content.map((part, index) => {
        if (typeof part === "string") return <span key={index}>{part}</span>;

        const isInternal = part.href.startsWith("/");
        const className =
          "text-ink underline decoration-signal underline-offset-4 transition-colors duration-quick ease-signature hover:text-signal";

        return isInternal ? (
          <Link key={index} href={part.href} className={className}>
            {part.text}
          </Link>
        ) : (
          <a
            key={index}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {part.text}
          </a>
        );
      })}
    </>
  );
}

export function ArticleBody({ blocks }: { blocks: readonly BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-7">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return block.level === 2 ? (
              <h2 key={index} className="text-h2 text-ink mt-6">
                {block.text}
              </h2>
            ) : (
              <h3 key={index} className="text-h3 text-ink mt-4">
                {block.text}
              </h3>
            );

          case "paragraph":
            return (
              <p key={index} className="text-lead text-ink-muted">
                <InlineContent content={block.content} />
              </p>
            );

          case "list": {
            const items = block.items.map((item, i) => (
              <li key={i} className="text-lead text-ink-muted pl-2">
                <InlineContent content={item} />
              </li>
            ));
            return block.ordered ? (
              <ol key={index} className="marker:text-signal flex list-decimal flex-col gap-3 pl-6">
                {items}
              </ol>
            ) : (
              <ul key={index} className="marker:text-signal flex list-disc flex-col gap-3 pl-6">
                {items}
              </ul>
            );
          }

          case "quote":
            return (
              <figure key={index} className="border-signal my-4 border-l-2 pl-6">
                <blockquote className="text-h3 text-ink">
                  {block.text}
                </blockquote>
                {block.attribution ? (
                  <figcaption className="label text-ink-faint mt-3">
                    {block.attribution}
                  </figcaption>
                ) : null}
              </figure>
            );

          case "note":
            return (
              <aside
                key={index}
                className="border-line bg-surface text-ink-muted rounded-xs border px-6 py-5"
              >
                <InlineContent content={block.content} />
              </aside>
            );

          case "image":
            return (
              <figure key={index} className="my-4">
                <MediaFrame
                  slot={block.image}
                  sizes="(min-width: 1024px) 720px, 100vw"
                />
                {block.image.alt ? (
                  <figcaption className="text-small text-ink-faint mt-3">
                    {block.image.alt}
                  </figcaption>
                ) : null}
              </figure>
            );
        }
      })}
    </div>
  );
}
