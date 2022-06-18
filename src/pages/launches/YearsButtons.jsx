import React, { useState } from 'react';

import styles from './YearsButtons.module.scss';
// select years range
const START_YEAR = 2006;
const END_YEAR = 2022;

function createYearsArray(min, max) {
  let array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}

export const YearsButtons = ({ onYearClick }) => {
  const [activeYear, setActiveYear] = useState(null);

  function handleClick(year) {
    onYearClick(year);
    setActiveYear(year);
  }

  const yearsList = createYearsArray(START_YEAR, END_YEAR).map((year) => (
    <li key={year} className={styles['year-li']}>
      <button
        className={`${styles['year-btn']} ${activeYear === year ? styles.active : ''}`}
        onClick={() => handleClick(year)}
      >
        {year}
      </button>
    </li>
  ));

  return (
    <div className={styles['years-container']}>
      <h4 className={styles.heading}>Years</h4>
      <ul>{yearsList}</ul>
    </div>
  );
};
