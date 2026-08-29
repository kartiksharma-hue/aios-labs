import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import type { Service } from "@/content/services";

/** Section 06 — contextual links to the services that pair with this one. */
export function ServiceRelated({ services }: { services: readonly Service[] }) {
  if (services.length === 0) return null;

  return (
    <Section aria-labelledby="related-heading" space="sm">
      <Container width="page" className="flex flex-col gap-10">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow index="05">Related</Eyebrow>
          <h2 id="related-heading" className="text-h2 text-ink">
            Works well alongside
          </h2>
        </Reveal>

        <ul className="grid gap-x-10 md:grid-cols-3">
          {services.map((service) => (
            <li key={service.href}>
              <Reveal>
                <Link
                  href={service.href}
                  className="group border-line hover:border-signal flex h-full flex-col gap-3 border-t py-7 transition-colors duration-base ease-signature"
                >
                  <span className="label text-signal">{service.index}</span>
                  <h3 className="text-h3 text-ink">{service.name}</h3>
                  <p className="text-small text-ink-muted">{service.summary}</p>
                  <span className="text-small text-ink-muted group-hover:text-ink mt-2 inline-flex items-center gap-2 transition-colors duration-base ease-signature">
                    Explore
                    <span
                      aria-hidden
                      className="transition-transform duration-quick ease-signature group-hover:translate-x-1 group-focus-visible:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
