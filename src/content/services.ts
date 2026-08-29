/**
 * The canonical AIOS Labs service list — one source of truth for the home page
 * capability list, the services journey, the footer and the future
 * /services/[slug] routes.
 *
 * Copy describes what each service is. Nothing here claims a result.
 */

export type Service = {
  index: string;
  name: string;
  href: string;
  /** One line for the home page capability list. */
  description: string;
  /** Shorter line for a journey stop, where space is tighter. */
  summary: string;
};

export const services: readonly Service[] = [
  {
    index: "01",
    name: "SEO & Organic Growth",
    href: "/services/seo",
    description: "Visibility that keeps compounding after the spend stops.",
    summary: "Build discoverability that compounds over time.",
  },
  {
    index: "02",
    name: "Performance Marketing",
    href: "/services/performance-marketing",
    description: "Paid media run against contribution margin, not vanity ROAS.",
    summary: "Run paid media against margin, not impressions.",
  },
  {
    index: "03",
    name: "Google Ads",
    href: "/services/google-ads",
    description: "Intent captured at the moment it appears.",
    summary: "Meet demand at the moment it is expressed.",
  },
  {
    index: "04",
    name: "Meta Ads",
    href: "/services/meta-ads",
    description: "Creative and audience testing built as a repeatable system.",
    summary: "Turn creative testing into a repeatable system.",
  },
  {
    index: "05",
    name: "Lead Generation",
    href: "/services/lead-generation",
    description: "Qualified pipeline, not form fills.",
    summary: "Fill the pipeline with people who can actually buy.",
  },
  {
    index: "06",
    name: "Social Media",
    href: "/services/social-media",
    description: "Presence built to turn attention into demand.",
    summary: "Build an audience that turns into demand.",
  },
  {
    index: "07",
    name: "Conversion Optimization",
    href: "/services/conversion-optimization",
    description: "The same traffic, asked to work harder.",
    summary: "Earn more from the traffic you already have.",
  },
  {
    index: "08",
    name: "Marketing Automation",
    href: "/services/marketing-automation",
    description: "The follow-up that runs whether or not anyone remembers.",
    summary: "Let the follow-up run without anyone remembering.",
  },
];
