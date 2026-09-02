import Link from "next/link";
import {
  Accessibility,
  BadgeIndianRupee,
  Building2,
  FileText,
  FileWarning,
  Landmark,
  Shield,
  ShieldAlert,
  Ship,
  Users,
} from "lucide-react";

const iconComponents = {
  Accessibility,
  BadgeIndianRupee,
  Building2,
  FileText,
  FileWarning,
  Landmark,
  Shield,
  ShieldAlert,
  Ship,
  Users,
};

export default function PracticeAreaCard({
  practiceArea,
  compact = false,
  className = "",
}) {
  if (!practiceArea) {
    return null;
  }

  const IconComponent =
    iconComponents[practiceArea.icon] || Landmark;

  return (
    <article
      className={`card card-hover card-gold-top ${className}`.trim()}
    >
      <div
        className="card-padding"
        style={{
          display: "flex",
          minHeight: compact ? "100%" : "320px",
          flexDirection: "column",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: "grid",
            width: compact ? "48px" : "56px",
            height: compact ? "48px" : "56px",
            marginBottom: "var(--space-5)",
            placeItems: "center",
            border: "1px solid var(--color-gold-300)",
            borderRadius: "var(--radius-circle)",
            backgroundColor: "var(--color-gold-100)",
            color: "var(--color-gold-700)",
          }}
        >
          <IconComponent size={compact ? 22 : 26} />
        </span>

        <h2
          className="heading-three"
          style={{
            marginBottom: "var(--space-4)",
          }}
        >
          <Link
            href={`/practice-areas/${practiceArea.slug}`}
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {practiceArea.title}
          </Link>
        </h2>

        <p
          className="text-muted"
          style={{
            marginBottom: "var(--space-6)",
          }}
        >
          {practiceArea.shortDescription}
        </p>

        <Link
          href={`/practice-areas/${practiceArea.slug}`}
          className="link-arrow"
          aria-label={`Read professional information about ${practiceArea.title}`}
          style={{
            marginTop: "auto",
          }}
        >
          View information
        </Link>
      </div>
    </article>
  );
}