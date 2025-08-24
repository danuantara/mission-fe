export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyle =
    "px-4 py-2 rounded-lg font-medium transition duration-200 text-center h-12";

  const variants = {
    primary:
      "bg-[var(--primary-button)] text-white hover:bg-[var(--secondary-button)] hover:text-[var(--primary-button)]",
    secondary:
      "bg-[var(--tertiary-button)] text-white hover:bg-[var(--secondary-button)] hover:text-[var(--primary-button)]",
    google:
      "border border-[var(--border)] bg-white text-[var(--text-dark)] flex items-center justify-center gap-2 hover:bg-[var(--text-light)]",
  };

  const appliedVariant = variants[variant] || variants.primary;

  return (
    <button
      className={`${baseStyle} ${appliedVariant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
