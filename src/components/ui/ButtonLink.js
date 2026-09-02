
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const iconComponents = {
  arrow: ArrowRight,
  calendar: CalendarDays,
  external: ExternalLink,
  map: MapPin,
  phone: Phone,
  whatsapp: MessageCircle,
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  icon,
  iconPosition = "right",
  external = false,
  fullWidth = false,
  className = "",
  ariaLabel,
  ...props
}) {
  const variantClasses = {
    primary: "button-primary",
    dark: "button-dark",
    outline: "button-outline",
    outlineLight: "button-outline-light",
  };

  const selectedVariant =
    variantClasses[variant] || variantClasses.primary;

  const IconComponent = iconComponents[icon];

  const combinedClassName = [
    "button",
    selectedVariant,
    fullWidth ? "button-full-width" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {IconComponent && iconPosition === "left" && (
        <IconComponent size={18} aria-hidden="true" />
      )}

      <span>{children}</span>

      {IconComponent && iconPosition === "right" && (
        <IconComponent size={18} aria-hidden="true" />
      )}
    </>
  );

  const isExternalLink =
    external ||
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:");

  if (isExternalLink) {
    return (
      <a
        href={href}
        className={combinedClassName}
        aria-label={ariaLabel}
        target={
          href.startsWith("http") && !href.startsWith("tel:")
            ? "_blank"
            : undefined
        }
        rel={
          href.startsWith("http")
            ? "noopener noreferrer"
            : undefined
        }
        style={{
          width: fullWidth ? "100%" : undefined,
        }}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={combinedClassName}
      aria-label={ariaLabel}
      style={{
        width: fullWidth ? "100%" : undefined,
      }}
      {...props}
    >
      {content}
    </Link>
  );
}