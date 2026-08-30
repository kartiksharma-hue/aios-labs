import { Container } from "@/components/ui/container";
import { Accent } from "@/components/ui/accent";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

/** Section 01 — the page's single <h1>. */
export function WorkHero() {
  return (
    <section aria-labelledby="work-heading" className="pt-header md:pt-header-lg">
      <Container
        width="page"
        className="flex flex-col gap-10 py-section-sm md:gap-14"
      >
        <Reveal immediate>
          <p className="label text-ink-faint flex items-center gap-3">
            <span aria-hidden className="bg-signal h-1.5 w-1.5 rounded-full" />
            AIOS Labs / Selected work
          </p>
        </Reveal>

        <TextReveal
          as="h1"
          id="work-heading"
          immediate
          delay={0.15}
          className="text-display max-w-[18ch]"
        >
          Work built around the <Accent>problem</Accent>.
        </TextReveal>

        <div className="grid md:grid-cols-12">
          <Reveal
            immediate
            delay={0.4}
            className="flex flex-col items-start gap-6 md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8"
          >
            <p className="text-lead text-ink-muted max-w-prose">
              Selected growth systems, campaigns and digital experiences built
              with a focus on what the business actually needed.
            </p>
            <PlaceholderNote>
              Case studies pending client approval
            </PlaceholderNote>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
