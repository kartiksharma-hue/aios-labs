import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent } from "@/components/ui/accent";
import { ClosingCta } from "@/components/ui/closing-cta";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { PeoplePreview } from "@/components/about/people-preview";
import {
  aboutHero,
  connectedDisciplines,
  principles,
  whyWeExist,
} from "@/content/about";
import { founder } from "@/content/founder";
import { reservedPortrait } from "@/content/team";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "AIOS Labs runs strategy, acquisition, conversion and technology as one connected growth system rather than as separate channels. How we think, and why the company exists.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    title: `About — ${site.name}`,
    description:
      "Why AIOS Labs exists, how we think, and what we connect into one growth system.",
    url: "/about",
    siteName: site.name,
  },
};

export default function AboutPage() {
  return (
    <main id="main" className="flex-1">
      {/* 01 — Hero */}
      <section
        aria-labelledby="about-heading"
        className="pt-header md:pt-header-lg"
      >
        <Container
          width="page"
          className="flex flex-col gap-10 py-section-sm md:gap-14"
        >
          <Reveal immediate>
            <p className="label text-ink-faint flex items-center gap-3">
              <span aria-hidden className="bg-signal h-1.5 w-1.5 rounded-full" />
              {aboutHero.eyebrow}
            </p>
          </Reveal>

          <TextReveal
            as="h1"
            id="about-heading"
            immediate
            delay={0.15}
            className="text-display max-w-[20ch]"
          >
            Built for businesses that want growth to <Accent>make sense</Accent>.
          </TextReveal>

          <div className="grid md:grid-cols-12">
            <Reveal
              immediate
              delay={0.4}
              className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8"
            >
              <p className="text-lead text-ink-muted max-w-prose">
                {aboutHero.positioning}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 02 — Why we exist */}
      <Section aria-labelledby="why-heading">
        <Container width="page">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <Reveal className="mb-6">
                <Eyebrow index="01">{whyWeExist.eyebrow}</Eyebrow>
              </Reveal>
              <TextReveal as="h2" id="why-heading" className="text-h1">
                {whyWeExist.heading}
              </TextReveal>
            </div>
            <Reveal
              stagger
              className="flex flex-col gap-6 md:col-span-6 md:col-start-7"
            >
              {whyWeExist.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 03 — How we think */}
      <Section aria-labelledby="principles-heading">
        <Container width="page" className="flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col gap-6 md:max-w-[46ch]">
            <Reveal>
              <Eyebrow index="02">How we think</Eyebrow>
            </Reveal>
            <TextReveal as="h2" id="principles-heading" className="text-h1">
              Five things we hold to.
            </TextReveal>
          </div>

          <ol className="flex flex-col">
            {principles.map((principle) => (
              <li key={principle.index}>
                <Reveal className="border-line grid gap-x-8 gap-y-2 border-t py-7 md:grid-cols-12 md:py-9">
                  <span className="label text-signal md:col-span-1">
                    {principle.index}
                  </span>
                  <h3 className="text-h3 text-ink md:col-span-5">
                    {principle.title}
                  </h3>
                  <p className="text-ink-muted md:col-span-6">
                    {principle.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* 04 — What we connect */}
      <Section aria-labelledby="connect-heading" space="sm">
        <Container width="page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-6 lg:col-span-4">
              <Reveal>
                <Eyebrow index="03">What we connect</Eyebrow>
              </Reveal>
              <TextReveal as="h2" id="connect-heading" className="text-h1">
                Six parts, one system.
              </TextReveal>
              <Reveal>
                <p className="text-ink-muted mt-2 max-w-prose">
                  Each one exists for the others. Read down the list — every
                  line describes a job done on behalf of the rest.
                </p>
              </Reveal>
            </div>

            {/* Each discipline states what it does for the others, so the
                relationship is the content rather than an icon beside it. */}
            <ul className="lg:col-span-7 lg:col-start-6">
              {connectedDisciplines.map((discipline) => (
                <li key={discipline.index}>
                  <Reveal className="border-line grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-1 border-t py-6 md:grid-cols-[auto_minmax(0,10rem)_1fr] md:gap-x-10">
                    <span className="label text-signal">
                      {discipline.index}
                    </span>
                    <h3 className="text-h3 text-ink">{discipline.name}</h3>
                    <p className="text-ink-muted col-start-2 md:col-start-3">
                      {discipline.role}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* 05 — Founder preview */}
      <PeoplePreview
        index="04"
        eyebrow="Founder"
        heading="Built with intention."
        headingId="founder-preview-heading"
        body="AIOS Labs was built on one conviction: growth is engineered, not guessed. This space is reserved for the founder's own account of why."
        pendingNote="Founder / profile pending"
        portrait={founder.portrait}
        ctaLabel="Meet the Founder"
        ctaHref="/founder"
      />

      {/* 06 — Team preview */}
      <PeoplePreview
        index="05"
        eyebrow="Team"
        heading="The people behind the system."
        headingId="team-preview-heading"
        body="Profiles are published as they are confirmed, with each person's own words. We would rather show an empty page than invent one."
        pendingNote="Team / profiles pending"
        portrait={reservedPortrait}
        ctaLabel="Meet the Team"
        ctaHref="/team"
        reverse
      />

      {/* 07 — Closing CTA */}
      <ClosingCta
        headingId="about-cta-heading"
        index="06"
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
