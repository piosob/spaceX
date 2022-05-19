import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderCSS from './PageHeader.module.scss'
import '../../scss/index.scss'

export const PageHeader = () => {
  return (
    <header className={HeaderCSS.header}>
      <div className={HeaderCSS.container}>
        <nav className={HeaderCSS.nav}>
          <ul className={HeaderCSS.ul}>
            <div className="row">
              <div className="col-3"><li className={HeaderCSS.li}><NavLink className={HeaderCSS.link} to="/" end >home</NavLink></li></div>
              <div className="col-3"><li className={HeaderCSS.li}><NavLink className={HeaderCSS.link} to="/rockets" >rockets</NavLink></li></div>
              <div className="col-3"><li className={HeaderCSS.li}><NavLink className={HeaderCSS.link} to="/missions">launches</NavLink></li></div>
              <div className="col-3"><li className={HeaderCSS.li}><NavLink className={HeaderCSS.link} to="/about">about</NavLink></li></div>
            </div>
          </ul>
        </nav>


      </div>
    </header>
  );
}
