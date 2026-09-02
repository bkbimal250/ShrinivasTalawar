import {
  FileSearch,
  MessageSquareText,
  Scale,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const approachItems = [
  {
    id: 1,
    icon: FileSearch,
    title: "Document Assessment",
    description:
      "Relevant notices, agreements, records and supporting documents are considered in relation to the matter.",
  },
  {
    id: 2,
    icon: MessageSquareText,
    title: "Clear Communication",
    description:
      "The applicable legal process and procedural position are explained according to the available information.",
  },
  {
    id: 3,
    icon: Scale,
    title: "Matter-Specific Approach",
    description:
      "Each matter is considered according to its individual facts, circumstances and applicable legal provisions.",
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "Professional Confidentiality",
    description:
      "Information and documents received during a formal professional engagement are handled with appropriate care.",
  },
];

export default function ProfessionalApproach() {
  return (
    <section
      className="section section-dark"
      aria-labelledby="professional-approach-heading"
    >
      <Container>
        <div>
          <SectionHeading
            id="professional-approach-heading"
            eyebrow="Professional Approach"
            title="Careful assessment and clear procedural guidance"
            description="Legal matters require attention to their facts, records, statutory requirements and procedural history."
            align="center"
            theme="dark"
          />
        </div>

        <div
          className="grid-four margin-top-large"
          style={{
            alignItems: "stretch",
          }}
        >
          {approachItems.map((item) => {
            const IconComponent = item.icon;

            return (
              <article
                key={item.id}
                style={{
                  padding: "var(--space-6)",
                  border:
                    "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "var(--radius-md)",
                  backgroundColor:
                    "rgba(255,255,255,0.045)",
                }}
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
                      "1px solid var(--color-gold-400)",
                    borderRadius:
                      "var(--radius-circle)",
                    color: "var(--color-gold-300)",
                  }}
                >
                  <IconComponent size={23} />
                </span>

                <h3
                  className="heading-three"
                  style={{
                    color: "var(--color-white)",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    marginTop: "var(--space-3)",
                    marginBottom: 0,
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "var(--font-size-sm)",
                    lineHeight:
                      "var(--line-height-relaxed)",
                  }}
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
