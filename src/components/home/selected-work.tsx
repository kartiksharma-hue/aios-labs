import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { workSlots, type WorkSlot } from "@/content/home";

/**
 * A case-study slot. The structure is final; the content is not. Every field
 * here waits on approved client material — never fill these with invented
 * names, industries or results.
 */
function WorkCard({ slot, className }: { slot: WorkSlot; className?: string }) {
  return (
    <Reveal as="article" className={className}>
      <PlaceholderFrame label="Case study visual — pending" ratio="4 / 3" />

      <div className="mt-7 flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <span className="label text-signal">{slot.index}</span>
          <span aria-hidden className="bg-line-strong h-px w-6" />
          <span className="label text-ink-faint">Reserved</span>
        </div>

        <h3 className="text-h3 text-ink">Case study {slot.index}</h3>

        <dl className="border-line flex flex-col gap-3 border-t pt-5">
          {slot.fields.map((field) => (
            <div key={field.label} className="flex items-baseline gap-4">
              <dt className="label text-ink-faint w-24 shrink-0">
                {field.label}
              </dt>
              <dd className="text-small text-ink-muted">{field.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Reveal>
  );
}

/** Section 05 — selected work. */
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
            <PlaceholderNote>Case studies pending approval</PlaceholderNote>
          </Reveal>
        </div>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-x-16">
          {workSlots.map((slot, index) => (
            <WorkCard
              key={slot.index}
              slot={slot}
              // Editorial stagger — the second column drops, so the grid never
              // reads as a plain row of cards.
              className={index % 2 === 1 ? "lg:mt-28" : undefined}
            />
          ))}
        </div>

        <Reveal className="border-line border-t pt-10">
          <Button href="/work" variant="secondary" size="lg" withArrow>
            View all work
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
