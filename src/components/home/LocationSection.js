import {
  Building2,
  Clock3,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";

import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import advocate from "@/data/advocate";

export default function LocationSection() {
  return (
    <section
      className="section section-background"
      aria-labelledby="location-heading"
    >
      <Container>
        <div>
          <SectionHeading
            id="location-heading"
            eyebrow="Office Location"
            title="Padampura, Chhatrapati Sambhajinagar"
            description="The office is located at Surya Apartment, opposite the State Consumer Forum and Government Ladies Hostel."
            align="center"
          />
        </div>

        <div
          className="grid-two margin-top-large"
          style={{
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              minHeight: "460px",
              overflow: "hidden",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--color-surface)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <iframe
              src={advocate.address.googleMapsEmbedUrl}
              title="Office location of Advocate Shrinivas Talawar"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                display: "block",
                minHeight: "460px",
                border: 0,
              }}
            />
          </div>

          <article className="card card-gold-top">
            <div
              className="card-padding"
              style={{
                display: "grid",
                alignContent: "center",
                minHeight: "100%",
                gap: "var(--space-6)",
              }}
            >
              <div>
                <span className="eyebrow">
                  Office Address
                </span>

                <h3 className="heading-two">
                  Advocate Shrinivas Talawar
                </h3>
              </div>

              <div
                style={{
                  display: "grid",
                  gap: "var(--space-5)",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "42px 1fr",
                    gap: "var(--space-4)",
                  }}
                >
                  <MapPin
                    size={23}
                    color="var(--color-gold-600)"
                    aria-hidden="true"
                  />

                  <address
                    style={{
                      color:
                        "var(--color-text-secondary)",
                      fontStyle: "normal",
                    }}
                  >
                    {advocate.address.fullAddress}
                  </address>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "42px 1fr",
                    gap: "var(--space-4)",
                  }}
                >
                  <Phone
                    size={22}
                    color="var(--color-gold-600)"
                    aria-hidden="true"
                  />

                  <a
                    href={advocate.phone.href}
                    className="link"
                  >
                    {advocate.phone.display}
                  </a>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "42px 1fr",
                    gap: "var(--space-4)",
                  }}
                >
                  <Clock3
                    size={22}
                    color="var(--color-gold-600)"
                    aria-hidden="true"
                  />

                  <span className="text-muted">
                    {advocate.availability.label}
                  </span>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "42px 1fr",
                    gap: "var(--space-4)",
                  }}
                >
                  <Building2
                    size={22}
                    color="var(--color-gold-600)"
                    aria-hidden="true"
                  />

                  <span className="text-muted">
                    Online appointments and on-site services
                    are available.
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--space-3)",
                  marginTop: "var(--space-2)",
                }}
              >
                <ButtonLink
                  href={advocate.address.googleMapsUrl}
                  icon="map"
                  iconPosition="left"
                  external
                >
                  Get Directions
                </ButtonLink>

                <ButtonLink
                  href={advocate.phone.href}
                  variant="outline"
                  icon="phone"
                  iconPosition="left"
                >
                  Call Office
                </ButtonLink>
              </div>

              <p
                style={{
                  display: "flex",
                  gap: "var(--space-2)",
                  margin: 0,
                  paddingTop: "var(--space-5)",
                  borderTop:
                    "1px solid var(--color-border)",
                  color: "var(--color-text-muted)",
                  fontSize: "var(--font-size-xs)",
                }}
              >
                <Navigation
                  size={15}
                  aria-hidden="true"
                />

                Confirm appointment availability before
                visiting the office.
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
