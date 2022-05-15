import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderCSS from './PageHeader.module.scss'

export const PageHeader = () => {
  return (
    <header className={HeaderCSS.header}>
      <div className={HeaderCSS.container}>
        <nav className={HeaderCSS.nav}>
          <ul className={HeaderCSS.ul}>
            <div className="row">
              <div className="col-3"><li className={HeaderCSS.li}><NavLink className={HeaderCSS.link} to="/" end >home</NavLink></li></div>
              <div className="col-3"><li className={HeaderCSS.li}><NavLink className={HeaderCSS.link} to="/latest-flight" >latest-flight</NavLink></li></div>
              <div className="col-3"><li className={HeaderCSS.li}><NavLink className={HeaderCSS.link} to="/missions">missions</NavLink></li></div>
              <div className="col-3"><li className={HeaderCSS.li}><NavLink className={HeaderCSS.link} to="/about">about</NavLink></li></div>
            </div>
          </ul>
        </nav>


      </div>
    </header>
  );
}
