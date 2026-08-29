"use client";

import { useCallback, useEffect, useRef } from "react";
import { Taxi } from "@/components/intro/taxi";
import { Wordmark } from "@/components/layout/wordmark";
import { Button } from "@/components/ui/button";
import { gsap, useGSAP } from "@/lib/gsap";
import { shouldPlayIntro } from "@/lib/intro";
import { prefersReducedMotion } from "@/lib/motion";
import { site } from "@/lib/site";

/**
 * The cinematic opening. A stylized taxi drives in, the driver asks where the
 * visitor is headed, answers his own question, and drives off — handing the
 * screen to the AIOS Labs wordmark.
 *
 * Beat sheet (seconds), matching the storyboard:
 *   0.15  taxi enters from the left, wheels turning
 *   1.70  eases to a stop, chassis dips and settles on its springs
 *   2.00  driver turns to camera
 *   2.45  "BEST MARKETING AGENCY JANA HAI?"
 *   3.35  "BAITHO. AIOS LABS CHALTE HAIN."
 *   3.55  driver faces forward again
 *   3.95  taxi accelerates right, fully clear by 5.20
 *   4.90  wordmark and tagline reveal
 *   5.90  hand off to the hero
 */

/** Seconds the overlay takes to clear. */
const FADE_AFTER_SEQUENCE = 0.45;
const FADE_AFTER_SKIP = 0.25;

type TaxiIntroProps = {
  /** The sequence is over and the overlay is starting to clear — the moment
   *  the hero should begin its entrance, so the two cross-fade. */
  onHandoff: () => void;
  /** The overlay has finished clearing and can leave the DOM. */
  onFinish: () => void;
};

export function TaxiIntro({ onHandoff, onFinish }: TaxiIntroProps) {
  const scope = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  // Latest-ref: the timeline is built once on mount, but the callbacks may be
  // re-created between renders.
  const callbacks = useRef({ onHandoff, onFinish });
  useEffect(() => {
    callbacks.current = { onHandoff, onFinish };
  }, [onHandoff, onFinish]);

  const handedOff = useRef(false);

  /** Clears the overlay and reports both moments exactly once. */
  const handOff = useCallback((fade: number) => {
    if (handedOff.current) return;
    handedOff.current = true;

    callbacks.current.onHandoff();

    const overlay = scope.current;
    if (!overlay) {
      callbacks.current.onFinish();
      return;
    }

    gsap.to(overlay, {
      autoAlpha: 0,
      duration: fade,
      ease: "power2.out",
      onComplete: () => callbacks.current.onFinish(),
    });
  }, []);

  const skip = useCallback(() => {
    timeline.current?.kill();
    timeline.current = null;
    handOff(FADE_AFTER_SKIP);
  }, [handOff]);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      // The overlay is server-rendered for every visit so the first paint is
      // the dark screen. On a session that has already seen it, this component
      // exists only until the client re-render drops it — build nothing.
      if (!shouldPlayIntro()) return;

      const select = gsap.utils.selector(root);
      const taxi = select("[data-taxi]")[0] as HTMLElement | undefined;
      const wheels = select("#taxi-wheel-front, #taxi-wheel-back");
      const chassis = select("#taxi-chassis");
      const head = select("#taxi-driver-head");
      const face = select("#taxi-driver-face");
      const arm = select("#taxi-driver-arm");
      const lines = select("[data-line]");
      const reveal = select("[data-reveal-item]");
      if (!taxi) return;

      gsap.set(reveal, { opacity: 0, y: 18 });

      // Reduced motion: no journey, no movement. The destination, immediately.
      if (prefersReducedMotion()) {
        gsap.set(select("[data-scene]"), { opacity: 0 });
        gsap.set(reveal, { opacity: 1, y: 0 });
        timeline.current = gsap
          .timeline({ onComplete: () => handOff(FADE_AFTER_SEQUENCE) })
          .to({}, { duration: 1.1 });
        return;
      }

      // Measured off the real element, so the taxi clears the edge at every
      // viewport width.
      const travel = () => window.innerWidth / 2 + taxi.offsetWidth / 2 + 60;

      gsap.set(taxi, { x: -travel() });
      gsap.set(wheels, { transformOrigin: "50% 50%" });
      gsap.set(chassis, { svgOrigin: "212 130" });
      gsap.set(head, { svgOrigin: "244 87" });
      gsap.set(arm, { svgOrigin: "250 85" });
      gsap.set(face, { opacity: 0 });
      gsap.set(lines, { yPercent: 110, opacity: 0 });

      const tl = gsap.timeline({
        onComplete: () => handOff(FADE_AFTER_SEQUENCE),
      });
      timeline.current = tl;

      // --- Drive in -------------------------------------------------------
      tl.to(taxi, { x: 0, duration: 1.55, ease: "power2.out" }, 0.15)
        .to(wheels, { rotation: 860, duration: 1.55, ease: "power2.out" }, 0.15)

        // Weight transfer as it stops: the nose dips, then the springs settle.
        .to(
          chassis,
          { rotation: 1.1, y: 2, duration: 0.16, ease: "power2.out" },
          1.62,
        )
        .to(
          chassis,
          { rotation: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.45)" },
          1.78,
        )
        // --- The look -----------------------------------------------------
        .to(
          head,
          { rotation: -15, scaleX: 1.07, duration: 0.42, ease: "back.out(2.2)" },
          2.0,
        )
        .to(arm, { rotation: -14, duration: 0.38, ease: "power2.out" }, 2.06)
        .to(face, { opacity: 1, duration: 0.22 }, 2.18)

        // --- Dialogue -----------------------------------------------------
        .to(
          lines[0],
          { yPercent: 0, opacity: 1, duration: 0.55, ease: "expo.out" },
          2.45,
        )
        .to(
          lines[0],
          { yPercent: -110, opacity: 0, duration: 0.38, ease: "power2.in" },
          3.15,
        )
        .to(
          lines[1],
          { yPercent: 0, opacity: 1, duration: 0.55, ease: "expo.out" },
          3.35,
        )

        // Driver faces forward, then pulls away.
        .to(
          head,
          { rotation: 0, scaleX: 1, duration: 0.4, ease: "power2.inOut" },
          3.55,
        )
        .to(face, { opacity: 0, duration: 0.2 }, 3.55)
        .to(arm, { rotation: 0, duration: 0.4, ease: "power2.inOut" }, 3.55)

        // --- Drive out ----------------------------------------------------
        .to(chassis, { rotation: -1, duration: 0.2, ease: "power2.out" }, 3.95)
        .to(chassis, { rotation: 0, duration: 0.5, ease: "power2.out" }, 4.15)
        .to(taxi, { x: () => travel(), duration: 1.25, ease: "power2.in" }, 3.95)
        .to(
          wheels,
          { rotation: "+=1000", duration: 1.25, ease: "power2.in" },
          3.95,
        )
        .to(
          lines[1],
          { yPercent: -110, opacity: 0, duration: 0.38, ease: "power2.in" },
          4.3,
        )

        // --- Wordmark -----------------------------------------------------
        .to(
          select("[data-road]"),
          { opacity: 0, duration: 0.5, ease: "power2.out" },
          4.75,
        )
        .to(
          reveal,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.14,
            ease: "expo.out",
          },
          4.9,
        )
        .to({}, { duration: 0.3 });
    },
    { scope },
  );

  return (
    <div
      ref={scope}
      className="intro-overlay bg-void fixed inset-0 z-100 overflow-hidden"
      role="region"
      aria-label="AIOS Labs intro"
    >
      <div className="absolute top-5 right-gutter z-10 md:top-7">
        <Button variant="secondary" size="sm" onClick={skip}>
          Skip Intro
        </Button>
      </div>

      {/* The scene: dialogue sits above the taxi as editorial type, not a bubble. */}
      <div
        data-scene
        className="absolute inset-0 flex flex-col items-center justify-center gap-10 md:gap-16"
      >
        <div className="max-w-narrow relative flex h-24 w-full items-end md:h-28">
          <p
            data-line
            className="text-h3 md:text-h2 text-ink-muted absolute inset-x-gutter bottom-0 text-center uppercase"
          >
            Best marketing agency jana hai?
          </p>
          <p
            data-line
            className="text-h3 md:text-h2 text-ink absolute inset-x-gutter bottom-0 text-center uppercase"
          >
            Baitho. <span className="text-signal">AIOS Labs</span> chalte hain.
          </p>
        </div>

        <div className="relative w-full">
          {/* The road: one hairline, the same structural device the rest of
              the site uses. It stays put while the taxi travels along it. */}
          <span
            data-road
            aria-hidden
            className="bg-line absolute inset-x-0 top-[89%] block h-px"
          />
          <div data-taxi className="mx-auto w-[min(80vw,660px)]">
            <Taxi className="h-auto w-full" />
          </div>
        </div>
      </div>

      {/* The handover: wordmark, then tagline. */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-5 px-gutter">
        <div data-reveal-item>
          <Wordmark size="xl" asLink={false} />
        </div>
        <p data-reveal-item className="label text-ink-faint">
          {site.tagline}
        </p>
      </div>
    </div>
  );
}
