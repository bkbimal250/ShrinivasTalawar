import { notFound } from "next/navigation";
import { Info } from "lucide-react";

import OfficeContactCard from "@/components/offices/OfficeContactCard";
import OfficeDetailsHeader from "@/components/offices/OfficeDetailsHeader";
import OfficeMap from "@/components/offices/OfficeMap";
import OfficeOverview from "@/components/offices/OfficeOverview";
import RelatedOffices from "@/components/offices/RelatedOffices";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import {
  getOfficeLocationBySlug,
  getOfficeLocationSlugs,
} from "@/data/officeLocation";
import { SITE_URL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { serializeSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getOfficeLocationSlugs({
    publishedOnly: false,
  }).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const office = getOfficeLocationBySlug(slug);

  if (!office) {
    return createMetadata({
      title: "Office Not Found",
      description:
        "The requested office location could not be found.",
      pathname: `/offices/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: office.name,
    description: office.seo.description,
    pathname: office.seo.canonicalPath,
    keywords: office.seo.keywords,
    noIndex:
      office.noIndex ||
      office.isPlaceholder ||
      !office.isPublished,
  });
}

export default async function OfficeDetailsPage({
  params,
}) {
  const { slug } = await params;
  const office = getOfficeLocationBySlug(slug);

  if (!office) {
    notFound();
  }

  const isVerifiedOffice =
    office.isPublished && !office.isPlaceholder;

  const officeSchema = isVerifiedOffice
    ? {
        "@context": "https://schema.org",
        "@type": ["LegalService", "Attorney"],

        "@id": `${SITE_URL}/offices/${office.slug}#office`,

        name: `${office.advocateName} - ${office.name}`,
        alternateName:
          office.alternateName || undefined,

        description:
          office.overview.shortDescription,

        url: `${SITE_URL}/offices/${office.slug}`,

        telephone: office.contact.phoneValue,

        address: {
          "@type": "PostalAddress",
          streetAddress:
            office.address.streetAddress,
          addressLocality: office.city,
          addressRegion: office.state,
          postalCode: office.postalCode,
          addressCountry: office.countryCode,
        },

        areaServed: office.serviceAreas.map(
          (area) => ({
            "@type": "AdministrativeArea",
            name: area,
          })
        ),

        openingHoursSpecification:
          office.availability.weeklyHours.map(
            (schedule) => ({
              "@type":
                "OpeningHoursSpecification",

              dayOfWeek:
                `https://schema.org/${schedule.day}`,

              opens: schedule.opens,
              closes: schedule.closes,
            })
          ),

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Areas of Practice",

          itemListElement:
            office.practiceAreas.map(
              (practiceArea) => ({
                "@type": "Offer",

                itemOffered: {
                  "@type": "Service",
                  name: practiceArea,
                },
              })
            ),
        },

        branchOf: {
          "@id": `${SITE_URL}/#legal-service`,
        },
      }
    : null;

  return (
    <main id="main-content">
      {officeSchema && (
        <script
          id={`office-schema-${office.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeSchema(officeSchema),
          }}
        />
      )}

      <section
        style={{
          borderBottom:
            "1px solid var(--color-border)",
          backgroundColor: "var(--color-white)",
        }}
      >
        <Container
          style={{
            paddingTop: "var(--space-4)",
            paddingBottom: "var(--space-4)",
          }}
        >
          <Breadcrumb
            items={[
              {
                name: "Office Locations",
                href: "/offices",
              },
              {
                name: office.name,
                href: `/offices/${office.slug}`,
              },
            ]}
            showSchema
          />
        </Container>
      </section>

      <OfficeDetailsHeader office={office} />

      {office.isPlaceholder && (
        <section
          style={{
            borderBottom:
              "1px solid var(--color-gold-300)",
            backgroundColor:
              "var(--color-gold-100)",
          }}
        >
          <Container
            style={{
              display: "grid",
              gridTemplateColumns: "32px 1fr",
              gap: "var(--space-3)",
              alignItems: "start",
              paddingTop: "var(--space-4)",
              paddingBottom: "var(--space-4)",
            }}
          >
            <Info
              size={22}
              color="var(--color-gold-700)"
              aria-hidden="true"
            />

            <p
              style={{
                margin: 0,
                color: "var(--color-gold-700)",
                fontSize: "var(--font-size-sm)",
              }}
            >
              This page contains temporary location data.
              The complete address, office status, map,
              photographs and appointment information must be
              verified before this location is published.
            </p>
          </Container>
        </section>
      )}

      <section className="section section-white">
        <Container>
          <div
            className="grid-two"
            style={{
              alignItems: "start",
            }}
          >
            <OfficeOverview office={office} />

            <OfficeContactCard office={office} />
          </div>
        </Container>
      </section>

      <OfficeMap office={office} />

      <RelatedOffices
        currentSlug={office.slug}
        limit={2}
      />
    </main>
  );
}
