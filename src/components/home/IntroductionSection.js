import {
  FileSearch,
  Landmark,
  Scale,
} from "lucide-react";

import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import advocate from "@/data/advocate";

export default function IntroductionSection() {
  return (
    <section
      className="section section-white"
      aria-labelledby="professional-introduction-heading"
    >
      <Container>
        <div
          className="grid-two"
          style={{
            alignItems: "stretch",
          }}
        >
          <div>
            <SectionHeading
              id="professional-introduction-heading"
              eyebrow="Professional Profile"
              title="Legal assistance based on the facts and circumstances of each matter"
              description={advocate.shortDescription}
              headingLevel="h2"
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
            </div>

            <div
              style={{
                marginTop: "var(--space-8)",
              }}
            >
              <ButtonLink
                href="/about"
                variant="outline"
                icon="arrow"
              >
                View Professional Profile
              </ButtonLink>
            </div>
          </div>

          <div
            className="legal-pattern"
            style={{
              position: "relative",
              display: "grid",
              alignContent: "center",
              gap: "var(--space-5)",
              minHeight: "470px",
              padding: "var(--space-8)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              backgroundColor:
                "var(--color-background-secondary)",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "var(--space-6)",
                right: "var(--space-6)",
                color: "rgba(182,144,80,0.15)",
              }}
            >
              <Scale size={130} strokeWidth={1} />
            </div>

            <article
              className="card card-padding"
              style={{
                position: "relative",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "grid",
                  width: "48px",
                  height: "48px",
                  marginBottom: "var(--space-4)",
                  placeItems: "center",
                  borderRadius: "var(--radius-circle)",
                  backgroundColor: "var(--color-gold-100)",
                  color: "var(--color-gold-700)",
                }}
              >
                <Landmark size={22} />
              </span>

              <h3 className="heading-three">
                Areas of practice
              </h3>

              <p
                className="text-muted"
                style={{
                  marginTop: "var(--space-3)",
                  marginBottom: 0,
                }}
              >
                Civil, criminal, family, property, cheque
                dishonour, DRT and related proceedings.
              </p>
            </article>

            <article
              className="card card-padding"
              style={{
                position: "relative",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "grid",
                  width: "48px",
                  height: "48px",
                  marginBottom: "var(--space-4)",
                  placeItems: "center",
                  borderRadius: "var(--radius-circle)",
                  backgroundColor: "var(--color-gold-100)",
                  color: "var(--color-gold-700)",
                }}
              >
                <FileSearch size={22} />
              </span>

              <h3 className="heading-three">
                Case assessment
              </h3>

              <p
                className="text-muted"
                style={{
                  marginTop: "var(--space-3)",
                  marginBottom: 0,
                }}
              >
                Review of relevant facts, notices, agreements,
                records and procedural circumstances.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
