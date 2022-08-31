import React from 'react';
import './HomePage.css';
import Language from './Language';
import NavbarHome from './NavbarHome';
import SubtitleHome from './SubtitleHome';
import Title from './Title';


function HomePage(props) {

  return (
    <>
        <div className='container-home'>
            <Language/>
            <Title/>
            <NavbarHome/>
            <SubtitleHome/>
        </div>
    </>
  );
  
}


export default HomePage;