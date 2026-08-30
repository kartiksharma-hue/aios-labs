import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { GrowthJourney } from "@/components/services/growth-journey";
import { ServicesCta } from "@/components/services/services-cta";
import { socialCard } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SEO, performance marketing, Google Ads, Meta Ads, lead generation, social media, conversion optimization and marketing automation — run as one connected growth system by AIOS Labs.",
  alternates: { canonical: "/services" },
  ...socialCard({
    title: `Services — ${site.name}`,
    description:
      "Eight growth disciplines, run as one connected system rather than eight separate channels.",
    url: "/services",
  }),
};

export default function ServicesPage() {
  return (
    <main id="main" className="flex-1">
      <ServicesHero />
      <GrowthJourney />
      <ServicesCta />
    </main>
  );
}
