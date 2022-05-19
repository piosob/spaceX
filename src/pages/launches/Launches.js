import { useState } from 'react';
import styles from './Launches.module.scss'


export const Launches = () => {
  const [launches, setLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(10)
  return (
    <p>launches</p>
  );
}
