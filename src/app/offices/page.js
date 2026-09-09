import {
  Building2,
  CalendarDays,
  MapPin,
  Monitor,
} from "lucide-react";

import OfficeGrid from "@/components/offices/OfficeGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  getPublishedOfficeLocations,
  officeLocations,
} from "@/data/officeLocation";
import { SITE_URL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { serializeSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Office Locations",
  description:
    "View confirmed office addresses, appointment availability, contact details and location information for Advocate Shrinivas Talawar in Chhatrapati Sambhajinagar, Navi Mumbai and Pimpri-Chinchwad.",
  pathname: "/offices",
  keywords: [
    "Advocate Shrinivas Talawar office",
    "advocate office in Chhatrapati Sambhajinagar",
    "lawyer office in Aurangabad",
    "advocate office in Padampura",
    "legal office Chhatrapati Sambhajinagar",
    "civil advocate office Aurangabad",
    "criminal lawyer office Aurangabad",
    "family court advocate Aurangabad",
    "advocate office Navi Mumbai",
    "lawyer office Sanpada",
    "advocate office Pimpri-Chinchwad",
    "lawyer office Tathawade",
  ],
});

const officeFeatures = [
  {
    id: 1,
    icon: MapPin,
    title: "Office Information",
    description:
      "View complete address, nearby landmarks, map information and available directions.",
  },
  {
    id: 2,
    icon: CalendarDays,
    title: "Appointment Details",
    description:
      "Review listed availability and confirm an appointment before visiting an office.",
  },
  {
    id: 3,
    icon: Monitor,
    title: "Online Appointments",
    description:
      "Online appointment options are available for suitable matters, subject to confirmation.",
  },
];

export default function OfficesPage() {
  const publishedOffices =
    getPublishedOfficeLocations();

  const officeListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    "@id": `${SITE_URL}/offices#webpage`,
    name: "Office Locations",
    description:
      "Verified office and appointment information for Advocate Shrinivas Talawar.",
    url: `${SITE_URL}/offices`,
    inLanguage: "en-IN",

    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },

    about: {
      "@id": `${SITE_URL}/#legal-service`,
    },

    mainEntity: {
      "@type": "ItemList",
      name: "Verified Office Locations",
      numberOfItems: publishedOffices.length,

      itemListElement: publishedOffices.map(
        (office, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: office.name,
          url: `${SITE_URL}/offices/${office.slug}`,
        })
      ),
    },
  };

  return (
    <main id="main-content">
      <script
        id="office-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(officeListSchema),
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
                name: "Office Locations",
                href: "/offices",
              },
            ]}
            showSchema
            className="text-light"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "minmax(0, 1fr) auto",
              gap: "var(--space-10)",
              alignItems: "end",
              marginTop: "var(--space-12)",
            }}
          >
            <div
              style={{
                maxWidth: "860px",
              }}
            >
              <span className="eyebrow">
                Office Information
              </span>

              <h1 className="heading-one text-light text-balance">
                Office locations and appointment details
              </h1>

              <span
                className="gold-line"
                aria-hidden="true"
              />

              <p
                className="body-large"
                style={{
                  maxWidth: "760px",
                  marginTop: "var(--space-6)",
                  marginBottom: 0,
                  color:
                    "rgba(255,255,255,0.76)",
                }}
              >
                View office addresses, availability,
                appointment options, maps and directions for
                Advocate Shrinivas Talawar.
              </p>
            </div>

            <span
              className="desktop-only"
              aria-hidden="true"
              style={{
                color: "rgba(201,169,110,0.22)",
              }}
            >
              <Building2
                size={150}
                strokeWidth={1}
              />
            </span>
          </div>
        </Container>
      </section>

      <section className="section section-white">
        <Container>
          <SectionHeading
            eyebrow="Before You Visit"
            title="Office and appointment information"
            description="Check the office status and confirm appointment availability before travelling to a listed location."
            align="center"
          />

          <div className="grid-three margin-top-large">
            {officeFeatures.map((feature) => {
              const IconComponent = feature.icon;

              return (
                <article
                  key={feature.id}
                  className="card card-hover card-padding"
                  style={{
                    textAlign: "center",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: "grid",
                      width: "56px",
                      height: "56px",
                      margin:
                        "0 auto var(--space-5)",
                      placeItems: "center",
                      border:
                        "1px solid var(--color-gold-300)",
                      borderRadius:
                        "var(--radius-circle)",
                      backgroundColor:
                        "var(--color-gold-100)",
                      color:
                        "var(--color-gold-700)",
                    }}
                  >
                    <IconComponent size={24} />
                  </span>

                  <h2 className="heading-three">
                    {feature.title}
                  </h2>

                  <p
                    className="text-muted"
                    style={{
                      marginTop: "var(--space-3)",
                      marginBottom: 0,
                    }}
                  >
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section section-background">
        <Container>
          <SectionHeading
            eyebrow="Locations"
            title="Professional office locations"
            description="View confirmed office locations, appointment information, maps and directions."
            align="center"
          />

          <div
            style={{
              marginTop: "var(--space-12)",
            }}
          >
            <OfficeGrid
              offices={officeLocations}
              publishedOnly={false}
            />
          </div>
        </Container>
      </section>

      <section className="section section-white">
        <Container size="medium">
          <div
            className="card card-gold-top card-padding"
            style={{
              textAlign: "center",
            }}
          >
            <span className="eyebrow">
              Important Information
            </span>

            <h2 className="heading-two text-balance">
              Confirm the office before visiting
            </h2>

            <p className="section-description section-description-center">
              Office status, working hours, on-site
              availability and the documents required for an
              initial assessment should be confirmed
              directly with the relevant office before
              travelling.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
