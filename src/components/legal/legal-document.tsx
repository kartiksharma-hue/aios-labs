import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import {
  legalDisclaimer,
  pendingDateLabel,
  legalDocuments,
  type LegalDocument,
} from "@/content/legal";

/**
 * Shared rendering for both legal documents, so /privacy and /terms cannot
 * drift apart typographically. All copy lives in src/content/legal.ts; this
 * file decides only how it is set.
 *
 * The measure is deliberately narrow and the type larger than a typical legal
 * page: these are meant to be read, not skimmed past.
 */
export function LegalDocumentPage({ document }: { document: LegalDocument }) {
  const other = legalDocuments.find((doc) => doc.slug !== document.slug);

  return (
    <main id="main" className="flex-1">
      {/* Header */}
      <section
        aria-labelledby="legal-heading"
        className="pt-header md:pt-header-lg"
      >
        <Container width="content" className="py-section-sm">
          <div className="flex max-w-narrow flex-col gap-6">
            <Reveal immediate>
              <Eyebrow>{document.eyebrow}</Eyebrow>
            </Reveal>

            <TextReveal
              as="h1"
              id="legal-heading"
              immediate
              delay={0.1}
              className="text-h1"
            >
              {document.title}
            </TextReveal>

            <Reveal immediate delay={0.2} className="flex flex-col gap-6">
              <p className="text-lead text-ink-muted max-w-prose">
                {document.lead}
              </p>

              <div className="border-line flex flex-col gap-2 border-t pt-6">
                <p className="label text-ink-faint">
                  Last updated:{" "}
                  {document.lastUpdated ? (
                    <span className="text-ink-muted">
                      {document.lastUpdated}
                    </span>
                  ) : (
                    <span className="text-signal">{pendingDateLabel}</span>
                  )}
                </p>
                <p className="text-small text-ink-faint max-w-prose">
                  {legalDisclaimer}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Clauses */}
      <Section space="sm">
        <Container width="content">
          <ol className="flex max-w-narrow flex-col">
            {document.sections.map((clause) => (
              <li key={clause.index}>
                <Reveal className="border-line flex flex-col gap-4 border-t py-10 md:flex-row md:gap-12 md:py-12">
                  <h2
                    id={`clause-${clause.index}`}
                    className="flex shrink-0 items-baseline gap-4 md:w-56"
                  >
                    <span className="label text-signal">{clause.index}</span>
                    <span className="text-h3 text-ink">{clause.title}</span>
                  </h2>

                  <div className="flex flex-col gap-4">
                    {clause.body.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 40)}
                        className="text-ink-muted max-w-prose"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {clause.list ? (
                      <ul className="flex flex-col gap-2 pt-1">
                        {clause.list.map((item) => (
                          <li
                            key={item}
                            className="text-ink-muted flex gap-3 max-w-prose"
                          >
                            <span
                              aria-hidden
                              className="bg-line-strong mt-3 h-px w-3 shrink-0"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Cross-link to the other document, and back to contact */}
      <Section space="sm">
        <Container width="content">
          <Reveal className="border-line flex max-w-narrow flex-col gap-6 border-t pt-10 sm:flex-row sm:items-center sm:justify-between">
            {other ? (
              <Link
                href={`/${other.slug}`}
                className="group text-body text-ink hover:text-signal inline-flex items-center gap-2 py-1 transition-colors duration-quick ease-signature"
              >
                {other.title}
                <span
                  aria-hidden
                  className="transition-transform duration-quick ease-signature group-hover:translate-x-1 group-focus-visible:translate-x-1"
                >
                  →
                </span>
              </Link>
            ) : null}

            <Link
              href="/contact"
              className="text-small text-ink-muted hover:text-ink inline-flex items-center py-1 transition-colors duration-quick ease-signature"
            >
              Get in touch
            </Link>
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}
