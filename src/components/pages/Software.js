import React from 'react';
import Banner from '../Banner';
import BorderYellow from '../BorderYellow';
import Video from '../Video';
import bannerImg from '../../assents/Img/yellow-services-background.png';
import video from '../../assents/Video/software.mp4';
import SoftwareDescription from '../SoftwareDescription';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Software() {
  return (
    <>
      <Navbar/>
      <Banner bannerImg={bannerImg} mainTitle="Custom Software"/>
      <BorderYellow top={{top: "55vh"}}/>
      <SoftwareDescription/>
      <Video video={video} videoWidth="80%"/>
      <Footer/>
    </>
  );
}

export default Software;
