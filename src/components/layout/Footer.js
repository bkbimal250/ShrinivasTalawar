import Link from "next/link";
import {
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
} from "lucide-react";

import Container from "@/components/ui/Container";
import advocate from "@/data/advocate";
import { footerNavigation } from "@/data/navigation";

const footerPracticeAreas = [
  { label: "Civil Law", href: "/practice-areas/civil-law" },
  { label: "Criminal Law", href: "/practice-areas/criminal-law" },
  { label: "Family Law", href: "/practice-areas/family-law" },
  { label: "Property Matters", href: "/practice-areas/property-disputes" },
  { label: "Section 138 Matters", href: "/practice-areas/section-138-cheque-bounce" },
  { label: "DRT Matters", href: "/practice-areas/debt-recovery-tribunal" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-grid">
        <section>
          <div className="footer-brand">
            <span className="brand-icon" aria-hidden="true">
              <Scale size={23} />
            </span>
            <span className="brand-text">
              <strong>Advocate Shrinivas Talawar</strong>
              <span>Legal Practitioner</span>
            </span>
          </div>
          <p>
            Professional information concerning civil, criminal, family,
            property, financial recovery and documentation-related matters in
            Chhatrapati Sambhajinagar, Maharashtra.
          </p>
        </section>

        <nav aria-label="Footer practice areas">
          <h2>Practice Areas</h2>
          <ul>
            {footerPracticeAreas.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer quick links">
          <h2>Quick Links</h2>
          <ul>
            {footerNavigation.profile.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li><Link href="/disclaimer">Disclaimer</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </nav>

        <section>
          <h2>Main Office</h2>
          <address className="footer-contact-list">
            <span>
              <MapPin size={17} aria-hidden="true" />
              {advocate.address.fullAddress}
            </span>
            <a href={advocate.phone.href}>
              <Phone size={17} aria-hidden="true" />
              {advocate.phone.display}
            </a>
            <a href={advocate.whatsapp.href} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={17} aria-hidden="true" />
              WhatsApp
            </a>
            <span>
              <Clock3 size={17} aria-hidden="true" />
              Open 24 Hours
            </span>
            <a href={advocate.address.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
          </address>
        </section>
      </Container>

      <div className="footer-lower">
        <Container>
          <p className="footer-disclaimer">{advocate.disclaimer}</p>
          <div className="footer-copyright">
            <span>Copyright {new Date().getFullYear()} Advocate Shrinivas Talawar. All rights reserved.</span>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
