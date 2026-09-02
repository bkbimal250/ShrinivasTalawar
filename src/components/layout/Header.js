import Link from "next/link";
import {
  ChevronDown,
  Phone,
  Scale,
} from "lucide-react";

import MobileMenu from "@/components/layout/MobileMenu";
import Container from "@/components/ui/Container";
import advocate from "@/data/advocate";
import { mainNavigation } from "@/data/navigation";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: "var(--z-sticky)",
        backgroundColor: "rgba(11, 23, 42, 0.97)",
        color: "var(--color-white)",
        boxShadow: "var(--shadow-md)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div
        className="desktop-only"
        style={{
          borderBottom: "1px solid var(--color-border-dark)",
          backgroundColor: "var(--color-primary-950)",
        }}
      >
        <Container
          style={{
            display: "flex",
            minHeight: "36px",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-5)",
            color: "rgba(255,255,255,0.7)",
            fontSize: "var(--font-size-xs)",
          }}
        >
          <span>
            Legal practitioner in Chhatrapati Sambhajinagar,
            Maharashtra
          </span>

          <span>{advocate.availability.label}</span>
        </Container>
      </div>

      <Container
        style={{
          display: "flex",
          minHeight: "var(--header-height)",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-6)",
        }}
      >
        <Link
          href="/"
          aria-label={`${advocate.fullName} homepage`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-3)",
            color: "var(--color-white)",
            textDecoration: "none",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "grid",
              width: "46px",
              height: "46px",
              flexShrink: 0,
              placeItems: "center",
              border: "1px solid var(--color-gold-400)",
              borderRadius: "var(--radius-circle)",
              color: "var(--color-gold-300)",
            }}
          >
            <Scale size={23} />
          </span>

          <span
            style={{
              display: "grid",
              lineHeight: 1.15,
            }}
          >
            <strong
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.15rem",
                fontWeight: "var(--font-weight-regular)",
                letterSpacing: "0.025em",
              }}
            >
              Shrinivas Talawar
            </strong>

            <span
              style={{
                marginTop: "0.3rem",
                color: "var(--color-gold-300)",
                fontSize: "0.65rem",
                fontWeight: "var(--font-weight-bold)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Advocate
            </span>
          </span>
        </Link>

        <nav
          className="desktop-only"
          aria-label="Primary navigation"
        >
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-8)",
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}
          >
            {mainNavigation.map((item) => (
              <li
                key={item.href}
                style={{
                  position: "relative",
                }}
              >
                {item.children?.length ? (
                  <details
                    style={{
                      position: "relative",
                    }}
                  >
                    <summary
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        color: "rgba(255,255,255,0.9)",
                        fontSize: "var(--font-size-sm)",
                        fontWeight: "var(--font-weight-semibold)",
                        cursor: "pointer",
                        listStyle: "none",
                      }}
                    >
                      {item.label}

                      <ChevronDown
                        size={15}
                        aria-hidden="true"
                      />
                    </summary>

                    <div
                      style={{
                        position: "absolute",
                        top: "calc(100% + 1.25rem)",
                        left: "50%",
                        width: "310px",
                        padding: "var(--space-3)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: "var(--color-white)",
                        boxShadow: "var(--shadow-lg)",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <Link
                        href={item.href}
                        style={{
                          display: "block",
                          padding: "0.7rem 0.8rem",
                          borderBottom:
                            "1px solid var(--color-border)",
                          color: "var(--color-primary-800)",
                          fontSize: "var(--font-size-sm)",
                          fontWeight:
                            "var(--font-weight-bold)",
                          textDecoration: "none",
                        }}
                      >
                        View all practice areas
                      </Link>

                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          style={{
                            display: "block",
                            padding: "0.65rem 0.8rem",
                            borderRadius:
                              "var(--radius-xs)",
                            color:
                              "var(--color-text-secondary)",
                            fontSize:
                              "var(--font-size-sm)",
                            textDecoration: "none",
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      fontSize: "var(--font-size-sm)",
                      fontWeight:
                        "var(--font-weight-semibold)",
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="desktop-only"
          style={{
            flexShrink: 0,
          }}
        >
          <a
            href={advocate.phone.href}
            className="button button-primary"
            aria-label={`Call ${advocate.fullName} at ${advocate.phone.display}`}
          >
            <Phone size={17} aria-hidden="true" />
            <span>{advocate.phone.display}</span>
          </a>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}