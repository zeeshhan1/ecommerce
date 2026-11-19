import styles from "./Pagination.module.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const numbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.Btn}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Previous
      </button>

      {numbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${styles.Btn} ${currentPage === page ? styles.active : ""}`}
        >
          {page}
        </button>
      ))}

      <button
        className={styles.Btn}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
