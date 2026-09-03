import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import OfficeGrid from "@/components/offices/OfficeGrid";
import { getPrimaryOfficeLocation, officeLocations } from "@/data/officeLocation";

export default function OfficePreviewSection() {
  const primaryOffice = getPrimaryOfficeLocation();

  return (
    <section className="section section-background" aria-labelledby="office-preview-heading">
      <Container>
        <SectionHeading
          id="office-preview-heading"
          eyebrow="Office Locations"
          title="Office locations for appointments"
          description="The Padampura office is the primary office, with additional confirmed office locations listed for appointment and contact information."
          align="center"
        />

        <div className="margin-top-large">
          <OfficeGrid offices={officeLocations.slice(0, 3)} publishedOnly />
        </div>

        <div className="section-actions">
          {primaryOffice && (
            <ButtonLink href={`/offices/${primaryOffice.slug}`} icon="map" iconPosition="left">
              View Office Details
            </ButtonLink>
          )}
          <ButtonLink href="/offices" variant="outline" icon="arrow">
            View All Offices
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
