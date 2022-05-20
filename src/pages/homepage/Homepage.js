import React from 'react';
import styles from './Homepage.module.scss'

export const Homepage = () => {
  return (
    <div className={styles.homepageContainer}>
      <div className="container">
        <h1 className={styles.h1}> SpaceX missions</h1>
      </div>
    </div >
  );
}
