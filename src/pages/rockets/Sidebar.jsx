import { Link } from 'react-scroll';
import styles from './Sidebar.module.scss';
export const Sidebar = ({ rockets }) => {
  const names = rockets.map((rocket) => {
    return (
      <Link
        key={rocket.id}
        to={rocket.name.toLowerCase().replace(' ', '')}
        smooth={true}
        duration={500}
        offset={-100}
        className={styles.link}
      >
        {rocket.name}
      </Link>
    );
  });
  return (
    <div className={`${styles.sidebar} card`}>
      <h2 className={styles.heading}>Sidebar</h2>
      <ul className={styles.list}>{names}</ul>
    </div>
  );
};
