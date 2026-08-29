import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { Positioning } from "@/components/home/positioning";
import { ServicesIntro } from "@/components/home/services-intro";
import { GrowthSystem } from "@/components/home/growth-system";
import { SelectedWork } from "@/components/home/selected-work";
import { FounderPreview } from "@/components/home/founder-preview";
import { TeamPreview } from "@/components/home/team-preview";
import { FinalCta } from "@/components/home/final-cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

/**
 * Phase 4 will mount the TaxiIntro ahead of <Hero /> and hand over by passing
 * `startDelay`. Until then the hero plays its own entrance on mount, which is
 * also the behaviour whenever the intro is skipped.
 */
export default function HomePage() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <Positioning />
      <ServicesIntro />
      <GrowthSystem />
      <SelectedWork />
      <FounderPreview />
      <TeamPreview />
      <FinalCta />
    </main>
  );
}
