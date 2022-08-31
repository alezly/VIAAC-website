import React from 'react';
import NavbarServices from './../NavbarServices';
import ServicesTextCard from './../ServicesTextCard';
import Banner from './../Banner';
import BorderYellow from './../BorderYellow';
import Video from './../Video';
import bannerImg from '../../assents/Img/yellow-services-background.png';
import video from '../../assents/Video/camera-video.mp4';
import ButtonServices from '../ButtonServices';
import Footer from '../Footer';
import Navbar from '../Navbar';

function HighDefinition() {
  return (
    <>
      <Navbar/>
      <NavbarServices/>
      <Banner bannerImg={bannerImg} mainTitle="High-Definition Visual Inspection"/>
      <BorderYellow top={{top: "67vh"}}/>
      <ServicesTextCard 
        firstText="Coke Drum Inspection with 3-D Laser Scans and Visual Inspection"
        title=""
        mainPOne="A critical part of the inspection, VIAAC uses a remotely operated camera mounted to the drill stem to take location indexed images that are immediately assessed and categorized. Depending on site requirements 300 to 800 images may be captured for a complete understanding of drum condition."
        mainPTwo='VIAAC uses a remotely operated camera mounted to the drill stem to take location-indexed images
        that are immediately assessed and categorized'
      />
      <Video video={video} videoWidth="80%"/>
      <Footer/>
    </>
  );
}

export default HighDefinition;
