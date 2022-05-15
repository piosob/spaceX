import styles from './Rocket.module.scss'

export const Rocket = ({ name, desc, firstFl, height, diameter, mass, imgs, cost }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.heading}>{name}</h3>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.imgContainer}>
        {imgs.map(img => (
          <img key={img} src={img} className={styles.img} alt="amazing SpaceX rocket" />
        ))}
      </div>
    </div>
  );
}
