import {
  CalendarDays,
  Clock3,
  Monitor,
} from "lucide-react";

import ContactCard from "@/components/ui/ContactCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const appointmentOptions = [
  {
    id: 1,
    icon: CalendarDays,
    title: "On-site Appointments",
    description:
      "Office appointments are available subject to confirmation.",
  },
  {
    id: 2,
    icon: Monitor,
    title: "Online Appointments",
    description:
      "Online appointment options are available for suitable matters.",
  },
  {
    id: 3,
    icon: Clock3,
    title: "24-Hour Availability",
    description:
      "Telephone availability is listed as open 24 hours.",
  },
];

export default function AppointmentSection() {
  return (
    <section
      className="section section-white"
      aria-labelledby="appointment-heading"
    >
      <Container>
        <div
          className="grid-two"
          style={{
            alignItems: "start",
          }}
        >
          <div>
            <SectionHeading
              id="appointment-heading"
              eyebrow="Appointment Information"
              title="Office and online appointment options"
              description="Appointment availability and the documents required for an assessment should be confirmed directly with the office."
            />

            <div
              style={{
                display: "grid",
                gap: "var(--space-5)",
                marginTop: "var(--space-8)",
              }}
            >
              {appointmentOptions.map((option) => {
                const IconComponent = option.icon;

                return (
                  <article
                    key={option.id}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "52px 1fr",
                      gap: "var(--space-4)",
                      alignItems: "start",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        display: "grid",
                        width: "52px",
                        height: "52px",
                        placeItems: "center",
                        border:
                          "1px solid var(--color-gold-300)",
                        borderRadius:
                          "var(--radius-circle)",
                        backgroundColor:
                          "var(--color-gold-100)",
                        color: "var(--color-gold-700)",
                      }}
                    >
                      <IconComponent size={22} />
                    </span>

                    <div>
                      <h3
                        style={{
                          marginBottom: "var(--space-2)",
                          color:
                            "var(--color-primary-800)",
                          fontFamily:
                            "var(--font-heading)",
                          fontSize:
                            "var(--font-size-xl)",
                          fontWeight:
                            "var(--font-weight-regular)",
                        }}
                      >
                        {option.title}
                      </h3>

                      <p
                        className="text-muted"
                        style={{
                          marginBottom: 0,
                        }}
                      >
                        {option.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <ContactCard />
        </div>
      </Container>
    </section>
  );
}
