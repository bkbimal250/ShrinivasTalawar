import {
  CalendarDays,
  Clock3,
  MapPin,
  Monitor,
} from "lucide-react";
import Image from "next/image";

import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import advocate from "@/data/advocate";
import heroImage from "../../../public/images/legal-office-hero.webp";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "680px",
        overflow: "hidden",
        backgroundColor: "var(--color-primary-950)",
        color: "var(--color-white)",
      }}
      aria-labelledby="hero-heading"
    >
      <Image
        src={heroImage}
        alt="Legal books and scales of justice in a professional law office"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(7,18,33,0.98) 0%, rgba(11,23,42,0.94) 36%, rgba(11,23,42,0.68) 66%, rgba(11,23,42,0.38) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="legal-pattern"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.16,
        }}
      />

      <Container
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          minHeight: "680px",
          alignItems: "center",
          paddingTop: "var(--space-20)",
          paddingBottom: "var(--space-20)",
        }}
      >
        <div
          className="animate-fade-up"
          style={{
            maxWidth: "760px",
          }}
        >
          <span className="eyebrow">
            Legal Practitioner | Chhatrapati Sambhajinagar
          </span>

          <h1
            id="hero-heading"
            className="heading-display text-balance"
            style={{
              color: "var(--color-white)",
            }}
          >
            Advocate
            <br />
            Shrinivas Talawar
          </h1>

          <span
            className="gold-line animate-line"
            aria-hidden="true"
          />

          <p
            className="body-large"
            style={{
              maxWidth: "680px",
              marginTop: "var(--space-6)",
              marginBottom: 0,
              color: "rgba(255,255,255,0.78)",
            }}
          >
            Professional legal assistance for civil,
            criminal, family, property, Debt Recovery
            Tribunal and documentation-related matters.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-3)",
              marginTop: "var(--space-8)",
            }}
          >
            <ButtonLink
              href={advocate.phone.href}
              icon="phone"
              iconPosition="left"
            >
              Call Office
            </ButtonLink>

            <ButtonLink
              href="/practice-areas"
              variant="outlineLight"
              icon="arrow"
            >
              View Practice Areas
            </ButtonLink>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-6)",
              marginTop: "var(--space-10)",
              paddingTop: "var(--space-6)",
              borderTop: "1px solid rgba(255,255,255,0.16)",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                color: "rgba(255,255,255,0.75)",
                fontSize: "var(--font-size-sm)",
              }}
            >
              <Clock3
                size={18}
                color="var(--color-gold-400)"
                aria-hidden="true"
              />
              Open 24 Hours
            </span>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                color: "rgba(255,255,255,0.75)",
                fontSize: "var(--font-size-sm)",
              }}
            >
              <Monitor
                size={18}
                color="var(--color-gold-400)"
                aria-hidden="true"
              />
              Online Appointments
            </span>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                color: "rgba(255,255,255,0.75)",
                fontSize: "var(--font-size-sm)",
              }}
            >
              <CalendarDays
                size={18}
                color="var(--color-gold-400)"
                aria-hidden="true"
              />
              On-site Services
            </span>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                color: "rgba(255,255,255,0.75)",
                fontSize: "var(--font-size-sm)",
              }}
            >
              <MapPin
                size={18}
                color="var(--color-gold-400)"
                aria-hidden="true"
              />
              Padampura
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
