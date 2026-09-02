import {
  FileQuestion,
  Home,
  Scale,
} from "lucide-react";

import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Page Not Found",
  description:
    "The requested page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="section legal-pattern"
      style={{
        display: "grid",
        minHeight: "70vh",
        placeItems: "center",
      }}
    >
      <Container size="small">
        <div
          className="card card-padding text-center"
          style={{
            position: "relative",
            paddingTop: "var(--space-16)",
            paddingBottom: "var(--space-16)",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "grid",
              width: "76px",
              height: "76px",
              margin:
                "0 auto var(--space-6) auto",
              placeItems: "center",
              border:
                "1px solid var(--color-gold-300)",
              borderRadius: "var(--radius-circle)",
              backgroundColor:
                "var(--color-gold-100)",
              color: "var(--color-gold-700)",
            }}
          >
            <FileQuestion size={34} />
          </span>

          <span className="eyebrow">
            Error 404
          </span>

          <h1 className="heading-one text-balance">
            Page not found
          </h1>

          <span
            className="gold-line gold-line-center"
            aria-hidden="true"
          />

          <p
            className="section-description section-description-center"
          >
            The page may have been moved, renamed or is no
            longer available.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "var(--space-3)",
              marginTop: "var(--space-8)",
            }}
          >
            <ButtonLink
              href="/"
              icon="arrow"
            >
              Return to Homepage
            </ButtonLink>

            <ButtonLink
              href="/practice-areas"
              variant="outline"
            >
              View Practice Areas
            </ButtonLink>
          </div>

          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "var(--space-5)",
              bottom: "var(--space-5)",
              color: "rgba(182,144,80,0.12)",
            }}
          >
            <Scale size={70} strokeWidth={1} />
          </div>

          <span className="sr-only">
            <Home />
          </span>
        </div>
      </Container>
    </main>
  );
}