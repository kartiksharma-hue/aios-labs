import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { services } from "@/content/home";

/**
 * Section 03 — capabilities as an editorial list.
 *
 * Rows, not cards: a list reads top to bottom at any width and lets the row
 * itself become the hit target and the hover surface.
 */
export function ServicesIntro() {
  return (
    <Section aria-labelledby="services-heading">
      <Container width="page" className="flex flex-col gap-12 md:gap-16">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-9">
            <Reveal className="mb-6">
              <Eyebrow index="02">Capabilities</Eyebrow>
            </Reveal>
            <TextReveal as="h2" id="services-heading" className="text-display">
              Everything connected to growth.
            </TextReveal>
          </div>
        </div>

        <ul className="flex flex-col">
          {services.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="group border-line hover:bg-surface focus-visible:bg-surface -mx-gutter flex items-start gap-5 border-t px-gutter py-6 transition-colors duration-base ease-signature md:items-center md:gap-8 md:py-8"
              >
                <span className="label text-signal w-6 shrink-0 pt-1.5 md:pt-0">
                  {service.index}
                </span>

                <span className="flex flex-1 flex-col gap-1.5 md:flex-row md:items-center md:gap-8">
                  <span className="text-h3 text-ink transition-transform duration-base ease-signature group-hover:translate-x-2 group-focus-visible:translate-x-2 md:text-h2 md:flex-1">
                    {service.name}
                  </span>
                  <span className="text-small text-ink-muted md:max-w-[30ch] md:flex-1">
                    {service.description}
                  </span>
                </span>

                <span
                  aria-hidden
                  className="text-ink-muted group-hover:text-signal group-focus-visible:text-signal shrink-0 -translate-x-2 pt-1 opacity-0 transition-all duration-base ease-signature group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:pt-0"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Reveal className="border-line border-t pt-10">
          <Button href="/services" variant="secondary" size="lg" withArrow>
            Explore all services
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
