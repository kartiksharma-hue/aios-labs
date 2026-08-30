import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent } from "@/components/ui/accent";
import { ClosingCta } from "@/components/ui/closing-cta";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { LocationDirectory } from "@/components/locations/location-directory";
import { publishedLocations } from "@/content/locations";
import { site } from "@/lib/site";
import { socialCard } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "AIOS Labs works with businesses across markets, connecting strategy, acquisition, conversion and technology into one growth system.",
  alternates: { canonical: "/locations" },
  ...socialCard({
    title: `Locations — ${site.name}`,
    description:
      "The markets AIOS Labs works across, and why the system adapts to the business rather than the postcode.",
    url: "/locations",
  }),
};

/** The chain a market connects to — geography joined to the growth system. */
const chain = [
  { index: "01", name: "Market", role: "Where the business is trying to sell." },
  { index: "02", name: "Audience", role: "Who inside that market can actually buy." },
  { index: "03", name: "Acquisition", role: "How that audience is reached at a cost the economics support." },
  { index: "04", name: "Conversion", role: "What happens once the attention arrives." },
  { index: "05", name: "Measurement", role: "Whether any of it produced a result worth having." },
  { index: "06", name: "Iteration", role: "What changes next because of what the last step showed." },
] as const;

export default function LocationsPage() {
  return (
    <main id="main" className="flex-1">
      {/* 01 — Hero */}
      <section
        aria-labelledby="locations-heading"
        className="pt-header md:pt-header-lg"
      >
        <Container
          width="page"
          className="flex flex-col gap-10 py-section-sm md:gap-14"
        >
          <Reveal immediate>
            <p className="label text-ink-faint flex items-center gap-3">
              <span aria-hidden className="bg-signal h-1.5 w-1.5 rounded-full" />
              AIOS Labs / Locations
            </p>
          </Reveal>

          <TextReveal
            as="h1"
            id="locations-heading"
            immediate
            delay={0.15}
            className="text-display max-w-[18ch]"
          >
            Growth doesn&rsquo;t happen in <Accent>one market</Accent>.
          </TextReveal>

          <div className="grid md:grid-cols-12">
            <Reveal
              immediate
              delay={0.4}
              className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8"
            >
              <p className="text-lead text-ink-muted max-w-prose">
                AIOS Labs works with businesses across markets, connecting
                strategy, acquisition, conversion and technology into one growth
                system.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 02 — Philosophy */}
      <Section aria-labelledby="market-philosophy-heading">
        <Container width="page">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <Reveal className="mb-6">
                <Eyebrow index="01">Markets</Eyebrow>
              </Reveal>
              <TextReveal
                as="h2"
                id="market-philosophy-heading"
                className="text-h1"
              >
                The system adapts. The tactics are not a template.
              </TextReveal>
            </div>

            <Reveal
              stagger
              className="flex flex-col gap-6 md:col-span-6 md:col-start-7"
            >
              <p className="text-ink-muted">
                Markets differ in ways that matter: who the customer is, how
                they decide, who else is competing for the same attention, which
                channels are worth their price, and what the unit economics
                tolerate. A tactic that works in one can be the wrong call in
                another.
              </p>
              <p className="text-ink-muted">
                What does not change is the method. Understand the business,
                decide what a result is, build the system that produces it, and
                measure honestly enough to know whether it did.
              </p>
              <p className="text-ink-muted">
                That is why these pages describe how we work rather than
                claiming local secrets. An agency that has a ready-made playbook
                for your city has not yet looked at your business.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 03 — Directory */}
      <Section aria-labelledby="directory-heading" space="sm">
        <Container width="page" className="flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col gap-6 md:max-w-[46ch]">
            <Reveal>
              <Eyebrow index="02">Directory</Eyebrow>
            </Reveal>
            <TextReveal as="h2" id="directory-heading" className="text-h1">
              Markets we work across.
            </TextReveal>
          </div>
          <LocationDirectory locations={publishedLocations} />
        </Container>
      </Section>

      {/* 04 — Market connection */}
      <Section aria-labelledby="chain-heading" space="sm">
        <Container width="page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-6 lg:col-span-4">
              <Reveal>
                <Eyebrow index="03">The connection</Eyebrow>
              </Reveal>
              <TextReveal as="h2" id="chain-heading" className="text-h1">
                A market is the first link, not the whole chain.
              </TextReveal>
              <Reveal>
                <p className="text-ink-muted mt-2 max-w-prose">
                  Geography decides who you are selling to. Everything after
                  that is the same system we build for any business.
                </p>
              </Reveal>
            </div>

            <ol className="lg:col-span-7 lg:col-start-6">
              {chain.map((link) => (
                <li key={link.index}>
                  <Reveal className="border-line grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-1 border-t py-6 md:grid-cols-[auto_minmax(0,10rem)_1fr] md:gap-x-10">
                    <span className="label text-signal">{link.index}</span>
                    <h3 className="text-h3 text-ink">{link.name}</h3>
                    <p className="text-ink-muted col-start-2 md:col-start-3">
                      {link.role}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <ClosingCta
        headingId="locations-cta-heading"
        index="04"
        headline={
          <>
            Let&rsquo;s build what comes <Accent>next</Accent>.
          </>
        }
        support="Tell us where growth is stalling. We'll tell you what we would do about it."
      />
    </main>
  );
}
