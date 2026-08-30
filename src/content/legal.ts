import { contact, site } from "@/lib/site";

/**
 * Privacy Policy and Terms & Conditions.
 *
 * Every clause here is written to be true of this project as it actually
 * stands. Nothing asserts a registered entity, office, jurisdiction, tax
 * registration, vendor, analytics tool, cookie technology or data-sharing
 * relationship, because none of those has been verified. Where a fact is
 * genuinely unknown the clause is written neutrally rather than filled in.
 *
 * To publish: set `lastUpdated` on each document. Add a verified address to
 * `contact.email` in src/lib/site.ts and both contact clauses resolve on their
 * own — see `contactBody` below.
 */

export type LegalClause = {
  index: string;
  title: string;
  /** Paragraphs, in order. */
  body: readonly string[];
  /** Optional bullet list rendered after the paragraphs. */
  list?: readonly string[];
};

export type LegalDocument = {
  slug: string;
  eyebrow: string;
  /** The page's H1. */
  title: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  /** PLACEHOLDER — `null` until the documents are formally published.
   *  No date is invented; the page renders a marked pending state instead. */
  lastUpdated: string | null;
  sections: readonly LegalClause[];
};

/** Shown once per document, quietly. */
export const legalDisclaimer =
  "This page provides general website terms and privacy information and is not legal advice.";

/** What to render when the document has no publication date yet. */
export const pendingDateLabel = "Pending publication date";

/**
 * The closing contact clause. Derived from `contact` so that adding a verified
 * address publishes it in both documents at once — and so that neither document
 * can ever name an address that does not exist.
 */
function contactBody(subject: string): readonly string[] {
  if (contact.email) {
    return [
      `Questions about ${subject} can be sent to ${contact.email}.`,
    ];
  }
  return [
    `Direct ${subject === "this policy" ? "privacy" : "legal"} contact details pending verification.`,
    "Verified contact channels are published on the contact page as they are confirmed. Until then, the contact form is the route for enquiries.",
  ];
}

export const privacyPolicy: LegalDocument = {
  slug: "privacy",
  eyebrow: "Legal",
  title: "Privacy Policy",
  lead: `How ${site.name} collects, uses, stores and protects information submitted through this website.`,
  metaTitle: `Privacy Policy — ${site.name}`,
  metaDescription:
    "How AIOS Labs collects, uses, stores and protects information submitted through its website.",
  lastUpdated: null,
  sections: [
    {
      index: "01",
      title: "Overview",
      body: [
        `This policy explains how ${site.name} handles information submitted through this website: what is collected, why it is collected, how long it is kept, and what choices you have.`,
        "It applies to this website. It does not cover any separate agreement you may enter into with us, which would set out its own terms.",
      ],
    },
    {
      index: "02",
      title: "Information we collect",
      body: [
        "We collect the information you choose to give us. Nothing on this website asks for more than is needed to answer an enquiry properly.",
        "Where you use the contact form, that may include:",
      ],
      list: [
        "Your name",
        "A work email address we can reply to",
        "Your company name",
        "Your website address",
        "A description of what you are trying to improve",
        "An indicative marketing spend range, if you choose to give one",
        "The area of work you are interested in",
        "Any additional context you choose to add",
      ],
    },
    {
      index: "03",
      title: "How we use information",
      body: [
        "Information submitted through this website is used to:",
      ],
      list: [
        "Respond to your enquiry",
        "Understand and evaluate what a project would involve",
        "Communicate with you about the services you have asked about",
        "Improve this website and the experience of dealing with us",
      ],
    },
    {
      index: "04",
      title: "Contact form data",
      body: [
        "The contact form is the only place on this website that asks you for information about yourself or your business. Everything in it is optional except the fields marked as required, which exist so that an enquiry can actually be answered.",
        "What you submit is sent to the destination configured for enquiry delivery. Where no delivery destination is configured, the form tells you plainly that your enquiry has not been sent, rather than reporting a success that did not happen.",
        "Do not use the form to send sensitive personal information. It is intended for business enquiries.",
      ],
    },
    {
      index: "05",
      title: "Cookies and similar technologies",
      body: [
        "The website may use technologies necessary for functionality and, where enabled, analytics or similar tools.",
        "Most browsers let you control or block these technologies through their own settings. Blocking them may affect how parts of the website behave.",
      ],
    },
    {
      index: "06",
      title: "Third-party services",
      body: [
        "Operating a website involves third-party services — hosting and delivery infrastructure among them — and information may be processed by those services as part of making the site work.",
        "We use such services only where they are needed to operate the website or to handle an enquiry you have sent us. We do not sell your information.",
      ],
    },
    {
      index: "07",
      title: "Data retention",
      body: [
        "We retain information only for as long as reasonably necessary for the purpose for which it was collected, to maintain business records, resolve disputes, and meet legal obligations.",
        "Where information is no longer needed for any of those purposes, it is deleted or anonymised.",
      ],
    },
    {
      index: "08",
      title: "Data security",
      body: [
        "We take reasonable measures to protect information submitted through this website against loss, misuse and unauthorised access.",
        "No method of transmitting or storing information over the internet is completely secure, so we cannot guarantee absolute security.",
      ],
    },
    {
      index: "09",
      title: "Your rights",
      body: [
        "Depending on where you are located, you may have rights regarding access, correction, deletion or other handling of your personal information.",
        "If you would like to exercise any such right, contact us and we will respond in line with the law that applies to your request.",
      ],
    },
    {
      index: "10",
      title: "Changes to this policy",
      body: [
        "This policy may be updated as the website, our services or our legal obligations change.",
        "The current version is always the one published on this page. Where a change is significant, we will make that clear on the page itself.",
      ],
    },
    {
      index: "11",
      title: "Contact",
      body: contactBody("this policy"),
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  slug: "terms",
  eyebrow: "Legal",
  title: "Terms & Conditions",
  lead: `Terms governing use of the ${site.name} website and enquiries for its services.`,
  metaTitle: `Terms & Conditions — ${site.name}`,
  metaDescription:
    "Terms governing use of the AIOS Labs website and enquiries for its services.",
  lastUpdated: null,
  sections: [
    {
      index: "01",
      title: "Introduction",
      body: [
        `These terms govern your use of the ${site.name} website. By using the site, you accept them.`,
        "If you go on to work with us, that engagement would be governed by its own written agreement, which takes precedence over these terms in the event of any conflict.",
      ],
    },
    {
      index: "02",
      title: "Website use",
      body: [
        "You may use this website for lawful purposes, to learn about our work and to make an enquiry.",
        "You agree not to use it in any way that interferes with its operation, attempts to gain unauthorised access to it, or infringes the rights of anyone else.",
      ],
    },
    {
      index: "03",
      title: "Services and enquiries",
      body: [
        "The content on this website is informational. It describes the kind of work we do; it is not an offer, a quotation, or a commitment to provide any particular service.",
        "Submitting an enquiry does not create a client relationship. A working relationship begins only when both parties have agreed terms in writing.",
      ],
    },
    {
      index: "04",
      title: "No guarantee of results",
      body: [
        "Nothing on this website is a promise of a specific commercial outcome.",
        "Marketing results depend on business context, market conditions, competition, budget, implementation, the quality of the underlying product or service, and factors outside anyone's control. Any example, description or discussion of an approach is presented as an approach, not as a predicted result.",
      ],
    },
    {
      index: "05",
      title: "Intellectual property",
      body: [
        `The content of this website — including its text, design, layout, graphics and code — belongs to ${site.name} or is used with permission, and is protected by applicable intellectual property law.`,
        "You may view and share it for personal or internal business reference. You may not copy, republish or reuse it commercially without written permission.",
      ],
    },
    {
      index: "06",
      title: "Third-party links",
      body: [
        "This website may link to sites we do not control. Those links are provided for convenience.",
        "We are not responsible for the content, accuracy or practices of any external site, and visiting one is subject to that site's own terms and privacy policy.",
      ],
    },
    {
      index: "07",
      title: "Website availability",
      body: [
        "We aim to keep this website available and current, but we do not guarantee uninterrupted or error-free access.",
        "The site may be unavailable during maintenance, or for reasons outside our control, and content may be changed or removed without notice.",
      ],
    },
    {
      index: "08",
      title: "Limitation of liability",
      body: [
        "To the extent permitted by applicable law, we are not liable for any loss or damage arising from your use of this website, or from reliance on information published on it.",
        "Nothing in these terms limits or excludes any liability that cannot lawfully be limited or excluded.",
      ],
    },
    {
      index: "09",
      title: "Changes to these terms",
      body: [
        "These terms may be updated as the website or our services change.",
        "The current version is always the one published on this page, and continuing to use the site means you accept the version in force.",
      ],
    },
    {
      index: "10",
      title: "Contact",
      body: contactBody("these terms"),
    },
  ],
};

export const legalDocuments: readonly LegalDocument[] = [
  privacyPolicy,
  termsAndConditions,
];
