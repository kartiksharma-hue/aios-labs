import { Accent } from "@/components/ui/accent";
import { ClosingCta } from "@/components/ui/closing-cta";

/** The closing CTA for the work index and every case study. */
export function WorkCta({ index = "08" }: { index?: string }) {
  return (
    <ClosingCta
      headingId="work-cta-heading"
      index={index}
      headline={
        <>
          Have a problem worth <Accent>solving</Accent>?
        </>
      }
      support="Tell us what is in the way. We'll tell you how we would approach it."
    />
  );
}
