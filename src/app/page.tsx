import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent } from "@/components/ui/accent";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
};

/**
 * PLACEHOLDER — holding page only.
 * The real homepage (hero, growth system, case studies, process, founder,
 * team, testimonials, FAQ) is Phase 3; the cinematic taxi intro is Phase 4.
 */
export default function HomePage() {
  return (
    <main id="main" className="flex flex-1 flex-col justify-center">
      <Section>
        <Container width="narrow" className="flex flex-col gap-8">
          <Eyebrow index="00">Foundation</Eyebrow>
          <h1 className="text-display">
            We engineer <Accent>digital growth</Accent>.
          </h1>
          <p className="text-lead text-ink-muted max-w-prose">
            Design system established. Navigation, homepage and the growth
            journey are queued behind it.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/style-guide" withArrow>
              View the design system
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
