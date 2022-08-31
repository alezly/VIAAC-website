import React from 'react';
import contactImg from '../../assents/Img/contact-background.png';
import ContactTop from '../ContactTop';
import Forms from '../Form';
import Line from '../Line';
import ContactCard from '../ContactCard';
import Footer from '../Footer'
import Navbar from '../Navbar';

function Contact() {

  const style ={
    backgroundImage: `url(${contactImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    backgroundSize: "cover"
  }
  return (
    <>  
        <Navbar/>
        <div style={style}>
          <ContactTop/>
          <Line/>
          <ContactCard/>
          <Forms/>
          <Footer style={{color: "white", borderTop: "2px solid white"}}/>
        </div>
    </>
  );
}

export default Contact;
