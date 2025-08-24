import Flag from "../assets/id-flag.png";

export default function PhoneSelect({
  label = "",
  name = "",
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

      <div className="flex gap-2">
        <div className="flex justify-center items-center ">
          <div className="flex justify-center items-center h-12 !px-3 bg-[var(--text-light)] rounded-tl-lg rounded-bl-lg w-12">
            <img src={Flag} alt="id" className="w-4 h-4 object-cover" />
          </div>
          <select
            name={`${name}-code`}
            className="border border-[var(--border)] rounded-tr-lg rounded-br-lg focus:outline-none focus:ring-2 focus:ring-[var(--border)] h-12 !px-3"
          >
            <option value="+62">+62</option>
          </select>
        </div>

        <input
          id={name}
          name={name}
          type="tel"
          required={required}
          className={`flex-1 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--border)] w-full h-12 !px-3 ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}
