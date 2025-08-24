import PropTypes from "prop-types";

export default function SelectField({
  label,
  name,
  options = [],
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

      <select
        id={name}
        name={name}
        required={required}
        className={`border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--border)]  h-12 !px-3 !py-2 ${className}`}
        {...props}
      >
        <option value=""></option>
        {Array.isArray(options) &&
          options.map((opt, idx) => (
            <option key={idx} value={opt}>
              {opt}
            </option>
          ))}
      </select>
    </div>
  );
}

SelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  required: PropTypes.bool,
  className: PropTypes.string,
};
