import {
  CheckCircle2,
  FileText,
  Info,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

export default function OfficeOverview({ office }) {
  if (!office) {
    return null;
  }

  return (
    <article>
      <SectionHeading
        eyebrow="Office Overview"
        title={office.name}
        description={office.overview.shortDescription}
      />

      <div
        style={{
          marginTop: "var(--space-6)",
          color: "var(--color-text-secondary)",
        }}
      >
        {office.overview.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section
        style={{
          marginTop: "var(--space-10)",
        }}
        aria-labelledby="office-facilities-heading"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-3)",
            marginBottom: "var(--space-5)",
          }}
        >
          <CheckCircle2
            size={24}
            color="var(--color-gold-700)"
            aria-hidden="true"
          />

          <h2
            id="office-facilities-heading"
            className="heading-three"
            style={{ margin: 0 }}
          >
            Office facilities
          </h2>
        </div>

        <ul className="check-list">
          {office.facilities.map((facility) => (
            <li key={facility}>{facility}</li>
          ))}
        </ul>
      </section>

      <section
        style={{
          marginTop: "var(--space-10)",
        }}
        aria-labelledby="office-practice-areas-heading"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-3)",
            marginBottom: "var(--space-5)",
          }}
        >
          <FileText
            size={24}
            color="var(--color-gold-700)"
            aria-hidden="true"
          />

          <h2
            id="office-practice-areas-heading"
            className="heading-three"
            style={{ margin: 0 }}
          >
            Areas of practice
          </h2>
        </div>

        <ul className="legal-list">
          {office.practiceAreas.map((practiceArea) => (
            <li key={practiceArea}>{practiceArea}</li>
          ))}
        </ul>
      </section>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "42px 1fr",
          gap: "var(--space-3)",
          marginTop: "var(--space-10)",
          padding: "var(--space-5)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-md)",
          backgroundColor:
            "var(--color-background-secondary)",
        }}
      >
        <Info
          size={22}
          color="var(--color-gold-700)"
          aria-hidden="true"
        />

        <p
          style={{
            margin: 0,
            color: "var(--color-text-secondary)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          Office information is provided for general
          professional identification. Appointment
          availability should be confirmed before visiting.
        </p>
      </div>
    </article>
  );
}