import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent } from "@/components/ui/accent";
import { Button } from "@/components/ui/button";
import { Rule } from "@/components/ui/rule";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

export const metadata: Metadata = {
  title: "Design System",
  description: "Internal reference for AIOS Labs design tokens and primitives.",
  robots: { index: false, follow: false },
};

const surfaces = [
  { token: "bg-void", value: "#050507", note: "Deepest — intro, footers" },
  { token: "bg-base", value: "#0A0A0C", note: "Page background" },
  { token: "bg-surface", value: "#101014", note: "Cards, panels" },
  { token: "bg-elevated", value: "#17171C", note: "Hover, raised" },
  { token: "bg-paper", value: "#F4F3EF", note: "Inverted editorial" },
];

const foreground = [
  { token: "text-ink", value: "#F5F4F0", note: "Primary — 18:1" },
  { token: "text-ink-muted", value: "#A3A3A0", note: "Secondary — 8.8:1" },
  { token: "text-ink-faint", value: "#71716F", note: "Decorative only — 4.3:1" },
  { token: "text-signal", value: "#F4C542", note: "Brand — 11.6:1" },
  { token: "text-circuit", value: "#6E8BFF", note: "Technical accents only" },
];

const typeScale = [
  { token: "text-display-xl", sample: "Growth", note: "Hero only" },
  { token: "text-display", sample: "We engineer growth", note: "Page heroes" },
  { token: "text-h1", sample: "Marketing built around growth", note: "H1" },
  { token: "text-h2", sample: "The AIOS growth system", note: "Section heads" },
  { token: "text-h3", sample: "Performance Marketing", note: "Card titles" },
];

const motionTokens = [
  { token: "EASE.signature", value: "power3.out", note: "Default settle" },
  { token: "EASE.expo", value: "expo.out", note: "Long reveals" },
  { token: "EASE.inOut", value: "power4.inOut", note: "Menus, transitions" },
  { token: "EASE.vehicle", value: "power2.inOut", note: "The taxi" },
  { token: "DURATION.quick", value: "0.24s", note: "Hover, colour" },
  { token: "DURATION.base", value: "0.42s", note: "UI state" },
  { token: "DURATION.slow", value: "0.72s", note: "Content reveal" },
  { token: "DURATION.cinematic", value: "1.2s", note: "Intro beats" },
];

function Swatch({
  token,
  value,
  note,
  kind,
}: {
  token: string;
  value: string;
  note: string;
  kind: "surface" | "text";
}) {
  return (
    <div className="border-line flex items-center gap-4 border-t py-4">
      <span
        aria-hidden
        className="border-line-strong h-11 w-11 shrink-0 rounded-xs border"
        style={{ backgroundColor: value }}
      />
      <div className="min-w-0">
        <p className="font-mono text-small text-ink">{token}</p>
        <p className="text-small text-ink-muted">
          <span className="font-mono">{value}</span>
          <span className="text-ink-faint"> · {note}</span>
        </p>
      </div>
      <span className="sr-only">{kind}</span>
    </div>
  );
}

export default function StyleGuidePage() {
  return (
    <main id="main">
      {/* ---------------------------------------------------------------- */}
      <Section space="sm">
        <Container className="flex flex-col gap-6">
          <Eyebrow index="01">AIOS Labs · Internal</Eyebrow>
          <TextReveal as="h1" immediate className="text-display">
            The design <Accent>system</Accent>.
          </TextReveal>
          <p className="text-lead text-ink-muted max-w-prose">
            Every colour, size, rhythm and easing the site is allowed to use.
            Components consume these tokens through Tailwind utilities — no
            hard-coded values below this layer.
          </p>
        </Container>
      </Section>

      <Rule />

      {/* --- Colour ------------------------------------------------------ */}
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Colour"
            index="02"
            title="One accent, held back"
            lead="Signal Amber is the taxi, the CTA and the single point of colour on a page. Circuit Blue is reserved for data and technical contexts."
          />
          <div className="grid gap-x-12 gap-y-2 md:grid-cols-2">
            <Reveal stagger className="flex flex-col">
              {surfaces.map((item) => (
                <Swatch key={item.token} kind="surface" {...item} />
              ))}
            </Reveal>
            <Reveal stagger className="flex flex-col">
              {foreground.map((item) => (
                <Swatch key={item.token} kind="text" {...item} />
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      <Rule />

      {/* --- Typography -------------------------------------------------- */}
      <Section>
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Typography"
            index="03"
            title={
              <>
                Inter Tight, <Accent>Instrument Serif</Accent>, JetBrains Mono
              </>
            }
            lead="Structure, editorial voice and the engineered register. Three families, each with one job."
          />
          <Reveal stagger className="flex flex-col">
            {typeScale.map((item) => (
              <div
                key={item.token}
                className="border-line flex flex-col gap-2 border-t py-7"
              >
                <div className="label text-ink-faint flex gap-4">
                  <span className="text-signal">{item.token}</span>
                  <span>{item.note}</span>
                </div>
                <p className={item.token}>{item.sample}</p>
              </div>
            ))}
            <div className="border-line flex flex-col gap-3 border-t py-7">
              <div className="label text-ink-faint">
                <span className="text-signal">text-lead</span> · intros
              </div>
              <p className="text-lead text-ink-muted max-w-prose">
                We build growth systems, not campaigns — strategy, acquisition,
                conversion, retention and scale, wired together and measured.
              </p>
              <div className="label text-ink-faint pt-4">
                <span className="text-signal">text-body</span> · reading
              </div>
              <p className="max-w-prose">
                Body copy sits at 16px with a 1.65 line height and a 68ch
                measure. Long-form reading is the constraint that sets the
                measure, not the width of the grid column it happens to sit in.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Rule />

      {/* --- Components -------------------------------------------------- */}
      <Section>
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Primitives"
            index="04"
            title="Buttons, labels, rules"
            lead="Small radii, hairline borders, one filled action per view."
          />
          <div className="flex flex-col gap-10">
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg" withArrow>
                Book a Growth Call
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                Explore Our Work
              </Button>
              <Button variant="ghost" withArrow>
                Read the case study
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md" variant="secondary">
                Medium
              </Button>
              <Button size="lg" disabled>
                Disabled
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              <Eyebrow>Trusted by ambitious businesses</Eyebrow>
              <Eyebrow index="01">Understand</Eyebrow>
              <Eyebrow index="05">Scale</Eyebrow>
            </div>
          </div>
        </Container>
      </Section>

      <Rule />

      {/* --- Inverted surface -------------------------------------------- */}
      <Section tone="light">
        <Container className="flex flex-col gap-6">
          <Eyebrow index="05">Inverted surface</Eyebrow>
          <h2 className="text-h2">
            The same tokens, <Accent>flipped</Accent>.
          </h2>
          <p className="text-lead text-ink-muted max-w-prose">
            Adding <code className="font-mono text-small">tone=&quot;light&quot;</code>{" "}
            re-points the semantic colour tokens. Every child adapts without a
            single conditional class — used sparingly, for editorial contrast.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact">Start a Growth Conversation</Button>
            <Button href="/services" variant="secondary">
              Our services
            </Button>
          </div>
        </Container>
      </Section>

      <Rule />

      {/* --- Motion ------------------------------------------------------ */}
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Motion"
            index="06"
            title="Movement with a reason"
            lead="Reveal, text reveal and the taxi journey. Everything checks prefers-reduced-motion in both CSS and GSAP."
          />
          <Reveal stagger className="flex flex-col">
            {motionTokens.map((item) => (
              <div
                key={item.token}
                className="border-line flex flex-wrap items-baseline gap-x-6 gap-y-1 border-t py-4"
              >
                <p className="text-signal w-48 font-mono text-small">
                  {item.token}
                </p>
                <p className="font-mono text-small text-ink">{item.value}</p>
                <p className="text-small text-ink-faint">{item.note}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}
