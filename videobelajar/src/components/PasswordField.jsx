import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function PasswordField({
  label = "Password",
  name = "password",
  value,
  onChange,
  required = false,
  className = "",
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1 relative">
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
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        className={`border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--border)]  h-12 !px-3 !py-2 ${className}`}
      />

      <button
        type="button"
        className="absolute right-3 top-[42px] text-[var(--text-disable)] hover:text-[var(--text-light)]"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <EyeSlashIcon className="w-5 h-5" />
        ) : (
          <EyeIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
