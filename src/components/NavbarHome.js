import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assents/Img/logo.png'
import { FaBars, FaTimesCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import fullLogo from '../assents/Img/full-logo.png'


function NavbarHome() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbarMainHome'>
          <div className='navbarMain-container container'>
            <div className={click ? 'menu-icon active' : 'menu-icon'} onClick={handleClick}>
              {click ? <FaTimesCircle /> : <FaBars />}
            </div>
            <img src={fullLogo} alt="Logo" className='navbar-home-icon'/>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-itemMain'>
                <Link 
                  to='/' 
                  className='nav-links' 
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className='nav-itemMain'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-itemMain'>
                <Link
                  to='/software'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Software
                </Link>
              </li>
              <li className='nav-itemMain'>
                <Link
                  to='/about'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li className='nav-itemMain'>
                <Link
                  to='/contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact Us
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


export default NavbarHome;