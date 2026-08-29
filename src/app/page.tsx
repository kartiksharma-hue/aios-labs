import type { Metadata } from "next";
import { IntroStage } from "@/components/intro/intro-stage";
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
 * IntroStage renders the taxi intro and the hero together, because the intro
 * hands the screen over to the hero's entrance. Everything below the fold is
 * unaffected and stays here.
 */
export default function HomePage() {
  return (
    <main id="main" className="flex-1">
      <IntroStage>
        <Positioning />
        <ServicesIntro />
        <GrowthSystem />
        <SelectedWork />
        <FounderPreview />
        <TeamPreview />
        <FinalCta />
      </IntroStage>
    </main>
  );
}
