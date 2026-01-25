interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-[#E1E1E4]">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="h-10 px-3 flex items-center justify-center rounded-lg border border-[#E1E1E4] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <svg
          className="w-5 h-5 text-brand-text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNum = index + 1;
          const isCurrentPage = pageNum === currentPage;
          const isVisible =
            pageNum === 1 ||
            pageNum === totalPages ||
            Math.abs(pageNum - currentPage) <= 1;

          if (!isVisible && pageNum !== 2 && pageNum !== totalPages - 1) {
            return null;
          }

          if (!isVisible && (pageNum === 2 || pageNum === totalPages - 1)) {
            return (
              <span key={`dots-${pageNum}`} className="px-2 text-[#B8B8C0]">
                ...
              </span>
            );
          }

          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`h-10 w-10 flex items-center justify-center rounded-lg text-base font-medium transition-colors ${
                isCurrentPage
                  ? "bg-brand-blue text-white"
                  : "border border-[#E1E1E4] text-brand-text-secondary hover:bg-gray-50"
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="h-10 px-3 flex items-center justify-center rounded-lg border border-[#E1E1E4] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <svg
          className="w-5 h-5 text-brand-text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
