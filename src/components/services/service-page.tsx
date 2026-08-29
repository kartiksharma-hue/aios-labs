import { ServiceHero } from "@/components/services/service-hero";
import { ServiceNarrative } from "@/components/services/service-narrative";
import { ServiceDeliverables } from "@/components/services/service-deliverables";
import { ServiceProcess } from "@/components/services/service-process";
import { ServiceRelated } from "@/components/services/service-related";
import { ServiceFaq } from "@/components/services/service-faq";
import { ServiceCta } from "@/components/services/service-cta";
import type { ServicePageContent } from "@/content/service-page-types";
import type { Service } from "@/content/services";

/**
 * The one template behind all eight service pages. Everything that differs
 * between them lives in content; nothing here is per-service markup.
 */
export function ServicePage({
  content,
  service,
  related,
}: {
  content: ServicePageContent;
  service: Service;
  related: readonly Service[];
}) {
  return (
    <main id="main" className="flex-1">
      <ServiceHero service={content} name={service.name} />
      <ServiceNarrative
        section={content.problem}
        index="01"
        headingId="problem-heading"
      />
      <ServiceNarrative
        section={content.approach}
        index="02"
        headingId="approach-heading"
      />
      <ServiceDeliverables
        heading={content.deliverablesHeading}
        items={content.deliverables}
      />
      <ServiceProcess
        heading={content.processHeading}
        steps={content.process}
      />
      <ServiceRelated services={related} />
      <ServiceFaq faqs={content.faqs} />
      <ServiceCta />
    </main>
  );
}
