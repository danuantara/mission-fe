import NavBar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TabList from "../components/TabList";
import CourseList from "../components/CourseList";
import NewsLatterSection from "../components/NewsLetterSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div className="flex flex-col gap-9 !px-5 md:!px-30">
        <div>
          <h2 className="text-[var(--text-dark)] text-2xl md:text-[32px] font-semibold">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <p className="text-[var(--text-light)] text-[14px] md:text-base font-[Lato]">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <TabList />
          <CourseList />
        </div>
      </div>
      <div>
        <NewsLatterSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
