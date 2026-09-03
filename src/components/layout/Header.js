"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CalendarCheck,
  ChevronDown,
  Clock3,
  Phone,
  Scale,
} from "lucide-react";

import MobileMenu from "@/components/layout/MobileMenu";
import Container from "@/components/ui/Container";
import advocate from "@/data/advocate";
import { mainNavigation } from "@/data/navigation";

function isActivePath(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 12);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="top-info-bar desktop-only">
        <Container className="top-info-inner">
          <span>Legal Practitioner in Chhatrapati Sambhajinagar</span>
          <span><Clock3 size={14} aria-hidden="true" /> Open 24 Hours</span>
          <a href={advocate.phone.href}><Phone size={14} aria-hidden="true" /> {advocate.phone.display}</a>
          <span><CalendarCheck size={14} aria-hidden="true" /> Online appointments available</span>
        </Container>
      </div>

      <Container className="main-header-inner">
        <Link
          href="/"
          className="brand-mark"
          aria-label={`${advocate.fullName} homepage`}
        >
          <span className="brand-icon" aria-hidden="true">
            <Scale size={23} />
          </span>
          <span className="brand-text">
            <strong>Shrinivas Talawar</strong>
            <span>Advocate</span>
          </span>
        </Link>

        <nav className="desktop-only primary-nav" aria-label="Primary navigation">
          <ul>
            {mainNavigation.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <li key={item.href} className={item.children?.length ? "nav-item has-dropdown" : "nav-item"}>
                  {item.children?.length ? (
                    <>
                      <Link
                        href={item.href}
                        className={`nav-link ${isActive ? "is-active" : ""}`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                        <ChevronDown size={15} aria-hidden="true" />
                      </Link>
                      <div className="nav-dropdown" role="menu">
                        <Link href={item.href} className="dropdown-featured" role="menuitem">
                          View all {item.label.toLowerCase()}
                        </Link>
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href} role="menuitem">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`nav-link ${isActive ? "is-active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href={advocate.phone.href}
          className="desktop-only header-call-button"
          aria-label="Call office"
        >
          <Phone size={17} aria-hidden="true" />
          <span className="header-call-number">{advocate.phone.display}</span>
        </a>

        <MobileMenu />
      </Container>
    </header>
  );
}
