import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent } from "@/components/ui/accent";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { growthPillars } from "@/content/home";

/**
 * Section 02 — the positioning statement.
 *
 * The five disciplines are set as one typographic equation rather than five
 * cards: the point is that they are a single connected sentence, and a grid
 * would say the opposite.
 */
export function Positioning() {
  return (
    <Section aria-labelledby="positioning-heading">
      <Container width="page" className="flex flex-col gap-14 md:gap-20">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal className="mb-6">
              <Eyebrow index="01">Positioning</Eyebrow>
            </Reveal>
            <TextReveal
              as="h2"
              id="positioning-heading"
              className="text-display"
            >
              Marketing shouldn&rsquo;t operate in <Accent>silos</Accent>.
            </TextReveal>
          </div>
          <Reveal className="md:col-span-4 md:col-start-9 md:self-end">
            <p className="text-lead text-ink-muted max-w-prose">
              Channels bought separately compete with each other. We run the
              five disciplines below as one system, on one set of numbers.
            </p>
          </Reveal>
        </div>

        <ul className="border-line flex flex-wrap items-baseline gap-x-5 gap-y-3 border-t pt-10 md:gap-x-7">
          {growthPillars.map((pillar, index) => (
            <li key={pillar} className="flex items-baseline gap-5 md:gap-7">
              <Reveal delay={index * 0.06}>
                <span className="text-h1 text-ink-muted hover:text-ink transition-colors duration-base ease-signature">
                  {pillar}
                </span>
              </Reveal>
              {index < growthPillars.length - 1 ? (
                <span aria-hidden className="text-signal text-h3">
                  +
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
