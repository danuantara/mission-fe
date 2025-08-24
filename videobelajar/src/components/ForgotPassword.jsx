import { Link } from "react-router-dom";

export default function LoginFooter() {
  return (
    <div className="flex justify-end">
      <Link
        to="/forgot-password"
        className="text-sm text-[var(--text-disable)] hover:text-[var(--text-dark-secondary)]"
      >
        Lupa Password?
      </Link>
    </div>
  );
}
