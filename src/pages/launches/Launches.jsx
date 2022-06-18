import React, { useState, useEffect } from 'react';

//17.06.2022 skonczyłem na tym że, jest paginacja na lata. Trzeba zrobić tak, żeby po kliknięciu 2019 - jest 13 lotów, i dla tych 13 lotów trzeba zrobić paginację. Jak mniej niż 5 to bez dolnej paginacji.

import { PATHS } from '../../API/config';
import { sendRequest } from '../../API/sendRequest';
import { LaunchesList } from './LaunchesList';
import { Pagination } from '../../components/Pagination/Pagination';
import { YearsButtons } from './YearsButtons';

export const Launches = () => {
  const [launches, setLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeYear, setActiveYear] = useState(0);

  const LAUNCH_PER_PAGE = 5;

  function setActivePage(page) {
    setCurrentPage(page);
  }

  // function getLaunchesForPagination() {
  //   // object for pagination options
  //   const data = {
  //     options: {
  //       limit: LAUNCH_PER_PAGE,
  //       page: currentPage,
  //     },
  //   };
  //   sendRequest(PATHS.LAUNCHES, 'POST', data).then((result) => {
  //     console.log(result);
  //     const data = result.docs.map((launch) => ({
  //       id: launch.id,
  //       name: launch.name,
  //       date: launch.date_utc,
  //       desc: launch.details,
  //       success: launch.success,
  //       flightNumber: launch.flight_number,
  //       icon: launch.links.patch.small,
  //       article: launch.links.article,
  //     }));
  //     setLaunches(data);
  //     setTotalPages(result.totalPages);
  //   });
  // }
  // useEffect(() => {
  //   setIsLoading(true);
  //   getLaunchesForPagination();
  //   if (launches) {
  //     setIsLoading(false);
  //   }
  // }, [currentPage]);

  function getLaunchesForYearsPagination(year) {
    // object for pagination options
    setActiveYear(year);
    const data = {
      query: {
        date_utc: {
          $gte: `${year}-01-01T00:00:00.000Z`,
          $lte: `${year}-12-31T00:00:00.000Z`,
        },
      },
      options: {
        limit: 50,
        page: currentPage,
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
      setTotalPages(result.totalPages);
    });
  }

  return (
    <div className="launches">
      <div className="container">
        <div className="row" style={{ paddingTop: '2em' }}>
          <div className="col-2">
            <YearsButtons onYearClick={getLaunchesForYearsPagination} />
            {launches.length > 5 ? (
              <Pagination
                launchPerPage={LAUNCH_PER_PAGE}
                totalPages={totalPages}
                setActivePage={setActivePage}
                setActiveYear={setActiveYear}
              />
            ) : (
              ''
            )}
          </div>
          <div className="col-10">
            {launches.length === 0 ? <h1>Select year!</h1> : ''}
            {isLoading && <h3>Loading launches...</h3>}
            {activeYear ? (
              <h2>
                In {activeYear} there was / were{' '}
                <strong style={{ color: 'red' }}>{launches.length}</strong> launch/es.
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
