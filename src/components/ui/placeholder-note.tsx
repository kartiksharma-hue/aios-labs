import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * An explicit, visible marker that copy in this block is not final. Better a
 * visible gap than invented content that reads as fact.
 */
export function PlaceholderNote({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "label text-signal border-line inline-flex items-center gap-2 rounded-xs border px-3 py-1.5",
        className,
      )}
    >
      <span aria-hidden className="bg-signal h-1 w-1 rounded-full" />
      {children}
    </p>
  );
}
