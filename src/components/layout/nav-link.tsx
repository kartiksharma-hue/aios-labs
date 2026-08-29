"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

/** True for the route itself and anything nested beneath it. */
export function useIsActive(href: string): boolean {
  const pathname = usePathname();
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
};

/**
 * Header link with a rule that wipes in from the left on hover and stays put
 * on the active route — the underline is the state, not a colour change.
 */
export function NavLink({ href, label, className }: NavLinkProps) {
  const isActive = useIsActive(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "group text-small relative py-1 transition-colors duration-quick ease-signature",
        isActive ? "text-ink" : "text-ink-muted hover:text-ink",
        className,
      )}
    >
      {label}
      <span
        aria-hidden
        className={cn(
          "bg-signal absolute inset-x-0 bottom-0 h-px origin-left",
          "transition-transform duration-quick ease-signature",
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </Link>
  );
}
