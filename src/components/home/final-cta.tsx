import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent } from "@/components/ui/accent";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

/**
 * Section 08 — closing CTA.
 *
 * The one inverted surface on the page. After a full dark scroll the switch to
 * paper is the loudest move available without adding a single new colour, and
 * it sets up the return to the dark footer.
 */
export function FinalCta() {
  return (
    <Section aria-labelledby="cta-heading" tone="light">
      <Container width="page" className="flex flex-col gap-12 md:gap-16">
        <Reveal>
          <Eyebrow index="07">Next step</Eyebrow>
        </Reveal>

        <TextReveal
          as="h2"
          id="cta-heading"
          className="text-display max-w-[18ch]"
        >
          Ready to engineer your <Accent>growth</Accent>?
        </TextReveal>

        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-5">
            <p className="text-lead text-ink-muted max-w-prose">
              Tell us where growth is stalling. We&rsquo;ll tell you what we
              would do about it.
            </p>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9 md:justify-self-end">
            <Button href="/contact" size="lg" withArrow>
              Book a Growth Call
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
