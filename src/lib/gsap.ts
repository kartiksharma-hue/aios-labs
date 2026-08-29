"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * Single registration point for GSAP plugins. Import `gsap` from here — never
 * from the package directly — so plugins are guaranteed to be registered and
 * there is one place to add ScrollSmoother later.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  ScrollTrigger.config({ ignoreMobileResize: true });

  // Trigger positions are measured against the fallback font; the real faces
  // then swap in and reflow the page. Re-measuring keeps start/end offsets
  // honest, and the drift grows the further down the page a trigger sits.
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

export { gsap, ScrollTrigger, useGSAP };
