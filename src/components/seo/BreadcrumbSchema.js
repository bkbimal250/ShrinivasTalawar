import {
  createBreadcrumbSchema,
  serializeSchema,
} from "@/lib/schema";

export default function BreadcrumbSchema({
  items = [],
}) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  const validItems = items.filter(
    (item) => item?.name && item?.href
  );

  if (validItems.length === 0) {
    return null;
  }

  const schema = createBreadcrumbSchema(validItems);

  return (
    <script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeSchema(schema),
      }}
    />
  );
}