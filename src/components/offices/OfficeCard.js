import Link from "next/link";
import {
  Building2,
  Clock3,
  MapPin,
  Monitor,
  Phone,
} from "lucide-react";

function OfficeMetaRow({ icon: Icon, children }) {
  return (
    <div className="office-meta-row">
      <Icon size={18} aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

export default function OfficeCard({ office }) {
  if (!office) {
    return null;
  }

  const isPlaceholder = office.isPlaceholder || !office.isPublished;

  return (
    <article className={`card card-hover office-card ${isPlaceholder ? "is-placeholder" : ""}`}>
      <div className="office-card-map">
        {isPlaceholder ? (
          <div className="office-card-placeholder-map" aria-hidden="true">
            <Building2 size={42} />
          </div>
        ) : (
          <iframe
            src={office.location.googleMapsEmbedUrl}
            title={`Map showing ${office.name}`}
            width="100%"
            height="230"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            tabIndex="-1"
            aria-hidden="true"
          />
        )}
        <span className="status-pill">{office.statusLabel}</span>
        {office.isPrimary && <span className="primary-pill">Primary Office</span>}
      </div>

      <div className="office-card-body">
        <div className="office-card-title">
          <span className="icon-box" aria-hidden="true">
            <Building2 size={22} />
          </span>
          <div>
            <span className="eyebrow">{office.city}</span>
            <h2 className="heading-three">
              {isPlaceholder ? (
                office.name
              ) : (
                <Link href={`/offices/${office.slug}`}>{office.name}</Link>
              )}
            </h2>
          </div>
        </div>

        <p className="text-muted">{office.overview.shortDescription}</p>

        <div className="office-meta">
          <OfficeMetaRow icon={MapPin}>
            <address>{office.address.shortAddress}</address>
          </OfficeMetaRow>
          <OfficeMetaRow icon={Clock3}>{office.availability.label}</OfficeMetaRow>
          <OfficeMetaRow icon={Monitor}>
            {office.availability.onlineAppointments
              ? "Online appointments available"
              : "Online appointment details to be confirmed"}
          </OfficeMetaRow>
          {!isPlaceholder && (
            <OfficeMetaRow icon={Phone}>
              <a href={office.contact.phoneHref} className="link">
                {office.contact.phoneDisplay}
              </a>
            </OfficeMetaRow>
          )}
        </div>

        {isPlaceholder && (
          <p className="office-note">
            Unverified placeholder location. Complete address and appointment
            details must be confirmed before publication.
          </p>
        )}

        <div className="office-card-actions">
          {!isPlaceholder && (
            <Link href={`/offices/${office.slug}`} className="button button-dark">
              View Office Details
            </Link>
          )}
          {!isPlaceholder && (
            <a
              href={office.location.directionsUrl}
              className="button button-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
