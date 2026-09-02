import {
  createPracticeAreaSchema,
  serializeSchema,
} from "@/lib/schema";

export default function LegalServiceSchema({
  practiceArea,
}) {
  if (!practiceArea) {
    return null;
  }

  const schema = createPracticeAreaSchema(practiceArea);

  if (!schema) {
    return null;
  }

  return (
    <script
      id={`legal-service-schema-${practiceArea.slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeSchema(schema),
      }}
    />
  );
}