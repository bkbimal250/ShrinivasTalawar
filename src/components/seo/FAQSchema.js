import {
  createFAQSchema,
  serializeSchema,
} from "@/lib/schema";

export default function FAQSchema({ faqs = [] }) {
  if (!Array.isArray(faqs) || faqs.length === 0) {
    return null;
  }

  const validFaqs = faqs.filter(
    (faq) => faq?.question && faq?.answer
  );

  if (validFaqs.length === 0) {
    return null;
  }

  const schema = createFAQSchema(validFaqs);

  return (
    <script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeSchema(schema),
      }}
    />
  );
}