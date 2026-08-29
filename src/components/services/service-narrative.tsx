import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import type { NarrativeSection } from "@/content/service-page-types";

/**
 * An editorial prose section: eyebrow, headline, body.
 *
 * Used for both "The problem" and "Our approach" — they are the same shape, so
 * they are the same component rather than two files of identical markup.
 */
export function ServiceNarrative({
  section,
  index,
  headingId,
}: {
  section: NarrativeSection;
  index: string;
  headingId: string;
}) {
  return (
    <Section aria-labelledby={headingId}>
      <Container width="page">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-6">
            <Reveal className="mb-6">
              <Eyebrow index={index}>{section.eyebrow}</Eyebrow>
            </Reveal>
            <TextReveal as="h2" id={headingId} className="text-h1">
              {section.heading}
            </TextReveal>
          </div>

          <Reveal
            stagger
            className="flex flex-col gap-6 md:col-span-5 md:col-start-8"
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
