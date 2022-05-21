import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import HeaderCSS from './PageHeader.module.scss';
import '../../scss/index.scss';

export const PageHeader = () => {
  const [navShow, setNavShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setNavShow(true);
    } else {
      setNavShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <header className={navShow ? HeaderCSS.headerNarrower : HeaderCSS.headerWider}>
      <div className={HeaderCSS.container}>
        <nav className={HeaderCSS.nav}>
          <ul className={HeaderCSS.ul}>
            <div className="row">
              <div className="col-3">
                <li className={HeaderCSS.li}>
                  <NavLink
                    className={navShow ? HeaderCSS.linkNarrower : HeaderCSS.linkWider}
                    to="/"
                    end
                  >
                    home
                  </NavLink>
                </li>
              </div>
              <div className="col-3">
                <li className={HeaderCSS.li}>
                  <NavLink
                    className={navShow ? HeaderCSS.linkNarrower : HeaderCSS.linkWider}
                    to="/rockets"
                  >
                    rockets
                  </NavLink>
                </li>
              </div>
              <div className="col-3">
                <li className={HeaderCSS.li}>
                  <NavLink
                    className={navShow ? HeaderCSS.linkNarrower : HeaderCSS.linkWider}
                    to="/missions"
                  >
                    launches
                  </NavLink>
                </li>
              </div>
              <div className="col-3">
                <li className={HeaderCSS.li}>
                  <NavLink
                    className={navShow ? HeaderCSS.linkNarrower : HeaderCSS.linkWider}
                    to="/about"
                  >
                    about
                  </NavLink>
                </li>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};
