import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  /** The single loud element on a page. One per view. */
  primary:
    "bg-signal text-ink-inverse hover:bg-[color-mix(in_srgb,var(--color-signal)_88%,white)]",
  /** Hairline outline — the default for secondary actions. */
  secondary:
    "border border-line-strong text-ink hover:border-signal hover:text-signal",
  /** Inline text action. */
  ghost: "text-ink-muted hover:text-ink px-0",
} as const;

const sizes = {
  sm: "h-9 px-4 text-small",
  md: "h-11 px-5 text-small",
  lg: "h-13 px-7 text-body",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Appends a chevron that slides on hover. */
  withArrow?: boolean;
  className?: string;
};

type LinkProps = SharedProps & {
  href: string;
  /** Renders a plain <a> for external destinations. */
  external?: boolean;
};

type NativeProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-xs font-medium " +
  "transition-colors duration-quick ease-signature " +
  "disabled:pointer-events-none disabled:opacity-40";

function Arrow() {
  return (
    <span
      aria-hidden
      className="transition-transform duration-quick ease-signature group-hover/btn:translate-x-1"
    >
      →
    </span>
  );
}

export function Button(props: LinkProps | NativeProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    withArrow = false,
    className,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {children}
      {withArrow ? <Arrow /> : null}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, external } = props;

    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  // Everything left after the component's own props are peeled off is a real
  // button attribute (type, onClick, disabled, aria-*).
  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
