"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { gsap, useGSAP } from "@/lib/gsap";
import { DURATION, EASE, STAGGER, prefersReducedMotion } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  /** Reveals direct children one after another instead of the block as a whole. */
  stagger?: boolean;
  /** Seconds to hold before the reveal starts. */
  delay?: number;
  /** Vertical travel in pixels. Keep small — this is a settle, not a slide. */
  distance?: number;
  /** Play on mount rather than on scroll. For above-the-fold entrances. */
  immediate?: boolean;
  as?: ElementType;
  className?: string;
};

/**
 * Scroll-triggered fade + rise. The default entrance for any block of content.
 *
 * The hidden starting state is applied by CSS (`.js [data-reveal]`), so content
 * can never be trapped invisible when JavaScript fails or motion is reduced.
 */
export function Reveal({
  children,
  stagger = false,
  delay = 0,
  distance = 24,
  immediate = false,
  as: Tag = "div",
  className,
}: RevealProps) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const targets: Element[] = stagger ? Array.from(root.children) : [root];
      if (targets.length === 0) return;

      if (prefersReducedMotion()) {
        gsap.set(targets, { opacity: 1, y: 0, clearProps: "willChange" });
        return;
      }

      gsap.fromTo(
        targets,
        { opacity: 0, y: distance },
        {
          opacity: 1,
          y: 0,
          duration: DURATION.slow,
          ease: EASE.signature,
          delay,
          stagger: stagger ? STAGGER.base : 0,
          clearProps: "willChange",
          ...(immediate
            ? {}
            : {
                scrollTrigger: { trigger: root, start: "top 85%", once: true },
              }),
        },
      );
    },
    { scope, dependencies: [stagger, delay, distance, immediate] },
  );

  const primingAttribute = stagger
    ? { "data-reveal-children": "" }
    : { "data-reveal": "" };

  return (
    <Tag ref={scope} className={cn(className)} {...primingAttribute}>
      {children}
    </Tag>
  );
}
