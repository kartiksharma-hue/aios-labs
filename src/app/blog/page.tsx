import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Accent } from "@/components/ui/accent";
import { ClosingCta } from "@/components/ui/closing-cta";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { ArticleCard } from "@/components/blog/article-card";
import { listedPosts, publishedPosts } from "@/content/blog";
import { site } from "@/lib/site";
import { isBlogIndexIndexable, robotsFor } from "@/lib/indexing";
import { socialCard } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from AIOS Labs on acquisition, conversion, content, automation and the systems that connect them.",
  alternates: { canonical: "/blog" },
  // A journal listing only drafts is a thin page. It becomes indexable the
  // moment one article is published.
  robots: robotsFor(isBlogIndexIndexable),
  ...socialCard({
    title: `Journal — ${site.name}`,
    description:
      "Thinking about growth as a system — notes on acquisition, conversion, content, automation and measurement.",
    url: "/blog",
  }),
};

export default function BlogPage() {
  const [featured, ...rest] = listedPosts;
  const hasPublished = publishedPosts.length > 0;

  return (
    <main id="main" className="flex-1">
      {/* 01 — Hero */}
      <section aria-labelledby="blog-heading" className="pt-header md:pt-header-lg">
        <Container
          width="page"
          className="flex flex-col gap-10 py-section-sm md:gap-14"
        >
          <Reveal immediate>
            <p className="label text-ink-faint flex items-center gap-3">
              <span aria-hidden className="bg-signal h-1.5 w-1.5 rounded-full" />
              AIOS Labs / Journal
            </p>
          </Reveal>

          <TextReveal
            as="h1"
            id="blog-heading"
            immediate
            delay={0.15}
            className="text-display max-w-[18ch]"
          >
            Thinking about growth as a <Accent>system</Accent>.
          </TextReveal>

          <div className="grid md:grid-cols-12">
            <Reveal
              immediate
              delay={0.4}
              className="flex flex-col items-start gap-6 md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8"
            >
              <p className="text-lead text-ink-muted max-w-prose">
                Notes on acquisition, conversion, content, automation and the
                systems that connect them.
              </p>
              {!hasPublished ? (
                <PlaceholderNote>
                  Journal in progress — drafts only
                </PlaceholderNote>
              ) : null}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 02 / 03 — Featured entry, then the directory */}
      <Section aria-labelledby="journal-heading" space="sm">
        <Container width="page" className="flex flex-col gap-16 md:gap-24">
          <h2 id="journal-heading" className="sr-only">
            Journal entries
          </h2>

          {featured ? <ArticleCard post={featured} featured /> : null}

          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:gap-x-16">
            {rest.map((post, index) => (
              <ArticleCard
                key={post.slug}
                post={post}
                className={index % 2 === 1 ? "lg:mt-24" : undefined}
              />
            ))}
          </div>
        </Container>
      </Section>

      <ClosingCta
        headingId="blog-cta-heading"
        index="01"
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
