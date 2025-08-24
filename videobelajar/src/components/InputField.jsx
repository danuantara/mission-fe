export default function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={name}
          className="text-base font-[Lato] font-medium text-[var(--text-dark-secondary)]"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--border)]  h-12 !px-3 !py-2 ${className}`}
        {...props}
      />
    </div>
  );
}
