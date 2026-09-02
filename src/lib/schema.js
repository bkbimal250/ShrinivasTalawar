import {
    BUSINESS_HOURS,
    CONTACT,
    DEFAULT_DESCRIPTION,
    OFFICE_ADDRESS,
    SITE_NAME,
    SITE_URL,
} from "@/lib/constants";

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
    return {
        "@context": "https://schema.org",
        "@type": ["LegalService", "Attorney"],

        "@id": `${SITE_URL}/#legal-service`,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        url: SITE_URL,

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

        sameAs: [],
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

    return {
        "@context": "https://schema.org",
        "@type": "Service",

        "@id": `${pageUrl}#service`,
        name: practiceArea.title,
        description: practiceArea.shortDescription,
        url: pageUrl,

        serviceType: practiceArea.title,

        provider: {
            "@id": `${SITE_URL}/#legal-service`,
        },

        areaServed: {
            "@type": "City",
            name: "Chhatrapati Sambhajinagar",
            alternateName: "Aurangabad",
        },

        availableChannel: [
            {
                "@type": "ServiceChannel",
                serviceLocation: {
                    "@id": `${SITE_URL}/#legal-service`,
                },
            },
        ],
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
    return createWebPageSchema({
        title: "Office and Contact Information",
        description:
            "Office address, telephone number and appointment information for Advocate Shrinivas Talawar.",
        pathname: "/contact",
        type: "ContactPage",
    });
}

export function serializeSchema(schema) {
    return JSON.stringify(schema).replace(/</g, "\\u003c");
}
