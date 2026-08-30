import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent } from "@/components/ui/accent";
import { ClosingCta } from "@/components/ui/closing-cta";
import { MediaFrame } from "@/components/ui/media-frame";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { founder } from "@/content/founder";
import { site } from "@/lib/site";
import { isFounderIndexable, robotsFor } from "@/lib/indexing";
import { socialCard } from "@/lib/metadata";

const FOUNDER_URL = `${site.url}/founder`;

export const metadata: Metadata = {
  title: { absolute: "Kartik Sharma — Founder, AIOS Labs" },
  description:
    "Kartik Sharma is the founder of AIOS Labs, a digital growth agency focused on strategy, acquisition, conversion and marketing systems.",
  alternates: { canonical: "/founder" },
  // Derived, not asserted: the page becomes indexable because the founder has
  // a verified name. See src/lib/indexing.ts.
  robots: robotsFor(isFounderIndexable),
  ...socialCard({
    title: "Kartik Sharma — Founder, AIOS Labs",
    description:
      "Kartik Sharma is the founder of AIOS Labs, a digital growth agency focused on strategy, acquisition, conversion and marketing systems.",
    url: "/founder",
    // Uses the portrait once it exists; falls back to the site card until then.
    image:
      founder.portrait.src && founder.portrait.alt
        ? { url: founder.portrait.src, alt: founder.portrait.alt }
        : null,
  }),
};

/**
 * Person structured data, emitted only once the name is verified, and carrying
 * only what has actually been provided: name, job title, the page's own URL and
 * the two confirmed profiles. No education, employment history, awards,
 * credentials, affiliations or image claim is asserted — none has been verified.
 */
const personJsonLd = founder.name
  ? {
      "@context": "https://schema.org",
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.role,
      url: FOUNDER_URL,
      sameAs: founder.social.map((link) => link.href),
    }
  : null;

export default function FounderPage() {
  return (
    <main id="main" className="flex-1">
      {personJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      ) : null}

      {/* 01 — Hero */}
      <section
        aria-labelledby="founder-heading"
        className="pt-header md:pt-header-lg"
      >
        <Container width="page" className="py-section-sm">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal immediate className="lg:col-span-5">
              <MediaFrame
                slot={founder.portrait}
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </Reveal>

            <div className="flex flex-col items-start gap-8 lg:col-span-6 lg:col-start-7">
              <Reveal immediate delay={0.1}>
                <p className="label text-ink-faint flex items-center gap-3">
                  <span
                    aria-hidden
                    className="bg-signal h-1.5 w-1.5 rounded-full"
                  />
                  AIOS Labs / Founder
                </p>
              </Reveal>

              <TextReveal
                as="h1"
                id="founder-heading"
                immediate
                delay={0.2}
                className="text-display"
              >
                {founder.name ?? "Founder profile"}
              </TextReveal>

              <Reveal
                immediate
                delay={0.4}
                className="flex flex-col items-start gap-6"
              >
                <p className="text-lead text-ink-muted">{founder.role}</p>

                {founder.headline ? (
                  <p className="text-h3 text-ink max-w-[24ch]">
                    {founder.headline}
                  </p>
                ) : null}

                {founder.intro ? (
                  <p className="text-ink-muted max-w-prose">{founder.intro}</p>
                ) : null}

                {founder.social.length > 0 ? (
                  <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
                    {founder.social.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group text-small text-ink-muted hover:text-ink inline-flex items-center gap-2 py-1 transition-colors duration-quick ease-signature"
                        >
                          {link.label}
                          <span
                            aria-hidden
                            className="text-ink-faint transition-transform duration-quick ease-signature group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5"
                          >
                            ↗
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 02 — Story */}
      <Section aria-labelledby="story-heading">
        <Container width="page">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <Reveal className="mb-6">
                <Eyebrow index="01">Story</Eyebrow>
              </Reveal>
              <TextReveal as="h2" id="story-heading" className="text-h1">
                The story
              </TextReveal>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              {founder.story ? (
                <Reveal stagger className="flex flex-col gap-6">
                  {founder.story.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="text-ink-muted">
                      {paragraph}
                    </p>
                  ))}
                </Reveal>
              ) : (
                <Reveal className="flex flex-col items-start gap-5">
                  <p className="text-ink-muted max-w-prose">
                    Founder story pending. It will be published in the
                    founder&rsquo;s own words rather than written on their
                    behalf.
                  </p>
                  <PlaceholderNote>Story pending</PlaceholderNote>
                </Reveal>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* 03 — Philosophy */}
      <Section aria-labelledby="philosophy-heading" space="sm">
        <Container width="page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-6 lg:col-span-4">
              <Reveal>
                <Eyebrow index="02">Philosophy</Eyebrow>
              </Reveal>
              <TextReveal as="h2" id="philosophy-heading" className="text-h1">
                What the founder holds to
              </TextReveal>
              {founder.philosophyStatement ? (
                <Reveal>
                  <blockquote className="border-signal text-ink-muted max-w-prose border-l pl-5">
                    {founder.philosophyStatement}
                  </blockquote>
                </Reveal>
              ) : null}
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              {founder.philosophy ? (
                <ol>
                  {founder.philosophy.map((principle) => (
                    <li key={principle.index}>
                      <Reveal className="border-line flex gap-6 border-t py-6 md:gap-10 md:py-8">
                        <span className="label text-signal shrink-0 pt-2">
                          {principle.index}
                        </span>
                        <span className="flex flex-col gap-2">
                          <h3 className="text-h3 text-ink">
                            {principle.title}
                          </h3>
                          <span className="text-ink-muted block max-w-prose">
                            {principle.body}
                          </span>
                        </span>
                      </Reveal>
                    </li>
                  ))}
                </ol>
              ) : null}
            </div>
          </div>
        </Container>
      </Section>

      {/* 04 — What I work on */}
      {founder.focus.length > 0 ? (
        <Section aria-labelledby="focus-heading">
          <Container width="page">
            <div className="grid gap-10 md:grid-cols-12 md:gap-14">
              <div className="md:col-span-4">
                <Reveal className="mb-6">
                  <Eyebrow index="03">Focus</Eyebrow>
                </Reveal>
                <TextReveal as="h2" id="focus-heading" className="text-h1">
                  What I work on
                </TextReveal>
              </div>

              <div className="md:col-span-7 md:col-start-6">
                <ul className="grid gap-x-10 sm:grid-cols-2">
                  {founder.focus.map((area) => (
                    <li key={area.label}>
                      <Reveal>
                        {area.href ? (
                          <Link
                            href={area.href}
                            className="group border-line hover:border-line-strong flex items-center justify-between gap-4 border-t py-5 transition-colors duration-quick ease-signature"
                          >
                            <span className="text-h3 text-ink-muted group-hover:text-ink transition-colors duration-quick ease-signature">
                              {area.label}
                            </span>
                            <span
                              aria-hidden
                              className="text-ink-faint group-hover:text-signal transition-all duration-quick ease-signature group-hover:translate-x-1 group-focus-visible:translate-x-1"
                            >
                              →
                            </span>
                          </Link>
                        ) : (
                          <p className="border-line flex items-center border-t py-5">
                            <span className="text-h3 text-ink-muted">
                              {area.label}
                            </span>
                          </p>
                        )}
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {/* 05 — Why AIOS Labs */}
      {founder.whyAiosLabs ? (
        <Section aria-labelledby="why-heading" space="sm">
          <Container width="page">
            <div className="grid gap-10 md:grid-cols-12 md:gap-14">
              <div className="md:col-span-4">
                <Reveal className="mb-6">
                  <Eyebrow index="04">Why</Eyebrow>
                </Reveal>
                <TextReveal as="h2" id="why-heading" className="text-h1">
                  Why AIOS Labs
                </TextReveal>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <Reveal>
                  <p className="text-lead text-ink-muted max-w-prose">
                    {founder.whyAiosLabs}
                  </p>
                </Reveal>
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {/* 06 — Vision */}
      {founder.vision ? (
        <Section aria-labelledby="vision-heading" tone="light">
          <Container width="page">
            <div className="flex flex-col gap-8">
              <Reveal>
                <Eyebrow index="05">Vision</Eyebrow>
              </Reveal>
              <TextReveal
                as="h2"
                id="vision-heading"
                className="text-h2 max-w-[26ch]"
              >
                Where this is going
              </TextReveal>
              <Reveal>
                <p className="text-lead max-w-prose">{founder.vision}</p>
              </Reveal>
            </div>
          </Container>
        </Section>
      ) : null}

      <ClosingCta
        headingId="founder-cta-heading"
        index="06"
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
