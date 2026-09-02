import Breadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import advocate from "@/data/advocate";
import { privacyMetadata } from "@/lib/metadata";

export const metadata = privacyMetadata;

export default function PrivacyPolicyPage() {
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
                name: "Privacy Policy",
                href: "/privacy-policy",
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
              Website Information
            </span>

            <h1 className="heading-one text-light">
              Privacy Policy
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
            <p
              style={{
                paddingBottom: "var(--space-5)",
                borderBottom:
                  "1px solid var(--color-border)",
                color: "var(--color-text-muted)",
                fontSize: "var(--font-size-sm)",
              }}
            >
              Last updated: 2 September 2026
            </p>

            <h2 className="heading-three">
              Scope of this policy
            </h2>

            <p>
              This policy explains how information may be
              handled when visitors use this website or
              contact the office through the telephone,
              WhatsApp, map or appointment options provided.
            </p>

            <h2 className="heading-three">
              Information provided by visitors
            </h2>

            <p>
              Information may be received when a visitor calls
              the office, sends a WhatsApp message or
              communicates for appointment purposes. This may
              include a name, telephone number, basic details
              about the nature of the matter and documents
              voluntarily provided by the visitor.
            </p>

            <h2 className="heading-three">
              Use of information
            </h2>

            <p>
              Information may be used to respond to an
              enquiry, assess appointment availability,
              understand the general nature of a matter,
              communicate regarding requested services and
              meet applicable professional or legal
              obligations.
            </p>

            <h2 className="heading-three">
              Confidential and sensitive information
            </h2>

            <p>
              Visitors should avoid sending confidential,
              sensitive or time-critical information before a
              formal professional engagement is confirmed.
              Initial communication does not automatically
              create an advocate-client relationship.
            </p>

            <h2 className="heading-three">
              Third-party services
            </h2>

            <p>
              Telephone, WhatsApp and Google Maps are
              third-party services. When visitors use these
              services, the relevant provider may process
              information according to its own terms and
              privacy policy.
            </p>

            <h2 className="heading-three">
              Cookies and technical information
            </h2>

            <p>
              The website may receive limited technical
              information necessary for security, performance
              and delivery, such as browser type, device type,
              approximate location, access time and IP
              address. If analytics or additional cookies are
              introduced, this policy should be updated
              accordingly.
            </p>

            <h2 className="heading-three">
              Information retention
            </h2>

            <p>
              Information is retained only for as long as
              reasonably required for communication,
              professional, administrative, security or legal
              purposes. Retention periods may vary according
              to the nature of the information and applicable
              obligations.
            </p>

            <h2 className="heading-three">
              Information sharing
            </h2>

            <p>
              Personal information is not sold. Information
              may be disclosed where required by law, court
              order, professional obligation or where
              reasonably necessary for the administration of
              a formally accepted legal matter.
            </p>

            <h2 className="heading-three">
              Data security
            </h2>

            <p>
              Reasonable measures may be used to protect
              information against unauthorised access, loss or
              misuse. However, no internet, telephone or
              messaging system can be guaranteed to be
              completely secure.
            </p>

            <h2 className="heading-three">
              Privacy-related contact
            </h2>

            <p>
              Questions concerning information provided to
              the office may be raised by telephone at{" "}
              <a
                href={advocate.phone.href}
                className="link"
              >
                {advocate.phone.display}
              </a>
              .
            </p>

            <h2 className="heading-three">
              Policy updates
            </h2>

            <p>
              This policy may be updated when website
              functionality, third-party services or legal
              requirements change. The revised date will be
              displayed on this page.
            </p>
          </article>
        </Container>
      </section>
    </main>
  );
}
