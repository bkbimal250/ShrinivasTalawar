import Image from "next/image";
import {
  FileText,
  Landmark,
  Scale,
} from "lucide-react";

import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import { practiceAreas } from "@/data/practiceAreas";
import officeImage from "../../../public/images/gallery/office-reception.jpeg";
import cabinImage from "../../../public/images/gallery/cabin1.jpeg";
import meetingImage from "../../../public/images/gallery/indoor.jpeg";

const highlights = [
  {
    title: "Civil and property-related matters",
    text: "Civil proceedings, property documentation, possession issues and landlord-tenant matters require careful review of records and procedural position.",
    image: officeImage,
    alt: "Office reception area for professional legal consultations",
    icon: Landmark,
    href: "/practice-areas/civil-law",
    practiceAreaSlugs: ["civil-law", "property-disputes"],
    focus: "Civil, property and possession disputes",
  },
  {
    title: "Criminal and family proceedings",
    text: "Sensitive matters are approached through factual assessment, document review and attention to the appropriate court process.",
    image: meetingImage,
    alt: "Professional office environment for legal discussions",
    icon: Scale,
    href: "/practice-areas/criminal-law",
    reverse: true,
    practiceAreaSlugs: ["criminal-law", "family-law"],
    focus: "Court process and confidential guidance",
  },
  {
    title: "Documentation, Section 138 and DRT matters",
    text: "Notices, agreements, financial documents and tribunal-related records are reviewed according to the matter and applicable timelines.",
    image: cabinImage,
    alt: "Advocate cabin and document review area",
    icon: FileText,
    href: "/practice-areas/section-138-cheque-bounce",
    practiceAreaSlugs: [
      "legal-documentation",
      "section-138-cheque-bounce",
      "debt-recovery-tribunal",
    ],
    focus: "Documents, notices and financial records",
  },
];

function getSolvedCases(slugs = []) {
  return slugs.reduce((total, slug) => {
    const practiceArea = practiceAreas.find((area) => area.slug === slug);

    return total + (practiceArea?.caseSolved || 0);
  }, 0);
}

export default function ServiceHighlightsSection() {
  return (
    <section className="section section-white" aria-labelledby="service-highlights-heading">
      <Container>
        <div className="sr-only">
          <h2 id="service-highlights-heading">Featured legal-service information</h2>
        </div>
        <div className="service-highlight-list">
          {highlights.map((item) => {
            const Icon = item.icon;
            const solvedCases = getSolvedCases(item.practiceAreaSlugs);

            return (
              <article
                key={item.title}
                className={`split-feature service-highlight-item ${
                  item.reverse ? "is-reverse" : ""
                }`}
              >
                <div className="split-feature-copy service-highlight-copy">
                  <div className="service-highlight-top">
                    <span className="icon-box service-highlight-icon" aria-hidden="true">
                      <Icon size={23} />
                    </span>

                    {solvedCases > 0 && (
                      <span className="service-highlight-stat">
                        <strong>{solvedCases}+</strong>
                        <small>Cases Solved</small>
                      </span>
                    )}
                  </div>

                  <span className="service-highlight-focus">
                    {item.focus}
                  </span>

                  <h2 className="heading-two text-balance">{item.title}</h2>
                  <p>{item.text}</p>

                  <ButtonLink
                    href={item.href}
                    variant="primary"
                    icon="arrow"
                    fullWidth
                    className="service-highlight-button"
                    ariaLabel={`View information about ${item.title}`}
                  >
                    View information
                  </ButtonLink>
                </div>
                <div className="split-feature-media">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={760}
                    height={570}
                    sizes="(max-width: 767px) 100vw, 48vw"
                    className="framed-image"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
