import {
  Accessibility,
  BadgeIndianRupee,
  Building2,
  FileText,
  FileWarning,
  Landmark,
  Shield,
  ShieldAlert,
  Ship,
  Users,
} from "lucide-react";

import Breadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";

const iconComponents = {
  Accessibility,
  BadgeIndianRupee,
  Building2,
  FileText,
  FileWarning,
  Landmark,
  Shield,
  ShieldAlert,
  Ship,
  Users,
};

export default function PracticeAreaHeader({
  practiceArea,
}) {
  if (!practiceArea) {
    return null;
  }

  const IconComponent =
    iconComponents[practiceArea.icon] || Landmark;

  const breadcrumbItems = [
    {
      name: "Practice Areas",
      href: "/practice-areas",
    },
    {
      name: practiceArea.title,
      href: `/practice-areas/${practiceArea.slug}`,
    },
  ];

  return (
    <header
      className="section-dark legal-pattern"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-140px",
          right: "-110px",
          width: "380px",
          height: "380px",
          border: "1px solid rgba(201, 169, 110, 0.18)",
          borderRadius: "50%",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "40px",
          bottom: "-190px",
          width: "340px",
          height: "340px",
          border: "1px solid rgba(201, 169, 110, 0.1)",
          borderRadius: "50%",
        }}
      />

      <Container
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "var(--space-10)",
          paddingBottom: "var(--space-20)",
        }}
      >
        <Breadcrumb
          items={breadcrumbItems}
          showSchema
          className="text-light"
        />

        <div
          style={{
            maxWidth: "850px",
            marginTop: "var(--space-12)",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "grid",
              width: "64px",
              height: "64px",
              marginBottom: "var(--space-6)",
              placeItems: "center",
              border: "1px solid var(--color-gold-400)",
              borderRadius: "var(--radius-circle)",
              backgroundColor: "rgba(182, 144, 80, 0.12)",
              color: "var(--color-gold-300)",
            }}
          >
            <IconComponent size={29} />
          </span>

          <span className="eyebrow">
            Area of Practice
          </span>

          <h1 className="heading-one text-light text-balance">
            {practiceArea.title}
          </h1>

          <span
            className="gold-line"
            aria-hidden="true"
          />

          <p
            className="body-large"
            style={{
              maxWidth: "760px",
              marginTop: "var(--space-6)",
              marginBottom: 0,
              color: "rgba(248, 250, 252, 0.82)",
            }}
          >
            {practiceArea.shortDescription}
          </p>
        </div>
      </Container>
    </header>
  );
}