import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent } from "@/components/ui/accent";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { primaryNav, primaryCta } from "@/lib/site";

/**
 * Without this boundary Next serves its own unstyled error screen — a
 * system-font "404" on a forced white background — inside the AIOS Labs
 * header and footer. This is the branded replacement.
 *
 * Nothing here is indexable, and nothing invents a destination: every link
 * points at a route that already exists.
 */
export const metadata: Metadata = {
  title: { absolute: "Page not found — AIOS Labs" },
  description:
    "The page you requested does not exist. Find services, work, locations and contact from here.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main" className="flex flex-1 items-center">
      <Container
        width="page"
        className="flex flex-col gap-10 py-section md:gap-14"
      >
        <Reveal immediate>
          <Eyebrow index="404">Page not found</Eyebrow>
        </Reveal>

        <TextReveal
          as="h1"
          immediate
          className="text-display max-w-[16ch]"
        >
          This road doesn&rsquo;t lead <Accent>anywhere</Accent>.
        </TextReveal>

        {/* The road hairline — the same device the intro and the services
            journey use, so a dead end still reads as the same brand. */}
        <Reveal immediate>
          <span aria-hidden className="bg-line block h-px w-full" />
        </Reveal>

        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <Reveal immediate className="md:col-span-5">
            <p className="text-lead text-ink-muted max-w-prose">
              The address you asked for has either moved or never existed.
              Nothing is broken — you have just taken a turn we did not build.
            </p>
          </Reveal>

          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-8">
            <Reveal immediate>
              <p className="label text-ink-faint">Try one of these</p>
            </Reveal>
            <Reveal immediate>
              <ul className="flex flex-col">
                {primaryNav.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group border-line hover:border-line-strong flex items-baseline gap-5 border-t py-4 transition-colors duration-quick ease-signature"
                    >
                      <span className="label text-signal w-6 shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-h3 text-ink-muted group-hover:text-ink transition-colors duration-quick ease-signature">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal immediate className="flex flex-wrap gap-4">
              <Button href="/" variant="secondary">
                Back to home
              </Button>
              <Button href={primaryCta.href} withArrow>
                {primaryCta.label}
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </main>
  );
}
