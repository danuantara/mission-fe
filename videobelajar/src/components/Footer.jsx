import Logo from "../assets/logo.png";
import { ChevronRight } from "lucide-react";
import Linkedin from "../assets/linkedin.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <footer className="flex w-full bg-white border-t-1 border-t-[var(--border)] drop-shadow-2xl !py-12 !px-6 md:!px-12">
      <div className="w-full">
        <div className="flex flex-col w-full md:flex-row justify-between gap-10 mb-10">
          <div className="flex flex-col gap-4 w-88">
            <img src={Logo} alt="videobelajar" className="w-48" />
            <p className="text-lg text-[var(--text-dark)] font-bold mb-4">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </p>
            <div className="space-y-2 text-gray-500">
              <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
              <p>+62-877-7123-1234</p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-5 md:gap-12">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center gap-x-9 font-semibold text-lg mb-4">
                <span>Kategori</span>
                <ChevronRight className="md:hidden" />
              </div>
              <ul className="hidden md:flex flex-col gap-2.5 text-gray-400">
                <li>Digital & Teknologi</li>
                <li>Pemasaran</li>
                <li>Manajemen Bisnis</li>
                <li>Pengembangan Diri</li>
                <li>Desain</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center gap-x-9 font-semibold text-lg mb-4">
                <span>Perusahaan</span>
                <ChevronRight className="md:hidden" />
              </div>
              <ul className="hidden md:flex flex-col gap-2.5 text-gray-400">
                <li>Tentang Kami</li>
                <li>FAQ</li>
                <li>Kebijakan Privasi</li>
                <li>Ketentuan Layanan</li>
                <li>Bantuan</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center gap-x-9 font-semibold text-lg mb-4">
                <span>Kategori</span>
                <ChevronRight className="md:hidden" />
              </div>
              <ul className="hidden md:flex flex-col gap-2.5 text-gray-400">
                <li>Tips Sukses</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] !my-8"></div>

        <div className="flex flex-col-reverse md:flex-row md:justify-between gap-3 md:items-center text-gray-400">
          <span>©2023 Gerobak Sayur All Rights Reserved.</span>
          <div className="flex gap-4">
            <img src={Linkedin} alt="linkedin" />
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="instagram" />
            <img src={Twitter} alt="twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
}
