// import React from 'react';
// import styles from './Pagination.module.scss';
// export const Pagination = ({ launchPerPage, totalLaunches, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i < Math.ceil(totalLaunches / launchPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   const pagesButtons = pageNumbers.map((number) => (
//     <li key={number}>
//       <button className={styles.btn} onClick={() => paginate(number)}>
//         {number}
//       </button>
//     </li>
//   ));

//   return (
//     <nav className={styles.nav}>
//       <h3 className="heading">Pages</h3>
//       <ul className={styles.ul}>{pagesButtons}</ul>
//     </nav>
//   );
// };

import React, { useState } from 'react';

import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

export const Pagination = ({ totalPages, setActivePage }) => {
  const [pages, setPages] = useState([]);

  const handlePageClick = (clicked) => {
    if (typeof setActivePage !== 'function') return;
    setActivePage(clicked.selected + 1);
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
