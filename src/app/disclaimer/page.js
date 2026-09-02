import Breadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import { disclaimerMetadata } from "@/lib/metadata";

export const metadata = disclaimerMetadata;

export default function DisclaimerPage() {
  return (
    <main id="main-content">
      <section className="section-dark legal-pattern">
        <Container
          style={{
            paddingTop: "var(--space-10)",
            paddingBottom: "var(--space-16)",
          }}
        >
          <Breadcrumb
            items={[
              {
                name: "Disclaimer",
                href: "/disclaimer",
              },
            ]}
            showSchema
            className="text-light"
          />

          <div
            style={{
              maxWidth: "800px",
              marginTop: "var(--space-10)",
            }}
          >
            <span className="eyebrow">
              Important Information
            </span>

            <h1 className="heading-one text-light">
              Legal Disclaimer
            </h1>
          </div>
        </Container>
      </section>

      <section className="section section-white">
        <Container size="small">
          <article
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: "var(--line-height-relaxed)",
            }}
          >
            <h2 className="heading-three">
              General professional information
            </h2>

            <p>
              The information available on this website is
              provided solely for general professional
              identification and informational purposes. It
              does not constitute advertising or solicitation
              of legal work.
            </p>

            <h2 className="heading-three">
              Not legal advice
            </h2>

            <p>
              Website content is general in nature and should
              not be interpreted as legal advice concerning
              any individual matter. Legal rights and
              procedures depend upon the specific facts,
              documents, applicable law and procedural stage
              involved.
            </p>

            <h2 className="heading-three">
              No advocate-client relationship
            </h2>

            <p>
              Viewing this website, calling the office,
              sending a message or providing preliminary
              information does not by itself establish an
              advocate-client relationship. A professional
              relationship is created only after the matter is
              assessed and the engagement is formally
              accepted.
            </p>

            <h2 className="heading-three">
              No assurance of outcome
            </h2>

            <p>
              No representation, promise or assurance is made
              concerning the result of any legal matter. The
              outcome of a proceeding depends upon multiple
              factors, including the facts, evidence,
              applicable law, procedure and decision of the
              appropriate court, tribunal or authority.
            </p>

            <h2 className="heading-three">
              Accuracy of information
            </h2>

            <p>
              Reasonable efforts are made to maintain accurate
              professional information. However, laws,
              procedures, contact details and other
              information may change. No assurance is given
              that every page is complete or current at all
              times.
            </p>

            <h2 className="heading-three">
              Confidential information
            </h2>

            <p>
              Visitors should not send confidential,
              sensitive or time-critical information until a
              formal professional engagement has been
              confirmed. Information sent before formal
              acceptance may not be treated as part of an
              advocate-client relationship.
            </p>

            <h2 className="heading-three">
              External services and links
            </h2>

            <p>
              This website may provide links to telephone,
              WhatsApp, map or other third-party services.
              Those services operate under their own terms and
              privacy policies. Responsibility is not accepted
              for the availability or content of external
              services.
            </p>
          </article>
        </Container>
      </section>
    </main>
  );
}
