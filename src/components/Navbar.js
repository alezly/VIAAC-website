import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import fullLogo from '../assents/Img/full-logo.png'
import logo from '../assents/Img/logo.png'
import { FaBars, FaTimesCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbarMain'>
          <div className='navbarMain-container container'>
            <Link to='/' className='navbarMain-logo' onClick={closeMobileMenu}>
              <img src={fullLogo} alt="Logo" className='navbarMain-icon'/>
            </Link>
            <div className={click ? 'menu-icon active' : 'menu-icon'} onClick={handleClick}>
              {click ? <FaTimesCircle /> : <FaBars />}
            </div>
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


export default Navbar;