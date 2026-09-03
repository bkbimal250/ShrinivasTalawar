import { practiceAreas } from "@/data/practiceAreas";
import { getPublishedOfficeLocations } from "@/data/officeLocation";

const practiceAreaLinks = practiceAreas.map((practiceArea) => ({
    label: practiceArea.menuTitle || practiceArea.title,
    href: `/practice-areas/${practiceArea.slug}`,
}));

const officeLinks = getPublishedOfficeLocations().map((office) => ({
    label: office.shortName || office.name,
    href: `/offices/${office.slug}`,
}));

export const mainNavigation = [
    {
        id: 1,
        label: "Home",
        href: "/",
    },
    {
        id: 2,
        label: "Professional Profile",
        href: "/about",
    },
    {
        id: 3,
        label: "Practice Areas",
        href: "/practice-areas",
        children: practiceAreaLinks,
    },
    {
        id: 4,
        label: "Offices",
        href: "/offices",
        children: officeLinks,
    },
    {
        id: 5,
        label: "Gallery",
        href: "/gallery",
    },
    {
        id: 6,
        label: "Contact",
        href: "/contact",
    },
];

export const footerNavigation = {
    profile: [
        {
            label: "Professional Profile",
            href: "/about",
        },
        {
            label: "Offices",
            href: "/offices",
        },
        {
            label: "Gallery",
            href: "/gallery",
        },
        {
            label: "Contact",
            href: "/contact",
        },
    ],

    legal: [
        {
            label: "Disclaimer",
            href: "/disclaimer",
        },
        {
            label: "Privacy Policy",
            href: "/privacy-policy",
        },
        {
            label: "Sitemap",
            href: "/sitemap.xml",
        },
    ],

    practiceAreas: [
        {
            label: "Civil Law",
            href: "/practice-areas/civil-law",
        },
        {
            label: "Criminal Law",
            href: "/practice-areas/criminal-law",
        },
        {
            label: "Family Law",
            href: "/practice-areas/family-law",
        },
        {
            label: "Property Disputes",
            href: "/practice-areas/property-disputes",
        },
        {
            label: "Cheque-Bounce Matters",
            href: "/practice-areas/section-138-cheque-bounce",
        },
        {
            label: "DRT Matters",
            href: "/practice-areas/debt-recovery-tribunal",
        },
    ],
};

export const mobileNavigation = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Profile",
        href: "/about",
    },
    {
        label: "Practice Areas",
        href: "/practice-areas",
        children: practiceAreaLinks,
    },
    {
        label: "Offices",
        href: "/offices",
        children: officeLinks,
    },
    {
        label: "Gallery",
        href: "/gallery",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export default mainNavigation;
