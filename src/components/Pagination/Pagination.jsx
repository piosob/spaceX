import React from 'react';
import styles from './Pagination.module.scss';
export const Pagination = ({ launchPerPage, totalLaunches, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalLaunches / launchPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button className={styles.btn} onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
