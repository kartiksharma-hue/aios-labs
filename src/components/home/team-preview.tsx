import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { teamSlots } from "@/content/home";

/**
 * Section 07 — team preview.
 *
 * The slots below are a grid decision, not a headcount. No names, roles or
 * bios have been provided, and the note makes that explicit rather than
 * letting four frames imply four people.
 */
export function TeamPreview() {
  return (
    <Section aria-labelledby="team-heading" space="sm">
      <Container width="page" className="flex flex-col gap-12">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal className="mb-6">
              <Eyebrow index="06">Team</Eyebrow>
            </Reveal>
            <TextReveal as="h2" id="team-heading" className="text-h1">
              The people behind the system.
            </TextReveal>
          </div>
          <Reveal className="md:col-span-4 md:col-start-9 md:self-end">
            <PlaceholderNote>Profiles published once confirmed</PlaceholderNote>
          </Reveal>
        </div>

        <Reveal stagger className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {teamSlots.map((slot) => (
            <div key={slot} className="flex flex-col gap-4">
              <PlaceholderFrame label="Portrait" ratio="4 / 5" />
              <div className="flex flex-col gap-1">
                <span className="label text-signal">{slot}</span>
                <span className="text-small text-ink-faint">
                  Team profile reserved
                </span>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="border-line border-t pt-10">
          <Button href="/team" variant="secondary" size="lg" withArrow>
            Meet the Team
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
