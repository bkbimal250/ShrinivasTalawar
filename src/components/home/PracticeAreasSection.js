import PracticeAreaCard from "@/components/practice/PracticeAreaCard";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { practiceAreas } from "@/data/practiceAreas";

export default function PracticeAreasSection() {
  const featuredPracticeAreas = practiceAreas.slice(0, 6);

  return (
    <section
      id="practice-areas"
      className="section section-background"
      aria-labelledby="practice-areas-heading"
    >
      <Container>
        <div>
          <SectionHeading
            id="practice-areas-heading"
            eyebrow="Areas of Practice"
            title="Professional information concerning legal matters"
            description="The appropriate legal process depends upon the facts, available documents, applicable law and procedural stage of each matter."
            align="center"
          />
        </div>

        <div className="grid-three margin-top-large">
          {featuredPracticeAreas.map((practiceArea) => (
            <PracticeAreaCard
              key={practiceArea.slug}
              practiceArea={practiceArea}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "var(--space-10)",
          }}
        >
          <ButtonLink
            href="/practice-areas"
            variant="dark"
            icon="arrow"
          >
            View All Practice Areas
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
