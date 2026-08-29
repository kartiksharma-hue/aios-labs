import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import type { ServicePageContent } from "@/content/service-page-types";

/** Section 01 — the page's single <h1>. */
export function ServiceHero({
  service,
  name,
}: {
  service: ServicePageContent;
  name: string;
}) {
  return (
    <section
      aria-labelledby="service-heading"
      className="pt-header md:pt-header-lg"
    >
      <Container
        width="page"
        className="flex flex-col gap-10 py-section-sm md:gap-14"
      >
        <Reveal immediate>
          <p className="label text-ink-faint flex flex-wrap items-center gap-3">
            <span aria-hidden className="bg-signal h-1.5 w-1.5 rounded-full" />
            {name}
            <span aria-hidden className="bg-line-strong h-px w-6" />
            {service.category}
          </p>
        </Reveal>

        <TextReveal
          as="h1"
          id="service-heading"
          immediate
          delay={0.15}
          className="text-display max-w-[20ch]"
        >
          {service.headline}
        </TextReveal>

        <div className="grid md:grid-cols-12">
          <Reveal
            immediate
            delay={0.4}
            className="flex flex-col items-start gap-8 md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8"
          >
            <p className="text-lead text-ink-muted max-w-prose">
              {service.positioning}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact" size="lg" withArrow>
                Start a Growth Conversation
              </Button>
              <Button href="/services" size="lg" variant="secondary">
                Explore Our Services
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
