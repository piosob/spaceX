import styles from './Rocket.module.scss';
import { prepareId } from './prepareId';

export const Rocket = ({ name, desc, firstFl, height, diameter, mass, imgs }) => {
  return (
    <div className="card">
      <h3 className="heading" id={prepareId(name)}>
        {name}{' '}
      </h3>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.paramsContainer}>
        <div className={styles.paramsCard}>
          <h4 className={styles.paramsHeading}>First Flight:</h4>
          <p className={styles.paramsDesc}>{firstFl}</p>
        </div>
        <div className={styles.paramsCard}>
          <h4 className={styles.paramsHeading}>Height:</h4>
          <p className={styles.paramsDesc}>{height} m</p>
        </div>
        <div className={styles.paramsCard}>
          <h4 className={styles.paramsHeading}>Diameter:</h4>
          <p className={styles.paramsDesc}>{diameter} m</p>
        </div>
        <div className={styles.paramsCard}>
          <h4 className={styles.paramsHeading}>Mass:</h4>
          <p className={styles.paramsDesc}>{mass} kg</p>
        </div>
      </div>
      <div className={styles.imgContainer}>
        {imgs.map((img) => (
          <img key={img} src={img} className={styles.img} alt="amazing SpaceX rocket" />
        ))}
      </div>
    </div>
  );
};
