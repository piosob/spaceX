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
    // object for pagination options
    const data = {
      options: {
        limit: 5,
        page: 1,
      },
    };
    sendRequest(PATHS.LAUNCHES, 'POST', data).then((result) => {
      console.log(result);
      const data = result.docs.map((launch) => ({
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
    <div className="launches">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Pagination
              launchPerPage={LAUNCH_PER_PAGE}
              totalLaunches={launches.length}
              paginate={paginate}
            />
          </div>
          <div className="col-10">
            {isLoading ? <h3>fetching data...</h3> : <LaunchesList launches={currentLaunches} />}
          </div>
        </div>
      </div>
    </div>
  );
};
