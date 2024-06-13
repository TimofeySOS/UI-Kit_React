import React from 'react';
import styles from './Pagination.module.scss';

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const createPageRange = (): Array<string | number> => {
    const pages: Array<string | number> = [];
    const pageNeighbours = 1; // количество соседних страниц
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pagesArray: Array<string | number> = [1];

      if (startPage > 2) {
        pagesArray.push('...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pagesArray.push(i);
      }

      if (endPage < totalPages - 1) {
        pagesArray.push('...');
      }

      pagesArray.push(totalPages);

      return pagesArray;
    }

    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  const pages = createPageRange();

  return (
    <div className={styles.pagination}>
      <button
        className={styles.navButton}
        onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : currentPage)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pages.map((page, index) =>
        page === '...' ? (
          <span key={index} className={styles.pageNumber}>...</span>
        ) : (
          <button
            key={index}
            className={`${styles.pageNumber} ${page === currentPage ? styles.active : ''}`}
            onClick={() => onPageChange(Number(page))}
          >
            {page}
          </button>
        )
      )}
      <button
        className={styles.navButton}
        onClick={() => onPageChange(currentPage < totalPages ? currentPage + 1 : currentPage)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
