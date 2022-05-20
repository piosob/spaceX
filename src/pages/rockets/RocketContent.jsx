import styles from './RocketContent.module.scss';
import { Rocket } from './Rocket';

export const RocketContent = ({ rockets, checkCards }) => {
  const rocketsList = rockets.map(rocket => (
    <Rocket
      key={rocket.id}
      name={rocket.name}
      desc={rocket.description}
      firstFl={rocket.first_flight}
      height={rocket.height.meters}
      diameter={rocket.diameter.meters}
      mass={rocket.mass.kg}
      imgs={rocket.flickr_images}
      cost={rockets.cost_per_launch}
      updateScroll={checkCards}
    />
  ))
  return (
    <div>
      <h2 className={styles.heading}>Detailed information about each rocket.</h2>
      {rocketsList}
    </div>
  );
}
