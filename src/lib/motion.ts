/**
 * Motion tokens. These mirror the CSS custom properties in globals.css so a
 * GSAP timeline and a CSS transition describe the same brand movement.
 */

export const EASE = {
  /** Default AIOS easing — confident settle, no bounce. */
  signature: "power3.out",
  /** Long reveals and cinematic moves. */
  expo: "expo.out",
  /** Symmetrical moves (menus, page transitions). */
  inOut: "power4.inOut",
  /** The taxi: weight on entry, glide on exit. */
  vehicle: "power2.inOut",
} as const;

export const DURATION = {
  instant: 0.12,
  quick: 0.24,
  base: 0.42,
  slow: 0.72,
  cinematic: 1.2,
} as const;

/** Stagger presets, in seconds. */
export const STAGGER = {
  tight: 0.04,
  base: 0.07,
  loose: 0.12,
} as const;

/**
 * Reads the user's motion preference at call time.
 * Returns false during SSR so the server never renders a motion-dependent
 * branch it cannot verify.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
