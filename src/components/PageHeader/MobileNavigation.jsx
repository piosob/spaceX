import React, { useState } from 'react';

import { NavLinks } from './NavLinks';
import { Hamburger } from '../Hamburger/Hamburger';
import styles from './PageHeader.module.scss';

export const MobileNavigation = () => {
  const [openMobileNavigation, setOpenMobileNavigation] = useState(false);

  function hamburgerClick() {
    console.log('klikam');
    setOpenMobileNavigation((openMobileNavigation) => !openMobileNavigation);
  }
  function hideNav() {
    setOpenMobileNavigation(false);
  }
  return (
    <nav className={styles.mobileNavigation}>
      <Hamburger showNav={hamburgerClick} open={openMobileNavigation} />
      {openMobileNavigation && <NavLinks hideNav={hideNav} />}
    </nav>
  );
};
