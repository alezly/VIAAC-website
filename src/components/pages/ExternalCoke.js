import React from 'react';
import NavbarServices from './../NavbarServices';
import ServicesTextCard from './../ServicesTextCard';
import Banner from './../Banner';
import BorderYellow from './../BorderYellow';
import Video from './../Video';
import bannerImg from '../../assents/Img/yellow-services-background.png';
import video from '../../assents/Video/skirt-video.mp4';
import Footer from '../Footer';
import Navbar from '../Navbar';

function ExternalCoke() {
  return (
    <>
      <Navbar/>
      <NavbarServices/>
      <Banner bannerImg={bannerImg} mainTitle="External Coke Drum Skirt Scans"/>
      <BorderYellow top={{top: "67vh"}}/>
      <ServicesTextCard 
        firstText="Coke Drum Inspection with 3-D Laser Scans and Visual Inspection"
        title=""
        mainPOne="Skirts are a known problem area for coke drum operators. Subject to the constantly varying temperatures and dimensions of an operating coke drum and a fixed foundation stresses are concentrated and can quickly cause significant damage including cracking and distortions."
        darkTitle="Skirt Scan – document condition of the skirt and foundation"
      />
      <Video video={video} videoWidth="100%"/>
      <Footer/>
    </>
  );
}

export default ExternalCoke;
