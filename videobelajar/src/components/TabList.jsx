import { useState } from "react";

export default function TabList() {
  const [active, setActive] = useState("Semua Kelas");

  const categories = [
    "Semua Kelas",
    "Pemasaran",
    "Design",
    "Pengembangan",
    "Bisnis",
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActive(category)}
          className={`relative !pb-2 text-base text-[var (--text-dark-secondary)] font-medium transition-colors hover:text-[var(--error)] focus:text-[var(--error)] ${
            active === category
          }`}
        >
          {category}
          {active === category && (
            <span className="absolute left-0 top-7 w-1/2 border-b-4 border-[var(--error)] rounded"></span>
          )}
        </button>
      ))}
    </div>
  );
}
