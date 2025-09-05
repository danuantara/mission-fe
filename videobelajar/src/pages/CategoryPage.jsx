import Navbar from "../components/Navbar";
import CategoryFilter from "../components/CategoryFilter";
import CourseList from "../components/CourseList";
import Footer from "../components/Footer";
import SortingSearch from "../components/SortingSearch";
import Pagination from "../components/Pagination";
import { useState } from "react";

export default function CategoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalCourses = 9;
  const totalPages = Math.ceil(totalCourses / itemsPerPage);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="md:!px-30 !pt-16 !pb-12 !px-5">
        <h1 className="text-[32px] font-bold text-[var(--text-dark)]">
          Koleksi Video Pembelajaran Unggulan
        </h1>
        <p className="text-sm text-[var(--text-dark-secondary)]">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>
      <div className="flex flex-col justify-between md:flex-row !px-5 md:!px-30 gap-10">
        <CategoryFilter />
        <div className="flex flex-col gap-4 !mb-16">
          <SortingSearch />
          <CourseList currentPage={currentPage} itemsPerPage={itemsPerPage} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
