import React from 'react';
import Footer from '../Footer';
import FooterHome from '../FooterHome';
import HomePage from '../HomePage';
import InfoHome from '../InfoHome';
import Navbar from '../Navbar';

function Home() {
  return (
    <>
      <HomePage/>
      <InfoHome/>
      <FooterHome/>
      <Footer back={{background: "#0a1b2d"}} style={{color: "white", borderTop: "2px solid white"}}/>
    </>
  );
}

export default Home;
