import AppointmentSection from "@/components/home/AppointmentSection";
import HeroSection from "@/components/home/HeroSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import LocationSection from "@/components/home/LocationSection";
import PracticeAreasSection from "@/components/home/PracticeAreasSection";
import ProfessionalApproach from "@/components/home/ProfessionalApproach";
import FAQSchema from "@/components/seo/FAQSchema";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { homepageFaqs } from "@/data/faqs";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata;

function FAQSection() {
  return (
    <section
      className="section section-white"
      aria-labelledby="homepage-faq-heading"
    >
      <FAQSchema faqs={homepageFaqs} />
      <Container size="small">
        <div>
          <SectionHeading
            id="homepage-faq-heading"
            eyebrow="Frequently Asked Questions"
            title="Legal and appointment information"
            description="General information about the office, appointments and areas of practice."
            align="center"
          />
        </div>
        <div style={{ display: "grid", gap: "var(--space-4)", marginTop: "var(--space-10)" }}>
          {homepageFaqs.map((faq) => (
            <details className="faq-item" key={faq.id}>
              <summary>{faq.question}</summary>
              <div className="faq-answer"><p>{faq.answer}</p></div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <IntroductionSection />
      <PracticeAreasSection />
      <ProfessionalApproach />
      <AppointmentSection />
      <LocationSection />
      <FAQSection />
    </main>
  );
}
