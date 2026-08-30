import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent } from "@/components/ui/accent";
import { Button } from "@/components/ui/button";
import { ClosingCta } from "@/components/ui/closing-cta";
import { MediaFrame } from "@/components/ui/media-frame";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { founder } from "@/content/founder";
import { site } from "@/lib/site";
import { isFounderIndexable, robotsFor } from "@/lib/indexing";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "The founder of AIOS Labs — the thinking behind an agency built to run growth as one connected system. Profile in progress.",
  alternates: { canonical: "/founder" },
  // Nothing verified to index yet; the page is a structure awaiting content.
  robots: robotsFor(isFounderIndexable),
  openGraph: {
    type: "profile",
    title: `Founder — ${site.name}`,
    description:
      "The thinking behind AIOS Labs, in the founder's own words.",
    url: "/founder",
    siteName: site.name,
  },
};

/**
 * No Person structured data is emitted. Describing a person in schema requires
 * a verified name and biography, and neither exists yet — see content/founder.ts.
 */
export default function FounderPage() {
  return (
    <main id="main" className="flex-1">
      {/* 01 / 04 — Hero and portrait */}
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

              <Reveal immediate delay={0.4} className="flex flex-col items-start gap-6">
                <p className="text-lead text-ink-muted">{founder.role}</p>
                {founder.intro ? (
                  <p className="text-ink-muted max-w-prose">{founder.intro}</p>
                ) : (
                  <p className="text-ink-muted max-w-prose">
                    This profile is reserved for the founder&rsquo;s name, role
                    and own account of why AIOS Labs was built the way it is.
                  </p>
                )}
                <PlaceholderNote>
                  Founder profile / content pending
                </PlaceholderNote>

                {founder.social.length > 0 ? (
                  <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {founder.social.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-small text-ink-muted hover:text-ink transition-colors duration-quick ease-signature"
                        >
                          {link.label}
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
              ) : (
                <Reveal className="border-line flex flex-col items-start gap-5 border-t pt-8">
                  <p className="text-ink-muted max-w-prose">
                    Three to five principles will sit here, in the
                    founder&rsquo;s own words. Until they are written, nothing
                    stands in for them — a quote invented for a website is worth
                    less than an empty section.
                  </p>
                  <PlaceholderNote>Principles pending</PlaceholderNote>
                  <Button href="/about" variant="secondary" withArrow>
                    How AIOS Labs thinks
                  </Button>
                </Reveal>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <ClosingCta
        headingId="founder-cta-heading"
        index="03"
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
