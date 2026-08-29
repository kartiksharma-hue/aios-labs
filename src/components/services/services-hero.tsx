import { Container } from "@/components/ui/container";
import { Accent } from "@/components/ui/accent";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

/** Section 01 — the page's single <h1>. Deliberately plain; the journey below is the moment. */
export function ServicesHero() {
  return (
    <section
      aria-labelledby="services-heading"
      className="pt-header md:pt-header-lg"
    >
      <Container
        width="page"
        className="flex flex-col gap-10 py-section-sm md:gap-14"
      >
        <Reveal immediate>
          <p className="label text-ink-faint flex items-center gap-3">
            <span aria-hidden className="bg-signal h-1.5 w-1.5 rounded-full" />
            AIOS Labs / Services
          </p>
        </Reveal>

        <TextReveal
          as="h1"
          id="services-heading"
          immediate
          delay={0.15}
          className="text-display max-w-[18ch]"
        >
          Every growth journey needs a <Accent>route</Accent>.
        </TextReveal>

        <div className="grid md:grid-cols-12">
          <Reveal
            immediate
            delay={0.4}
            className="flex flex-col items-start gap-8 md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8"
          >
            <p className="text-lead text-ink-muted max-w-prose">
              AIOS Labs connects strategy, acquisition, conversion and
              technology into one growth system.
            </p>
            <Button href="/contact" size="lg" withArrow>
              Start a Growth Conversation
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
