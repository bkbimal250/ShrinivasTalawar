import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  Award,
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
  const caseSolved =
    typeof practiceArea.caseSolved === "number"
      ? `${practiceArea.caseSolved}+`
      : null;

  return (
    <article
      className={`card card-hover card-gold-top practice-area-card ${
        compact ? "practice-area-card-compact" : ""
      } ${className}`.trim()}
    >
      <div className="card-padding practice-area-card-inner">
        <div className="practice-area-card-top">
          <span className="practice-area-card-icon" aria-hidden="true">
            <IconComponent size={compact ? 22 : 26} />
          </span>

          {caseSolved && (
            <span className="practice-area-card-stat">
              <Award size={16} aria-hidden="true" />
              <span>
                <strong>{caseSolved}</strong>
                <small>Cases Solved</small>
              </span>
            </span>
          )}
        </div>

        <h2
          className="heading-three practice-area-card-title"
        >
          <Link
            href={`/practice-areas/${practiceArea.slug}`}
          >
            {practiceArea.title}
          </Link>
        </h2>

        <p className="text-muted practice-area-card-description">
          {practiceArea.shortDescription}
        </p>

        <Link
          href={`/practice-areas/${practiceArea.slug}`}
          className="button button-primary practice-area-card-button"
          aria-label={`Read professional information about ${practiceArea.title}`}
        >
          <span>View information</span>
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
