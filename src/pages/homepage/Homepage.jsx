import React, { useState, useEffect } from 'react';

import styles from './Homepage.module.scss';
import { getSlide } from './getSlide';

export const Homepage = () => {
  const [slide, setSlide] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlide((slide) => (slide % 3) + 1);
    }, 5_000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${getSlide(slide)})` }}
      className={styles.homepageContainer}
    >
      <div className={styles.container}>
        <h1 className={styles.h1}> SpaceX missions</h1>
        <p className={styles.desc}>Example page built in React library.</p>
      </div>
    </div>
  );
};
