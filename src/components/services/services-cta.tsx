import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent } from "@/components/ui/accent";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

/** Section 03 — the closing CTA, on the same inverted surface as the home page's. */
export function ServicesCta() {
  return (
    <Section aria-labelledby="services-cta-heading" tone="light">
      <Container width="page" className="flex flex-col gap-12 md:gap-16">
        <Reveal>
          <Eyebrow index="02">Next step</Eyebrow>
        </Reveal>

        <TextReveal
          as="h2"
          id="services-cta-heading"
          className="text-display max-w-[18ch]"
        >
          Your growth shouldn&rsquo;t work in <Accent>silos</Accent>.
        </TextReveal>

        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-5">
            <p className="text-lead text-ink-muted max-w-prose">
              Let&rsquo;s build the system behind your next stage of growth.
            </p>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9 md:justify-self-end">
            <Button href="/contact" size="lg" withArrow>
              Start a Growth Conversation
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
