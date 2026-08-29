"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { growthSteps } from "@/content/home";

/**
 * Section 04 — the growth system.
 *
 * A single rail runs the length of the five steps and fills as the section
 * scrolls, so the stages read as one continuous system rather than five
 * separate stages. The loop back to 01 is stated at the end.
 */
export function GrowthSystem() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const progress = scope.current?.querySelector("[data-rail-progress]");
      const track = scope.current?.querySelector("[data-rail-track]");
      if (!progress || !track) return;

      // Reduced motion still needs the rail to read as complete rather than
      // as an empty line the user cannot fill.
      if (prefersReducedMotion()) {
        gsap.set(progress, { scaleY: 1 });
        return;
      }

      gsap.fromTo(
        progress,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: track,
            start: "top 75%",
            end: "bottom 85%",
            scrub: 0.6,
          },
        },
      );
    },
    { scope },
  );

  return (
    <Section aria-labelledby="system-heading" tone="dark">
      <Container width="page">
        <div ref={scope} className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <Reveal className="mb-6">
              <Eyebrow index="03">The system</Eyebrow>
            </Reveal>
            <TextReveal as="h2" id="system-heading" className="text-h1">
              A loop, not a launch.
            </TextReveal>
            <Reveal>
              <p className="text-lead text-ink-muted mt-6 max-w-prose">
                Every engagement runs the same five stages, and the last one
                feeds the first.
              </p>
            </Reveal>
          </div>

          <div className="relative lg:col-span-7 lg:col-start-6">
            {/* The rail sits behind the numerals and fills with scroll. */}
            <div
              data-rail-track
              aria-hidden
              className="bg-line absolute top-0 bottom-0 left-[0.6875rem] w-px md:left-[0.9375rem]"
            >
              <span
                data-rail-progress
                className="bg-signal absolute inset-x-0 top-0 block h-full origin-top"
              />
            </div>

            <ol className="flex flex-col">
              {growthSteps.map((step) => (
                <li key={step.index}>
                  <Reveal className="flex gap-8 pb-14 md:gap-12">
                    <span className="label text-signal bg-base relative z-10 shrink-0 pt-3 pb-1">
                      {step.index}
                    </span>
                    <span className="flex flex-col gap-3">
                      <span className="text-h2 text-ink block">
                        {step.title}
                      </span>
                      <span className="text-ink-muted block max-w-prose">
                        {step.description}
                      </span>
                    </span>
                  </Reveal>
                </li>
              ))}
            </ol>

            <Reveal className="flex gap-8 md:gap-12">
              <span
                aria-hidden
                className="label text-signal bg-base relative z-10 shrink-0 py-1"
              >
                ↻
              </span>
              <span className="text-small text-ink-faint">
                Scale feeds the next Understand.
              </span>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
