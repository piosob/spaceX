import React, { useState, useEffect } from 'react';

import { PATHS } from '../../API/config';
import { sendRequest } from '../../API/sendRequest';
import { LaunchesList } from './LaunchesList';
import { Pagination } from '../../components/Pagination/Pagination';
export const Launches = () => {
  const [launches, setLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const LAUNCH_PER_PAGE = 5;
  // let numberOfPages;

  // function setNumberOfPages() {
  //   if (!launches) return;
  //   numberOfPages = Math.ceil(launches.totalDocs / LAUNCH_PER_PAGE);
  // }

  function setActivePage(page) {
    setCurrentPage(page);
  }

  function getLaunches() {
    // object for pagination options
    const data = {
      options: {
        limit: LAUNCH_PER_PAGE,
        page: currentPage,
      },
    };
    sendRequest(PATHS.LAUNCHES, 'POST', data).then((result) => {
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
      setLaunches({ ...data, totalDocs: result.totalDocs });
      console.log(result);
    });
  }
  useEffect(() => {
    getLaunches();
    setIsLoading(false);
  }, [currentPage]);

  // const indexOfLastLaunch = currentPage * LAUNCH_PER_PAGE;
  // const indexOfFirstLaunch = indexOfLastLaunch - LAUNCH_PER_PAGE;
  // const currentLaunches = launches.slice(indexOfFirstLaunch, indexOfLastLaunch);

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
              totalPages={20}
              paginate={paginate}
              setActivePage={setActivePage}
            />
          </div>
          <div className="col-10">
            {/* {isLoading ? <h3>fetching data...</h3> : <LaunchesList launchesItems={launches} />} */}
          </div>
        </div>
      </div>
    </div>
  );
};
