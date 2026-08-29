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

## Navigation

### Header
Fixed and transparent over the page, committing to a blurred surface plus a
hairline once the page scrolls past 12px — so a full-bleed hero reads edge to
edge, and text never crosses a transparent bar unreadably.

Because the header overlays the page, any view without a full-bleed hero clears
it with `pt-header md:pt-header-lg` (64px / 80px).

Nav state is the **underline, not the colour**: a Signal Amber rule wipes in
from the left on hover and stays put on the active route. Active detection
matches nested routes, so `/services/seo` keeps *Services* lit.

The CTA is a hairline button with an amber dot rather than a filled pill — a
solid amber block in the header is the exact generic-SaaS note the brand avoids,
and it would compete with the one filled CTA a page is allowed.

### Mobile panel
Full-screen `bg-void` overlay with mono-numbered links at `text-h2`.

- Open state is **derived from the route** (`openForPath === pathname`), so
  navigation and browser back/forward close it with no effect chasing changes.
- `inert` when closed — links are never reachable by tab from behind the overlay.
- Focus moves to the first link on open and returns to the toggle on close.
- Tab cycles within the panel; Escape closes.
- The page behind is scroll-locked, and the panel closes if the viewport grows
  into the desktop nav so the lock can never be stranded.
- It closes 1.6× faster than it opens — a menu should get out of the way.

Two stacking rules matter and are easy to get wrong:
1. The panel sits **inside** the header's `z-50` context, so it already covers
   the page without a high z-index of its own.
2. The wordmark and close button are raised **above** the panel. Without that
   the close control is buried, and a touch device — with no Escape key — has
   no way out of the menu.

Under reduced motion **no timeline is built at all**. A `.from()` tween leaves
its targets at `opacity: 0` until something plays it, so a timeline that is only
ever scrubbed to `progress(1)` opens an empty menu. The reduced path sets end
states directly with `gsap.set()`.

### Footer
Editorial block: large wordmark and tagline against Navigation / Services /
Locations columns, over a legal bar. Service and location slugs are fixed now so
internal linking and the sitemap stay consistent as those routes land.

Social links and contact details render **only if present** in `site.contact`,
which is empty — none have been provided.

---

## The taxi intro

Inline SVG driven by GSAP — no Lottie, video, canvas or extra dependency. The
art is a React component (`components/intro/taxi.tsx`) returning flat SVG
shapes, so a timeline can reach individual parts; an `<img>` could not be.

Parts are grouped by the transform origin their motion needs: `taxi-wheel-front`
and `taxi-wheel-back` spin about their own centres, `taxi-chassis` dips and rocks
over them, `taxi-driver-head` pivots at the neck, `taxi-driver-arm` at the
shoulder. Colour comes from the tokens, so the car is Signal Amber by
inheritance rather than by hex.

The car is grounded by a **hairline road** the overlay draws behind it — the
same structural device as the rest of the site. There is no cast shadow: on a
near-black ground any tinted ellipse reads as a puddle rather than as weight.

### Handoff
The overlay is **server-rendered on every visit**, so the first paint is
already the dark screen the sequence opens on. CSS keeps it hidden unless the
pre-paint script flags the session (`:root[data-intro="play"]`), which means no
overlay on a repeat visit and none at all when JavaScript never runs.

`inert` is applied imperatively, never in JSX — `inert` in the server HTML
would leave the page uninteractive for anyone without JavaScript.

When the sequence ends, `IntroStage` **remounts the hero** and the overlay
fades. The remount is the handoff: the hero plays its entrance once, as the
overlay clears, instead of invisibly behind it.

### Reduced motion
No timeline is built. The scene is hidden and the wordmark set to its end state
immediately — the destination without the journey. Skip still works.
---

## Verified

Typecheck, lint and production build pass clean.

Audited in Chromium at 1440, 1280, 1024, 768, 430, 390 and 375px: no horizontal
overflow at any width, no content left hidden after scroll, and reveals persist
across resize and scroll-back.

Navigation verified: tab order runs skip-link → wordmark → nav → CTA with a
visible ring on every stop; the mobile panel traps focus, restores it to the
toggle, closes on Escape and on tap, unlocks the body, and opens instantly with
all links visible under `prefers-reduced-motion: reduce`.
