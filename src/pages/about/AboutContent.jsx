import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './AboutContent.module.scss';

export const AboutContent = ({ companyInfo }) => {
  return (
    <>
      <div className="row">
        <div className="col-5">
          <div className="card">
            <h2 className="heading">About SpaceX</h2>
            {companyInfo && (
              <section className="from-API">
                <h3 className={styles.apiHeading}>Data from API:</h3>
                <div className={styles.generalInfo}>
                  <p className={styles.desc}>
                    founder: <strong>{companyInfo.founder}</strong>
                  </p>
                  <p className={styles.desc}>
                    founded: <strong>{companyInfo.founded}</strong>
                  </p>
                  <p className={styles.desc}>
                    employees: <strong>{companyInfo.employees}</strong>
                  </p>
                </div>
                <div className={styles.headquarters}>
                  <p className={styles.desc}>
                    state: <strong>{companyInfo.headquarters.state}</strong>
                  </p>
                  <p className={styles.desc}>
                    city: <strong>{companyInfo.headquarters.city}</strong>
                  </p>
                  <p className={styles.desc}>
                    adress: <strong>{companyInfo.headquarters.address}</strong>
                  </p>
                </div>
                <div className={styles.links}>
                  <p className={styles.desc}>
                    <a className="link" href={companyInfo.links.website}>
                      Website
                    </a>
                  </p>
                  <p className={styles.desc}>
                    <a className="link" href={companyInfo.links.twitter}>
                      <FontAwesomeIcon className={styles.twitter} icon={faTwitter} />
                    </a>
                  </p>
                </div>
              </section>
            )}
          </div>
        </div>
        <div className="col-7">
          <div className="card">
            <h3 className="heading">SpaceX</h3>
            <p className={styles.desc}>
              Space Exploration Technologies Corp. (doing business as SpaceX) is an American space
              manufacturer, a provider of space transportation services, and a communications
              corporation headquartered in Hawthorne, California. SpaceX was founded in 2002 by Elon
              Musk with the goal of reducing space transportation costs to enable the colonization
              of Mars. SpaceX manufactures the Falcon 9 and Falcon Heavy launch vehicles, several
              rocket engines, Cargo Dragon, crew spacecraft, and Starlink communications satellites.
            </p>
            <em>
              Source:{' '}
              <a className="link" href="https://en.wikipedia.org/wiki/SpaceX">
                Wikipedia
              </a>
            </em>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <h3 className="heading">Starlink - satellite internet</h3>
            <p className={styles.desc}>
              SpaceX is developing a satellite internet constellation named Starlink to provide
              commercial internet service. In January 2020, the Starlink constellation became the
              largest satellite constellation ever launched, and as of May 2022 it comprises over
              2,400 small satellites in orbit. Starlink has been criticized by some astronomers due
              to concerns over light pollution. It has also been criticized over the long term
              danger from orbital debris resulting from possible space collisions. The company is
              also developing Starship, a privately funded, fully reusable, super heavy-lift launch
              system for interplanetary and orbital spaceflight. Starship is intended to become
              SpaceX's primary orbital vehicle once operational, supplanting the existing Falcon 9,
              Falcon Heavy, and Dragon fleet. Starship will have the highest payload capacity of any
              orbital rocket ever built on its debut, scheduled for 2022 pending regulatory
              approval.
            </p>
            <em>
              Source:{' '}
              <a className="link" href="https://en.wikipedia.org/wiki/SpaceX">
                Wikipedia
              </a>
            </em>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <h3 className="heading">SpaceX's achievements</h3>
            <p className={styles.desc}>
              SpaceX's achievements include the first privately funded liquid-propellant rocket to
              reach orbit around Earth,the first private company to successfully launch, orbit, and
              recover a spacecraft, the first private company to send a spacecraft to the
              International Space Station, the first vertical take-off and vertical propulsive
              landing for an orbital rocket, the first reuse of an orbital rocket, and the first
              private company to send astronauts to orbit and to the International Space Station.
              SpaceX has flown the Falcon 9 series of rockets over one hundred times.
            </p>
            <em>
              Source:{' '}
              <a className="link" href="https://en.wikipedia.org/wiki/SpaceX">
                Wikipedia
              </a>
            </em>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <aside className={styles.disclaimer}>
            <FontAwesomeIcon className={styles.exclamation} icon={faCircleExclamation} />
            <p className={styles.desc}>
              DISCLAIMER: The creator and maintainers of this website have no affiliation with
              SpaceX. The content herein should be considered for educational purposes only.
              Photography used on this website is the property of SpaceX and can be found on the
              unsplash.com.
            </p>
          </aside>
        </div>
      </div>
    </>
  );
};
