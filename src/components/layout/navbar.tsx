"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { primaryCta, primaryNav } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Wordmark } from "@/components/layout/wordmark";
import { NavLink } from "@/components/layout/nav-link";
import { MobileNav } from "@/components/layout/mobile-nav";

/** Distance scrolled before the header commits to a background. */
const SCROLL_THRESHOLD = 12;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > SCROLL_THRESHOLD);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "transition-colors duration-base ease-signature",
        // Transparent over a hero; commits to a surface once the page moves.
        scrolled
          ? "bg-base/85 border-line border-b backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <Container
        width="page"
        className="flex h-header items-center justify-between gap-8 md:h-header-lg"
      >
        {/* Elevated so it stays legible above the open mobile panel. */}
        <div className="relative z-20">
          <Wordmark />
        </div>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-10">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={primaryCta.href}
          className="border-line-strong hover:border-signal text-small text-ink hidden h-10 items-center gap-2.5 rounded-xs border px-5 transition-colors duration-quick ease-signature md:inline-flex"
        >
          <span aria-hidden className="bg-signal h-1.5 w-1.5 rounded-full" />
          {primaryCta.label}
        </Link>

        <MobileNav />
      </Container>
    </header>
  );
}
