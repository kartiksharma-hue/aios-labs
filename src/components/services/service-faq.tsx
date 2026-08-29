import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import type { Faq } from "@/content/service-page-types";

/**
 * Section 07 — FAQ.
 *
 * Native <details>/<summary>: the browser supplies open/close, keyboard
 * operation and the expanded/collapsed state announced to screen readers. No
 * client component, and it works before hydration and without JavaScript.
 */
export function ServiceFaq({ faqs }: { faqs: readonly Faq[] }) {
  return (
    <Section aria-labelledby="faq-heading">
      <Container width="page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Reveal>
              <Eyebrow index="06">Questions</Eyebrow>
            </Reveal>
            <TextReveal as="h2" id="faq-heading" className="text-h1">
              Before you ask.
            </TextReveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="border-line group border-t"
              >
                <summary className="faq-summary flex items-start justify-between gap-6 py-6 text-left">
                  <h3 className="text-h3 text-ink-muted group-open:text-ink transition-colors duration-base ease-signature">
                    {faq.question}
                  </h3>
                  <span
                    aria-hidden
                    className="text-signal mt-1 shrink-0 text-lead transition-transform duration-base ease-signature group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="text-ink-muted max-w-prose pb-7">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
