export const SITE_NAME = "Advocate Shrinivas Talawar";

export const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export const SITE_LOCALE = "en_IN";
export const SITE_LANGUAGE = "en";
export const SITE_COUNTRY = "IN";

export const DEFAULT_TITLE =
    "Advocate Shrinivas Talawar | Chhatrapati Sambhajinagar";

export const TITLE_TEMPLATE = "%s | Advocate Shrinivas Talawar";

export const DEFAULT_DESCRIPTION =
    "Professional profile of Advocate Shrinivas Talawar, handling civil, criminal, family, property, DRT and documentation matters in Chhatrapati Sambhajinagar, Maharashtra.";

export const DEFAULT_KEYWORDS = [
    "Advocate Shrinivas Talawar",
    "advocate in Chhatrapati Sambhajinagar",
    "lawyer in Chhatrapati Sambhajinagar",
    "advocate in Aurangabad Maharashtra",
    "civil advocate in Chhatrapati Sambhajinagar",
    "criminal advocate in Aurangabad",
    "family court advocate in Aurangabad",
    "divorce advocate in Chhatrapati Sambhajinagar",
    "property dispute advocate in Aurangabad",
    "Section 138 advocate in Aurangabad",
    "DRT advocate in Chhatrapati Sambhajinagar",
    "legal documentation advocate in Aurangabad",
    "POCSO case advocate in Chhatrapati Sambhajinagar",
];

export const DEFAULT_OG_IMAGE = "/images/gallery/og-cover.webp";

export const CONTACT = {
    phoneDisplay: "+91 98220 51707",
    phoneValue: "+919822051707",
    phoneHref: "tel:+919822051707",

    whatsappValue: "919822051707",
    whatsappHref: "https://wa.me/919822051707",

    email: null,

    availability: "Open 24 Hours",
    onlineAppointments: true,
    onsiteServices: true,
};

export const OFFICE_ADDRESS = {
    streetAddress:
        "Flat No. 701, 7th Floor, Surya Apartment, Opposite State Consumer Forum & Government Ladies Hostel, Samadhan Colony, Padampura",

    addressLocality: "Chhatrapati Sambhajinagar",
    alternateCityName: "Aurangabad",
    addressRegion: "Maharashtra",
    postalCode: "431001",
    addressCountry: "IN",

    fullAddress:
        "Flat No. 701, 7th Floor, Surya Apartment, Opposite State Consumer Forum & Government Ladies Hostel, Samadhan Colony, Padampura, Chhatrapati Sambhajinagar, Maharashtra - 431001",
};

export const GOOGLE_MAPS_URL =
    "https://www.google.com/maps/search/?api=1&query=Surya+Apartment+Samadhan+Colony+Padampura+Chhatrapati+Sambhajinagar+Maharashtra+431001";

export const SOCIAL_LINKS = {
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
};

export const BUSINESS_HOURS = [
    {
        dayOfWeek: "Monday",
        opens: "00:00",
        closes: "23:59",
    },
    {
        dayOfWeek: "Tuesday",
        opens: "00:00",
        closes: "23:59",
    },
    {
        dayOfWeek: "Wednesday",
        opens: "00:00",
        closes: "23:59",
    },
    {
        dayOfWeek: "Thursday",
        opens: "00:00",
        closes: "23:59",
    },
    {
        dayOfWeek: "Friday",
        opens: "00:00",
        closes: "23:59",
    },
    {
        dayOfWeek: "Saturday",
        opens: "00:00",
        closes: "23:59",
    },
    {
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "23:59",
    },
];

export const THEME = {
    colors: {
        primary: "#10213B",
        secondary: "#B69050",
        background: "#F8F7F3",
        surface: "#FFFFFF",
        text: "#152238",
        mutedText: "#617085",
        border: "#DED9CF",
    },
};

export const LEGAL_DISCLAIMER =
    "The information presented on this website is provided solely for general professional identification and informational purposes. It does not constitute advertising, solicitation, legal advice or an assurance regarding the outcome of any matter. Contacting the office does not by itself establish an advocate-client relationship.";
