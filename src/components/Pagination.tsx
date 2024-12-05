"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, setPage }: PaginationProps) => {
  const handlePageChange = async (page: number) => {
    if (page < 1 || page > totalPages) return; // Prevent invalid page numbers
    setPage(page);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8 font-bold">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md ${
          currentPage === 1
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-white  hover:bg-gray-100"
        }`}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        // Display the first, last, and a range of 5 pages around the current page
        if (
          page === 1 ||
          page === totalPages ||
          (page >= currentPage - 2 && page <= currentPage + 2)
        ) {
          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-md ${
                currentPage === page
                  ? "bg-blue-500 text-white font-bold"
                  : "bg-white  hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          );
        }

        // Optionally display ellipsis for skipped pages
        if (page === currentPage - 3 || page === currentPage + 3) {
          return (
            <span key={page} className="px-4 py-2 dark:text-white">
              ...
            </span>
          );
        }

        return null;
      })}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-white  hover:bg-gray-100"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
