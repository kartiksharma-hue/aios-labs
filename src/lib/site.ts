/**
 * Site-wide constants. Anything marked PLACEHOLDER is waiting on real
 * information from AIOS Labs and must not be invented.
 */

export const site = {
  name: "AIOS Labs",
  tagline: "Digital Growth, Engineered.",
  description:
    "AIOS Labs is a digital growth agency combining strategy, performance marketing, SEO, creative, technology and data to build measurable growth systems.",
  url: "https://aioslabs.in",
  locale: "en_IN",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/** Header navigation. Contact lives in the CTA, not in this list. */
export const primaryNav: readonly NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const primaryCta = {
  label: "Let's Talk",
  href: "/contact",
} as const;

/** Footer column: the full navigation, Contact included. */
export const footerNav: readonly NavItem[] = [
  ...primaryNav,
  { label: "Contact", href: "/contact" },
];

/**
 * Footer service links. Routes land in Phase 6; the slugs are fixed now so
 * internal linking and the sitemap stay consistent.
 */
export const serviceNav: readonly NavItem[] = [
  { label: "SEO & Organic Growth", href: "/services/seo" },
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Meta Ads", href: "/services/meta-ads" },
  { label: "Lead Generation", href: "/services/lead-generation" },
  { label: "Social Media", href: "/services/social-media" },
  {
    label: "Conversion Optimization",
    href: "/services/conversion-optimization",
  },
  { label: "Marketing Automation", href: "/services/marketing-automation" },
];

/** Footer location links. Routes land in Phase 9. */
export const locationNav: readonly NavItem[] = [
  { label: "Delhi", href: "/locations/delhi" },
  { label: "Gurgaon", href: "/locations/gurgaon" },
  { label: "Noida", href: "/locations/noida" },
  { label: "Mumbai", href: "/locations/mumbai" },
];

export const legalNav: readonly NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

/**
 * Contact details and social profiles are intentionally empty — none have been
 * provided. Do not populate with example values; an unfilled field is better
 * than a wrong one. The footer renders nothing for empty entries.
 */
export const contact = {
  email: null,
  phone: null,
  addresses: [],
  social: [] as readonly { label: string; href: string }[],
} as const;
