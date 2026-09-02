import {
    DEFAULT_DESCRIPTION,
    DEFAULT_KEYWORDS,
    DEFAULT_OG_IMAGE,
    DEFAULT_TITLE,
    SITE_LOCALE,
    SITE_NAME,
    SITE_URL,
} from "@/lib/constants";

function normalizePath(pathname = "/") {
    if (!pathname || pathname === "/") {
        return "/";
    }

    return `/${pathname.replace(/^\/+|\/+$/g, "")}`;
}

export function getAbsoluteUrl(pathname = "/") {
    const normalizedPath = normalizePath(pathname);

    return `${SITE_URL}${normalizedPath}`;
}

export function createMetadata({
    title,
    description = DEFAULT_DESCRIPTION,
    pathname = "/",
    keywords = [],
    image = DEFAULT_OG_IMAGE,
    noIndex = false,
    type = "website",
} = {}) {
    const pageTitle = title || DEFAULT_TITLE;

    const canonicalUrl = getAbsoluteUrl(pathname);

    const combinedKeywords = [
        ...new Set([...DEFAULT_KEYWORDS, ...keywords]),
    ];

    const imageDetails = image
        ? typeof image === "string"
            ? {
                url: image,
                width: 1200,
                height: 630,
                alt: pageTitle,
            }
            : image
        : null;

    return {
        metadataBase: new URL(SITE_URL),

        title: title || { absolute: DEFAULT_TITLE },
        description,
        keywords: combinedKeywords,

        authors: [
            {
                name: SITE_NAME,
            },
        ],

        creator: SITE_NAME,
        publisher: SITE_NAME,

        alternates: {
            canonical: canonicalUrl,
        },

        robots: {
            index: !noIndex,
            follow: !noIndex,

            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1,
            },
        },

        openGraph: {
            type,
            locale: SITE_LOCALE,
            url: canonicalUrl,
            siteName: SITE_NAME,
            title: pageTitle,
            description,
            ...(imageDetails ? { images: [imageDetails] } : {}),
        },

        twitter: {
            card: "summary_large_image",
            title: pageTitle,
            description,
            ...(imageDetails ? { images: [imageDetails.url] } : {}),
        },
    };
}

export function createPracticeAreaMetadata(practiceArea) {
    if (!practiceArea) {
        return createMetadata({
            title: "Practice Area Not Found",
            description: "The requested practice-area page could not be found.",
            noIndex: true,
        });
    }

    return createMetadata({
        title: practiceArea.metaTitle || practiceArea.title,
        description: practiceArea.metaDescription,
        pathname: `/practice-areas/${practiceArea.slug}`,
        keywords: practiceArea.keywords || [],
    });
}

export function createArticleMetadata({
    title,
    description,
    slug,
    keywords = [],
    image = DEFAULT_OG_IMAGE,
    publishedTime,
    modifiedTime,
}) {
    const metadata = createMetadata({
        title,
        description,
        pathname: `/legal-information/${slug}`,
        keywords,
        image,
        type: "article",
    });

    return {
        ...metadata,

        openGraph: {
            ...metadata.openGraph,
            type: "article",
            publishedTime,
            modifiedTime,
            authors: [SITE_NAME],
        },
    };
}

export const homeMetadata = createMetadata();

export const aboutMetadata = createMetadata({
    title: "Professional Profile",
    description:
        "Professional profile of Advocate Shrinivas Talawar, a legal practitioner handling civil, criminal, family and related matters in Chhatrapati Sambhajinagar.",
    pathname: "/about",
    keywords: [
        "Advocate Shrinivas Talawar profile",
        "advocate profile Chhatrapati Sambhajinagar",
        "lawyer profile Aurangabad",
    ],
});

export const practiceAreasMetadata = createMetadata({
    title: "Practice Areas",
    description:
        "View the areas of practice handled by Advocate Shrinivas Talawar, including civil, criminal, family, property, cheque-bounce and DRT matters.",
    pathname: "/practice-areas",
    keywords: [
        "legal practice areas Chhatrapati Sambhajinagar",
        "civil criminal family advocate Aurangabad",
        "legal services Chhatrapati Sambhajinagar",
    ],
});

export const contactMetadata = createMetadata({
    title: "Office and Contact Information",
    description:
        "Office address, telephone number, availability and appointment information for Advocate Shrinivas Talawar in Padampura, Chhatrapati Sambhajinagar.",
    pathname: "/contact",
    keywords: [
        "Advocate Shrinivas Talawar contact",
        "advocate office Padampura",
        "lawyer near State Consumer Forum Aurangabad",
    ],
});

export const disclaimerMetadata = createMetadata({
    title: "Legal Disclaimer",
    description:
        "Website disclaimer and important legal information for the website of Advocate Shrinivas Talawar.",
    pathname: "/disclaimer",
    noIndex: true,
});

export const privacyMetadata = createMetadata({
    title: "Privacy Policy",
    description:
        "Privacy policy for the website of Advocate Shrinivas Talawar.",
    pathname: "/privacy-policy",
    noIndex: true,
});