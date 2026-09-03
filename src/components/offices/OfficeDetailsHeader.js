import {
  Building2,
  Clock3,
  MapPin,
  Monitor,
} from "lucide-react";

import Container from "@/components/ui/Container";

export default function OfficeDetailsHeader({ office }) {
  if (!office) {
    return null;
  }

  return (
    <header
      className="section-dark legal-pattern"
      style={{
        borderBottom: "1px solid rgba(182,144,80,0.28)",
      }}
    >
      <Container
        style={{
          paddingTop: "var(--space-16)",
          paddingBottom: "var(--space-20)",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: "grid",
            width: "64px",
            height: "64px",
            marginBottom: "var(--space-6)",
            placeItems: "center",
            border: "1px solid var(--color-gold-400)",
            borderRadius: "var(--radius-circle)",
            backgroundColor: "rgba(182,144,80,0.12)",
            color: "var(--color-gold-300)",
          }}
        >
          <Building2 size={28} />
        </span>

        <span className="eyebrow">
          {office.statusLabel}
        </span>

        <h1
          className="heading-one text-light text-balance"
          style={{
            maxWidth: "850px",
          }}
        >
          {office.name}
        </h1>

        <span
          className="gold-line"
          aria-hidden="true"
        />

        <p
          className="body-large"
          style={{
            maxWidth: "780px",
            marginTop: "var(--space-6)",
            marginBottom: 0,
            color: "rgba(255,255,255,0.76)",
          }}
        >
          {office.overview.shortDescription}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-6)",
            marginTop: "var(--space-8)",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              color: "rgba(255,255,255,0.72)",
              fontSize: "var(--font-size-sm)",
            }}
          >
            <MapPin
              size={18}
              color="var(--color-gold-400)"
              aria-hidden="true"
            />

            {office.city}, {office.state}
          </span>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              color: "rgba(255,255,255,0.72)",
              fontSize: "var(--font-size-sm)",
            }}
          >
            <Clock3
              size={18}
              color="var(--color-gold-400)"
              aria-hidden="true"
            />

            {office.availability.label}
          </span>

          {office.availability.onlineAppointments && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                color: "rgba(255,255,255,0.72)",
                fontSize: "var(--font-size-sm)",
              }}
            >
              <Monitor
                size={18}
                color="var(--color-gold-400)"
                aria-hidden="true"
              />

              Online appointments
            </span>
          )}
        </div>
      </Container>
    </header>
  );
}
