import React, { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { MobileNavigation } from './MobileNavigation';
import styles from './PageHeader.module.scss';
import '../../scss/index.scss';

export const PageHeader = () => {
  const [navShow, setNavShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setNavShow(true);
    } else {
      setNavShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <header className={navShow ? styles.headerNarrower : styles.headerWider}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <strong>SpaceX</strong> missions watcher
        </h1>
        <Navigation isNavShow={navShow} />
        <MobileNavigation />
      </div>
    </header>
  );
};
