"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  MessageCircle,
  Phone,
  Scale,
  X,
} from "lucide-react";

import advocate from "@/data/advocate";
import { mainNavigation } from "@/data/navigation";

export default function MobileMenu() {
  const pathname = usePathname();
  const drawerId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsOpen(false);
      setExpandedMenu(null);
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
      return undefined;
    }

    document.body.style.overflow = "hidden";
    document.body.classList.add("mobile-menu-open");

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  function toggleSubmenu(href) {
    setExpandedMenu((current) => (current === href ? null : href));
  }

  return (
    <div className="mobile-only">
      <button
        type="button"
        className="mobile-menu-trigger"
        aria-label="Open mobile navigation"
        aria-expanded={isOpen}
        aria-controls={drawerId}
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} aria-hidden="true" />
      </button>

      <div className={`mobile-menu-shell ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
        <button
          type="button"
          className="mobile-menu-overlay"
          aria-label="Close navigation menu"
          tabIndex={isOpen ? 0 : -1}
          onClick={() => setIsOpen(false)}
        />

        <aside
          id={drawerId}
          className="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="mobile-drawer-header">
            <span className="brand-icon" aria-hidden="true">
              <Scale size={22} />
            </span>
            <span className="brand-text">
              <strong>Shrinivas Talawar</strong>
              <span>Advocate</span>
            </span>
            <button
              type="button"
              className="mobile-close-button"
              aria-label="Close mobile navigation"
              onClick={() => setIsOpen(false)}
            >
              <X size={23} aria-hidden="true" />
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Mobile navigation links">
            <ul>
              {mainNavigation.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const isExpanded = expandedMenu === item.href;
                const submenuId = `${drawerId}-${item.id}`;
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));

                return (
                  <li key={item.href}>
                    <div className="mobile-nav-row">
                      <Link
                        href={item.href}
                        className={isActive ? "is-active" : ""}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                      {hasChildren && (
                        <button
                          type="button"
                          aria-label={`Toggle ${item.label} submenu`}
                          aria-expanded={isExpanded}
                          aria-controls={submenuId}
                          onClick={() => toggleSubmenu(item.href)}
                        >
                          <ChevronDown
                            size={19}
                            aria-hidden="true"
                            style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                          />
                        </button>
                      )}
                    </div>

                    {hasChildren && (
                      <ul id={submenuId} className={`mobile-submenu ${isExpanded ? "is-open" : ""}`}>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href}>{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-contact-actions">
            <a
              href={advocate.phone.href}
              className="button button-primary"
              aria-label="Call office"
            >
              <Phone size={18} aria-hidden="true" />
              Call Office
            </a>
            <a
              href={advocate.whatsapp.href}
              className="button button-dark"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact office on WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
