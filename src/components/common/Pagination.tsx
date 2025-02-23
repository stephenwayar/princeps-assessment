import { Icon } from "@iconify/react/dist/iconify.js";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  showingItems: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showingItems
}: PaginationProps) {
  // Show ellipsis only if total pages are more than 7
  const showEllipsis = totalPages > 7;

  // Function to generate array of page numbers to display
  const getPageNumbers = () => {
    // If total pages are 7 or less, show all page numbers
    if (!showEllipsis) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // If current page is among first 3 pages
    if (currentPage <= 3) {
      return [1, 2, 3, 4, '...', totalPages];
    }

    // If current page is among last 3 pages
    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    // If current page is somewhere in the middle
    return [
      1,           // First page
      '...',       // Left ellipsis
      currentPage - 1,  // Page before current
      currentPage,      // Current page
      currentPage + 1,  // Page after current
      '...',       // Right ellipsis
      totalPages   // Last page
    ];
  };

  return (
    <div className="grid grid-cols-3">
      <div className='h-10 flex items-center'>
        <div className="flex items-center space-x-1">
          <p className="text-[#44444B]">Showing</p>

          <button
            className="disabled:!cursor-not-allowed"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}  // Disable when on first page
          >
            <Icon
              width="20"
              height="20"
              color="#44444B"
              icon="iconamoon:arrow-left-2"
            />
          </button>

          <p className="text-[#0053A6] font-semibold">
            {showingItems}
          </p>

          <button
            className="disabled:!cursor-not-allowed"
            disabled={currentPage === totalPages}  // Disable when on last page
            onClick={() => onPageChange(currentPage + 1)}
          >
            <Icon
              width="20"
              height="20"
              color="#44444B"
              icon="iconamoon:arrow-right-2"
            />
          </button>

          <p className="text-[#44444B]">rows</p>
        </div>
      </div>


      <div className="flex w-full items-center justify-center space-x-2 h-10">
        {/* Map through page numbers and render buttons */}
        {getPageNumbers().map((page, index) => (
          <div key={index}>
            <button
              disabled={page === '...'}  // Disable ellipsis buttons
              className={`${page === currentPage ? 'bg-[#ECF0F3] border' : 'bg-transparent'} rounded-full text-[#0053A6] border-[#ECF0F3] hover:bg-[#ECF0F3] transition ease-in-out duration-75 hover:border w-8 h-8`}  // Highlight current page
              onClick={() => typeof page === 'number' ? onPageChange(page) : null}  // Only trigger for numbers, not ellipsis
            >
              {page}
            </button>
          </div>
        ))}
      </div>

      <div>
        {/* Empty Grid Box */}
      </div>
    </div>
  );
}