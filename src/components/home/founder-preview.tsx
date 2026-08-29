import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent } from "@/components/ui/accent";
import { Button } from "@/components/ui/button";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

/**
 * Section 06 — founder preview.
 *
 * The copy below describes what this section is reserved for. It makes no
 * claim about the founder's background, companies or achievements — none have
 * been provided, and none may be invented.
 */
export function FounderPreview() {
  return (
    <Section aria-labelledby="founder-heading">
      <Container width="page">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <PlaceholderFrame label="Founder portrait — pending" ratio="4 / 5" />
          </Reveal>

          <div className="flex flex-col items-start gap-6 lg:col-span-6 lg:col-start-7">
            <Reveal>
              <Eyebrow index="05">Founder</Eyebrow>
            </Reveal>

            <TextReveal as="h2" id="founder-heading" className="text-display">
              Built with <Accent>intention</Accent>.
            </TextReveal>

            <Reveal className="flex flex-col items-start gap-6">
              <p className="text-lead text-ink-muted max-w-prose">
                AIOS Labs was built on one conviction: growth is engineered, not
                guessed. Strategy, media, creative and data belong on the same
                table, answering to the same numbers.
              </p>
              <p className="text-ink-muted max-w-prose">
                This space is reserved for the founder&rsquo;s own account —
                the story, the philosophy and the thinking behind the studio.
              </p>
              <PlaceholderNote>
                Founder name, role and bio pending
              </PlaceholderNote>
              <Button href="/founder" variant="secondary" size="lg" withArrow>
                Meet the Founder
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
