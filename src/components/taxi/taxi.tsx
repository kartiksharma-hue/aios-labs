/**
 * AIOS Labs taxi — original stylized side-profile illustration.
 *
 * Shared by the home page intro and the services growth journey. It carries no
 * animation of its own: each surface builds its own timeline against the ids
 * below.
 *
 * Every animatable part is its own addressable node with a stable id, grouped
 * by the transform origin its motion needs:
 *
 *   taxi-wheel-back    rotate about their own centres
 *   taxi-wheel-front
 *   taxi-chassis       everything sprung — dips and rocks over the wheels
 *     taxi-body        the amber silhouette, wheel arches cut into it
 *     taxi-window      glass, rear and driver
 *     taxi-driver      torso + arm + head
 *       taxi-driver-arm   pivots at the shoulder
 *       taxi-driver-head  pivots at the neck
 *         taxi-driver-face  eyes, hidden until the driver turns to camera
 *     taxi-headlight
 *
 * The car is grounded by the road hairline the intro draws behind it, not by
 * a cast shadow — on a near-black ground any tinted ellipse reads as a puddle
 * rather than as weight.
 *
 * Flat shapes only — no filters, gradients or masks, so it stays cheap to
 * animate and renders identically everywhere.
 */
export function Taxi({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 200"
      className={className}
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wheels sit behind the body and show through the arches cut into it. */}
      <g id="taxi-wheel-back">
        <circle cx="112" cy="150" r="28" className="fill-void" />
        <circle cx="112" cy="150" r="27" className="fill-elevated" />
        <circle cx="112" cy="150" r="20" className="fill-void" />
        <circle cx="112" cy="150" r="11" className="fill-elevated" />
        <circle cx="112" cy="150" r="3.5" className="fill-signal" />
        {/* Spokes: without them a spinning circle reads as static. */}
        <rect x="110.5" y="132" width="3" height="9" rx="1.5" className="fill-elevated" />
        <rect x="110.5" y="159" width="3" height="9" rx="1.5" className="fill-elevated" />
        <rect x="94" y="148.5" width="9" height="3" rx="1.5" className="fill-elevated" />
        <rect x="121" y="148.5" width="9" height="3" rx="1.5" className="fill-elevated" />
      </g>

      <g id="taxi-wheel-front">
        <circle cx="312" cy="150" r="28" className="fill-void" />
        <circle cx="312" cy="150" r="27" className="fill-elevated" />
        <circle cx="312" cy="150" r="20" className="fill-void" />
        <circle cx="312" cy="150" r="11" className="fill-elevated" />
        <circle cx="312" cy="150" r="3.5" className="fill-signal" />
        <rect x="310.5" y="132" width="3" height="9" rx="1.5" className="fill-elevated" />
        <rect x="310.5" y="159" width="3" height="9" rx="1.5" className="fill-elevated" />
        <rect x="294" y="148.5" width="9" height="3" rx="1.5" className="fill-elevated" />
        <rect x="321" y="148.5" width="9" height="3" rx="1.5" className="fill-elevated" />
      </g>

      <g id="taxi-chassis">
        {/* Roof sign. */}
        <rect x="192" y="33" width="42" height="16" rx="4" className="fill-void" />
        <rect x="197" y="37" width="32" height="8" rx="2" className="fill-signal" />

        <path
          id="taxi-body"
          className="fill-signal"
          d="M24 152 L24 120 C24 112 30 107 40 106 L108 102 L134 60 C138 52 146 48 156 48
             L262 48 C272 48 281 52 287 60 L312 100 L386 106 C396 108 400 114 400 122
             L400 152 L344 152 A32 32 0 0 0 280 152 L144 152 A32 32 0 0 0 80 152 Z"
        />

        <g id="taxi-window">
          <path className="fill-void" d="M148 96 L158 62 L204 62 L204 96 Z" />
          <path className="fill-void" d="M214 62 L268 62 L288 96 L214 96 Z" />
        </g>

        <g id="taxi-driver">
          <g id="taxi-driver-arm">
            <line
              x1="250"
              y1="85"
              x2="267"
              y2="93"
              strokeWidth="6"
              strokeLinecap="round"
              className="stroke-ink-muted"
            />
          </g>
          <path
            className="fill-ink-muted"
            d="M230 96 L230 91 C230 84 236 79 244 79 C252 79 258 84 258 91 L258 96 Z"
          />
          <g id="taxi-driver-head">
            <circle cx="244" cy="76" r="11" className="fill-ink-muted" />
            <g id="taxi-driver-face" opacity="0">
              <circle cx="240" cy="75" r="1.8" className="fill-void" />
              <circle cx="248" cy="75" r="1.8" className="fill-void" />
            </g>
          </g>
        </g>

        {/* Checker band — one short segment, the classic cue without the kitsch. */}
        <g className="fill-void" opacity="0.75">
          <rect x="152" y="110" width="11" height="11" />
          <rect x="174" y="110" width="11" height="11" />
          <rect x="196" y="110" width="11" height="11" />
          <rect x="218" y="110" width="11" height="11" />
          <rect x="240" y="110" width="11" height="11" />
        </g>

        <rect x="228" y="100" width="18" height="3" rx="1.5" className="fill-void" opacity="0.4" />

        <rect
          id="taxi-headlight"
          x="382"
          y="112"
          width="16"
          height="11"
          rx="4"
          className="fill-ink"
        />
        <rect x="24" y="116" width="10" height="10" rx="3" className="fill-signal-deep" />
      </g>
    </svg>
  );
}
