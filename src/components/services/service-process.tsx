import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import type { ProcessStep } from "@/content/service-page-types";

/** Section 05 — how an engagement runs. */
export function ServiceProcess({
  heading,
  steps,
}: {
  heading: string;
  steps: readonly ProcessStep[];
}) {
  return (
    <Section aria-labelledby="process-heading" space="sm">
      <Container width="page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Reveal>
              <Eyebrow index="04">Process</Eyebrow>
            </Reveal>
            <TextReveal as="h2" id="process-heading" className="text-h1">
              {heading}
            </TextReveal>
          </div>

          <ol className="lg:col-span-7 lg:col-start-6">
            {steps.map((step) => (
              <li key={step.index}>
                <Reveal className="border-line flex gap-6 border-t py-6 md:gap-10 md:py-8">
                  <span className="label text-signal shrink-0 pt-2">
                    {step.index}
                  </span>
                  <span className="flex flex-col gap-2">
                    <h3 className="text-h3 text-ink">{step.title}</h3>
                    <span className="text-ink-muted block max-w-prose">
                      {step.description}
                    </span>
                  </span>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
