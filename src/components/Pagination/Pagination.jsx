import React from 'react';
import styles from './Pagination.module.scss';
export const Pagination = ({ launchPerPage, totalLaunches, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalLaunches / launchPerPage); i++) {
    pageNumbers.push(i);
  }

  const pagesButtons = pageNumbers.map((number) => (
    <li key={number}>
      <button className={styles.btn} onClick={() => paginate(number)}>
        {number}
      </button>
    </li>
  ));

  return (
    <nav className={styles.nav}>
      <h3 className="heading">Pages</h3>
      <ul className={styles.ul}>{pagesButtons}</ul>
    </nav>
  );
};
