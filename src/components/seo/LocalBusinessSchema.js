import {
  createSiteSchema,
  serializeSchema,
} from "@/lib/schema";

export default function LocalBusinessSchema() {
  const schema = createSiteSchema();

  return (
    <script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeSchema(schema),
      }}
    />
  );
}