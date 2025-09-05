import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function SortingSearch() {
  const [selectedSort, setSelectedSort] = useState("Urutkan");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sortOptions = [
    "Harga Rendah",
    "Harga Tinggi",
    "A to Z",
    "Z to A",
    "Rating Tertinggi",
    "Rating Terendah",
  ];

  return (
    <div className="flex justify-end items-start md:items-center gap-4 mb-6">
      <div className="relative text-gray-400">
        <div
          className="flex items-center justify-between !px-4 !py-2 border border-gray-300 rounded-lg cursor-pointer bg-white min-w-[100px]"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="text-gray-500">{selectedSort}</span>
          <ChevronDown
            size={16}
            className={`transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {isDropdownOpen && (
          <div className="absolute flex flex-col gap-2 top-full right-0 !mt-1 !p-1.5 w-34 bg-white border border-gray-300 rounded-lg z-10 text-gray-300 text-sm font-[Lato]">
            {sortOptions.map((option) => (
              <div
                key={option}
                className={`px-4 py-2 cursor-pointer hover:font-semibold ${
                  selectedSort === option
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => {
                  setSelectedSort(option);
                  setIsDropdownOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Cari Kelas"
          className="w-full !pl-4 !pr-4 !py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-button)] bg-white"
        />
        <Search
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>
    </div>
  );
}
