export const faqs = [
    {
        id: 1,
        question: "Where is Advocate Shrinivas Talawar's office located?",
        answer:
            "The office is located at Flat No. 701, 7th Floor, Surya Apartment, opposite the State Consumer Forum and Government Ladies Hostel, Samadhan Colony, Padampura, Chhatrapati Sambhajinagar, Maharashtra - 431001.",
    },

    {
        id: 2,
        question: "Which legal matters are handled?",
        answer:
            "The areas of practice include civil disputes, criminal proceedings, family court and divorce matters, property disputes, Section 138 cheque-bounce matters, POCSO-related proceedings, Debt Recovery Tribunal matters, customs matters, legal documentation, workers' compensation and disability-benefit matters.",
    },

    {
        id: 3,
        question: "Are online appointments available?",
        answer:
            "Yes. Online appointments and on-site services are available. Appointment availability should be confirmed by calling the office.",
    },

    {
        id: 4,
        question: "What documents should be carried for an initial consultation?",
        answer:
            "You should carry copies of relevant notices, agreements, identification documents, court papers, transaction records, correspondence and any other documents connected with the matter. The documents required will depend upon the nature of the case.",
    },

    {
        id: 5,
        question: "Does the office handle civil and property disputes?",
        answer:
            "Civil and property-related matters may include ownership disputes, possession matters, landlord-tenant disagreements, eviction proceedings, contractual disputes and related civil proceedings.",
    },

    {
        id: 6,
        question: "Are family court and divorce matters handled?",
        answer:
            "Yes. The areas of practice include family court proceedings, mutual-consent divorce, contested divorce, maintenance-related matters, child custody-related proceedings and family settlements.",
    },

    {
        id: 7,
        question: "Are Section 138 cheque-bounce matters handled?",
        answer:
            "Yes. Assistance is available for matters concerning cheque dishonour and proceedings under Section 138 of the Negotiable Instruments Act, subject to assessment of the relevant documents and applicable timelines.",
    },

    {
        id: 8,
        question: "Are Debt Recovery Tribunal matters handled?",
        answer:
            "Yes. Debt Recovery Tribunal matters may include recovery proceedings, borrower or guarantor-related matters, recovery notice assessment, financial document review and representation before the appropriate forum.",
    },

    {
        id: 9,
        question: "Does contacting the office create an advocate-client relationship?",
        answer:
            "No. Calling, messaging or submitting information does not automatically create an advocate-client relationship. Such a relationship is established only after the matter is reviewed and the engagement is formally accepted.",
    },

    {
        id: 10,
        question: "Is the information on this website legal advice?",
        answer:
            "No. Website information is provided for general informational and professional-identification purposes only. It should not be treated as legal advice for any specific matter.",
    },

    {
        id: 11,
        question: "Is any result in a legal matter guaranteed?",
        answer:
            "No. The result of a legal matter depends upon its facts, evidence, applicable law, procedure and the decision of the appropriate court or authority. No outcome is promised or guaranteed.",
    },

    {
        id: 12,
        question:
            "Is Chhatrapati Sambhajinagar the same location as Aurangabad?",
        answer:
            "Yes. Chhatrapati Sambhajinagar is the current official name of the city formerly known as Aurangabad. The office is located in Padampura, Chhatrapati Sambhajinagar, Maharashtra.",
    },
];

export const homepageFaqs = faqs.slice(0, 8);

export function getFaqById(id) {
    return faqs.find((faq) => faq.id === id);
}

export default faqs;
