import Image from "next/image";
import {
  FileSearch,
  Landmark,
} from "lucide-react";

import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import advocate from "@/data/advocate";
import advocateImage from "../../../public/images/advocate-shrinivas-talawar.webp";

const profileNotes = [
  {
    icon: Landmark,
    title: "Practice Areas",
    text: "Civil, criminal, family, property, cheque-bounce, DRT and documentation-related matters.",
  },
  {
    icon: FileSearch,
    title: "Case Assessment",
    text: "Relevant facts, notices, agreements, court papers and transaction records are reviewed according to the matter.",
  },
];

export default function IntroductionSection() {
  return (
    <section
      className="section section-white"
      aria-labelledby="professional-introduction-heading"
    >
      <Container>
        <div className="intro-split">
          <div>
            <SectionHeading
              id="professional-introduction-heading"
              eyebrow="Professional Profile"
              title="Legal assistance based on the facts and circumstances of each matter"
              description={advocate.shortDescription}
              headingLevel="h2"
            />

            <div className="prose-block">
              {advocate.description.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="intro-notes">
              {profileNotes.map((note) => {
                const Icon = note.icon;
                return (
                  <article key={note.title} className="mini-info-card">
                    <span className="icon-box" aria-hidden="true">
                      <Icon size={21} />
                    </span>
                    <div>
                      <h3>{note.title}</h3>
                      <p>{note.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="margin-top-medium">
              <ButtonLink href="/about" variant="outline" icon="arrow">
                View Professional Profile
              </ButtonLink>
            </div>
          </div>

          <div className="intro-image-panel">
            <Image
              src={advocateImage}
              alt="Advocate Shrinivas Talawar in a professional office setting"
              width={760}
              height={900}
              sizes="(max-width: 767px) 100vw, 45vw"
              className="intro-profile-image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
