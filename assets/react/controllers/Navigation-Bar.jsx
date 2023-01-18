import React from 'react';
import img from '../../img/amp.png';
import { useEffect, useState } from 'react';

export default function (props) {
  const [navbarImageCollapsed, setNavbarImageCollapsed] = useState(false)
  useEffect(() => {
    const handleScroll = event => {
      if (window.scrollY > 50) {
        setNavbarImageCollapsed(true)
      } else {
        setNavbarImageCollapsed(false)
      }
      console.log('window.scrollY', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (

    <div className="main-container">

      <div className="top-Navigation">

        <div className="logo">
          <a href="#"><img className={`amp ${navbarImageCollapsed ? 'amp-collapsed' : ''}`} src={img} alt="Grupa AMP Media" /></a>
        </div>


        <div className="hamburger-menu">
          <div className="menu-wrapper">
            <input id="menu_toggle" type="checkbox" />
            <label className="menu_btn" for="menu_toggle">
            </label>
            <ul className={`menu_box ${navbarImageCollapsed ? 'menu-collapsed' : ''}`}>
              <li><a className="menu_item" href="#">Home</a></li>
              <li><a className="menu_item" href="#">About</a></li>
              <li><a className="menu_item" href="#">Team</a></li>
              <li><a className="menu_item" href="#">Contact</a></li>
              <li><a className="menu_item" id="last_element_menu_item" href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

