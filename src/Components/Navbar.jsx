import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

const iconContextValue = { color: '#fff' };

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={iconContextValue}>
        <div className={`navbar bg-gray-800${sidebar ? 'active' : ''}`}>
          <Link to='#' className='menu-bars icon'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={`nav-menu  bg-gray-800 ${sidebar ? 'active' : ''}`}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle  bg-gray-800'>
              <Link to='#' className='menu-bars icon'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map(({ cName, path, icon, title }, index) => (
              <li key={index} className={cName}>
                <Link to={path}>
                  {icon}
                  <span>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
