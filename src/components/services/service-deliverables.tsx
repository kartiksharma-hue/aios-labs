import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import type { Deliverable } from "@/content/service-page-types";

/** Section 04 — capabilities as an editorial list, not a card grid. */
export function ServiceDeliverables({
  heading,
  items,
}: {
  heading: string;
  items: readonly Deliverable[];
}) {
  return (
    <Section aria-labelledby="deliverables-heading">
      <Container width="page" className="flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-6 md:max-w-[46ch]">
          <Reveal>
            <Eyebrow index="03">What we do</Eyebrow>
          </Reveal>
          <TextReveal as="h2" id="deliverables-heading" className="text-h1">
            {heading}
          </TextReveal>
        </div>

        <ul className="flex flex-col">
          {items.map((item) => (
            <li key={item.index}>
              <Reveal className="border-line grid gap-x-8 gap-y-2 border-t py-7 md:grid-cols-12 md:py-9">
                <span className="label text-signal md:col-span-1">
                  {item.index}
                </span>
                <h3 className="text-h3 text-ink md:col-span-5">{item.title}</h3>
                <p className="text-ink-muted md:col-span-6">
                  {item.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
