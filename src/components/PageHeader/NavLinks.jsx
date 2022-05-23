import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageHeader.module.scss';
import { motion } from 'framer-motion';

export const NavLinks = ({ isNavShow, hideNav }) => {
  function handleClick() {
    if (typeof hideNav !== 'function') return;
    hideNav();
  }
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <ul className={styles.ul}>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        className={styles.li}
      >
        <NavLink
          onClick={handleClick}
          className={isNavShow ? styles.linkNarrower : styles.linkWider}
          to="/"
          end
        >
          home
        </NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.15 }}
        className={styles.li}
      >
        <NavLink
          onClick={handleClick}
          className={isNavShow ? styles.linkNarrower : styles.linkWider}
          to="/rockets"
        >
          rockets
        </NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.25 }}
        className={styles.li}
      >
        <NavLink
          onClick={handleClick}
          className={isNavShow ? styles.linkNarrower : styles.linkWider}
          to="/missions"
        >
          launches
        </NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.35 }}
        className={styles.li}
      >
        <NavLink
          onClick={handleClick}
          className={isNavShow ? styles.linkNarrower : styles.linkWider}
          to="/about"
        >
          about
        </NavLink>
      </motion.li>
    </ul>
  );
};
