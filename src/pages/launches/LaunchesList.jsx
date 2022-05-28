import React from 'react';
import { LaunchCard } from './LaunchCard';
export const LaunchesList = ({ launchesItems }) => {
  return (
    <ul>
      {launchesItems.map((launch) => (
        <LaunchCard
          key={launch.id}
          name={launch.name}
          date={launch.date}
          desc={launch.desc}
          success={launch.success}
          flightNumber={launch.flightNumber}
          icon={launch.icon}
          article={launch.article}
        />
      ))}
    </ul>
  );
};
