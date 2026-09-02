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
import { practiceAreas } from "@/data/practiceAreas";
import { footerNavigation } from "@/data/navigation";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-primary-950)",
        color: "rgba(255,255,255,0.76)",
      }}
    >
      <Container
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "var(--space-12)",
          paddingTop: "var(--space-16)",
          paddingBottom: "var(--space-16)",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-3)",
              color: "var(--color-white)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "grid",
                width: "48px",
                height: "48px",
                placeItems: "center",
                border:
                  "1px solid var(--color-gold-400)",
                borderRadius: "var(--radius-circle)",
                color: "var(--color-gold-300)",
              }}
            >
              <Scale size={23} />
            </span>

            <span>
              <strong
                style={{
                  display: "block",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.2rem",
                  fontWeight:
                    "var(--font-weight-regular)",
                }}
              >
                Shrinivas Talawar
              </strong>

              <span
                style={{
                  color: "var(--color-gold-300)",
                  fontSize: "var(--font-size-xs)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                Advocate
              </span>
            </span>
          </div>

          <p
            style={{
              maxWidth: "390px",
              marginTop: "var(--space-5)",
              marginBottom: 0,
              color: "rgba(255,255,255,0.6)",
              fontSize: "var(--font-size-sm)",
              lineHeight: "var(--line-height-relaxed)",
            }}
          >
            Professional information concerning civil,
            criminal, family and related legal matters in
            Chhatrapati Sambhajinagar, Maharashtra.
          </p>
        </div>

        <div>
          <h2
            style={{
              marginBottom: "var(--space-5)",
              color: "var(--color-gold-300)",
              fontSize: "var(--font-size-sm)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Quick links
          </h2>

          <ul
            style={{
              display: "grid",
              gap: "var(--space-3)",
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}
          >
            {footerNavigation.profile.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    fontSize: "var(--font-size-sm)",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2
            style={{
              marginBottom: "var(--space-5)",
              color: "var(--color-gold-300)",
              fontSize: "var(--font-size-sm)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Practice areas
          </h2>

          <ul
            style={{
              display: "grid",
              gap: "var(--space-3)",
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}
          >
            {practiceAreas.map((practiceArea) => (
              <li key={practiceArea.slug}>
                <Link
                  href={`/practice-areas/${practiceArea.slug}`}
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    fontSize: "var(--font-size-sm)",
                    textDecoration: "none",
                  }}
                >
                  {practiceArea.menuTitle || practiceArea.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2
            style={{
              marginBottom: "var(--space-5)",
              color: "var(--color-gold-300)",
              fontSize: "var(--font-size-sm)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Office information
          </h2>

          <div
            style={{
              display: "grid",
              gap: "var(--space-4)",
              fontSize: "var(--font-size-sm)",
            }}
          >
            <p
              style={{
                display: "grid",
                gridTemplateColumns: "20px 1fr",
                gap: "var(--space-3)",
                margin: 0,
              }}
            >
              <MapPin
                size={18}
                color="var(--color-gold-400)"
                aria-hidden="true"
              />

              <span>{advocate.address.shortAddress}</span>
            </p>

            <p
              style={{
                display: "grid",
                gridTemplateColumns: "20px 1fr",
                gap: "var(--space-3)",
                margin: 0,
              }}
            >
              <Phone
                size={18}
                color="var(--color-gold-400)"
                aria-hidden="true"
              />

              <a
                href={advocate.phone.href}
                style={{
                  color: "inherit",
                }}
              >
                {advocate.phone.display}
              </a>
            </p>

            <p
              style={{
                display: "grid",
                gridTemplateColumns: "20px 1fr",
                gap: "var(--space-3)",
                margin: 0,
              }}
            >
              <MessageCircle
                size={18}
                color="var(--color-gold-400)"
                aria-hidden="true"
              />

              <a
                href={advocate.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "inherit",
                }}
              >
                WhatsApp office
              </a>
            </p>

            <p
              style={{
                display: "grid",
                gridTemplateColumns: "20px 1fr",
                gap: "var(--space-3)",
                margin: 0,
              }}
            >
              <Clock3
                size={18}
                color="var(--color-gold-400)"
                aria-hidden="true"
              />

              <span>{advocate.availability.label}</span>
            </p>
          </div>
        </div>
      </Container>

      <div
        style={{
          borderTop: "1px solid var(--color-border-dark)",
        }}
      >
        <Container
          style={{
            paddingTop: "var(--space-6)",
            paddingBottom: "var(--space-6)",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.45)",
              fontSize: "var(--font-size-xs)",
              lineHeight: "1.75",
            }}
          >
            {advocate.disclaimer}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "var(--space-4)",
              marginTop: "var(--space-5)",
              color: "rgba(255,255,255,0.45)",
              fontSize: "var(--font-size-xs)",
            }}
          >
            <span>
              © {new Date().getFullYear()} Advocate Shrinivas
              Talawar. All rights reserved.
            </span>

            <nav aria-label="Legal links">
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--space-5)",
                }}
              >
                {footerNavigation.legal.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      color: "inherit",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </Container>
      </div>
    </footer>
  );
}