import { Accent } from "@/components/ui/accent";
import { ClosingCta } from "@/components/ui/closing-cta";

/** Section 03 — the closing CTA on the services journey page. */
export function ServicesCta() {
  return (
    <ClosingCta
      headingId="services-cta-heading"
      index="02"
      headline={
        <>
          Your growth shouldn&rsquo;t work in <Accent>silos</Accent>.
        </>
      }
      support="Let's build the system behind your next stage of growth."
    />
  );
}
