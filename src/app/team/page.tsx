import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent } from "@/components/ui/accent";
import { Button } from "@/components/ui/button";
import { ClosingCta } from "@/components/ui/closing-cta";
import { MediaFrame } from "@/components/ui/media-frame";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { founder } from "@/content/founder";
import { members, reservedPortrait, reservedSeats } from "@/content/team";
import { site } from "@/lib/site";
import { isTeamIndexable, robotsFor } from "@/lib/indexing";
import { socialCard } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The people behind AIOS Labs. Profiles are published as they are confirmed, in each person's own words.",
  alternates: { canonical: "/team" },
  // Nothing verified to index yet; the directory is empty by design.
  robots: robotsFor(isTeamIndexable),
  ...socialCard({
    title: `Team — ${site.name}`,
    description: "The people behind AIOS Labs.",
    url: "/team",
  }),
};

/**
 * No Organization or Person structured data is emitted: there is no verified
 * person to describe. It goes in with the first published profile.
 */
export default function TeamPage() {
  const seats = Array.from({ length: reservedSeats }, (_, i) =>
    String(i + 1).padStart(2, "0"),
  );

  return (
    <main id="main" className="flex-1">
      {/* Hero */}
      <section aria-labelledby="team-heading" className="pt-header md:pt-header-lg">
        <Container
          width="page"
          className="flex flex-col gap-10 py-section-sm md:gap-14"
        >
          <Reveal immediate>
            <p className="label text-ink-faint flex items-center gap-3">
              <span aria-hidden className="bg-signal h-1.5 w-1.5 rounded-full" />
              AIOS Labs / Team
            </p>
          </Reveal>

          <TextReveal
            as="h1"
            id="team-heading"
            immediate
            delay={0.15}
            className="text-display max-w-[18ch]"
          >
            The people behind the <Accent>system</Accent>.
          </TextReveal>

          <div className="grid md:grid-cols-12">
            <Reveal
              immediate
              delay={0.4}
              className="flex flex-col items-start gap-6 md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8"
            >
              <p className="text-lead text-ink-muted max-w-prose">
                Profiles are published as they are confirmed, in each
                person&rsquo;s own words.
              </p>
              <Button href="/about" variant="secondary" withArrow>
                About AIOS Labs
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Featured: the founder, then the directory */}
      <Section aria-labelledby="directory-heading" space="sm">
        <Container width="page" className="flex flex-col gap-16 md:gap-20">
          <h2 id="directory-heading" className="sr-only">
            Team directory
          </h2>

          <Reveal>
            <Link
              href="/founder"
              className="group border-line grid items-center gap-8 border-t pt-10 md:grid-cols-12 md:gap-12"
            >
              <div className="md:col-span-4 lg:col-span-3">
                <MediaFrame
                  slot={founder.portrait}
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
              <div className="flex flex-col gap-3 md:col-span-7 md:col-start-6">
                <span className="label text-signal">Founder</span>
                <h3 className="text-h1 text-ink transition-transform duration-base ease-signature group-hover:translate-x-1">
                  {founder.name ?? "Profile pending"}
                </h3>
                <p className="text-lead text-ink-muted">{founder.role}</p>
                <span className="text-small text-ink-muted group-hover:text-ink mt-2 inline-flex items-center gap-2 transition-colors duration-base ease-signature">
                  Read the profile
                  <span
                    aria-hidden
                    className="transition-transform duration-quick ease-signature group-hover:translate-x-1 group-focus-visible:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>

          {members.length > 0 ? (
            <ul className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {members.map((member) => (
                <li key={member.slug}>
                  <Reveal className="flex flex-col gap-5">
                    <MediaFrame
                      slot={member.portrait}
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="text-h3 text-ink">{member.name}</h3>
                      <p className="text-small text-ink-muted">{member.role}</p>
                      {member.bio ? (
                        <p className="text-small text-ink-muted max-w-prose">
                          {member.bio}
                        </p>
                      ) : null}
                      {member.social.length > 0 ? (
                        <ul className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                          {member.social.map((link) => (
                            <li key={link.href}>
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="label text-ink-faint hover:text-ink transition-colors duration-quick ease-signature"
                              >
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col gap-10">
              <Reveal className="flex flex-col items-start gap-5">
                <Eyebrow index="01">Directory</Eyebrow>
                <p className="text-ink-muted max-w-prose">
                  No profiles are published yet. The slots below are a layout
                  reservation, not a headcount — we would rather show an empty
                  directory than fill it with people who do not work here.
                </p>
                <PlaceholderNote>Team / profiles pending</PlaceholderNote>
              </Reveal>

              {/* Offset seats, so the reserved directory still reads as a
                  composition rather than a row of empty cards. */}
              <Reveal
                stagger
                className="grid gap-x-10 gap-y-12 md:grid-cols-3"
              >
                {seats.map((seat, index) => (
                  <div
                    key={seat}
                    className={
                      index === 1
                        ? "flex flex-col gap-4 md:mt-14"
                        : index === 2
                          ? "flex flex-col gap-4 md:mt-28"
                          : "flex flex-col gap-4"
                    }
                  >
                    <MediaFrame
                      slot={reservedPortrait}
                      sizes="(min-width: 768px) 30vw, 100vw"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="label text-signal">{seat}</span>
                      <span className="text-small text-ink-faint">
                        Profile reserved
                      </span>
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>
          )}
        </Container>
      </Section>

      <ClosingCta
        headingId="team-cta-heading"
        index="02"
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
