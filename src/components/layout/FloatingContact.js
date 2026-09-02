import {
  MessageCircle,
  Phone,
} from "lucide-react";

import advocate from "@/data/advocate";

export default function FloatingContact() {
  return (
    <>
      <div
        className="desktop-only"
        aria-label="Quick contact options"
        style={{
          position: "fixed",
          right: "var(--space-6)",
          bottom: "var(--space-6)",
          zIndex: "var(--z-sticky)",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "var(--space-3)",
          }}
        >
          <a
            href={advocate.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Contact ${advocate.fullName} through WhatsApp`}
            title="WhatsApp office"
            style={{
              display: "grid",
              width: "54px",
              height: "54px",
              placeItems: "center",
              border:
                "1px solid rgba(255,255,255,0.25)",
              borderRadius: "var(--radius-circle)",
              backgroundColor: "#1f7a4c",
              color: "var(--color-white)",
              boxShadow: "var(--shadow-lg)",
              textDecoration: "none",
            }}
          >
            <MessageCircle
              size={23}
              aria-hidden="true"
            />
          </a>

          <a
            href={advocate.phone.href}
            aria-label={`Call ${advocate.fullName} at ${advocate.phone.display}`}
            title={`Call ${advocate.phone.display}`}
            className="animate-soft-pulse"
            style={{
              display: "grid",
              width: "54px",
              height: "54px",
              placeItems: "center",
              border:
                "1px solid var(--color-gold-400)",
              borderRadius: "var(--radius-circle)",
              backgroundColor: "var(--color-primary-800)",
              color: "var(--color-white)",
              boxShadow: "var(--shadow-lg)",
              textDecoration: "none",
            }}
          >
            <Phone size={22} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div
        className="mobile-only"
        aria-label="Quick contact options"
        style={{
          position: "fixed",
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: "var(--z-sticky)",
          padding:
            "var(--space-2) var(--space-3) calc(var(--space-2) + env(safe-area-inset-bottom))",
          borderTop: "1px solid var(--color-border)",
          backgroundColor: "rgba(255,255,255,0.97)",
          boxShadow: "0 -8px 30px rgba(10,25,45,0.12)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-2)",
          }}
        >
          <a
            href={advocate.phone.href}
            className="button button-dark"
            aria-label={`Call ${advocate.fullName} at ${advocate.phone.display}`}
          >
            <Phone size={18} aria-hidden="true" />
            Call office
          </a>

          <a
            href={advocate.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            aria-label={`Contact ${advocate.fullName} through WhatsApp`}
            style={{
              borderColor: "#1f7a4c",
              backgroundColor: "#1f7a4c",
              color: "var(--color-white)",
            }}
          >
            <MessageCircle
              size={18}
              aria-hidden="true"
            />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}