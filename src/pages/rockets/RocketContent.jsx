import { Rocket } from './Rocket';

export const RocketContent = ({ rockets, checkCards }) => {
  const rocketsList = rockets.map((rocket) => (
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
  ));
  return <div>{rocketsList}</div>;
};
