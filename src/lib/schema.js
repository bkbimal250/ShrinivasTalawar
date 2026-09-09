import {
    BUSINESS_HOURS,
    CONTACT,
    DEFAULT_DESCRIPTION,
    GOOGLE_MAPS_URL,
    OFFICE_ADDRESS,
    SITE_NAME,
    SITE_URL,
    SOCIAL_LINKS,
} from "@/lib/constants";
import { getPublishedOfficeLocations } from "@/data/officeLocation";

function getAbsoluteUrl(pathname = "/") {
    if (!pathname || pathname === "/") {
        return SITE_URL;
    }

    const normalizedPath = pathname.startsWith("/")
        ? pathname
        : `/${pathname}`;

    return `${SITE_URL}${normalizedPath}`;
}

export function createAttorneySchema() {
    const publishedOffices = getPublishedOfficeLocations();

    return {
        "@context": "https://schema.org",
        "@type": ["LegalService", "Attorney"],

        "@id": `${SITE_URL}/#legal-service`,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        url: SITE_URL,
        hasMap: GOOGLE_MAPS_URL,

        telephone: CONTACT.phoneValue,

        address: {
            "@type": "PostalAddress",
            streetAddress: OFFICE_ADDRESS.streetAddress,
            addressLocality: OFFICE_ADDRESS.addressLocality,
            addressRegion: OFFICE_ADDRESS.addressRegion,
            postalCode: OFFICE_ADDRESS.postalCode,
            addressCountry: OFFICE_ADDRESS.addressCountry,
        },

        areaServed: [
            {
                "@type": "City",
                name: "Chhatrapati Sambhajinagar",
                alternateName: "Aurangabad",
            },
            {
                "@type": "City",
                name: "Navi Mumbai",
            },
            {
                "@type": "City",
                name: "Pimpri-Chinchwad",
                alternateName: "Pune",
            },
            {
                "@type": "AdministrativeArea",
                name: "Maharashtra",
            },
        ],

        openingHoursSpecification: BUSINESS_HOURS.map((item) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: `https://schema.org/${item.dayOfWeek}`,
            opens: item.opens,
            closes: item.closes,
        })),

        availableLanguage: [
            {
                "@type": "Language",
                name: "English",
                alternateName: "en",
            },
            {
                "@type": "Language",
                name: "Hindi",
                alternateName: "hi",
            },
            {
                "@type": "Language",
                name: "Marathi",
                alternateName: "mr",
            },
        ],

        knowsAbout: [
            "Civil Law",
            "Criminal Law",
            "Family Law",
            "Property Disputes",
            "Section 138 Cheque-Bounce Matters",
            "POCSO-Related Matters",
            "Debt Recovery Tribunal Matters",
            "Legal Documentation",
            "Customs-Related Matters",
            "Workers' Compensation Matters",
        ],

        contactPoint: {
            "@type": "ContactPoint",
            telephone: CONTACT.phoneValue,
            contactType: "Office Appointment Information",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Marathi"],
        },

        department: publishedOffices.map((office) => ({
            "@type": ["LegalService", "Attorney"],
            "@id": `${SITE_URL}/offices/${office.slug}#office`,
            name: `${office.advocateName} - ${office.name}`,
            url: `${SITE_URL}/offices/${office.slug}`,
            telephone: office.contact.phoneValue,
            hasMap: office.location.googleMapsUrl,
            address: {
                "@type": "PostalAddress",
                streetAddress: office.address.streetAddress,
                addressLocality: office.city,
                addressRegion: office.state,
                postalCode: office.postalCode,
                addressCountry: office.countryCode,
            },
            ...(office.availability.weeklyHours.length
                ? {
                    openingHoursSpecification:
                        office.availability.weeklyHours.map((item) => ({
                            "@type": "OpeningHoursSpecification",
                            dayOfWeek: `https://schema.org/${item.day}`,
                            opens: item.opens,
                            closes: item.closes,
                        })),
                }
                : {}),
        })),

        sameAs: Object.values(SOCIAL_LINKS).filter(Boolean),
    };
}

export function createWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",

        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        description: DEFAULT_DESCRIPTION,

        inLanguage: "en-IN",

        publisher: {
            "@id": `${SITE_URL}/#legal-service`,
        },
    };
}

export function createSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@graph": [createAttorneySchema(), createWebsiteSchema()],
    };
}

export function createWebPageSchema({
    title,
    description,
    pathname = "/",
    type = "WebPage",
}) {
    const pageUrl = getAbsoluteUrl(pathname);

    return {
        "@context": "https://schema.org",
        "@type": type,

        "@id": `${pageUrl}#webpage`,
        name: title,
        description,
        url: pageUrl,
        inLanguage: "en-IN",

        isPartOf: {
            "@id": `${SITE_URL}/#website`,
        },

        about: {
            "@id": `${SITE_URL}/#legal-service`,
        },
    };
}

export function createPracticeAreaSchema(practiceArea) {
    if (!practiceArea) {
        return null;
    }

    const pageUrl = getAbsoluteUrl(
        `/practice-areas/${practiceArea.slug}`
    );
    const pageTitle = practiceArea.metaTitle || practiceArea.title;
    const pageDescription =
        practiceArea.metaDescription || practiceArea.shortDescription;
    const serviceId = `${pageUrl}#service`;
    const webpageId = `${pageUrl}#webpage`;

    const webpageSchema = {
        "@type": "WebPage",
        "@id": webpageId,
        name: pageTitle,
        description: pageDescription,
        url: pageUrl,
        inLanguage: "en-IN",
        isPartOf: {
            "@id": `${SITE_URL}/#website`,
        },
        about: {
            "@id": serviceId,
        },
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: getAbsoluteUrl("/images/gallery/og-cover.webp"),
        },
        mainEntity: {
            "@id": serviceId,
        },
    };

    const serviceSchema = {
        "@type": "Service",

        "@id": serviceId,
        name: practiceArea.title,
        alternateName: practiceArea.menuTitle || practiceArea.title,
        description: pageDescription,
        url: pageUrl,

        serviceType: practiceArea.title,
        category: "Legal Service",
        keywords: practiceArea.keywords || [],
        mainEntityOfPage: {
            "@id": webpageId,
        },

        provider: {
            "@id": `${SITE_URL}/#legal-service`,
        },

        areaServed: [
            {
                "@type": "City",
                name: "Chhatrapati Sambhajinagar",
                alternateName: "Aurangabad",
            },
            {
                "@type": "City",
                name: "Navi Mumbai",
            },
            {
                "@type": "City",
                name: "Pimpri-Chinchwad",
                alternateName: "Pune",
            },
        ],

        availableChannel: [
            {
                "@type": "ServiceChannel",
                serviceLocation: {
                    "@id": `${SITE_URL}/#legal-service`,
                },
            },
        ],

        audience: {
            "@type": "Audience",
            geographicArea: {
                "@type": "AdministrativeArea",
                name: "Maharashtra",
            },
        },

        ...(practiceArea.matters?.length
            ? {
                hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: `${practiceArea.title} matters`,
                    itemListElement: practiceArea.matters.map((matter) => ({
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: matter,
                        },
                    })),
                },
                knowsAbout: practiceArea.matters,
            }
            : {}),

        ...(practiceArea.caseSolved
            ? {
                additionalProperty: [
                    {
                        "@type": "PropertyValue",
                        name: "Cases Solved",
                        value: `${practiceArea.caseSolved}+`,
                    },
                ],
            }
            : {}),
    };

    return {
        "@context": "https://schema.org",
        "@graph": [webpageSchema, serviceSchema],
    };
}

export function createBreadcrumbSchema(items = []) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",

        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: getAbsoluteUrl(item.href),
        })),
    };
}

export function createFAQSchema(faqs = []) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",

        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,

            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

export function createContactPageSchema() {
    const publishedOffices = getPublishedOfficeLocations();
    const schema = createWebPageSchema({
        title: "Office and Contact Information",
        description:
            "Office address, telephone number and appointment information for Advocate Shrinivas Talawar.",
        pathname: "/contact",
        type: "ContactPage",
    });

    return {
        ...schema,
        mainEntity: {
            "@type": "ItemList",
            name: "Office Locations",
            numberOfItems: publishedOffices.length,
            itemListElement: publishedOffices.map((office, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: office.name,
                item: `${SITE_URL}/offices/${office.slug}`,
            })),
        },
    };
}

export function serializeSchema(schema) {
    return JSON.stringify(schema).replace(/</g, "\\u003c");
}
