import {
  FileSearch,
  Landmark,
  MapPin,
  Scale,
  ShieldCheck,
} from "lucide-react";

import Breadcrumb from "@/components/ui/Breadcrumb";
import ButtonLink from "@/components/ui/ButtonLink";
import ContactCard from "@/components/ui/ContactCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import advocate from "@/data/advocate";
import { aboutMetadata } from "@/lib/metadata";

export const metadata = aboutMetadata;

const profilePoints = [
  {
    id: 1,
    icon: FileSearch,
    title: "Case Assessment",
    description:
      "Assessment of the relevant facts, documents, notices and procedural circumstances of a matter.",
  },
  {
    id: 2,
    icon: Landmark,
    title: "Court Proceedings",
    description:
      "Professional assistance and representation in matters before the appropriate court, tribunal or authority.",
  },
  {
    id: 3,
    icon: Scale,
    title: "Matter-Specific Approach",
    description:
      "Each matter is considered according to its individual circumstances and applicable legal provisions.",
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "Professional Confidentiality",
    description:
      "Information received during a formal professional engagement is handled with appropriate care.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section
        className="section-dark legal-pattern"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container
          style={{
            paddingTop: "var(--space-10)",
            paddingBottom: "var(--space-20)",
          }}
        >
          <Breadcrumb
            items={[
              {
                name: "Professional Profile",
                href: "/about",
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
              Professional Profile
            </span>

            <h1 className="heading-one text-light text-balance">
              Advocate Shrinivas Talawar
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
              Legal practitioner based in Padampura,
              Chhatrapati Sambhajinagar, Maharashtra.
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
                eyebrow="About the Practice"
                title="Professional legal assistance across multiple areas of law"
                description={advocate.shortDescription}
              />

              <div
                style={{
                  marginTop: "var(--space-6)",
                  color: "var(--color-text-secondary)",
                }}
              >
                {advocate.description.slice(1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <p>
                  The appropriate legal process depends upon
                  the facts, available evidence, applicable
                  statutory provisions and procedural stage of
                  each individual matter.
                </p>

                <p>
                  Clients should provide complete and accurate
                  information together with the relevant
                  notices, agreements, court papers,
                  correspondence and transaction records for
                  assessment.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--space-3)",
                  marginTop: "var(--space-8)",
                }}
              >
                <ButtonLink
                  href="/practice-areas"
                  icon="arrow"
                >
                  View Practice Areas
                </ButtonLink>

                <ButtonLink
                  href="/contact"
                  variant="outline"
                  icon="map"
                  iconPosition="left"
                >
                  Office Information
                </ButtonLink>
              </div>
            </div>

            <ContactCard compact />
          </div>
        </Container>
      </section>

      <section className="section section-background">
        <Container>
          <SectionHeading
            eyebrow="Professional Approach"
            title="Assessment based on facts, records and applicable law"
            description="Professional assistance is provided according to the circumstances and procedural requirements of the matter."
            align="center"
          />

          <div className="grid-four margin-top-large">
            {profilePoints.map((point) => {
              const IconComponent = point.icon;

              return (
                <article
                  key={point.id}
                  className="card card-hover card-padding"
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: "grid",
                      width: "52px",
                      height: "52px",
                      marginBottom: "var(--space-5)",
                      placeItems: "center",
                      border:
                        "1px solid var(--color-gold-300)",
                      borderRadius:
                        "var(--radius-circle)",
                      backgroundColor:
                        "var(--color-gold-100)",
                      color: "var(--color-gold-700)",
                    }}
                  >
                    <IconComponent size={23} />
                  </span>

                  <h2 className="heading-three">
                    {point.title}
                  </h2>

                  <p
                    className="text-muted"
                    style={{
                      marginTop: "var(--space-3)",
                      marginBottom: 0,
                    }}
                  >
                    {point.description}
                  </p>
                </article>
              );
            })}
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
            <MapPin
              size={32}
              color="var(--color-gold-600)"
              aria-hidden="true"
              style={{
                margin:
                  "0 auto var(--space-5) auto",
              }}
            />

            <span className="eyebrow">
              Office Location
            </span>

            <h2 className="heading-two">
              Padampura, Chhatrapati Sambhajinagar
            </h2>

            <p
              className="section-description section-description-center"
            >
              {advocate.address.fullAddress}
            </p>

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
          </div>
        </Container>
      </section>
    </main>
  );
}