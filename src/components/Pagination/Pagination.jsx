import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

export const Pagination = ({ totalPages, clickedYear, onPaginationClick }) => {
  const handlePageClick = (clicked) => {
    const clickedPageOnPagination = clicked.selected + 1;
    if (typeof onPaginationClick !== 'function') return;
    onPaginationClick(clickedYear, clickedPageOnPagination);
  };
  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={styles.nav}
      pageClassName={styles.pageItem}
      pageLinkClassName={styles.pageLink}
      previousClassName={styles.pageItem}
      nextClassName={styles.pageItem}
      breakClassName={styles.pageItem}
      activeClassName={styles.active}
    />
  );
};
