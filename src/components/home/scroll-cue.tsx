"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { EASE, prefersReducedMotion } from "@/lib/motion";

/**
 * Hairline scroll indicator. A dot travels the rail on a loop — the only
 * looping animation on the page, and it stops entirely under reduced motion.
 */
export function ScrollCue() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        "[data-cue-dot]",
        { yPercent: -100 },
        {
          yPercent: 340,
          duration: 2.2,
          ease: EASE.inOut,
          repeat: -1,
          repeatDelay: 0.4,
        },
      );
    },
    { scope },
  );

  return (
    <div ref={scope} className="flex items-center gap-4">
      <span className="label text-ink-faint">Scroll</span>
      <span
        aria-hidden
        className="bg-line-strong relative block h-8 w-px overflow-hidden"
      >
        <span data-cue-dot className="bg-signal absolute inset-x-0 block h-2" />
      </span>
    </div>
  );
}
