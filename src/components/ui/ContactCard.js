import {
  CalendarDays,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import advocate from "@/data/advocate";
import ButtonLink from "@/components/ui/ButtonLink";

function ContactInformationRow({
  icon: Icon,
  label,
  children,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "42px 1fr",
        gap: "var(--space-4)",
        alignItems: "start",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          display: "grid",
          width: "42px",
          height: "42px",
          placeItems: "center",
          border: "1px solid var(--color-gold-300)",
          borderRadius: "var(--radius-circle)",
          backgroundColor: "var(--color-gold-100)",
          color: "var(--color-gold-700)",
        }}
      >
        <Icon size={19} />
      </span>

      <div>
        <strong
          style={{
            display: "block",
            marginBottom: "0.2rem",
            color: "var(--color-primary-800)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          {label}
        </strong>

        <div
          style={{
            color: "var(--color-text-secondary)",
            lineHeight: "var(--line-height-base)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ContactCard({
  title = "Office and Appointment Information",
  showAddress = true,
  showHours = true,
  showAppointmentOptions = true,
  showButtons = true,
  compact = false,
  className = "",
}) {
  return (
    <aside
      className={`card card-gold-top ${className}`.trim()}
      aria-labelledby="contact-card-title"
    >
      <div
        className="card-padding"
        style={{
          display: "grid",
          gap: compact
            ? "var(--space-5)"
            : "var(--space-6)",
        }}
      >
        <div>
          <span className="eyebrow">Contact Details</span>

          <h2
            id="contact-card-title"
            className="heading-three"
          >
            {title}
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gap: compact
              ? "var(--space-4)"
              : "var(--space-5)",
          }}
        >
          <ContactInformationRow
            icon={Phone}
            label="Telephone"
          >
            <a
              href={advocate.phone.href}
              className="link"
              aria-label={`Call ${advocate.fullName} at ${advocate.phone.display}`}
            >
              {advocate.phone.display}
            </a>
          </ContactInformationRow>

          {showAddress && (
            <ContactInformationRow
              icon={MapPin}
              label="Office Address"
            >
              <address
                style={{
                  fontStyle: "normal",
                }}
              >
                {advocate.address.fullAddress}
              </address>

              <a
                href={advocate.address.googleMapsUrl}
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "var(--space-2)",
                }}
              >
                View location on Google Maps
              </a>
            </ContactInformationRow>
          )}

          {showHours && (
            <ContactInformationRow
              icon={Clock3}
              label="Availability"
            >
              {advocate.availability.label}
            </ContactInformationRow>
          )}

          {showAppointmentOptions && (
            <ContactInformationRow
              icon={CalendarDays}
              label="Appointment Options"
            >
              <span>
                Online appointments and on-site services are
                available. Please confirm availability with the
                office.
              </span>
            </ContactInformationRow>
          )}

          <ContactInformationRow
            icon={MessageCircle}
            label="WhatsApp"
          >
            <a
              href={advocate.whatsapp.href}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {advocate.whatsapp.display}
            </a>
          </ContactInformationRow>
        </div>

        {showButtons && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "var(--space-3)",
            }}
          >
            <ButtonLink
              href={advocate.phone.href}
              icon="phone"
              iconPosition="left"
              fullWidth
            >
              Call Office
            </ButtonLink>

            <ButtonLink
              href={advocate.whatsapp.href}
              variant="outline"
              icon="whatsapp"
              iconPosition="left"
              external
              fullWidth
            >
              WhatsApp
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
            lineHeight: "1.7",
          }}
        >
          Contacting the office does not automatically establish an
          advocate-client relationship. Appointment availability
          should be confirmed directly.
        </p>
      </div>
    </aside>
  );
}
