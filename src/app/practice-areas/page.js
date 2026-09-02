import PracticeAreaCard from "@/components/practice/PracticeAreaCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { practiceAreas } from "@/data/practiceAreas";
import { practiceAreasMetadata } from "@/lib/metadata";

export const metadata = practiceAreasMetadata;

export default function PracticeAreasPage() {
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
                name: "Practice Areas",
                href: "/practice-areas",
              },
            ]}
            showSchema
            className="text-light"
          />

          <div
            style={{
              maxWidth: "850px",
              marginTop: "var(--space-12)",
            }}
          >
            <span className="eyebrow">
              Areas of Practice
            </span>

            <h1 className="heading-one text-light text-balance">
              Professional information concerning legal
              matters
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
              Legal assistance is available for civil,
              criminal, family, property, financial recovery
              and documentation-related matters.
            </p>
          </div>
        </Container>
      </section>

      <section className="section section-background">
        <Container>
          <SectionHeading
            eyebrow="Legal Information"
            title="Select an area of practice"
            description="Each page provides general information about the nature of the matter and the types of proceedings that may be involved."
            align="center"
          />

          <div className="grid-three margin-top-large">
            {practiceAreas.map((practiceArea) => (
              <PracticeAreaCard
                key={practiceArea.slug}
                practiceArea={practiceArea}
              />
            ))}
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

            <h2 className="heading-two">
              Every legal matter depends on its individual
              circumstances
            </h2>

            <p
              className="section-description section-description-center"
            >
              The information on these pages is general in
              nature. An appropriate legal assessment requires
              review of the relevant facts, documents,
              evidence and applicable procedural requirements.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}