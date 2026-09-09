const commonPracticeAreas = [
  "Civil Law Matters",
  "Criminal Law Matters",
  "Family Court Matters",
  "Divorce Matters",
  "Property Disputes",
  "Landlord and Tenant Matters",
  "Eviction Proceedings",
  "Section 138 Cheque-Bounce Matters",
  "POCSO-Related Matters",
  "Debt Recovery Tribunal Matters",
  "Legal Documentation",
  "Will Writing",
  "Business Transactions",
  "Case Assessments",
  "Legal Advice",
  "Legal Settlements",
  "Workers’ Compensation Matters",
  "Disability-Benefit Matters",
];

export const officeLocations = [
  {
    id: 1,
    slug: "chhatrapati-sambhajinagar",
    officeCode: "CSN-01",

    name: "Chhatrapati Sambhajinagar Office",
    shortName: "Sambhajinagar Office",
    alternateName: "Aurangabad Office",

    advocateName: "Advocate Shrinivas Talawar",
    designation: "Legal Practitioner",

    isPrimary: true,
    isPublished: true,
    isPlaceholder: false,
    noIndex: false,

    status: "active",
    statusLabel: "Active Office",

    city: "Chhatrapati Sambhajinagar",
    alternateCityName: "Aurangabad",
    district: "Chhatrapati Sambhajinagar",
    state: "Maharashtra",
    stateCode: "MH",
    country: "India",
    countryCode: "IN",
    postalCode: "431001",

    address: {
      flatNumber: "Flat No. 701",
      floor: "7th Floor",
      building: "Surya Apartment",
      street: "Samadhan Colony, Padampura",
      locality: "Padampura",
      area: "Samadhan Colony",
      landmark:
        "Opposite State Consumer Forum & Government Ladies Hostel",

      streetAddress:
        "Flat No. 701, 7th Floor, Surya Apartment, Samadhan Colony, Padampura",

      shortAddress:
        "Surya Apartment, Samadhan Colony, Padampura, Chhatrapati Sambhajinagar – 431001",

      fullAddress:
        "Flat No. 701, 7th Floor, Surya Apartment, Opposite State Consumer Forum & Government Ladies Hostel, Samadhan Colony, Padampura, Chhatrapati Sambhajinagar, Maharashtra – 431001",
    },

    contact: {
      phoneDisplay: "+91 98220 51707",
      phoneValue: "+919822051707",
      phoneHref: "tel:+919822051707",

      whatsappDisplay: "+91 98220 51707",
      whatsappValue: "919822051707",
      whatsappHref: "https://wa.me/919822051707",

      email: null,
    },

    availability: {
      label: "Open 24 Hours",
      isOpen24Hours: true,
      appointmentRequired: true,
      onlineAppointments: true,
      onsiteServices: true,

      weeklyHours: [
        {
          day: "Monday",
          opens: "00:00",
          closes: "23:59",
          display: "Open 24 Hours",
        },
        {
          day: "Tuesday",
          opens: "00:00",
          closes: "23:59",
          display: "Open 24 Hours",
        },
        {
          day: "Wednesday",
          opens: "00:00",
          closes: "23:59",
          display: "Open 24 Hours",
        },
        {
          day: "Thursday",
          opens: "00:00",
          closes: "23:59",
          display: "Open 24 Hours",
        },
        {
          day: "Friday",
          opens: "00:00",
          closes: "23:59",
          display: "Open 24 Hours",
        },
        {
          day: "Saturday",
          opens: "00:00",
          closes: "23:59",
          display: "Open 24 Hours",
        },
        {
          day: "Sunday",
          opens: "00:00",
          closes: "23:59",
          display: "Open 24 Hours",
        },
      ],
    },

    location: {
      latitude: null,
      longitude: null,

      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Surya+Apartment+Samadhan+Colony+Padampura+Chhatrapati+Sambhajinagar+Maharashtra+431001",

      googleMapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.314041229414!2d75.31818919999999!3d19.868956999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9902591d124b%3A0x1b0a75344e431dca!2sAdvocate%20Shrinivas%20Talawar!5e0!3m2!1sen!2sin!4v1788438745346!5m2!1sen!2sin",

      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=Surya+Apartment+Samadhan+Colony+Padampura+Chhatrapati+Sambhajinagar+Maharashtra+431001",

      nearbyLandmarks: [
        "State Consumer Forum",
        "Government Ladies Hostel",
        "Padampura",
        "Samadhan Colony",
      ],

      publicTransportInformation:
        "Visitors should verify the most convenient route using Google Maps before travelling.",

      parkingInformation:
        "Parking availability should be confirmed with the office before visiting.",
    },

    images: {
      cover: {
        src: "/images/gallery/offices1.jpeg",
        alt: "Office of Advocate Shrinivas Talawar in Chhatrapati Sambhajinagar",
        width: 1600,
        height: 1067,
      },

      thumbnail: {
        src: "/images/gallery/office-reception.jpeg",
        alt: "Advocate office in Padampura, Chhatrapati Sambhajinagar",
        width: 800,
        height: 600,
      },

      map: {
        src: "/images/gallery/office-location.webp",
        alt: "Map showing the Chhatrapati Sambhajinagar office location",
        width: 1200,
        height: 800,
      },

      gallery: [
        "/images/gallery/office-reception.jpeg",
        "/images/gallery/cabin1.jpeg",
        "/images/gallery/indoor.jpeg",
      ],
    },

    overview: {
      shortDescription:
        "Professional office of Advocate Shrinivas Talawar located in Padampura, Chhatrapati Sambhajinagar, Maharashtra.",

      paragraphs: [
        "The Chhatrapati Sambhajinagar office is the primary professional office of Advocate Shrinivas Talawar.",
        "The office handles civil, criminal, family, property, financial recovery and documentation-related matters according to their individual facts and procedural circumstances.",
        "Online appointments and on-site services are available subject to confirmation with the office.",
      ],
    },

    facilities: [
      "Professional consultation area",
      "Private discussion space",
      "Document-review facility",
      "Visitor waiting area",
      "Online appointment availability",
      "On-site appointment availability",
    ],

    practiceAreas: commonPracticeAreas,

    serviceAreas: [
      "Chhatrapati Sambhajinagar",
      "Aurangabad",
      "Padampura",
      "Samadhan Colony",
      "Nearby areas of Chhatrapati Sambhajinagar",
    ],

    seo: {
      title:
        "Advocate Office in Chhatrapati Sambhajinagar | Shrinivas Talawar",

      description:
        "Office address and appointment information for Advocate Shrinivas Talawar in Padampura, Chhatrapati Sambhajinagar, formerly Aurangabad, Maharashtra.",

      canonicalPath:
        "/offices/chhatrapati-sambhajinagar",

      keywords: [
        "Advocate Shrinivas Talawar office",
        "advocate office in Chhatrapati Sambhajinagar",
        "lawyer office in Aurangabad",
        "advocate in Padampura",
        "civil advocate in Chhatrapati Sambhajinagar",
        "criminal lawyer in Aurangabad",
        "family court advocate in Aurangabad",
        "property lawyer in Chhatrapati Sambhajinagar",
        "Section 138 advocate in Aurangabad",
        "DRT advocate in Chhatrapati Sambhajinagar",
      ],
    },

    disclaimer:
      "Office and appointment information is provided for general professional identification only. Appointment availability should be confirmed before visiting.",
  },

  {
    id: 2,
    slug: "navi-mumbai",
    officeCode: "NMM-02",

    name: "Navi Mumbai Office",
    shortName: "Navi Mumbai Office",
    alternateName: "Advocate Shrinivas Talawar Navi Mumbai Office",

    advocateName: "Advocate Shrinivas Talawar",
    designation: "Legal Practitioner",

    isPrimary: false,
    isPublished: true,
    isPlaceholder: false,
    noIndex: false,

    status: "active",
    statusLabel: "Active Office",

    city: "Navi Mumbai",
    alternateCityName: null,
    district: "Thane",
    state: "Maharashtra",
    stateCode: "MH",
    country: "India",
    countryCode: "IN",
    postalCode: "400705",

    address: {
      flatNumber: "Office No. 907",
      floor: "9th Floor",
      building: "Bhumiraj Costarica, Plot No- 1 & 2",
      street: "Sector 18, Sanpada",
      locality: "Navi Mumbai",
      area: "Navi Mumbai",
      landmark: "Bhumiraj Costarica, Plot No- 1& 2, Sector 18, Sanpada",

      streetAddress:
        "9th Floor, Office No. 907, Bhumiraj Costarica, Plot No- 1 & 2, Sector 18, Sanpada",

      shortAddress:
        "9th Floor, Office No. 907, Bhumiraj Costarica, Sector 18, Sanpada, Navi Mumbai - 400705",

      fullAddress:
        "9th Floor, Office No. 907, Bhumiraj Costarica, Plot No- 1 & 2, Sector 18, Sanpada, Navi Mumbai, Maharashtra - 400705",
    },

    contact: {
      phoneDisplay: "+9190499 01111",
      phoneValue: "+919049901111",
      phoneHref: "tel:+919049901111",

      whatsappDisplay: "+9190499 01111",
      whatsappValue: "919049901111",
      whatsappHref: "https://wa.me/919049901111",

      email: null,
    },

    availability: {
      label: "Appointments by prior confirmation",
      isOpen24Hours: false,
      appointmentRequired: true,
      onlineAppointments: true,
      onsiteServices: true,

      weeklyHours: [

      ],
    },

    location: {
      latitude: null,
      longitude: null,

      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=9th+Floor+Office+No+907+Bhumiraj+Costarica+Plot+No+1+and+2+Sector+18+Sanpada+Navi+Mumbai+Maharashtra+400705",

      googleMapsEmbedUrl:
        "https://www.google.com/maps?q=9th+Floor+Office+No+907+Bhumiraj+Costarica+Plot+No+1+and+2+Sector+18+Sanpada+Navi+Mumbai+Maharashtra+400705&output=embed",

      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=9th+Floor+Office+No+907+Bhumiraj+Costarica+Plot+No+1+and+2+Sector+18+Sanpada+Navi+Mumbai+Maharashtra+400705",

      nearbyLandmarks: [
        "Bhumiraj Costarica",
        "Sector 18",
        "Sanpada",
        "Navi Mumbai",
      ],

      publicTransportInformation:
        "Visitors should verify the most convenient route using Google Maps before travelling.",

      parkingInformation:
        "Parking availability should be confirmed with the office before visiting.",
    },

    images: {
      cover: {
        src: "/images/gallery/office-location.webp",
        alt: "Navi Mumbai office location map",
        width: 1600,
        height: 1067,
      },

      thumbnail: {
        src: "/images/gallery/office-location.webp",
        alt: "Navi Mumbai office thumbnail",
        width: 800,
        height: 600,
      },

      map: {
        src: "/images/gallery/office-location.webp",
        alt: "General map of Navi Mumbai, Maharashtra",
        width: 1200,
        height: 800,
      },

      gallery: [],
    },

    overview: {
      shortDescription:
        "Professional office information for Advocate Shrinivas Talawar at Sector 18, Sanpada, Navi Mumbai.",

      paragraphs: [
        "The Navi Mumbai office is listed for professional appointment and office-location information.",
        "The office handles civil, criminal, family, property, financial recovery and documentation-related matters according to their individual facts and procedural circumstances.",
        "Appointments should be confirmed with the office before visiting.",
      ],
    },

    facilities: [
      "Professional consultation area",
      "Document-review facility",
      "Online appointment availability",
      "On-site appointment availability by confirmation",
    ],

    practiceAreas: commonPracticeAreas,

    serviceAreas: [
      "Navi Mumbai",
      "Vashi",
      "Nerul",
      "Belapur",
      "Sanpada",
      "Kharghar",
      "Panvel",
      "Thane",
    ],

    seo: {
      title:
        "Advocate Office in Navi Mumbai | Shrinivas Talawar",

      description:
        "Office and appointment information for Advocate Shrinivas Talawar at Bhumiraj Costarica, Sector 18, Sanpada, Navi Mumbai, Maharashtra.",

      canonicalPath: "/offices/navi-mumbai",

      keywords: [
        "advocate office in Navi Mumbai",
        "lawyer in Navi Mumbai",
        "civil advocate in Navi Mumbai",
        "criminal lawyer in Navi Mumbai",
        "family court advocate in Navi Mumbai",
        "property lawyer in Navi Mumbai",
        "Section 138 advocate in Navi Mumbai",
        "legal advice in Navi Mumbai",
        "advocate in Sanpada",
        "lawyer in Sanpada Navi Mumbai",
      ],
    },

    disclaimer:
      "Office and appointment information is provided for general professional identification only. Appointment availability should be confirmed before visiting.",
  },

  {
    id: 3,
    slug: "pune",
    officeCode: "PUN-03",

    name: "Pimpri-Chinchwad Office",
    shortName: "Pimpri-Chinchwad Office",
    alternateName: "Pune Office",

    advocateName: "Advocate Shrinivas Talawar",
    designation: "Legal Practitioner",

    isPrimary: false,
    isPublished: true,
    isPlaceholder: false,
    noIndex: false,

    status: "active",
    statusLabel: "Active Office",

    city: "Pimpri-Chinchwad",
    alternateCityName: "Pune",
    district: "Pune",
    state: "Maharashtra",
    stateCode: "MH",
    country: "India",
    countryCode: "IN",
    postalCode: "411033",

    address: {
      flatNumber: "7",
      floor: null,
      building: "Plumeria Drive",
      street: "7 Plumeria Dr St",
      locality: "Vishnu Dev Nagar, Tathawade",
      area: "Tathawade",
      landmark: "Plumeria Drive, Tathawade",

      streetAddress:
        "7 Plumeria Drive, 7 Plumeria Dr St, Vishnu Dev Nagar, Tathawade",

      shortAddress:
        "7 Plumeria Drive, Vishnu Dev Nagar, Tathawade, Pimpri-Chinchwad - 411033",

      fullAddress:
        "7 Plumeria Drive, 7 Plumeria Dr St, Vishnu Dev Nagar, Tathawade, Pimpri-Chinchwad, Maharashtra - 411033",
    },

    contact: {
      phoneDisplay: "+91 98220 51707",
      phoneValue: "+919822051707",
      phoneHref: "tel:+919822051707",

      whatsappDisplay: "+91 98220 51707",
      whatsappValue: "919822051707",
      whatsappHref: "https://wa.me/919822051707",

      email: null,
    },

    availability: {
      label: "Appointments by prior confirmation",
      isOpen24Hours: false,
      appointmentRequired: true,
      onlineAppointments: true,
      onsiteServices: true,

      weeklyHours: [],
    },

    location: {
      latitude: null,
      longitude: null,

      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=7+Plumeria+Dr+St+Vishnu+Dev+Nagar+Tathawade+Pimpri-Chinchwad+Maharashtra+411033",

      googleMapsEmbedUrl:
        "https://www.google.com/maps?q=7+Plumeria+Dr+St+Vishnu+Dev+Nagar+Tathawade+Pimpri-Chinchwad+Maharashtra+411033&output=embed",

      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=7+Plumeria+Dr+St+Vishnu+Dev+Nagar+Tathawade+Pimpri-Chinchwad+Maharashtra+411033",

      nearbyLandmarks: [
        "Plumeria Drive",
        "Vishnu Dev Nagar",
        "Tathawade",
        "Pimpri-Chinchwad",
      ],

      publicTransportInformation:
        "Visitors should verify the most convenient route using Google Maps before travelling.",

      parkingInformation:
        "Parking availability should be confirmed with the office before visiting.",
    },

    images: {
      cover: {
        src: "/images/gallery/office-location.webp",
        alt: "Pimpri-Chinchwad office location map",
        width: 1600,
        height: 1067,
      },

      thumbnail: {
        src: "/images/gallery/office-location.webp",
        alt: "Pimpri-Chinchwad office thumbnail",
        width: 800,
        height: 600,
      },

      map: {
        src: "/images/gallery/office-location.webp",
        alt: "General map of Pimpri-Chinchwad, Maharashtra",
        width: 1200,
        height: 800,
      },

      gallery: [],
    },

    overview: {
      shortDescription:
        "Professional office information for Advocate Shrinivas Talawar at Tathawade, Pimpri-Chinchwad, Maharashtra.",

      paragraphs: [
        "The Pimpri-Chinchwad office is listed for professional appointment and office-location information.",
        "The office handles civil, criminal, family, property, financial recovery and documentation-related matters according to their individual facts and procedural circumstances.",
        "Appointments should be confirmed with the office before visiting.",
      ],
    },

    facilities: [
      "Professional consultation area",
      "Document-review facility",
      "Online appointment availability",
      "On-site appointment availability by confirmation",
    ],

    practiceAreas: commonPracticeAreas,

    serviceAreas: [
      "Pune",
      "Shivajinagar",
      "Kothrud",
      "Hadapsar",
      "Hinjawadi",
      "Baner",
      "Wakad",
      "Pimpri-Chinchwad",
    ],

    seo: {
      title:
        "Advocate Office in Pimpri-Chinchwad | Shrinivas Talawar",

      description:
        "Office and appointment information for Advocate Shrinivas Talawar in Tathawade, Pimpri-Chinchwad, Pune, Maharashtra.",

      canonicalPath: "/offices/pune",

      keywords: [
        "advocate office in Pune",
        "lawyer in Pune",
        "civil advocate in Pune",
        "criminal lawyer in Pune",
        "family court advocate in Pune",
        "property lawyer in Pune",
        "Section 138 advocate in Pune",
        "legal advice in Pune",
        "advocate office in Pimpri-Chinchwad",
        "lawyer in Tathawade",
        "advocate in Tathawade Pune",
      ],
    },

    disclaimer:
      "Office and appointment information is provided for general professional identification only. Appointment availability should be confirmed before visiting.",
  },
];

export function getOfficeLocationBySlug(slug) {
  return officeLocations.find(
    (office) => office.slug === slug
  );
}

export function getPrimaryOfficeLocation() {
  return officeLocations.find(
    (office) => office.isPrimary
  );
}

export function getPublishedOfficeLocations() {
  return officeLocations.filter(
    (office) =>
      office.isPublished &&
      !office.isPlaceholder
  );
}

export function getOfficeLocationSlugs({
  publishedOnly = true,
} = {}) {
  return officeLocations
    .filter((office) =>
      publishedOnly
        ? office.isPublished &&
          !office.isPlaceholder
        : true
    )
    .map((office) => office.slug);
}

export function getOfficeLocationsByState(
  state = "Maharashtra"
) {
  return officeLocations.filter(
    (office) =>
      office.state.toLowerCase() ===
      state.toLowerCase()
  );
}

export function getNearbyOfficeLocations(
  currentSlug,
  limit = 2
) {
  return officeLocations
    .filter(
      (office) =>
        office.slug !== currentSlug &&
        office.isPublished &&
        !office.isPlaceholder
    )
    .slice(0, limit);
}

export default officeLocations;
