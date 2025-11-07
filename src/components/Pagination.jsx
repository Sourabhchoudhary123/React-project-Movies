export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="pagination">
      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`pages ${currentPage === num ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {num}
        </button>
      ))}
    </div>
  );
}