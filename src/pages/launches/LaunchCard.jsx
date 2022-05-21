import React from 'react';
import styles from './LaunchCard.module.scss';

export const LaunchCard = ({ name, date, desc, success, flightNumber, icon, article }) => {
  const showDate = (string) => {
    const date = new Date(string);
    return (
      <div>
        <p>Date: {date.toLocaleDateString()}</p>
        <p>Time: {date.toLocaleTimeString()}</p>
      </div>
    );
  };
  return (
    <div className={styles.card}>
      <img className={styles.icon} src={icon} alt="icon of mission" />
      <div className={styles.content}>
        <h3 className={styles.heading}>Launch name: {name} </h3>
        <h2 style={success ? { color: 'green' } : { color: 'red' }}>
          Mission: {success ? 'accomplished' : 'failed'}
        </h2>
        <p>Flight number: {flightNumber}</p>
        <div className={styles.textContent}>
          <p>{desc}</p>
          {showDate(date)}
          <a className="link" href={article}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
