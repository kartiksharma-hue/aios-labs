import { Accent } from "@/components/ui/accent";
import { ClosingCta } from "@/components/ui/closing-cta";

/** Section 08 — the closing CTA on an individual service page. */
export function ServiceCta() {
  return (
    <ClosingCta
      headingId="service-cta-heading"
      index="07"
      headline={
        <>
          Ready to build your growth <Accent>system</Accent>?
        </>
      }
      support="Tell us where growth is stalling. We'll tell you what we would do about it."
    />
  );
}
