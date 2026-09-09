import { practiceAreas } from "@/data/practiceAreas";
import { getPublishedOfficeLocations } from "@/data/officeLocation";
import { SITE_URL } from "@/lib/constants";

export default function sitemap() {
  const lastModified = new Date();

  const staticPages = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/practice-areas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/offices`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${SITE_URL}/disclaimer`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const practiceAreaPages = practiceAreas.map(
    (practiceArea) => ({
      url: `${SITE_URL}/practice-areas/${practiceArea.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const officePages = getPublishedOfficeLocations().map(
    (office) => ({
      url: `${SITE_URL}/offices/${office.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: office.isPrimary ? 0.85 : 0.75,
    })
  );

  return [...staticPages, ...practiceAreaPages, ...officePages];
}
