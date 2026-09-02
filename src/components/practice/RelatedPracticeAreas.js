import PracticeAreaCard from "@/components/practice/PracticeAreaCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  getRelatedPracticeAreas,
} from "@/data/practiceAreas";

export default function RelatedPracticeAreas({
  currentSlug,
  limit = 3,
}) {
  const relatedPracticeAreas =
    getRelatedPracticeAreas(currentSlug, limit);

  if (!relatedPracticeAreas.length) {
    return null;
  }

  return (
    <section
      className="section section-background"
      aria-labelledby="related-practice-areas-heading"
    >
      <Container>
        <SectionHeading
          id="related-practice-areas-heading"
          eyebrow="Related Information"
          title="Other areas of practice"
          description="View professional information concerning other legal matters handled by the office."
          align="center"
        />

        <div
          className="grid-three margin-top-large"
        >
          {relatedPracticeAreas.map((practiceArea) => (
            <PracticeAreaCard
              key={practiceArea.slug}
              practiceArea={practiceArea}
              compact
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
