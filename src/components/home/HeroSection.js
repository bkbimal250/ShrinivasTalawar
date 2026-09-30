import {
  CalendarDays,
  Clock3,
  MapPin,
  Monitor,
} from "lucide-react";

import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import ImageCarousel from "@/components/ui/ImageCarousel";
import advocate from "@/data/advocate";
import { heroImages } from "@/data/hero";

const heroBadges = [
  { icon: Clock3, label: "Open 24 Hours" },
  { icon: Monitor, label: "Online Appointments" },
  { icon: CalendarDays, label: "On-site Services" },
  { icon: MapPin, label: "Padampura" },
];

export default function HeroSection() {
  return (
    <section className="home-hero" aria-labelledby="hero-heading">
      <Container className="home-hero-grid">
        <div className="home-hero-copy animate-fade-up">
          <span className="eyebrow">Legal Practitioner</span>
          <h1 id="hero-heading" className="heading-display text-balance">
            Advocate Shrinivas Talawar
          </h1>
          <span className="gold-line animate-line" aria-hidden="true" />
          <p className="body-large">
            Chhatrapati Sambhajinagar, Maharashtra. Civil, criminal, family,
            property, DRT and documentation-related matters are assessed
            according to their facts and procedural stage.
          </p>
          <div className="hero-actions">
            <ButtonLink href={advocate.phone.href} icon="phone" iconPosition="left">
              Call Office
            </ButtonLink>
            <ButtonLink href="/practice-areas" variant="outlineLight" icon="arrow">
              View Practice Areas
            </ButtonLink>
          </div>
          <div className="hero-badges" aria-label="Availability and services">
            {heroBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <span key={badge.label}>
                  <Icon size={18} aria-hidden="true" />
                  {badge.label}
                </span>
              );
            })}
          </div>
        </div>

        <div className="home-hero-image-wrap animate-scale-in animation-delay-100">
          <ImageCarousel
            images={heroImages}
            ariaLabel="Office and professional gallery"
            className="hero-carousel"
            priorityFirst
            
          />
        </div>

        
      </Container>
    </section>
  );
}
