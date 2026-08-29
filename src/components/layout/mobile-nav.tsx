"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { gsap, useGSAP } from "@/lib/gsap";
import { DURATION, EASE, STAGGER } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { primaryCta, primaryNav, site } from "@/lib/site";
import { useIsActive } from "@/components/layout/nav-link";

const FOCUSABLE = 'a[href], button:not([disabled])';
const PANEL_ID = "mobile-navigation";

function PanelLink({
  href,
  label,
  index,
  onNavigate,
}: {
  href: string;
  label: string;
  index: number;
  onNavigate: () => void;
}) {
  const isActive = useIsActive(href);

  return (
    <li data-nav-item>
      <Link
        href={href}
        onClick={onNavigate}
        aria-current={isActive ? "page" : undefined}
        className="border-line flex items-baseline gap-5 border-t py-5"
      >
        <span className="label text-signal w-6 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={cn(
            "text-h2",
            isActive ? "text-ink" : "text-ink-muted",
          )}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}

export function MobileNav() {
  const pathname = usePathname();

  // The panel is open *for a given route*. Navigating changes the pathname,
  // which closes it derivationally — no effect chasing route changes, and
  // browser back/forward is covered for free.
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const open = openForPath === pathname;

  const reducedMotion = useReducedMotion();

  const scope = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  const close = useCallback(() => setOpenForPath(null), []);
  const toggle = useCallback(
    () => setOpenForPath((current) => (current === pathname ? null : pathname)),
    [pathname],
  );

  // Build the open/close timeline once, then drive it from `open`. Rebuilding
  // it per toggle would restart a half-finished close mid-flight.
  //
  // Under reduced motion no timeline is built at all. A `.from()` tween leaves
  // its targets at opacity 0 until something plays it, so a timeline that is
  // only ever scrubbed would open an empty menu.
  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!panel || reducedMotion) return;

      timeline.current = gsap
        .timeline({ paused: true })
        .to(panel, {
          autoAlpha: 1,
          duration: DURATION.base,
          ease: EASE.inOut,
        })
        .from(
          panel.querySelectorAll("[data-nav-item]"),
          {
            yPercent: 40,
            opacity: 0,
            duration: DURATION.slow,
            ease: EASE.signature,
            stagger: STAGGER.base,
          },
          "<0.08",
        );

      return () => {
        timeline.current = null;
      };
    },
    { scope, dependencies: [reducedMotion], revertOnUpdate: true },
  );

  // Drive the panel, and move focus into it once it is actually visible.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const tl = timeline.current;
    const items = panel.querySelectorAll("[data-nav-item]");

    if (open) {
      // `.focus()` is a no-op inside a `visibility: hidden` subtree, and
      // autoAlpha only flips visibility on the tween's first render — a frame
      // too late. Make the panel visible now.
      gsap.set(panel, { visibility: "visible" });
    }

    if (!tl) {
      gsap.set(panel, { autoAlpha: open ? 1 : 0 });
      gsap.set(items, { opacity: 1, yPercent: 0 });
    } else if (open) {
      tl.timeScale(1).play();
    } else {
      // A menu should get out of the way faster than it arrives.
      tl.timeScale(1.6).reverse();
    }

    if (open) {
      panel.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    }
  }, [open, reducedMotion]);

  // Close if the viewport grows into the desktop nav, so the panel can never
  // be left open (and the body left locked) behind a layout it doesn't belong to.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 48rem)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpenForPath(null);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Lock the page behind the overlay.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Escape closes; Tab stays inside the panel.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const items = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null);
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <div ref={scope} className="md:hidden">
      <button
        ref={toggleRef}
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={PANEL_ID}
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative z-20 -mr-2 flex h-11 w-11 items-center justify-center"
      >
        <span aria-hidden className="relative block h-3 w-6">
          <span
            className={cn(
              "bg-ink absolute left-0 block h-px w-full",
              "transition-transform duration-base ease-signature",
              open ? "top-1.5 rotate-45" : "top-0",
            )}
          />
          <span
            className={cn(
              "bg-ink absolute left-0 block h-px w-full",
              "transition-transform duration-base ease-signature",
              open ? "top-1.5 -rotate-45" : "top-3",
            )}
          />
        </span>
      </button>

      <div
        ref={panelRef}
        id={PANEL_ID}
        inert={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "bg-void invisible fixed inset-0 opacity-0",
          "flex flex-col overflow-y-auto px-gutter pt-header pb-10",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center">
          <ul className="flex flex-col">
            {primaryNav.map((item, index) => (
              <PanelLink
                key={item.href}
                href={item.href}
                label={item.label}
                index={index}
                onNavigate={close}
              />
            ))}
          </ul>
        </nav>

        <div data-nav-item className="border-line flex flex-col gap-6 border-t pt-8">
          <Link
            href={primaryCta.href}
            onClick={close}
            className="border-line-strong hover:border-signal flex items-center justify-between gap-3 rounded-xs border px-5 py-4 transition-colors duration-quick ease-signature"
          >
            <span className="flex items-center gap-3">
              <span aria-hidden className="bg-signal h-1.5 w-1.5 rounded-full" />
              <span className="text-body text-ink">{primaryCta.label}</span>
            </span>
            <span aria-hidden className="text-ink-muted">
              →
            </span>
          </Link>
          <p className="label text-ink-faint">{site.tagline}</p>
        </div>
      </div>
    </div>
  );
}
