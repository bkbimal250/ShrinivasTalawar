import OfficeCard from "@/components/offices/OfficeCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  getNearbyOfficeLocations,
} from "@/data/officeLocation";

export default function RelatedOffices({
  currentSlug,
  limit = 2,
}) {
  const relatedOffices = getNearbyOfficeLocations(
    currentSlug,
    limit
  );

  if (!relatedOffices.length) {
    return null;
  }

  return (
    <section className="section section-white">
      <Container>
        <SectionHeading
          eyebrow="Other Locations"
          title="Related office locations"
          description="View verified office and appointment information for other locations."
          align="center"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "var(--space-8)",
            maxWidth:
              relatedOffices.length === 1
                ? "560px"
                : "900px",
            margin:
              "var(--space-12) auto 0 auto",
          }}
        >
          {relatedOffices.map((office) => (
            <OfficeCard
              key={office.id}
              office={office}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}