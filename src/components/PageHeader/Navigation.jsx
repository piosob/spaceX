import React from 'react';
import { NavLinks } from './NavLinks';
import styles from './PageHeader.module.scss';
export const Navigation = ({ isNavShow }) => {
  return (
    <nav className={styles.navigation}>
      <NavLinks isNavShow={isNavShow} />;
    </nav>
  );
};
