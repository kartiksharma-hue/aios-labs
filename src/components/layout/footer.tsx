import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Wordmark } from "@/components/layout/wordmark";
import {
  contact,
  footerNav,
  legalNav,
  locationNav,
  serviceNav,
  site,
  type NavItem,
} from "@/lib/site";

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: readonly NavItem[];
}) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="label text-ink-faint">{title}</h2>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-small text-ink-muted hover:text-ink transition-colors duration-quick ease-signature"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-void border-line mt-auto border-t">
      <Container width="page" className="py-section-sm">
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between lg:gap-20">
          <div className="flex max-w-narrow flex-col gap-4 lg:max-w-xs">
            <Wordmark size="lg" />
            <p className="text-lead text-ink-muted">{site.tagline}</p>
            {/*
              Social profiles and contact details are omitted until real ones
              are provided — see `contact` in src/lib/site.ts.
            */}
            {contact.social.length > 0 ? (
              <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
                {contact.social.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-small text-ink-muted hover:text-ink transition-colors duration-quick ease-signature"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:gap-x-16">
            <FooterColumn title="Navigation" items={footerNav} />
            <FooterColumn title="Services" items={serviceNav} />
            <FooterColumn title="Locations" items={locationNav} />
          </div>
        </div>

        <div className="border-line mt-16 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small text-ink-faint">
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-small text-ink-faint hover:text-ink transition-colors duration-quick ease-signature"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-small text-ink-faint inline-flex items-center gap-2">
                    {item.label}
                    <span className="label text-ink-faint/70 border-line rounded-xs border px-1.5 py-0.5">
                      Pending
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
