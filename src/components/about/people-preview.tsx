import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { MediaFrame, type MediaSlot } from "@/components/ui/media-frame";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

/**
 * Founder and team previews share a shape: a portrait beside a heading, a
 * marked pending state and a link onward. One component, two uses.
 */
export function PeoplePreview({
  index,
  eyebrow,
  heading,
  headingId,
  body,
  pendingNote,
  portrait,
  ctaLabel,
  ctaHref,
  reverse = false,
}: {
  index: string;
  eyebrow: string;
  heading: string;
  headingId: string;
  body: string;
  pendingNote: string;
  portrait: MediaSlot;
  ctaLabel: string;
  ctaHref: string;
  /** Puts the portrait on the right at desktop. */
  reverse?: boolean;
}) {
  return (
    <Section aria-labelledby={headingId} space="sm">
      <Container width="page">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal
            className={
              reverse
                ? "lg:col-span-4 lg:col-start-9 lg:row-start-1"
                : "lg:col-span-4"
            }
          >
            <MediaFrame slot={portrait} sizes="(min-width: 1024px) 33vw, 100vw" />
          </Reveal>

          <div
            className={
              reverse
                ? "flex flex-col items-start gap-6 lg:col-span-6 lg:col-start-1 lg:row-start-1"
                : "flex flex-col items-start gap-6 lg:col-span-6 lg:col-start-6"
            }
          >
            <Reveal>
              <Eyebrow index={index}>{eyebrow}</Eyebrow>
            </Reveal>
            <TextReveal as="h2" id={headingId} className="text-h1">
              {heading}
            </TextReveal>
            <Reveal className="flex flex-col items-start gap-6">
              <p className="text-ink-muted max-w-prose">{body}</p>
              <PlaceholderNote>{pendingNote}</PlaceholderNote>
              <Button href={ctaHref} variant="secondary" size="lg" withArrow>
                {ctaLabel}
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
