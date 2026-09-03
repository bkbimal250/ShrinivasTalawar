import Image from "next/image";
import Link from "next/link";

import Breadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  galleryCategories,
  getGalleryPhotosByCategory,
} from "@/data/gallery";
import { createMetadata } from "@/lib/metadata";
import {
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";
import { serializeSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Office and Professional Gallery",
  description:
    "View the office interior, advocate cabin, professional meetings and event photographs of Advocate Shrinivas Talawar in Chhatrapati Sambhajinagar.",
  pathname: "/gallery",
  keywords: [
    "Advocate Shrinivas Talawar gallery",
    "advocate office in Chhatrapati Sambhajinagar",
    "lawyer office in Aurangabad",
    "advocate cabin Aurangabad",
    "legal office interior Chhatrapati Sambhajinagar",
  ],
});

export default async function GalleryPage({
  searchParams,
}) {
  const resolvedSearchParams = await searchParams;

  const selectedCategory =
    resolvedSearchParams?.category || "all";

  const validCategory = galleryCategories.some(
    (category) => category.id === selectedCategory
  )
    ? selectedCategory
    : "all";

  const photos =
    getGalleryPhotosByCategory(validCategory);

  const selectedCategoryData =
    galleryCategories.find(
      (category) => category.id === validCategory
    ) || galleryCategories[0];

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/gallery#webpage`,
    name: "Office and Professional Gallery",
    description:
      "Office, professional meeting and event photographs associated with Advocate Shrinivas Talawar.",
    url: `${SITE_URL}/gallery`,
    inLanguage: "en-IN",

    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },

    about: {
      "@id": `${SITE_URL}/#legal-service`,
    },

    primaryImageOfPage: photos[0]
      ? {
          "@type": "ImageObject",
          contentUrl: `${SITE_URL}${photos[0].src}`,
          caption: photos[0].title,
          description: photos[0].description,
        }
      : undefined,

    associatedMedia: photos.map((photo) => ({
      "@type": "ImageObject",
      name: photo.title,
      caption: photo.title,
      description: photo.description,
      contentUrl: `${SITE_URL}${photo.src}`,
      thumbnailUrl: `${SITE_URL}${photo.thumbnail}`,
      width: {
        "@type": "QuantitativeValue",
        value: photo.width,
      },
      height: {
        "@type": "QuantitativeValue",
        value: photo.height,
      },
      representativeOfPage: photo.featured,
      copyrightHolder: {
        "@type": "Person",
        name: SITE_NAME,
      },
    })),
  };

  return (
    <main id="main-content">
      <script
        id="gallery-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(gallerySchema),
        }}
      />

      <section className="section-dark legal-pattern">
        <Container
          style={{
            paddingTop: "var(--space-10)",
            paddingBottom: "var(--space-20)",
          }}
        >
          <Breadcrumb
            items={[
              {
                name: "Gallery",
                href: "/gallery",
              },
            ]}
            showSchema
            className="text-light"
          />

          <div
            style={{
              maxWidth: "850px",
              marginTop: "var(--space-12)",
            }}
          >
            <span className="eyebrow">
              Professional Gallery
            </span>

            <h1 className="heading-one text-light text-balance">
              Office, meetings and professional activities
            </h1>

            <span
              className="gold-line"
              aria-hidden="true"
            />

            <p
              className="body-large"
              style={{
                marginTop: "var(--space-6)",
                marginBottom: 0,
                color: "rgba(255,255,255,0.76)",
              }}
            >
              Photographs of the office interior, advocate
              cabin, professional meetings and community
              activities.
            </p>
          </div>
        </Container>
      </section>

      <section className="section section-background">
        <Container>
          <SectionHeading
            eyebrow="Photo Collection"
            title={selectedCategoryData.label}
            description="Explore photographs from the professional office and related activities in Chhatrapati Sambhajinagar."
            align="center"
          />

          <nav
            aria-label="Gallery categories"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "var(--space-3)",
              marginTop: "var(--space-8)",
            }}
          >
            {galleryCategories.map((category) => {
              const isActive =
                category.id === validCategory;

              const href =
                category.id === "all"
                  ? "/gallery"
                  : `/gallery?category=${category.id}`;

              return (
                <Link
                  key={category.id}
                  href={href}
                  scroll={false}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  className={`button ${
                    isActive
                      ? "button-primary"
                      : "button-outline"
                  }`}
                  style={{
                    minHeight: "42px",
                    padding: "0.65rem 1rem",
                  }}
                >
                  {category.label}
                </Link>
              );
            })}
          </nav>

          {photos.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 290px), 1fr))",
                gap: "var(--space-6)",
                marginTop: "var(--space-12)",
              }}
            >
              {photos.map((photo, index) => (
                <article
                  key={photo.id}
                  className="card card-hover"
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <a
                    href={photo.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open full-size image: ${photo.title}`}
                    style={{
                      display: "block",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "4 / 3",
                        overflow: "hidden",
                        backgroundColor:
                          "var(--color-background-secondary)",
                      }}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        loading={index < 3 ? "eager" : "lazy"}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{
                          objectFit: "cover",
                          transition:
                            "transform var(--transition-slow)",
                        }}
                      />

                      <span
                        style={{
                          position: "absolute",
                          top: "var(--space-4)",
                          left: "var(--space-4)",
                          padding: "0.35rem 0.7rem",
                          border:
                            "1px solid rgba(255,255,255,0.25)",
                          borderRadius:
                            "var(--radius-circle)",
                          backgroundColor:
                            "rgba(7,18,33,0.82)",
                          color: "var(--color-white)",
                          fontSize:
                            "var(--font-size-xs)",
                          fontWeight:
                            "var(--font-weight-semibold)",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        {photo.categoryLabel}
                      </span>
                    </div>

                    <div className="card-padding">
                      <h2 className="heading-three">
                        {photo.title}
                      </h2>

                      <p
                        className="text-muted"
                        style={{
                          marginTop: "var(--space-3)",
                          marginBottom: 0,
                          fontSize:
                            "var(--font-size-sm)",
                        }}
                      >
                        {photo.description}
                      </p>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div
              className="card card-padding text-center"
              style={{
                maxWidth: "680px",
                margin:
                  "var(--space-12) auto 0 auto",
              }}
            >
              <h2 className="heading-three">
                No photographs available
              </h2>

              <p
                className="text-muted"
                style={{
                  marginTop: "var(--space-3)",
                  marginBottom: 0,
                }}
              >
                No published photographs are currently
                available in this category.
              </p>
            </div>
          )}

          <p
            style={{
              maxWidth: "850px",
              margin:
                "var(--space-12) auto 0 auto",
              paddingTop: "var(--space-5)",
              borderTop:
                "1px solid var(--color-border)",
              color: "var(--color-text-muted)",
              fontSize: "var(--font-size-xs)",
              lineHeight: "1.7",
              textAlign: "center",
            }}
          >
            Photographs involving other individuals should be
            published only after confirming appropriate
            permission and ensuring that confidential
            documents or case-related information are not
            visible.
          </p>
        </Container>
      </section>
    </main>
  );
}
