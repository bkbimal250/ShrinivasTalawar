import {
  Building2,
  Clock3,
  MapPin,
  Monitor,
  Phone,
} from "lucide-react";

import Breadcrumb from "@/components/ui/Breadcrumb";
import ContactCard from "@/components/ui/ContactCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import advocate from "@/data/advocate";
import { contactMetadata } from "@/lib/metadata";
import {
  createContactPageSchema,
  serializeSchema,
} from "@/lib/schema";

export const metadata = contactMetadata;

export default function ContactPage() {
  const contactPageSchema = createContactPageSchema();

  return (
    <main id="main-content">
      <script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(contactPageSchema),
        }}
      />

      <section className="section-dark legal-pattern">
        <Container
          style={{
            paddingTop: "var(--space-10)",
            paddingBottom: "var(--space-20)",
          }}
        >
          <Breadcrumb
            items={[
              {
                name: "Contact",
                href: "/contact",
              },
            ]}
            showSchema
            className="text-light"
          />

          <div
            style={{
              maxWidth: "820px",
              marginTop: "var(--space-12)",
            }}
          >
            <span className="eyebrow">
              Office Information
            </span>

            <h1 className="heading-one text-light text-balance">
              Contact and appointment details
            </h1>

            <span
              className="gold-line"
              aria-hidden="true"
            />

            <p
              className="body-large"
              style={{
                marginTop: "var(--space-6)",
                marginBottom: 0,
                color: "rgba(255,255,255,0.76)",
              }}
            >
              Office, telephone and appointment information
              for Advocate Shrinivas Talawar.
            </p>
          </div>
        </Container>
      </section>

      <section className="section section-white">
        <Container>
          <div
            className="grid-two"
            style={{
              alignItems: "start",
            }}
          >
            <div>
              <SectionHeading
                eyebrow="Contact Details"
                title="Office in Padampura, Chhatrapati Sambhajinagar"
                description="Appointment availability should be confirmed directly with the office before visiting."
              />

              <div
                style={{
                  display: "grid",
                  gap: "var(--space-6)",
                  marginTop: "var(--space-10)",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "52px 1fr",
                    gap: "var(--space-4)",
                  }}
                >
                  <MapPin
                    size={25}
                    color="var(--color-gold-600)"
                    aria-hidden="true"
                  />

                  <div>
                    <h2 className="heading-three">
                      Office Address
                    </h2>

                    <address className="text-muted">
                      {advocate.address.fullAddress}
                    </address>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "52px 1fr",
                    gap: "var(--space-4)",
                  }}
                >
                  <Phone
                    size={24}
                    color="var(--color-gold-600)"
                    aria-hidden="true"
                  />

                  <div>
                    <h2 className="heading-three">
                      Telephone
                    </h2>

                    <a
                      href={advocate.phone.href}
                      className="link"
                    >
                      {advocate.phone.display}
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "52px 1fr",
                    gap: "var(--space-4)",
                  }}
                >
                  <Clock3
                    size={24}
                    color="var(--color-gold-600)"
                    aria-hidden="true"
                  />

                  <div>
                    <h2 className="heading-three">
                      Availability
                    </h2>

                    <p className="text-muted">
                      {advocate.availability.label}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "52px 1fr",
                    gap: "var(--space-4)",
                  }}
                >
                  <Monitor
                    size={24}
                    color="var(--color-gold-600)"
                    aria-hidden="true"
                  />

                  <div>
                    <h2 className="heading-three">
                      Appointment Options
                    </h2>

                    <p className="text-muted">
                      Online appointments and on-site
                      services are available.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "52px 1fr",
                    gap: "var(--space-4)",
                  }}
                >
                  <Building2
                    size={24}
                    color="var(--color-gold-600)"
                    aria-hidden="true"
                  />

                  <div>
                    <h2 className="heading-three">
                      Landmark
                    </h2>

                    <p className="text-muted">
                      Opposite State Consumer Forum and
                      Government Ladies Hostel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactCard />
          </div>
        </Container>
      </section>

      <section className="section section-background">
        <Container>
          <SectionHeading
            eyebrow="Map and Directions"
            title="Office location"
            description="Surya Apartment, Samadhan Colony, Padampura, Chhatrapati Sambhajinagar - 431001."
            align="center"
          />

          <div
            style={{
              minHeight: "500px",
              marginTop: "var(--space-10)",
              overflow: "hidden",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--color-white)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <iframe
              src={advocate.address.googleMapsEmbedUrl}
              title="Office location of Advocate Shrinivas Talawar"
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
        </Container>
      </section>
    </main>
  );
}
