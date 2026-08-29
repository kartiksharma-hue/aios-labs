"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/cn";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { DURATION, EASE, prefersReducedMotion } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

type TextRevealProps = {
  children: ReactNode;
  /** Seconds to hold before the first line moves. */
  delay?: number;
  /** Play immediately (hero) instead of waiting for scroll. */
  immediate?: boolean;
  as?: ElementType;
  /** Needed when a section labels itself by its heading. */
  id?: string;
  className?: string;
};

/**
 * Line-by-line masked reveal for headlines. Lines rise out of an overflow mask,
 * which reads as typesetting rather than as a generic fade.
 *
 * Reserved for headings — running it on body copy is slow and hurts reading.
 */
export function TextReveal({
  children,
  delay = 0,
  immediate = false,
  as: Tag = "h2",
  id,
  className,
}: TextRevealProps) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      if (prefersReducedMotion()) {
        gsap.set(root, { opacity: 1 });
        return;
      }

      // Split after fonts settle, otherwise line breaks are measured against
      // the fallback face and the mask lands in the wrong place.
      const run = () => {
        const split = new SplitText(root, {
          type: "lines",
          mask: "lines",
          linesClass: "overflow-hidden",
        });

        gsap.set(root, { opacity: 1 });
        gsap.from(split.lines, {
          yPercent: 110,
          duration: DURATION.cinematic,
          ease: EASE.expo,
          stagger: 0.08,
          delay,
          ...(immediate
            ? {}
            : {
                scrollTrigger: { trigger: root, start: "top 88%", once: true },
              }),
        });

        // Splitting into lines changes this element's height, which moves every
        // trigger below it.
        ScrollTrigger.refresh();
      };

      if (document.fonts?.status === "loaded") {
        run();
      } else {
        void document.fonts?.ready.then(run);
      }
    },
    { scope, dependencies: [delay, immediate] },
  );

  return (
    <Tag ref={scope} id={id} data-reveal className={cn(className)}>
      {children}
    </Tag>
  );
}
