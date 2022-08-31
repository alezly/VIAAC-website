import React from 'react';
import NavbarServices from './../NavbarServices';
import ServicesTextCard from './../ServicesTextCard';
import Banner from './../Banner';
import BorderYellow from './../BorderYellow';
import Video from './../Video';
import bannerImg from '../../assents/Img/yellow-services-background.png';
import video from '../../assents/Video/laser-video.mp4';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Services() {
  return (
    <>
      <Navbar/>
      <NavbarServices/>
      <Banner bannerImg={bannerImg} mainTitle="3D Laser Scans of Coke Drum Internals"/>
      <BorderYellow top={{top: "67vh"}}/>
      <ServicesTextCard 
        firstText="Coke Drum Inspection with 3-D Laser Scans and Visual Inspection"
        title=""
        mainPOne="Used to precisely determine the interior profile of the vessel cylinder and cone with multiple high-precision 3D laser scans while the drums are empty and clean. An accurate scan forms the basis for all further inspection and maintenance activities."
      />
      <Video video={video} videoWidth="75%"/>
      <Footer/>
    </>
  );
}

export default Services;
