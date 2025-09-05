import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  BookText,
  ShoppingBag,
  Clock3,
} from "lucide-react";

export default function CategoryFilter() {
  const [isStudiOpen, setIsStudiOpen] = useState(false);
  const [isHargaOpen, setIsHargaOpen] = useState(false);
  const [isDurasiOpen, setIsDurasiOpen] = useState(false);

  return (
    <div className="md:h-3/6 flex flex-col !p-4 border border-[var(--border)] w-full md:max-w-[366px] rounded-lg bg-white gap-2.5">
      <div className="flex justify-between items-center mb-6">
        <p className="font-semibold">Filter</p>
        <button className="text-red-400 text-sm font-semibold hover:text-red-500">
          Reset
        </button>
      </div>

      <div className="border border-[var(--border)] !mb-4 rounded-lg !p-2">
        <button
          className="flex justify-between items-center w-full"
          onClick={() => setIsStudiOpen(!isStudiOpen)}
        >
          <span className="flex items-center gap-3 font-medium text-[var(--primary-button)]">
            <BookText size={18} />
            Bidang Studi
          </span>
          <span className="text-[var(--primary-button)]">
            {isStudiOpen ? <ChevronUp /> : <ChevronDown size={16} />}
          </span>
        </button>

        {isStudiOpen && (
          <div className="flex flex-col gap-1.5 !p-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Pernasaran</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Digital & Teknologi</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Pengembangan Diri</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Bisnis Manajemen</span>
            </label>
          </div>
        )}
      </div>

      <div className="border border-[var(--border)] !mb-4 rounded-lg !p-2">
        <button
          className="flex justify-between items-center w-full"
          onClick={() => setIsHargaOpen(!isHargaOpen)}
        >
          <span className="flex items-center gap-2 font-medium text-[var(--primary-button)]">
            <ShoppingBag size={18} />
            Harga
          </span>
          <span className="text-[var(--primary-button)]">
            {isHargaOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        </button>

        {isHargaOpen && (
          <div className="flex flex-col gap-1.5 !p-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Gratis</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Rp 0 - Rp 500.000</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Rp 500.000 - Rp 1.000.000</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Di atas Rp 1.000.000</span>
            </label>
          </div>
        )}
      </div>

      <div className="border border-[var(--border)] !mb-4 rounded-lg !p-2">
        <button
          className="flex justify-between items-center w-full"
          onClick={() => setIsDurasiOpen(!isDurasiOpen)}
        >
          <span className="flex items-center gap-2 font-medium text-[var(--primary-button)]">
            <Clock3 size={18} />
            Durasi
          </span>
          <span className="text-[var(--primary-button)]">
            {isDurasiOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        </button>

        {isDurasiOpen && (
          <div className="flex flex-col gap-1.5 !p-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Kurang dari 4 Jam</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>4 - 8 Jam</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Lebih dari 8 Jam</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
