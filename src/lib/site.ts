/**
 * Site-wide constants. Anything marked PLACEHOLDER is waiting on real
 * information from AIOS Labs and must not be invented.
 */

export const site = {
  name: "AIOS Labs",
  tagline: "Digital Growth, Engineered.",
  description:
    "AIOS Labs is a digital growth agency combining strategy, performance marketing, SEO, creative, technology and data to build measurable growth systems.",
  /** PLACEHOLDER — replace with the production domain before launch. */
  url: "https://aioslabs.com",
  locale: "en_IN",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: readonly NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta = {
  label: "Let's Talk",
  href: "/contact",
} as const;

/**
 * Contact details are intentionally empty. Do not populate with example
 * values — an unfilled field is better than a wrong one.
 */
export const contact = {
  email: null,
  phone: null,
  addresses: [],
  social: [],
} as const;
