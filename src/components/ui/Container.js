export default function Container({
  children,
  size = "large",
  as: Component = "div",
  className = "",
  ...props
}) {
  const sizeClasses = {
    small: "container-small",
    medium: "container-medium",
    large: "container",
    wide: "container-wide",
  };

  const containerClass = sizeClasses[size] || sizeClasses.large;

  return (
    <Component
      className={`${containerClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}