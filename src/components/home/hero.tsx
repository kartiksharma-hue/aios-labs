import { Container } from "@/components/ui/container";
import { Accent } from "@/components/ui/accent";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { ScrollCue } from "@/components/home/scroll-cue";
import { site } from "@/lib/site";

type HeroProps = {
  /**
   * Seconds to hold before the entrance plays. Defaults to 0, which is the
   * standalone behaviour — the hero is complete and correct on its own.
   *
   * Phase 4's TaxiIntro plays before this content and hands over by passing a
   * delay, so the headline lands as the intro clears rather than under it.
   */
  startDelay?: number;
};

/** Section 01 — the page's single <h1>. */
export function Hero({ startDelay = 0 }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-svh flex-col justify-between pt-header md:pt-header-lg"
    >
      <Container
        width="page"
        className="flex flex-1 flex-col justify-center gap-10 py-section-sm md:gap-14"
      >
        <Reveal immediate delay={startDelay}>
          <p className="label text-ink-faint flex items-center gap-3">
            <span aria-hidden className="bg-signal h-1.5 w-1.5 rounded-full" />
            {site.tagline}
          </p>
        </Reveal>

        <TextReveal
          as="h1"
          id="hero-heading"
          immediate
          delay={startDelay + 0.15}
          className="text-display max-w-[16ch]"
        >
          <span className="block">We engineer</span>
          <span className="block">
            <Accent>digital growth</Accent>.
          </span>
        </TextReveal>

        {/*
          Copy and actions sit in a right-hand column under a left-aligned
          headline. The empty quadrant is the composition, not an oversight.
        */}
        <div className="grid md:grid-cols-12">
          <Reveal
            immediate
            delay={startDelay + 0.45}
            className="flex flex-col items-start gap-8 md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8"
          >
            <p className="text-lead text-ink-muted max-w-prose">
              Strategy, performance, technology and creative working together to
              turn digital presence into measurable growth.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact" size="lg" withArrow>
                Start a Growth Conversation
              </Button>
              <Button href="/work" size="lg" variant="secondary">
                Explore Our Work
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>

      <Container width="page">
        <Reveal
          immediate
          delay={startDelay + 0.7}
          className="border-line flex items-center justify-between border-t py-6"
        >
          <ScrollCue />
        </Reveal>
      </Container>
    </section>
  );
}
