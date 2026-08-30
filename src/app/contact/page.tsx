import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent } from "@/components/ui/accent";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { contactHero, fitSection, whatHappensNext } from "@/content/contact";
import { contact, site } from "@/lib/site";
import { socialCard } from "@/lib/metadata";

export const metadata: Metadata = {
  title: { absolute: "Contact AIOS Labs — Start a Growth Conversation" },
  description:
    "Tell AIOS Labs where growth is getting stuck and start a conversation about strategy, acquisition, conversion, content, automation and measurement.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
  ...socialCard({
    title: `Contact — ${site.name}`,
    description:
      "Tell us where growth is getting stuck. We'll start with the problem, not a package.",
    url: "/contact",
  }),
};

/**
 * No ContactPage, Organization or LocalBusiness structured data is emitted.
 * There is no verified email, phone or address to describe — see `contact` in
 * src/lib/site.ts — and schema asserting a contact point that does not exist
 * would be worse than none.
 */
export default function ContactPage() {
  const hasDirectContact = Boolean(contact.email || contact.phone);

  return (
    <main id="main" className="flex-1">
      {/* 01 — Hero */}
      <section
        aria-labelledby="contact-heading"
        className="pt-header md:pt-header-lg"
      >
        <Container
          width="page"
          className="flex flex-col gap-10 py-section-sm md:gap-12"
        >
          <Reveal immediate>
            <p className="label text-ink-faint flex items-center gap-3">
              <span aria-hidden className="bg-signal h-1.5 w-1.5 rounded-full" />
              {contactHero.eyebrow}
            </p>
          </Reveal>

          <TextReveal
            as="h1"
            id="contact-heading"
            immediate
            delay={0.15}
            className="text-display max-w-[16ch]"
          >
            Let&rsquo;s build what comes <Accent>next</Accent>.
          </TextReveal>

          <div className="grid md:grid-cols-12">
            <Reveal
              immediate
              delay={0.4}
              className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8"
            >
              <p className="text-lead text-ink-muted max-w-prose">
                {contactHero.positioning}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 02 — Form, with the supporting detail alongside rather than beneath */}
      <Section aria-labelledby="inquiry-heading" space="sm">
        <Container width="page">
          <div className="border-line grid gap-14 border-t pt-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal className="mb-10 flex flex-col gap-4">
                <Eyebrow index="01">Inquiry</Eyebrow>
                <h2 id="inquiry-heading" className="text-h1 text-ink">
                  Tell us what is in the way.
                </h2>
              </Reveal>
              <ContactForm />
            </div>

            <aside className="flex flex-col gap-12 lg:col-span-4 lg:col-start-9">
              {/* 03 — What happens next */}
              <div className="flex flex-col gap-5">
                <Reveal>
                  <Eyebrow index="02">What happens next</Eyebrow>
                </Reveal>
                <ol className="flex flex-col">
                  {whatHappensNext.map((step) => (
                    <li key={step.index}>
                      <Reveal className="border-line flex gap-5 border-t py-5">
                        <span className="label text-signal shrink-0 pt-1">
                          {step.index}
                        </span>
                        <span className="flex flex-col gap-1.5">
                          <h3 className="text-body text-ink">{step.title}</h3>
                          <span className="text-small text-ink-muted block">
                            {step.description}
                          </span>
                        </span>
                      </Reveal>
                    </li>
                  ))}
                </ol>
              </div>

              {/* 04 — Direct contact */}
              <div className="flex flex-col gap-5">
                <Reveal>
                  <Eyebrow index="03">Direct</Eyebrow>
                </Reveal>
                <Reveal className="border-line flex flex-col items-start gap-4 border-t pt-5">
                  {hasDirectContact ? (
                    <ul className="flex flex-col gap-3">
                      {contact.email ? (
                        <li>
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-ink hover:text-signal transition-colors duration-quick ease-signature"
                          >
                            {contact.email}
                          </a>
                        </li>
                      ) : null}
                      {contact.phone ? (
                        <li>
                          <a
                            href={`tel:${contact.phone.replace(/\s/g, "")}`}
                            className="text-ink hover:text-signal transition-colors duration-quick ease-signature"
                          >
                            {contact.phone}
                          </a>
                        </li>
                      ) : null}
                    </ul>
                  ) : (
                    <>
                      <p className="text-small text-ink-muted">
                        Direct contact details pending verification.
                      </p>
                      <PlaceholderNote>Channels not yet published</PlaceholderNote>
                    </>
                  )}
                </Reveal>
              </div>

              {/* 05 — Presence */}
              <div className="flex flex-col gap-5">
                <Reveal>
                  <Eyebrow index="04">Presence</Eyebrow>
                </Reveal>
                <Reveal className="border-line flex flex-col items-start gap-4 border-t pt-5">
                  <p className="text-small text-ink-muted">
                    AIOS Labs works with businesses across markets rather than
                    from a listed office.
                  </p>
                  <Link
                    href="/locations"
                    className="group text-small text-ink hover:text-signal inline-flex items-center gap-2 py-1 transition-colors duration-quick ease-signature"
                  >
                    Explore where AIOS Labs works
                    <span
                      aria-hidden
                      className="transition-transform duration-quick ease-signature group-hover:translate-x-1 group-focus-visible:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </Reveal>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* 06 — Fit. The page's closing note; no repeated CTA, since this is the
          destination those CTAs point at. */}
      <Section aria-labelledby="fit-heading">
        <Container width="page">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <Reveal className="mb-6">
                <Eyebrow index="05">{fitSection.eyebrow}</Eyebrow>
              </Reveal>
              <TextReveal as="h2" id="fit-heading" className="text-h1">
                {fitSection.heading}
              </TextReveal>
            </div>
            <Reveal
              stagger
              className="flex flex-col gap-6 md:col-span-6 md:col-start-7"
            >
              {fitSection.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
