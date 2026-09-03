import Image from "next/image";
import Link from "next/link";

import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { getFeaturedGalleryPhotos } from "@/data/gallery";

export default function GalleryPreviewSection() {
  const photos = getFeaturedGalleryPhotos(6);

  if (!photos.length) {
    return null;
  }

  return (
    <section className="section section-white" aria-labelledby="gallery-preview-heading">
      <Container>
        <SectionHeading
          id="gallery-preview-heading"
          eyebrow="Gallery"
          title="Office and professional environment"
          description="Published photographs are limited to approved office and professional-context images."
          align="center"
        />

        <div className="gallery-preview-grid">
          {photos.map((photo) => (
            <Link key={photo.id} href="/gallery" className="gallery-preview-item">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
              />
              <span>{photo.title}</span>
            </Link>
          ))}
        </div>

        <div className="section-actions">
          <ButtonLink href="/gallery" variant="dark" icon="arrow">
            View Full Gallery
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
