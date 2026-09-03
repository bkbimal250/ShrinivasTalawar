import { Building2 } from "lucide-react";

import OfficeCard from "@/components/offices/OfficeCard";
import { officeLocations } from "@/data/officeLocation";

export default function OfficeGrid({
  offices = officeLocations,
  publishedOnly = false,
}) {
  const visibleOffices = publishedOnly
    ? offices.filter((office) => office.isPublished && !office.isPlaceholder)
    : offices;

  if (!visibleOffices.length) {
    return (
      <div className="card card-padding text-center">
        <Building2
          size={36}
          color="var(--color-gold-600)"
          aria-hidden="true"
          style={{ margin: "0 auto var(--space-4)" }}
        />
        <h2 className="heading-three">No office locations available</h2>
        <p className="text-muted">
          Verified office information will be displayed here when available.
        </p>
      </div>
    );
  }

  return (
    <div className="office-grid">
      {visibleOffices.map((office) => (
        <OfficeCard key={office.id} office={office} />
      ))}
    </div>
  );
}
