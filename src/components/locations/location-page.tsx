import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent } from "@/components/ui/accent";
import { Button } from "@/components/ui/button";
import { ClosingCta } from "@/components/ui/closing-cta";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import type { LocationPage as LocationContent } from "@/content/location-page-types";
import type { Service } from "@/content/services";

/**
 * The one template behind every location page. Everything that differs
 * between markets lives in content.
 *
 * The hero deliberately says "businesses operating in X". Nothing here claims
 * an office, an address or a local team — the office block renders only when
 * verified details exist in the record.
 */
export function LocationPage({
  location,
  services,
}: {
  location: LocationContent;
  services: readonly Service[];
}) {
  return (
    <main id="main" className="flex-1">
      {/* 01 — Hero */}
      <section
        aria-labelledby="location-heading"
        className="pt-header md:pt-header-lg"
      >
        <Container
          width="page"
          className="flex flex-col gap-10 py-section-sm md:gap-14"
        >
          <Reveal immediate>
            <p className="label text-ink-faint flex flex-wrap items-center gap-3">
              <span aria-hidden className="bg-signal h-1.5 w-1.5 rounded-full" />
              AIOS Labs / {location.city}
              {location.region ? (
                <>
                  <span aria-hidden className="bg-line-strong h-px w-6" />
                  {location.region}
                </>
              ) : null}
            </p>
          </Reveal>

          <TextReveal
            as="h1"
            id="location-heading"
            immediate
            delay={0.15}
            className="text-display max-w-[18ch]"
          >
            Growth systems for businesses in{" "}
            <Accent>{location.city}</Accent>.
          </TextReveal>

          <div className="grid md:grid-cols-12">
            <Reveal
              immediate
              delay={0.4}
              className="flex flex-col items-start gap-6 md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8"
            >
              <p className="text-lead text-ink-muted max-w-prose">
                {location.positioning}
              </p>

              {/* Renders only when a verified office exists. Today: never. */}
              {location.presence === "office" && location.office ? (
                <address className="text-small text-ink-muted not-italic">
                  {location.office.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  {location.office.openingHours ? (
                    <span className="text-ink-faint block pt-2">
                      {location.office.openingHours}
                    </span>
                  ) : null}
                </address>
              ) : (
                <p className="text-small text-ink-faint max-w-prose">
                  We work with businesses operating in {location.city}. AIOS
                  Labs does not list an office in this market.
                </p>
              )}

              <Button href="/contact" size="lg" withArrow>
                Start a Growth Conversation
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 02 — Market context */}
      <Section aria-labelledby="context-heading">
        <Container width="page">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <Reveal className="mb-6">
                <Eyebrow index="01">Market context</Eyebrow>
              </Reveal>
              <TextReveal as="h2" id="context-heading" className="text-h1">
                What has to be established first.
              </TextReveal>
            </div>

            <div className="flex flex-col gap-6 md:col-span-6 md:col-start-7">
              <Reveal stagger className="flex flex-col gap-6">
                {location.marketContext.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-ink-muted">
                    {paragraph}
                  </p>
                ))}
              </Reveal>

              {location.marketNotes ? (
                <Reveal stagger className="border-line flex flex-col gap-6 border-t pt-8">
                  {location.marketNotes.map((note) => (
                    <p key={note.slice(0, 40)} className="text-ink-muted">
                      {note}
                    </p>
                  ))}
                </Reveal>
              ) : (
                <Reveal className="border-line flex flex-col items-start gap-5 border-t pt-8">
                  <p className="text-ink-muted max-w-prose">
                    Researched detail specific to {location.city} will be
                    published here. Until that research exists we would rather
                    say nothing than assert a market statistic we have not
                    verified.
                  </p>
                  <PlaceholderNote>
                    {location.city} market research pending
                  </PlaceholderNote>
                </Reveal>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* 03 — How AIOS Labs can help */}
      <Section aria-labelledby="location-services-heading" space="sm">
        <Container width="page" className="flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col gap-6 md:max-w-[46ch]">
            <Reveal>
              <Eyebrow index="02">Capabilities</Eyebrow>
            </Reveal>
            <TextReveal
              as="h2"
              id="location-services-heading"
              className="text-h1"
            >
              How AIOS Labs can help.
            </TextReveal>
          </div>

          <ul className="flex flex-col">
            {services.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="group border-line hover:bg-surface focus-visible:bg-surface -mx-gutter flex items-start gap-5 border-t px-gutter py-6 transition-colors duration-base ease-signature md:items-center md:gap-8 md:py-7"
                >
                  <span className="label text-signal w-6 shrink-0 pt-1.5 md:pt-0">
                    {service.index}
                  </span>
                  <span className="flex flex-1 flex-col gap-1.5 md:flex-row md:items-center md:gap-8">
                    <span className="text-h3 text-ink transition-transform duration-base ease-signature group-hover:translate-x-2 group-focus-visible:translate-x-2 md:flex-1">
                      {service.name}
                    </span>
                    <span className="text-small text-ink-muted md:max-w-[32ch] md:flex-1">
                      {service.summary}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="text-ink-muted group-hover:text-signal group-focus-visible:text-signal shrink-0 -translate-x-2 pt-1 opacity-0 transition-all duration-base ease-signature group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:pt-0"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 04 — The approach */}
      <Section aria-labelledby="location-approach-heading" space="sm">
        <Container width="page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-6 lg:col-span-4">
              <Reveal>
                <Eyebrow index="03">Approach</Eyebrow>
              </Reveal>
              <TextReveal
                as="h2"
                id="location-approach-heading"
                className="text-h1"
              >
                How an engagement runs.
              </TextReveal>
            </div>

            <ol className="lg:col-span-7 lg:col-start-6">
              {location.approach.map((step) => (
                <li key={step.index}>
                  <Reveal className="border-line flex gap-6 border-t py-6 md:gap-10 md:py-8">
                    <span className="label text-signal shrink-0 pt-2">
                      {step.index}
                    </span>
                    <span className="flex flex-col gap-2">
                      <h3 className="text-h3 text-ink">{step.title}</h3>
                      <span className="text-ink-muted block max-w-prose">
                        {step.description}
                      </span>
                    </span>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* 05 — Who this is for */}
      <Section aria-labelledby="audience-heading">
        <Container width="page">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <Reveal className="mb-6">
                <Eyebrow index="04">Fit</Eyebrow>
              </Reveal>
              <TextReveal as="h2" id="audience-heading" className="text-h1">
                Who this is for.
              </TextReveal>
              <Reveal>
                <p className="text-ink-muted mt-6 max-w-prose">
                  Situations rather than sectors — if one of these describes
                  where you are, the conversation is usually worth having.
                </p>
              </Reveal>
            </div>

            <ul className="md:col-span-6 md:col-start-7">
              {location.audience.map((item) => (
                <li key={item}>
                  <Reveal className="border-line flex items-baseline gap-5 border-t py-5">
                    <span aria-hidden className="text-signal shrink-0">
                      —
                    </span>
                    <span className="text-ink-muted">{item}</span>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* 06 — Closing CTA */}
      <ClosingCta
        headingId="location-cta-heading"
        index="05"
        headline={
          <>
            Let&rsquo;s build what comes <Accent>next</Accent>.
          </>
        }
        support={`Tell us what is in the way for your business in ${location.city}. We'll tell you how we would approach it.`}
      />
    </main>
  );
}
