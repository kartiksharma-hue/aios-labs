"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Taxi } from "@/components/taxi/taxi";
import { ServiceStop } from "@/components/services/service-stop";
import { TextReveal } from "@/components/motion/text-reveal";
import { Reveal } from "@/components/motion/reveal";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { services } from "@/content/services";

/**
 * The AIOS growth journey.
 *
 * One ScrollTrigger drives the whole section. It scrubs the taxi down the
 * road, turns the wheels, fills the road behind it, and reports which stop it
 * has reached. Eight independent triggers would do the same job with eight
 * times the bookkeeping and no shared notion of progress.
 *
 * Stop positions are measured from the DOM on every refresh, so uneven text
 * wrapping and viewport changes stay correct without hard-coded spacing.
 *
 * The page is never pinned and never snapped: scrolling behaves normally and
 * the journey simply reads the position.
 */
export function GrowthJourney() {
  const scope = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  /**
   * `null` until the journey is actually driving — which is also the state for
   * reduced motion and for no JavaScript at all. Every stop renders prominent
   * in that case, so nothing depends on an animation having run.
   */
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track || prefersReducedMotion()) return;

      const select = gsap.utils.selector(scope);
      const taxi = select("[data-journey-taxi]")[0] as HTMLElement | undefined;
      const wheels = select("#taxi-wheel-front, #taxi-wheel-back");
      const chassis = select("#taxi-chassis");
      const progress = select("[data-road-progress]")[0] as
        | HTMLElement
        | undefined;
      if (!taxi || !progress) return;

      gsap.set(wheels, { transformOrigin: "50% 50%" });
      gsap.set(chassis, { svgOrigin: "212 130" });
      gsap.set(progress, { transformOrigin: "50% 0%", scaleY: 0 });

      const setTaxiY = gsap.quickSetter(taxi, "y", "px");
      const setWheelSpin = gsap.quickSetter(wheels, "rotation", "deg");
      const setProgress = gsap.quickSetter(progress, "scaleY");
      // Velocity-driven body lean, eased back to level — the suspension cue.
      const leanTo = gsap.quickTo(chassis, "rotation", {
        duration: 0.5,
        ease: "power3.out",
      });

      /** Stop centres relative to the track, remeasured on every refresh. */
      let centres: number[] = [];
      let trackHeight = 0;
      let taxiHalf = 0;

      const measure = () => {
        const stops = Array.from(
          track.querySelectorAll<HTMLElement>("[data-stop]"),
        );
        centres = stops.map((el) => el.offsetTop + el.offsetHeight / 2);
        trackHeight = track.offsetHeight;
        taxiHalf = taxi.offsetHeight / 2;
      };

      let current = -1;

      const trigger = ScrollTrigger.create({
        trigger: track,
        start: "top center",
        end: "bottom center",
        scrub: 0.6,
        onRefresh: measure,
        onUpdate: (self) => {
          // Progress 0 is the track's top crossing the viewport centre and 1
          // is its bottom, so mapping progress across the full track height
          // parks the taxi exactly on that centre line — and a stop's centre
          // meets the taxi precisely when that stop is centred. Interpolating
          // between the first and last stop instead leaves the taxi drifting
          // up to half a stop away from the one it is marking.
          const y = self.progress * trackHeight;

          setTaxiY(y - taxiHalf);
          setWheelSpin(self.progress * 1440);
          setProgress(self.progress);
          leanTo(gsap.utils.clamp(-2.5, 2.5, self.getVelocity() / -600));

          // Nearest stop wins, so activation follows the real layout rather
          // than an assumption that every stop is the same height.
          let nearest = 0;
          let best = Infinity;
          for (let i = 0; i < centres.length; i += 1) {
            const distance = Math.abs(centres[i] - y);
            if (distance < best) {
              best = distance;
              nearest = i;
            }
          }

          // React only when the answer changes — onUpdate runs every frame.
          if (nearest !== current) {
            current = nearest;
            setActiveIndex(nearest);
          }
        },
      });

      measure();

      return () => {
        trigger.kill();
      };
    },
    { scope },
  );

  return (
    <Section aria-labelledby="journey-heading" space="sm">
      <Container width="page" className="flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-6 md:max-w-[46ch]">
          <Reveal>
            <Eyebrow index="01">The journey</Eyebrow>
          </Reveal>
          <TextReveal as="h2" id="journey-heading" className="text-h1">
            Eight disciplines, one route.
          </TextReveal>
        </div>

        <div ref={scope}>
          <div ref={trackRef} className="relative">
            {/* Road: dashed hairline, with the travelled length filled amber. */}
            <div
              aria-hidden
              className="absolute inset-y-0 left-6 w-px -translate-x-1/2 md:left-1/2"
            >
              <div className="journey-road absolute inset-0" />
              <div
                data-road-progress
                className="bg-signal absolute inset-0 origin-top"
              />
            </div>

            {/* Taxi. The wrapper holds the centring so GSAP owns only `y`. */}
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 left-6 -translate-x-1/2 md:left-1/2"
            >
              <div data-journey-taxi className="w-18 md:w-36">
                <Taxi className="h-auto w-full" />
              </div>
            </div>

            <ol className="relative">
              {services.map((service, index) => (
                <ServiceStop
                  key={service.href}
                  service={service}
                  side={index % 2 === 0 ? "left" : "right"}
                  isActive={activeIndex === null ? null : activeIndex === index}
                />
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
