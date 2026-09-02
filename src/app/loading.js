import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <main
      id="main-content"
      aria-busy="true"
      aria-label="Loading page"
    >
      <section
        style={{
          display: "grid",
          minHeight: "610px",
          alignItems: "center",
          backgroundColor:
            "var(--color-primary-950)",
        }}
      >
        <Container>
          <div
            style={{
              display: "grid",
              maxWidth: "720px",
              gap: "var(--space-5)",
            }}
          >
            <div
              className="skeleton skeleton-text"
              style={{
                width: "220px",
                backgroundColor:
                  "rgba(255,255,255,0.12)",
              }}
            />

            <div
              className="skeleton skeleton-heading"
              style={{
                width: "min(100%, 600px)",
                height: "70px",
                backgroundColor:
                  "rgba(255,255,255,0.12)",
              }}
            />

            <div
              className="skeleton skeleton-heading"
              style={{
                width: "min(80%, 480px)",
                height: "70px",
                backgroundColor:
                  "rgba(255,255,255,0.12)",
              }}
            />

            <div
              className="skeleton skeleton-text"
              style={{
                width: "min(100%, 680px)",
                backgroundColor:
                  "rgba(255,255,255,0.1)",
              }}
            />

            <div
              className="skeleton skeleton-text"
              style={{
                width: "min(90%, 580px)",
                backgroundColor:
                  "rgba(255,255,255,0.1)",
              }}
            />
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div
            className="grid-three"
            aria-hidden="true"
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                className="skeleton skeleton-card"
                key={index}
              />
            ))}
          </div>
        </Container>
      </section>

      <span className="sr-only">
        Loading website content
      </span>
    </main>
  );
}