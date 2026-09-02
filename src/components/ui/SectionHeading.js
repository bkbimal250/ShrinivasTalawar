export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  headingLevel = "h2",
  id,
  showLine = true,
  className = "",
}) {
  const HeadingTag = headingLevel;

  const isCentered = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`${isCentered ? "text-center" : ""} ${className}`.trim()}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}

      <HeadingTag
        id={id}
        className={`heading-two text-balance ${
          isDark ? "text-light" : ""
        }`.trim()}
      >
        {title}
      </HeadingTag>

      {showLine && (
        <span
          className={`gold-line ${
            isCentered ? "gold-line-center" : ""
          }`.trim()}
          aria-hidden="true"
        />
      )}

      {description && (
        <p
          className={`section-description ${
            isCentered ? "section-description-center" : ""
          } ${isDark ? "text-light" : ""}`.trim()}
        >
          {description}
        </p>
      )}
    </div>
  );
}
