import {
  CalendarDays,
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";

import ButtonLink from "@/components/ui/ButtonLink";

export default function OfficeContactCard({ office }) {
  if (!office) {
    return null;
  }

  const isVerified =
    office.isPublished && !office.isPlaceholder;

  return (
    <aside
      className="card card-gold-top"
      aria-labelledby="office-contact-card-heading"
    >
      <div
        className="card-padding"
        style={{
          display: "grid",
          gap: "var(--space-6)",
        }}
      >
        <div>
          <span className="eyebrow">
            Office Information
          </span>

          <h2
            id="office-contact-card-heading"
            className="heading-three"
          >
            Address and appointments
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gap: "var(--space-5)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "36px 1fr",
              gap: "var(--space-3)",
            }}
          >
            <MapPin
              size={21}
              color="var(--color-gold-600)"
              aria-hidden="true"
            />

            <div>
              <strong>Office address</strong>

              <address
                className="text-muted"
                style={{
                  marginTop: "var(--space-2)",
                }}
              >
                {office.address.fullAddress}
              </address>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "36px 1fr",
              gap: "var(--space-3)",
            }}
          >
            <Phone
              size={21}
              color="var(--color-gold-600)"
              aria-hidden="true"
            />

            <div>
              <strong>Telephone</strong>

              <div
                style={{
                  marginTop: "var(--space-2)",
                }}
              >
                <a
                  href={office.contact.phoneHref}
                  className="link"
                >
                  {office.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "36px 1fr",
              gap: "var(--space-3)",
            }}
          >
            <Clock3
              size={21}
              color="var(--color-gold-600)"
              aria-hidden="true"
            />

            <div>
              <strong>Availability</strong>

              <p
                className="text-muted"
                style={{
                  marginTop: "var(--space-2)",
                  marginBottom: 0,
                }}
              >
                {office.availability.label}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "36px 1fr",
              gap: "var(--space-3)",
            }}
          >
            <CalendarDays
              size={21}
              color="var(--color-gold-600)"
              aria-hidden="true"
            />

            <div>
              <strong>Appointments</strong>

              <p
                className="text-muted"
                style={{
                  marginTop: "var(--space-2)",
                  marginBottom: 0,
                }}
              >
                {office.availability.onlineAppointments
                  ? "Online appointments available."
                  : "Online appointment details to be confirmed."}

                {office.availability.onsiteServices
                  ? " On-site services are available."
                  : ""}
              </p>
            </div>
          </div>
        </div>

        {isVerified && (
          <div
            style={{
              display: "grid",
              gap: "var(--space-3)",
            }}
          >
            <ButtonLink
              href={office.contact.phoneHref}
              icon="phone"
              iconPosition="left"
              fullWidth
            >
              Call Office
            </ButtonLink>

            <ButtonLink
              href={office.contact.whatsappHref}
              variant="outline"
              icon="whatsapp"
              iconPosition="left"
              external
              fullWidth
            >
              WhatsApp Office
            </ButtonLink>
          </div>
        )}

        <p
          style={{
            margin: 0,
            paddingTop: "var(--space-4)",
            borderTop: "1px solid var(--color-border)",
            color: "var(--color-text-muted)",
            fontSize: "var(--font-size-xs)",
          }}
        >
          {office.disclaimer}
        </p>
      </div>
    </aside>
  );
}