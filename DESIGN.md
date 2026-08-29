# AIOS Labs — Design System

**Digital Growth, Engineered.**

Every colour, size, rhythm and easing the site is allowed to use. Components
consume these through Tailwind utilities. No hard-coded values below this layer.

Live reference: [`/style-guide`](/style-guide) (noindex).

---

## Principles

1. **Editorial, not agency-template.** Hairlines and whitespace do the
   structural work — not cards, shadows and rounded corners.
2. **One accent, held back.** Signal Amber appears once or twice per view.
   A page that is yellow everywhere has no emphasis anywhere.
3. **Motion earns its place.** Nothing animates to prove that it can.
4. **Nothing is trapped behind an animation.** Content is readable without
   JavaScript and without motion.

---

## Colour

Defined in `src/app/globals.css` under `@theme`.

### Surfaces
| Token | Value | Use |
| --- | --- | --- |
| `bg-void` | `#050507` | Intro sequence, footer |
| `bg-base` | `#0A0A0C` | Page background |
| `bg-surface` | `#101014` | Cards, panels |
| `bg-elevated` | `#17171C` | Hover, raised states |
| `bg-paper` | `#F4F3EF` | Inverted editorial sections |

### Foreground
| Token | Value | Contrast on base | Use |
| --- | --- | --- | --- |
| `text-ink` | `#F5F4F0` | 18:1 | Primary text |
| `text-ink-muted` | `#A3A3A0` | 8.8:1 | Secondary text, leads |
| `text-ink-faint` | `#71716F` | 4.3:1 | **Decorative only** — never body copy |
| `text-signal` | `#F4C542` | 11.6:1 | Brand, CTA, the taxi |
| `text-circuit` | `#6E8BFF` | — | Technical/data accents. Never a CTA. |

`text-ink-faint` clears 4.5:1 only at large sizes. Use it for eyebrow labels
and metadata, not for anything a visitor has to read.

### Hairlines
`border-line` (9% ink) is the default. `border-line-strong` (18%) is for
interactive edges — buttons, inputs, focused cards.

### Inverting a section
`<Section tone="light">` applies `.surface-light`, which re-points the semantic
colour tokens. Children adapt with no conditional classes. Use sparingly.

---

## Typography

Three families, each with one job (`src/lib/fonts.ts`):

- **Inter Tight** (`font-sans`) — structure. Headlines and body.
- **Instrument Serif** (`font-serif`) — the editorial voice. Italic accent
  words only, via `<Accent>`. One or two words per headline, no more.
- **JetBrains Mono** (`font-mono`) — the engineered register. Eyebrows,
  indices, metrics, token names.

### Scale
All sizes are fluid `clamp()` values with line-height, tracking and weight
baked into the token — apply the utility and the typesetting is correct.

| Token | Range | Use |
| --- | --- | --- |
| `text-display-xl` | 52 → 144px | Hero only |
| `text-display` | 44 → 96px | Page heroes |
| `text-h1` | 36 → 64px | Page `<h1>` |
| `text-h2` | 30 → 48px | Section headings |
| `text-h3` | 22 → 30px | Card titles |
| `text-lead` | 17 → 22px | Section intros |
| `text-body` | 16px | Reading |
| `text-small` | 14px | Metadata, captions |
| `.label` | 11px, `0.18em`, uppercase mono | Eyebrows |

Body copy is capped at `max-w-prose` (68ch). Reading measure sets the width,
not the grid column that happens to contain it.

---

## Layout

| Token | Value |
| --- | --- |
| `max-w-page` | 1600px |
| `max-w-content` | 1280px — the default |
| `max-w-narrow` | 900px |
| `max-w-prose` | 68ch |
| `px-gutter` | 20 → 48px |
| `py-section` | 80 → 160px |
| `py-section-sm` | 56 → 96px |

`<Container>` owns horizontal measure and gutters. `<Section>` owns vertical
rhythm and surface tone. Page padding lives nowhere else.

Radii are deliberately small: `rounded-xs` (2px) is the default,
`rounded-lg` (14px) is the maximum. This is an editorial brand, not a SaaS app.

---

## Motion

Tokens in `src/lib/motion.ts` mirror the CSS custom properties, so a GSAP
timeline and a CSS transition describe the same movement.

| Token | Value | Use |
| --- | --- | --- |
| `EASE.signature` | `power3.out` | Default settle |
| `EASE.expo` | `expo.out` | Long reveals |
| `EASE.inOut` | `power4.inOut` | Menus, page transitions |
| `EASE.vehicle` | `power2.inOut` | The taxi |
| `DURATION.quick` | 0.24s | Hover, colour |
| `DURATION.base` | 0.42s | UI state |
| `DURATION.slow` | 0.72s | Content reveal |
| `DURATION.cinematic` | 1.2s | Intro beats |

### Primitives
- `<Reveal>` — scroll-triggered fade + rise. The default entrance for a block.
  `stagger` reveals direct children in sequence.
- `<TextReveal>` — line-by-line masked reveal for headlines. Splits after
  `document.fonts.ready` so line breaks are measured against the real face.
  Headings only; it is slow and hurts reading on body copy.

### Reduced motion
Enforced in three places:
1. CSS `@media (prefers-reduced-motion: reduce)` neutralises transitions.
2. The same query un-primes `[data-reveal]`, so hidden elements render visible.
3. GSAP timelines call `prefersReducedMotion()` and `gsap.set()` to the end
   state instead of animating.

### Why content is never stuck invisible
Reveal targets start hidden via `.js [data-reveal]` — scoped to a `js` class
added by an inline script before first paint. Without JavaScript the class is
never added, the rule never matches, and everything renders visible.

Import GSAP from `@/lib/gsap`, never from the package directly — that module is
the single plugin registration point and refreshes ScrollTrigger once fonts
have settled.

---

## Accessibility

- One focus ring, defined once on `:focus-visible` — 2px Signal Amber, 3px offset.
- A "Skip to content" link is the first focusable element; pages expose `#main`.
- `text-wrap: balance` on headings, `pretty` on paragraphs.
- Colour is never the only carrier of meaning.

---

## Verified

Typecheck, lint and production build pass clean. `/style-guide` audited in
Chromium at 1440, 1280, 768, 430 and 375px: no horizontal overflow, no content
left hidden after scroll, and reveals persist across resize and scroll-back.
