import Logo from "../assets/Logo.svg";
import Avatar from "../assets/avatar.png";
import { LogOutIcon, AlignJustify } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center !px-6 md:!px-30 !py-4 md:!py-3 border-b border-[var(--border)] bg-white">
      <div>
        <img
          src={Logo}
          alt="videobelajar"
          className="w-[193px] cursor-pointer relative"
        />
      </div>

      <div className="justify-center items-center gap-5 hidden md:flex">
        <p className="text-[var(--text-light)] hover:text-[var(--primary-button)] active:text-[var(--primary-button)] active:font-semibold  cursor-pointer">
          Kategori
        </p>
        <div className="relative">
          <img
            src={Avatar}
            alt="User"
            className="w-10 h-10 rounded-lg cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      <div className="flex md:hidden">
        <AlignJustify
          className="w-8 h-8 cursor-pointer text-[var(--text-dark-secondary)] hover:text-[var(--primary-button)]"
          onClick={() => setOpen(!open)}
        />
      </div>

      {open && (
        <div className="absolute top-16 right-5 mt-2 w-48 bg-white border border-[var(--border)] rounded shadow-lg z-50">
          <a
            href="/profile"
            className="text-[var(--text-dark-secondary)] block !px-4 !py-2 hover:text-red-400"
          >
            Profil Saya
          </a>
          <a
            href="/kelas"
            className="text-[var(--text-dark-secondary)] block !px-4 !py-2 hover:text-red-400"
          >
            Kelas Saya
          </a>
          <a
            href="/pesanan"
            className="text-[var(--text-dark-secondary)] block !px-4 !py-2 hover:text-red-400"
          >
            Pesanan Saya
          </a>
          <button className="text-[var(--text-dark-secondary)] flex gap-1 !px-4 !py-2 hover:text-red-400">
            Keluar
            <LogOutIcon />
          </button>
        </div>
      )}
    </nav>
  );
}
