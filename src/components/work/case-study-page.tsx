import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { CaseVisualFrame } from "@/components/work/case-visual-frame";
import { WorkCta } from "@/components/work/work-cta";
import type { CaseStudy, CaseStudySection } from "@/content/work-types";
import type { Service } from "@/content/services";

function Narrative({
  section,
  eyebrow,
  index,
  headingId,
}: {
  section: CaseStudySection;
  /** Short label above the heading — distinct from it, not a repeat. */
  eyebrow: string;
  index: string;
  headingId: string;
}) {
  return (
    <Section aria-labelledby={headingId}>
      <Container width="page">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <Reveal className="mb-6">
              <Eyebrow index={index}>{eyebrow}</Eyebrow>
            </Reveal>
            <TextReveal as="h2" id={headingId} className="text-h1">
              {section.heading}
            </TextReveal>
          </div>
          <Reveal
            stagger
            className="flex flex-col gap-6 md:col-span-6 md:col-start-7"
          >
            {section.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-ink-muted">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/**
 * The one template behind every case study. Sections whose content has not
 * been verified render an explicit reserved state — never a fabricated value.
 */
export function CaseStudyPage({
  study,
  services,
  previous,
  next,
}: {
  study: CaseStudy;
  services: readonly Service[];
  previous?: CaseStudy;
  next?: CaseStudy;
}) {
  const isPlaceholder = study.status === "placeholder";

  return (
    <main id="main" className="flex-1">
      {/* 01 — Hero */}
      <section
        aria-labelledby="case-heading"
        className="pt-header md:pt-header-lg"
      >
        <Container
          width="page"
          className="flex flex-col gap-10 py-section-sm md:gap-12"
        >
          <Reveal immediate>
            <p className="label text-ink-faint flex flex-wrap items-center gap-3">
              <span aria-hidden className="bg-signal h-1.5 w-1.5 rounded-full" />
              {study.reference}
              <span aria-hidden className="bg-line-strong h-px w-6" />
              {study.category}
            </p>
          </Reveal>

          <TextReveal
            as="h1"
            id="case-heading"
            immediate
            delay={0.15}
            className="text-display max-w-[16ch]"
          >
            {study.title}
          </TextReveal>

          <div className="grid gap-8 md:grid-cols-12">
            <Reveal
              immediate
              delay={0.4}
              className="flex flex-col items-start gap-6 md:col-span-6 md:col-start-7"
            >
              <p className="text-lead text-ink-muted max-w-prose">
                {study.summary}
              </p>
              <dl className="flex flex-wrap gap-x-10 gap-y-3">
                <div className="flex flex-col gap-1">
                  <dt className="label text-ink-faint">Client</dt>
                  <dd className="text-small text-ink-muted">
                    {study.client ?? "Pending approval"}
                  </dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="label text-ink-faint">Year</dt>
                  <dd className="text-small text-ink-muted">
                    {study.year ?? "—"}
                  </dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="label text-ink-faint">Status</dt>
                  <dd className="text-small text-ink-muted">
                    {isPlaceholder ? "Content pending" : "Published"}
                  </dd>
                </div>
              </dl>
              {isPlaceholder ? (
                <PlaceholderNote>
                  Case study / content pending
                </PlaceholderNote>
              ) : null}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 02 / 03 — Challenge and approach */}
      <Narrative
        section={study.challenge}
        eyebrow="Challenge"
        index="01"
        headingId="challenge-heading"
      />
      <Narrative
        section={study.approach}
        eyebrow="Approach"
        index="02"
        headingId="approach-heading"
      />

      {/* 04 — Execution */}
      <Section aria-labelledby="execution-heading" space="sm">
        <Container width="page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-6 lg:col-span-4">
              <Reveal>
                <Eyebrow index="03">Execution</Eyebrow>
              </Reveal>
              <TextReveal as="h2" id="execution-heading" className="text-h1">
                The execution
              </TextReveal>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              {study.execution ? (
                <ol>
                  {study.execution.map((step) => (
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
              ) : (
                <Reveal className="border-line flex flex-col items-start gap-5 border-t pt-8">
                  <p className="text-ink-muted max-w-prose">
                    The step-by-step record of the work will be published here
                    once the client has approved what can be shown.
                  </p>
                  <PlaceholderNote>Execution detail pending</PlaceholderNote>
                </Reveal>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* 05 — Services used */}
      {services.length > 0 ? (
        <Section aria-labelledby="services-used-heading" space="sm">
          <Container width="page" className="flex flex-col gap-10">
            <Reveal className="flex flex-col gap-4">
              <Eyebrow index="04">Services</Eyebrow>
              <h2 id="services-used-heading" className="text-h2 text-ink">
                Services involved
              </h2>
            </Reveal>
            <ul className="grid gap-x-10 md:grid-cols-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Reveal>
                    <Link
                      href={service.href}
                      className="group border-line hover:border-signal flex h-full flex-col gap-3 border-t py-7 transition-colors duration-base ease-signature"
                    >
                      <span className="label text-signal">{service.index}</span>
                      <h3 className="text-h3 text-ink">{service.name}</h3>
                      <p className="text-small text-ink-muted">
                        {service.summary}
                      </p>
                      <span className="text-small text-ink-muted group-hover:text-ink mt-2 inline-flex items-center gap-2 transition-colors duration-base ease-signature">
                        Explore
                        <span
                          aria-hidden
                          className="transition-transform duration-quick ease-signature group-hover:translate-x-1 group-focus-visible:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      {/* 06 — Outcome */}
      <Section aria-labelledby="outcome-heading">
        <Container width="page">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <Reveal className="mb-6">
                <Eyebrow index="05">Outcome</Eyebrow>
              </Reveal>
              <TextReveal as="h2" id="outcome-heading" className="text-h1">
                The outcome
              </TextReveal>
            </div>

            <div className="flex flex-col gap-8 md:col-span-6 md:col-start-7">
              {study.outcome ? (
                <Reveal stagger className="flex flex-col gap-6">
                  {study.outcome.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="text-ink-muted">
                      {paragraph}
                    </p>
                  ))}
                </Reveal>
              ) : (
                <Reveal className="flex flex-col items-start gap-5">
                  <p className="text-ink-muted max-w-prose">
                    Outcome data pending verified client reporting.
                  </p>
                  <PlaceholderNote>
                    No figures published without verification
                  </PlaceholderNote>
                </Reveal>
              )}

              {/* Metrics render only when verified. An empty set renders
                  nothing at all — never a zero, a dash or a rounded guess. */}
              {study.metrics.length > 0 ? (
                <Reveal stagger className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="border-line flex flex-col gap-2 border-t pt-5">
                      <span className="label text-ink-faint">{metric.label}</span>
                      <span className="text-h2 text-signal">{metric.value}</span>
                      <span className="text-small text-ink-faint">
                        {metric.source}
                      </span>
                    </div>
                  ))}
                </Reveal>
              ) : null}
            </div>
          </div>
        </Container>
      </Section>

      {/* 07 — Visuals */}
      {study.gallery.length > 0 ? (
        <Section aria-labelledby="gallery-heading" space="sm">
          <Container width="page" className="flex flex-col gap-10">
            <Reveal className="flex flex-col gap-4">
              <Eyebrow index="06">Visuals</Eyebrow>
              <h2 id="gallery-heading" className="text-h2 text-ink">
                From the work
              </h2>
            </Reveal>

            <div className="flex flex-col gap-6 md:gap-10">
              <Reveal>
                <CaseVisualFrame
                  visual={study.gallery[0]}
                  ratio="21 / 9"
                  sizes="(min-width: 1024px) 1280px, 100vw"
                />
              </Reveal>
              {study.gallery.length > 1 ? (
                <div className="grid gap-6 md:grid-cols-2 md:gap-10">
                  {study.gallery.slice(1).map((visual) => (
                    <Reveal key={visual.label}>
                      <CaseVisualFrame visual={visual} />
                    </Reveal>
                  ))}
                </div>
              ) : null}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* 08 — Previous / next */}
      {previous || next ? (
        <Section aria-labelledby="more-work-heading" space="sm">
          <Container width="page" className="flex flex-col gap-8">
            <h2 id="more-work-heading" className="label text-ink-faint">
              More work
            </h2>
            <div className="border-line grid gap-8 border-t pt-8 md:grid-cols-2">
              {previous ? (
                <Link
                  href={`/work/${previous.slug}`}
                  className="group flex flex-col gap-2"
                >
                  <span className="label text-ink-faint">← Previous</span>
                  <span className="text-h3 text-ink-muted group-hover:text-ink transition-colors duration-base ease-signature">
                    {previous.title}
                  </span>
                </Link>
              ) : (
                <span aria-hidden />
              )}
              {next ? (
                <Link
                  href={`/work/${next.slug}`}
                  className="group flex flex-col gap-2 md:items-end md:text-right"
                >
                  <span className="label text-ink-faint">Next →</span>
                  <span className="text-h3 text-ink-muted group-hover:text-ink transition-colors duration-base ease-signature">
                    {next.title}
                  </span>
                </Link>
              ) : null}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* 09 — Closing CTA */}
      <WorkCta index="07" />
    </main>
  );
}
