import React from 'react';
import bannerImg from '../../assents/Img/teamPanel.png';
import ServicesTextCard from './../ServicesTextCard';
import TeamCard from '../TeamCard';
import Footer from '../Footer'
import Navbar from '../Navbar';
import imgTeam from '../../assents/Img/Egler.png'
import imgTeam2 from '../../assents/Img/Estephen.png'
import './About.css'

function About() {
  return (
    <>
      <Navbar/>
      {/* <Banner bannerImg={bannerImg} mainTitle="About Us"/> */}
      <ServicesTextCard 
        title=" About Us"
        mainPOne="Based in Hamilton,Ontario, Canada,  Vessel Inspection and Assessment Corp. was formed 
        to bring a new level of innovation and expertise to the complex task of coke drum inspection 
        and assessment.

        The principals bring 30 + years of industry-specific experience to make improvements to the field. 
        New concepts are at the core of systems and applications used to capture and present accurate data 
        on drum bulging and surface damage."
        cardWithoutMt={{marginTop: '0', 
                        background: '#0A1B2D', 
                        color: 'white', 
                        backgroundImage: `url(${bannerImg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom',
                        padding: '2rem 0',
                        marginBottom: '1rem',
                        textAlign: 'right'}}
          center={{marginTop: '0'}}
      />
      <TeamCard 
        direction="right" 
        name="Stephen Park, Principal"
        oneP="Stephen Park is a cofounder of Vessel Inspection and Assessment Corp. Having worked 
            in the field of coke drum inspection since 2009, Mr. Park has personally performed over 600 
            inspections at refineries around the world, mainly as a team lead, and more than 
            any other active inspector. During that time, he also guided the development of applications used 
            to capture and display inspection data and assisted in authoring 5 ASME papers, including as 2nd 
            author for “Importance of Accurate and Detailed Data Processing of Laser Mapping 
            in Coke Drum”, published in the 2019 ASME Pressure and Vessel  Piping 
            Conference as PVP2019-93674."
        twoP="Mr. Park is responsible for business development and client interactions at VIAAC."
        teamImg={imgTeam2}
        margin={{marginRight:'3rem'}}
        fadeImg='fade-left'
        fadePara='fade-right'
      />
      <TeamCard
        direction="left" 
        name="Egler Araque, Principal"
        oneP="Over two decades, Mr. Araque has had the placer to inspect and assess many pressure vessels, and definitively, a
            coke drum is one of the most exciting equipment he has done in a refinery. He has done extensive work evaluating
            pressure vessels through API 579 Fitness for Service to estimate areas to be repaired, replaced, or altered and
            generated mechanical integrity assessments of pressure vessels and piping systems using Finite Element Analysis to
            compare stress levels with allowable stress values. Mr. Araque and his associates have done extensive work on
            assessing coke drum cracking and repair strategies and published 8 ASME papers, including “Correlating Coke Drum
            Profiles with Observed Surface Damage”, published in the 2018 ASME Pressure and Vessel Piping Conference as
            PVP2018-84766 and “Measuring the Effectiveness of Metal Weld Overlay through Bulge Depth and Bulge Sharpness
            Analysis”, published in the 2019 ASME Pressure Vessels and Piping Conference as PVP2019-93661."
        twoP="Since co-founding VIAAC, Mr. Araque has developed the In-Situ Strain Building Induced Damage methodology to
            assess internal bulging-induced damage in a coke drum during inspections and has done further work on analyzing
            repair strategies to understand vessel performance over time."
        teamImg={imgTeam}
        margin={{marginLeft:'3rem'}}
        fadeImg='fade-right'
        fadePara='fade-left'
      />
      <Footer/>
    </>
  );
}

export default About;
