import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Editorial accent — an italic serif word inside a sans headline.
 * Use for one or two words per headline. More than that and it stops working.
 */
export function Accent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <em className={cn("font-serif italic font-normal", className)}>
      {children}
    </em>
  );
}
