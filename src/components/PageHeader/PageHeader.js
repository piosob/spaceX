import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageHeader.scss'

export const PageHeader = () => {
  return (
    <header className='page-header'>
      <nav className='page-header__nav'>
        <ul className='page-header__ul'>
          <li><NavLink to="/" end className="home-selected">home</NavLink></li>
          <li><NavLink to="/latest-flight" className="latest-flight-selected" >latest-flight</NavLink></li>
          <li><NavLink to="/missions" className="missions-selected" ></NavLink>missions</li>
          <li><NavLink to="/about" className="about-selected" >about</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
