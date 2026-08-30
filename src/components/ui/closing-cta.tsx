import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

/**
 * The closing CTA used at the foot of every page type — the one inverted
 * paper surface in the system. Only the headline and supporting line change.
 */
export function ClosingCta({
  headingId,
  index,
  headline,
  support,
  ctaLabel = "Start a Growth Conversation",
  ctaHref = "/contact",
}: {
  headingId: string;
  index: string;
  headline: ReactNode;
  support: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <Section aria-labelledby={headingId} tone="light">
      <Container width="page" className="flex flex-col gap-12 md:gap-16">
        <Reveal>
          <Eyebrow index={index}>Next step</Eyebrow>
        </Reveal>

        <TextReveal
          as="h2"
          id={headingId}
          className="text-display max-w-[18ch]"
        >
          {headline}
        </TextReveal>

        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-5">
            <p className="text-lead text-ink-muted max-w-prose">{support}</p>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9 md:justify-self-end">
            <Button href={ctaHref} size="lg" withArrow>
              {ctaLabel}
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
