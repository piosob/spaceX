import styles from './Sidebar.module.scss';
import { prepareId } from './prepareId';
export const Sidebar = ({ rockets }) => {
  const names = rockets.map((rocket) => {
    const path = `#${prepareId(rocket.name)}`;
    return (
      <a key={rocket.id} href={path} className={styles.link}>
        {rocket.name}
      </a>
    );
  });
  return (
    <div className={`${styles.sidebar} card`}>
      <h2 className={styles.heading}>Sidebar</h2>
      <ul className={styles.list}>{names}</ul>
    </div>
  );
};
