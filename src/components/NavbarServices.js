import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarServices.css';
import logo from '../assents/Img/logo.png'
import { FaTimesCircle } from 'react-icons/fa';
import { BsChevronDown } from "react-icons/bs";
import { IconContext } from 'react-icons/lib';

function NavbarServices() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbarS'>
          <div className='navbar-containerS container-servicesS'>
            <Link to='/' className='navbar-logo-title' onClick={closeMobileMenu}>
              Services
            </Link>
            <div className={click ? 'menu-icon active' : 'menu-icon'} onClick={handleClick}>
              {click ? <FaTimesCircle /> : <BsChevronDown /> }
            </div>
            <ul className={click ? 'nav-menuS active' : 'nav-menuS'}>
              <li className='nav-itemS'>
                <Link to='/services' className='nav-linkServices' onClick={closeMobileMenu}>
                3D Laser Scans
                </Link>
              </li>
              <li className='nav-itemS'>
                <Link
                  to='/services/high-definition'
                  className='nav-linkServices'
                  onClick={closeMobileMenu}
                >
                  High-Definition Visual Inspection
                </Link>
              </li>
              <li className='nav-itemS'>
                <Link
                  to='/services/external-coke'
                  className='nav-linkServices'
                  onClick={closeMobileMenu}
                >
                  External Coke Drum Skirt Scans 
                </Link>
              </li>
              <img src={logo} alt="Logo" className='nav-image'/>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavbarServices;