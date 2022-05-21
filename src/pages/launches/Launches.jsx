import React, { useState, useEffect } from 'react';

import { PATHS } from '../../API/config';
import { sendRequest } from '../../API/sendRequest';
import { LaunchesList } from './LaunchesList';
import { Pagination } from '../../components/Pagination/Pagination';
export const Launches = () => {
  const LAUNCH_PER_PAGE = 5;

  const [launches, setLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  function getLaunches() {
    sendRequest(PATHS.LAUNCHES).then((result) => {
      const data = result.map((launch) => ({
        id: launch.id,
        name: launch.name,
        date: launch.date_utc,
        desc: launch.details,
        success: launch.success,
        flightNumber: launch.flight_number,
        icon: launch.links.patch.small,
        article: launch.links.article,
      }));
      setLaunches(data);
    });
  }
  useEffect(() => {
    getLaunches();
    setIsLoading(false);
  }, []);

  const indexOfLastLaunch = currentPage * LAUNCH_PER_PAGE;
  const indexOfFirstLaunch = indexOfLastLaunch - LAUNCH_PER_PAGE;
  const currentLaunches = launches.slice(indexOfFirstLaunch, indexOfLastLaunch);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }
  return (
    <div className="container">
      <h2>Launches</h2>
      <Pagination
        launchPerPage={LAUNCH_PER_PAGE}
        totalLaunches={launches.length}
        paginate={paginate}
      />
      {isLoading ? <h3>fetching data...</h3> : <LaunchesList launches={currentLaunches} />}
    </div>
  );
};
