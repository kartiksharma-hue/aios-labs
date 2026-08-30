import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent } from "@/components/ui/accent";
import { ClosingCta } from "@/components/ui/closing-cta";
import { MediaFrame } from "@/components/ui/media-frame";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { ArticleBody } from "@/components/blog/article-body";
import { ArticleCard } from "@/components/blog/article-card";
import { ArticleMeta } from "@/components/blog/article-meta";
import type { BlogPost } from "@/content/blog-types";

/** The one template behind every article. Everything variable lives in content. */
export function ArticlePage({
  post,
  related,
}: {
  post: BlogPost;
  related: readonly BlogPost[];
}) {
  return (
    <main id="main" className="flex-1">
      <article>
        {/* 01 — Header */}
        <section
          aria-labelledby="article-heading"
          className="pt-header md:pt-header-lg"
        >
          <Container
            width="page"
            className="flex flex-col gap-8 py-section-sm md:gap-10"
          >
            <Reveal immediate>
              <p className="label text-ink-faint flex flex-wrap items-center gap-3">
                <span
                  aria-hidden
                  className="bg-signal h-1.5 w-1.5 rounded-full"
                />
                {post.category}
                <span aria-hidden className="bg-line-strong h-px w-6" />
                {post.published ? post.reference : "Editorial draft pending"}
              </p>
            </Reveal>

            <TextReveal
              as="h1"
              id="article-heading"
              immediate
              delay={0.15}
              className="text-display max-w-[20ch]"
            >
              {post.title}
            </TextReveal>

            <Reveal
              immediate
              delay={0.35}
              className="flex flex-col items-start gap-8"
            >
              <p className="text-lead text-ink-muted max-w-prose">
                {post.excerpt}
              </p>
              <ArticleMeta post={post} />
              {!post.published ? (
                <PlaceholderNote>
                  Draft — not published, not indexed
                </PlaceholderNote>
              ) : null}
            </Reveal>
          </Container>
        </section>

        {/* 02 — Cover */}
        <Container width="page">
          <Reveal>
            <MediaFrame
              slot={post.cover}
              ratio="21 / 9"
              sizes="(min-width: 1024px) 1280px, 100vw"
              priority
            />
          </Reveal>
        </Container>

        {/* 03 — Body */}
        <Section aria-label="Article content">
          <Container width="page">
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-8 lg:col-span-7 lg:col-start-3">
                {post.content ? (
                  <ArticleBody blocks={post.content} />
                ) : (
                  <Reveal className="flex flex-col items-start gap-5">
                    <p className="text-lead text-ink-muted max-w-prose">
                      This piece is commissioned but not yet written. The
                      argument is set; the article is not. It will be published
                      here once it is worth reading.
                    </p>
                    <PlaceholderNote>Editorial draft pending</PlaceholderNote>
                  </Reveal>
                )}
              </div>
            </div>
          </Container>
        </Section>
      </article>

      {/* 04 — Related */}
      {related.length > 0 ? (
        <Section aria-labelledby="related-articles-heading" space="sm">
          <Container width="page" className="flex flex-col gap-10">
            <Reveal className="flex flex-col gap-4">
              <Eyebrow index="01">More</Eyebrow>
              <h2 id="related-articles-heading" className="text-h2 text-ink">
                Related reading
              </h2>
            </Reveal>
            <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
              {related.map((entry) => (
                <ArticleCard key={entry.slug} post={entry} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* 05 — CTA */}
      <ClosingCta
        headingId="article-cta-heading"
        index="02"
        headline={
          <>
            Let&rsquo;s build what comes <Accent>next</Accent>.
          </>
        }
        support="Tell us where growth is stalling. We'll tell you what we would do about it."
      />
    </main>
  );
}
