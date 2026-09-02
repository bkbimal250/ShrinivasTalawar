"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";

import advocate from "@/data/advocate";
import { mainNavigation } from "@/data/navigation";

export default function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  useEffect(() => {
    const resetMenu = requestAnimationFrame(() => {
      setIsOpen(false);
      setExpandedMenu(null);
    });

    return () => cancelAnimationFrame(resetMenu);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  function toggleSubmenu(href) {
    setExpandedMenu((current) =>
      current === href ? null : href
    );
  }

  return (
    <div className="mobile-only">
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen(true)}
        style={{
          display: "grid",
          width: "44px",
          height: "44px",
          placeItems: "center",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: "var(--radius-sm)",
          backgroundColor: "transparent",
          color: "var(--color-white)",
          cursor: "pointer",
        }}
      >
        <Menu size={24} aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: "var(--z-modal)",
            backgroundColor: "rgba(7, 18, 33, 0.72)",
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "min(90%, 390px)",
              height: "100%",
              overflowY: "auto",
              backgroundColor: "var(--color-white)",
              color: "var(--color-text)",
              boxShadow: "var(--shadow-lg)",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                minHeight: "76px",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "var(--space-4)",
                padding: "var(--space-4) var(--space-5)",
                borderBottom: "1px solid var(--color-border)",
                backgroundColor: "var(--color-primary-900)",
                color: "var(--color-white)",
              }}
            >
              <span>
                <strong
                  style={{
                    display: "block",
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.1rem",
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
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                  }}
                >
                  Advocate
                </span>
              </span>

              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
                style={{
                  display: "grid",
                  width: "42px",
                  height: "42px",
                  placeItems: "center",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "transparent",
                  color: "var(--color-white)",
                  cursor: "pointer",
                }}
              >
                <X size={23} aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label="Mobile navigation links"
              style={{
                padding: "var(--space-5)",
              }}
            >
              <ul
                style={{
                  display: "grid",
                  gap: "var(--space-2)",
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                }}
              >
                {mainNavigation.map((item) => {
                  const isExpanded =
                    expandedMenu === item.href;

                  return (
                    <li key={item.href}>
                      {item.children?.length ? (
                        <>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns:
                                "1fr 46px",
                              alignItems: "center",
                              borderBottom:
                                "1px solid var(--color-border)",
                            }}
                          >
                            <Link
                              href={item.href}
                              style={{
                                padding:
                                  "0.9rem 0.5rem",
                                color:
                                  "var(--color-primary-800)",
                                fontWeight:
                                  "var(--font-weight-semibold)",
                                textDecoration: "none",
                              }}
                            >
                              {item.label}
                            </Link>

                            <button
                              type="button"
                              aria-label={`Toggle ${item.label} submenu`}
                              aria-expanded={isExpanded}
                              onClick={() =>
                                toggleSubmenu(item.href)
                              }
                              style={{
                                display: "grid",
                                width: "42px",
                                height: "42px",
                                placeItems: "center",
                                border: 0,
                                backgroundColor:
                                  "transparent",
                                color:
                                  "var(--color-primary-800)",
                                cursor: "pointer",
                              }}
                            >
                              <ChevronDown
                                size={19}
                                aria-hidden="true"
                                style={{
                                  transform: isExpanded
                                    ? "rotate(180deg)"
                                    : "rotate(0)",
                                  transition:
                                    "transform var(--transition-fast)",
                                }}
                              />
                            </button>
                          </div>

                          {isExpanded && (
                            <ul
                              style={{
                                display: "grid",
                                gap: "var(--space-1)",
                                margin: 0,
                                padding:
                                  "var(--space-2) 0 var(--space-3) var(--space-4)",
                                borderBottom:
                                  "1px solid var(--color-border)",
                                listStyle: "none",
                              }}
                            >
                              {item.children.map(
                                (child) => (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      style={{
                                        display: "block",
                                        padding:
                                          "0.65rem 0.5rem",
                                        color:
                                          "var(--color-text-secondary)",
                                        fontSize:
                                          "var(--font-size-sm)",
                                        textDecoration:
                                          "none",
                                      }}
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          style={{
                            display: "block",
                            padding: "0.9rem 0.5rem",
                            borderBottom:
                              "1px solid var(--color-border)",
                            color:
                              pathname === item.href
                                ? "var(--color-gold-700)"
                                : "var(--color-primary-800)",
                            fontWeight:
                              "var(--font-weight-semibold)",
                            textDecoration: "none",
                          }}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div
              style={{
                display: "grid",
                gap: "var(--space-3)",
                padding: "var(--space-5)",
                borderTop: "1px solid var(--color-border)",
                backgroundColor:
                  "var(--color-background-secondary)",
              }}
            >
              <a
                href={advocate.phone.href}
                className="button button-primary"
              >
                <Phone size={18} aria-hidden="true" />
                {advocate.phone.display}
              </a>

              <a
                href={advocate.address.googleMapsUrl}
                className="button button-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={18} aria-hidden="true" />
                Office location
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}