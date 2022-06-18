import React, { useState } from 'react';

import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

export const Pagination = ({ totalPages, setActivePage, setActiveYear }) => {
  const handlePageClick = (clicked) => {
    if (typeof setActivePage !== 'function') return;
    setActivePage(clicked.selected + 1);
    setActiveYear(0);
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
