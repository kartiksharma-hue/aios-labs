import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  /** Optional index, e.g. "01" on process steps. */
  index?: string;
  className?: string;
};

/** Mono uppercase section label — the "engineered" register of the brand. */
export function Eyebrow({ children, index, className }: EyebrowProps) {
  return (
    <p className={cn("label flex items-center gap-3 text-ink-faint", className)}>
      {index ? (
        <>
          <span className="text-signal">{index}</span>
          <span aria-hidden className="h-px w-6 bg-line-strong" />
        </>
      ) : null}
      <span>{children}</span>
    </p>
  );
}
