import Image from "next/image";
import {
  FileText,
  Landmark,
  Scale,
} from "lucide-react";

import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
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
  },
  {
    title: "Criminal and family proceedings",
    text: "Sensitive matters are approached through factual assessment, document review and attention to the appropriate court process.",
    image: meetingImage,
    alt: "Professional office environment for legal discussions",
    icon: Scale,
    href: "/practice-areas/criminal-law",
    reverse: true,
  },
  {
    title: "Documentation, Section 138 and DRT matters",
    text: "Notices, agreements, financial documents and tribunal-related records are reviewed according to the matter and applicable timelines.",
    image: cabinImage,
    alt: "Advocate cabin and document review area",
    icon: FileText,
    href: "/practice-areas/section-138-cheque-bounce",
  },
];

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
            return (
              <article key={item.title} className={`split-feature ${item.reverse ? "is-reverse" : ""}`}>
                <div className="split-feature-copy">
                  <span className="icon-box" aria-hidden="true">
                    <Icon size={23} />
                  </span>
                  <h2 className="heading-two text-balance">{item.title}</h2>
                  <p>{item.text}</p>
                  <ButtonLink href={item.href} variant="outline" icon="arrow">
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
