import Logo from "../assets/Logo.svg";
import Avatar from "../assets/avatar.png";
import { LogOutIcon, AlignJustify } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center !px-6 md:!px-30 !py-4 border-b border-[var(--border)] bg-white relative">
      <div>
        <Link to="/home">
          <img
            src={Logo}
            alt="videobelajar"
            className="w-[193px] cursor-pointer"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <Link to="/category">
          <p className="text-[var(--text-light)] hover:text-[var(--primary-button)] cursor-pointer">
            Kategori
          </p>
        </Link>
        <div className="relative">
          <img
            src={Avatar}
            alt="User"
            className="w-10 h-10 rounded-lg cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-[var(--border)] rounded shadow-lg z-50 text-[var(--text-light)]">
              <a
                href="/profile"
                className="block border-b border-[var(--border)] !px-4 !py-2 hover:text-red-400"
              >
                Profil Saya
              </a>
              <a
                href="/kelas"
                className="block border-b border-[var(--border)] !px-4 !py-2 hover:text-red-400"
              >
                Kelas Saya
              </a>
              <a
                href="/pesanan"
                className="block border-b border-[var(--border)] !px-4 !py-2 hover:text-red-400"
              >
                Pesanan Saya
              </a>
              <button className="flex items-center gap-1 !px-4 !py-2 hover:text-red-400">
                Keluar <LogOutIcon size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex md:hidden">
        <AlignJustify
          className="w-8 h-8 cursor-pointer text-[var(--text-dark-secondary)] hover:text-[var(--primary-button)]"
          onClick={() => setOpen(!open)}
        />
      </div>

      {open && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-[var(--border)] shadow-md flex flex-col md:hidden z-50 text-[var(--text-light)]">
          <a
            href="/kategori"
            className="border-b border-[var(--border)] block !px-6 !py-3 hover:text-red-400"
          >
            Kategori
          </a>
          <a
            href="/profile"
            className="block border-b border-[var(--border)] !px-6 !py-3 hover:text-red-400"
          >
            Profil Saya
          </a>
          <a
            href="/kelas"
            className="block border-b border-[var(--border)] !px-6 !py-3 hover:text-red-400"
          >
            Kelas Saya
          </a>
          <a
            href="/pesanan"
            className="block border-b border-[var(--border)] !px-6 !py-3 hover:text-red-400"
          >
            Pesanan Saya
          </a>
          <button className="flex items-center gap-1 !px-6 !py-3 hover:text-red-400">
            Keluar <LogOutIcon size={16} />
          </button>
        </div>
      )}
    </nav>
  );
}
