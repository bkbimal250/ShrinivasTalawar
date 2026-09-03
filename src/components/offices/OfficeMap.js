import {
  MapPin,
  Navigation,
} from "lucide-react";

import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function OfficeMap({ office }) {
  if (!office) {
    return null;
  }

  const isVerified =
    office.isPublished && !office.isPlaceholder;

  return (
    <section
      className="section section-background"
      aria-labelledby="office-map-heading"
    >
      <Container>
        <div id="office-map-heading">
          <SectionHeading
            eyebrow="Map and Directions"
            title={`Location of ${office.name}`}
            description={
              office.location.publicTransportInformation
            }
            align="center"
          />
        </div>

        <div
          style={{
            minHeight: "500px",
            marginTop: "var(--space-10)",
            overflow: "hidden",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-lg)",
            backgroundColor: "var(--color-surface)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <iframe
            src={office.location.googleMapsEmbedUrl}
            title={`Map showing ${office.name}`}
            width="100%"
            height="500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              display: "block",
              border: 0,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "var(--space-3)",
            marginTop: "var(--space-8)",
          }}
        >
          <ButtonLink
            href={office.location.googleMapsUrl}
            icon="map"
            iconPosition="left"
            external
          >
            View on Google Maps
          </ButtonLink>

          {isVerified && (
            <ButtonLink
              href={office.location.directionsUrl}
              variant="outline"
              external
            >
              <Navigation
                size={18}
                aria-hidden="true"
              />

              Get Directions
            </ButtonLink>
          )}
        </div>

        <div
          className="card card-padding"
          style={{
            display: "grid",
            gridTemplateColumns: "42px 1fr",
            gap: "var(--space-4)",
            maxWidth: "760px",
            margin:
              "var(--space-8) auto 0 auto",
          }}
        >
          <MapPin
            size={23}
            color="var(--color-gold-600)"
            aria-hidden="true"
          />

          <div>
            <strong
              style={{
                display: "block",
                color: "var(--color-primary-800)",
              }}
            >
              Nearby landmarks
            </strong>

            <p
              className="text-muted"
              style={{
                marginTop: "var(--space-2)",
                marginBottom: 0,
              }}
            >
              {office.location.nearbyLandmarks.join(", ")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}