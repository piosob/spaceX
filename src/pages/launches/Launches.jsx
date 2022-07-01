import React, { useState, useEffect } from 'react';

import { PATHS } from '../../API/config';
import { sendRequest } from '../../API/sendRequest';
import { LaunchesList } from './LaunchesList';
import { Pagination } from '../../components/Pagination/Pagination';
import { YearsButtons } from './YearsButtons';

export const Launches = () => {
  const [launches, setLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalDocs, setTotalDocs] = useState(0);
  const [clickedYear, setClickedYear] = useState(0);

  const LAUNCH_PER_PAGE = 5;

  function getLaunchesForYearsPagination(year, page = 1) {
    // object for pagination options
    setClickedYear(year);
    const data = {
      query: {
        date_utc: {
          $gte: `${year}-01-01T00:00:00.000Z`,
          $lte: `${year}-12-31T00:00:00.000Z`,
        },
      },
      options: {
        limit: LAUNCH_PER_PAGE,
        page: page,
      },
    };

    sendRequest(PATHS.LAUNCHES, 'POST', data).then((result) => {
      setIsLoading(true);
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
      setTotalDocs(result.totalDocs);
      setIsLoading(false);
    });
  }

  return (
    <div className="launches">
      <div className="container">
        <div className="row" style={{ paddingTop: '2em' }}>
          <div className="col-2">
            <YearsButtons onYearClick={getLaunchesForYearsPagination} />
            {totalDocs > 5 ? (
              <Pagination
                totalPages={Math.ceil(totalDocs / LAUNCH_PER_PAGE)}
                clickedYear={clickedYear}
                onPaginationClick={getLaunchesForYearsPagination}
              />
            ) : (
              ''
            )}
          </div>
          <div className="col-10">
            {launches.length === 0 ? <h1>Select year!</h1> : ''}
            {isLoading && <h3>Loading launches...</h3>}
            {clickedYear ? (
              <h2>
                In {clickedYear} there was / were{' '}
                <strong style={{ color: 'red' }}>{totalDocs}</strong> launch/es.
              </h2>
            ) : (
              ''
            )}
            {!isLoading && <LaunchesList launchesItems={launches} />}
          </div>
        </div>
      </div>
    </div>
  );
};
