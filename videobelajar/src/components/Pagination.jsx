import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}) {
  const renderPageNumbers = () => {
    const pages = [];

    // Always show first page
    pages.push(
      <button
        key={1}
        className={`flex items-center justify-center w-10 h-10 border rounded-lg ${
          currentPage === 1
            ? "border-blue-500 bg-blue-500 text-white"
            : "border-gray-300 hover:bg-gray-50"
        }`}
        onClick={() => onPageChange(1)}
      >
        1
      </button>
    );

    // Show ellipsis after first page if needed
    if (currentPage > 3) {
      pages.push(
        <span key="ellipsis1" className="px-2">
          ...
        </span>
      );
    }

    // Show current page and neighbors
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(
        <button
          key={i}
          className={`flex items-center justify-center w-10 h-10 border rounded-lg ${
            currentPage === i
              ? "border-blue-500 bg-blue-500 text-white"
              : "border-gray-300 hover:bg-gray-50"
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    // Show ellipsis before last page if needed
    if (currentPage < totalPages - 2) {
      pages.push(
        <span key="ellipsis2" className="px-2">
          ...
        </span>
      );
    }

    // Always show last page if there is more than 1 page
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          className={`flex items-center justify-center w-10 h-10 border rounded-lg ${
            currentPage === totalPages
              ? "border-blue-500 bg-blue-500 text-white"
              : "border-gray-300 hover:bg-gray-50"
          }`}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* Previous Button */}
      <button
        className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={16} />
      </button>

      {/* Page Numbers */}
      {renderPageNumbers()}

      {/* Next Button */}
      <button
        className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
