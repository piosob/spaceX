import React from 'react';
import { LaunchCard } from './LaunchCard';
export const LaunchesList = ({ launches }) => {
  return (
    <ul>
      {launches.map((launch) => (
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
