import styles from './Hamburger.module.scss';

export const Hamburger = ({ open, showNav }) => {
  function handleClick() {
    if (typeof showNav !== 'function') return;
    showNav();
  }
  return (
    <div onClick={handleClick} className={styles.hamburger}>
      <span className={open ? `${styles.line} ${styles.lineOpen}` : styles.line}></span>
    </div>
  );
};
