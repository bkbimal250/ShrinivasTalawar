import { notFound } from "next/navigation";
import {
  Award,
  FileCheck2,
  FileSearch,
  Info,
  Scale,
} from "lucide-react";

import PracticeAreaHeader from "@/components/practice/PracticeAreaHeader";
import RelatedPracticeAreas from "@/components/practice/RelatedPracticeAreas";
import LegalServiceSchema from "@/components/seo/LegalServiceSchema";
import ContactCard from "@/components/ui/ContactCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  getPracticeAreaBySlug,
  getPracticeAreaSlugs,
} from "@/data/practiceAreas";
import {
  createPracticeAreaMetadata,
} from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPracticeAreaSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const practiceArea = getPracticeAreaBySlug(slug);

  return createPracticeAreaMetadata(practiceArea);
}

export default async function PracticeAreaPage({
  params,
}) {
  const { slug } = await params;
  const practiceArea = getPracticeAreaBySlug(slug);

  if (!practiceArea) {
    notFound();
  }

  return (
    <main id="main-content">
      <LegalServiceSchema
        practiceArea={practiceArea}
      />

      <PracticeAreaHeader
        practiceArea={practiceArea}
      />

      <section className="section section-white">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "minmax(0, 1.5fr) minmax(300px, 0.75fr)",
              gap: "var(--space-12)",
              alignItems: "start",
            }}
            className="practice-area-content-grid"
          >
            <article>
              <SectionHeading
                eyebrow="General Information"
                title={`About ${practiceArea.title}`}
                description={practiceArea.introduction}
              />

              <div
                style={{
                  marginTop: "var(--space-10)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-3)",
                    marginBottom: "var(--space-5)",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: "grid",
                      width: "46px",
                      height: "46px",
                      flexShrink: 0,
                      placeItems: "center",
                      borderRadius:
                        "var(--radius-circle)",
                      backgroundColor:
                        "var(--color-gold-100)",
                      color: "var(--color-gold-700)",
                    }}
                  >
                    <FileCheck2 size={21} />
                  </span>

                  <h2
                    className="heading-three"
                    style={{
                      margin: 0,
                    }}
                  >
                    Matters may include
                  </h2>
                </div>

                <ul className="legal-list">
                  {practiceArea.matters.map((matter) => (
                    <li key={matter}>{matter}</li>
                  ))}
                </ul>
              </div>

              <div
                className="card card-padding"
                style={{
                  marginTop: "var(--space-10)",
                  borderLeft:
                    "4px solid var(--color-gold-500)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-3)",
                  }}
                >
                  <FileSearch
                    size={23}
                    color="var(--color-gold-700)"
                    aria-hidden="true"
                  />

                  <h2
                    className="heading-three"
                    style={{
                      margin: 0,
                    }}
                  >
                    Document assessment
                  </h2>
                </div>

                <p
                  className="text-muted"
                  style={{
                    marginTop: "var(--space-4)",
                    marginBottom: 0,
                  }}
                >
                  Relevant notices, agreements, court papers,
                  transaction records, correspondence and
                  supporting documents should be provided for
                  assessment. The documents required will
                  depend upon the nature and procedural stage
                  of the matter.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "48px minmax(0, 1fr)",
                  gap: "var(--space-4)",
                  marginTop: "var(--space-8)",
                  padding: "var(--space-5)",
                  border:
                    "1px solid var(--color-border)",
                  borderRadius:
                    "var(--radius-md)",
                  backgroundColor:
                    "var(--color-background-secondary)",
                }}
              >
                <Info
                  size={23}
                  color="var(--color-gold-700)"
                  aria-hidden="true"
                />

                <p
                  style={{
                    margin: 0,
                    color:
                      "var(--color-text-secondary)",
                    fontSize: "var(--font-size-sm)",
                  }}
                >
                  This page contains general professional
                  information only. It is not legal advice or
                  an assurance regarding the outcome of any
                  proceeding.
                </p>
              </div>
            </article>

            <aside className="practice-area-sidebar">
              <div className="card card-padding card-gold-top">
                <span className="eyebrow">Practice Summary</span>
                <h2 className="heading-three">
                  {practiceArea.highlight || practiceArea.title}
                </h2>

                <div className="practice-area-summary-list">
                  {practiceArea.caseSolved && (
                    <div className="practice-area-summary-item">
                      <Award size={20} aria-hidden="true" />
                      <span>
                        <strong>{practiceArea.caseSolved}+</strong>
                        <small>Cases Solved</small>
                      </span>
                    </div>
                  )}

                  <div className="practice-area-summary-item">
                    <Scale size={20} aria-hidden="true" />
                    <span>
                      <strong>{practiceArea.matters.length}</strong>
                      <small>Matter Types Covered</small>
                    </span>
                  </div>
                </div>
              </div>

              <ContactCard
                title="Discuss Appointment Availability"
                compact
              />
            </aside>
          </div>
        </Container>
      </section>

      <RelatedPracticeAreas
        currentSlug={practiceArea.slug}
        limit={3}
      />
    </main>
  );
}
