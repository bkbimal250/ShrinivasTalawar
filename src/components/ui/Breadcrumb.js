import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import {
  createBreadcrumbSchema,
  serializeSchema,
} from "@/lib/schema";

export default function Breadcrumb({
  items = [],
  includeHome = true,
  showSchema = true,
  className = "",
}) {
  const homeItem = {
    name: "Home",
    href: "/",
  };

  const breadcrumbItems = includeHome
    ? [
        homeItem,
        ...items.filter((item) => item.href !== "/"),
      ]
    : items;

  const breadcrumbSchema = createBreadcrumbSchema(breadcrumbItems);

  if (!breadcrumbItems.length) {
    return null;
  }

  return (
    <>
      <nav
        className={className}
        aria-label="Breadcrumb"
      >
        <ol
          className="flex flex-wrap items-center gap-small"
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            fontSize: "var(--font-size-sm)",
          }}
        >
          {breadcrumbItems.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <li
                key={`${item.name}-${item.href}`}
                className="flex items-center gap-small"
              >
                {!isFirst && (
                  <ChevronRight
                    size={15}
                    color="var(--color-gold-600)"
                    aria-hidden="true"
                  />
                )}

                {isLast ? (
                  <span
                    aria-current="page"
                    style={{
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={`link ${className}`.trim()}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                    }}
                  >
                    {isFirst && (
                      <Home size={14} aria-hidden="true" />
                    )}

                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeSchema(breadcrumbSchema),
          }}
        />
      )}
    </>
  );
}