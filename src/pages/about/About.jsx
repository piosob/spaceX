import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { AboutContent } from './AboutContent';
import { PATHS } from '../../API/config';
import { sendRequest } from '../../API/sendRequest';
import styles from './About.module.scss';

export const About = () => {
  const [companyInfo, setCompanyInfo] = useState(null);

  function getCompanyInfo() {
    return sendRequest(PATHS.COMPANY).then((result) => setCompanyInfo(result));
  }

  useEffect(() => {
    getCompanyInfo();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <div className="card">
            <h1 className="heading">About this page</h1>
            <p className={styles.desc}>
              This page was made for educational purpose only for practise front-end skills. Here
              you will find data about SpaceX launches and vehicles produced by SpaceX. Data for
              this site is provided by{' '}
              <a className="link" href="https://github.com/r-spacex/SpaceX-API">
                SpaceX-API{' '}
              </a>{' '}
              - open Source REST API for SpaceX launch, rocket, core, capsule, starlink, launchpad,
              and landing pad data.
            </p>
          </div>
        </div>
        <div className="col-5">
          <div className="card">
            <strong className={styles.technologiesHeading}>Used technologies:</strong>
            <ul>
              <li className={styles.listItem}>
                <FontAwesomeIcon
                  className={`${styles.fontAwesome} ${styles.react}`}
                  icon={faReact}
                />
                React
                <em className={styles.reactListItem}>
                  <FontAwesomeIcon
                    className={`${styles.fontAwesome} ${styles.check}`}
                    icon={faSquareCheck}
                  />
                  REST API - fetching data ex: launches, rockets
                </em>
                <em className={styles.reactListItem}>
                  <FontAwesomeIcon
                    className={`${styles.fontAwesome} ${styles.check}`}
                    icon={faSquareCheck}
                  />
                  React Router
                </em>
                <em className={styles.reactListItem}>
                  <FontAwesomeIcon
                    className={`${styles.fontAwesome} ${styles.check}`}
                    icon={faSquareCheck}
                  />
                  React Hooks: useState, useEffect
                </em>
                <em className={styles.reactListItem}>
                  <FontAwesomeIcon
                    className={`${styles.fontAwesome} ${styles.check}`}
                    icon={faSquareCheck}
                  />
                  CSS modules
                </em>
              </li>
              <li className={styles.listItem}>
                <FontAwesomeIcon className={`${styles.fontAwesome} ${styles.sass}`} icon={faSass} />
                SCSS
              </li>
              <li className={styles.listItem}></li>
              <li className={styles.listItem}></li>
            </ul>
          </div>
        </div>
      </div>
      <AboutContent companyInfo={companyInfo && companyInfo} />
    </div>
  );
};
