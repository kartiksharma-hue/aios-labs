import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { WorkCard } from "@/components/work/work-card";
import { publishedCaseStudies } from "@/content/work";
import { isCaseStudyIndexable } from "@/lib/indexing";
import { services } from "@/content/services";

/**
 * Section 05 — selected work.
 *
 * Features the case studies that are actually publishable, read from the same
 * content model and rendered through the same card as /work — so the home page
 * cannot show a different set of work, or a different treatment of it, than
 * the section it links to. Reserved slots stay on /work; they are not featured
 * here. With nothing publishable, the reserved state below returns.
 */
const featured = publishedCaseStudies.filter(isCaseStudyIndexable).slice(0, 3);

function servicesFor(slugs: readonly string[]) {
  return slugs
    .map((slug) => services.find((entry) => entry.href === `/services/${slug}`))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
}

export function SelectedWork() {
  return (
    <Section aria-labelledby="work-heading">
      <Container width="page" className="flex flex-col gap-12 md:gap-16">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal className="mb-6">
              <Eyebrow index="04">Selected work</Eyebrow>
            </Reveal>
            <TextReveal as="h2" id="work-heading" className="text-display">
              The proof, in progress.
            </TextReveal>
          </div>
          <Reveal className="md:col-span-4 md:col-start-9 md:self-end">
            <PlaceholderNote>
              {featured.length > 0
                ? "Results published once verified"
                : "Case studies pending approval"}
            </PlaceholderNote>
          </Reveal>
        </div>

        {featured.length > 0 ? (
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-x-16">
            {featured.map((study, index) => (
              <WorkCard
                key={study.slug}
                study={study}
                services={servicesFor(study.services)}
                // Editorial stagger — the second column drops, so the grid
                // never reads as a plain row of cards.
                className={index % 2 === 1 ? "lg:mt-28" : undefined}
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-x-16">
            {["01", "02"].map((index, position) => (
              <Reveal
                key={index}
                as="article"
                className={position % 2 === 1 ? "lg:mt-28" : undefined}
              >
                <PlaceholderFrame
                  label="Case study visual — pending"
                  ratio="4 / 3"
                />
                <div className="mt-7 flex flex-col gap-4">
                  <span className="label text-signal">{index}</span>
                  <h3 className="text-h3 text-ink">Case study {index}</h3>
                  <p className="text-small text-ink-muted">
                    Reserved until a case study is approved for publication.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal className="border-line border-t pt-10">
          <Button href="/work" variant="secondary" size="lg" withArrow>
            View all work
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
