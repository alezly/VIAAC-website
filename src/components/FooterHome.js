import React from 'react';
import './HomePage.css';
import WaveHome from './WaveHome';
import vineta from '../assents/Img/vineta.png'
import Footer from './Footer';


function FooterHome(props) {

  return (
    <>
        <WaveHome/>
        <div className='wave-description-card'>
            <div className='info-home-max-width'>
                <div className='paragraph'>
                    <h4>VIAAC Advantages:</h4>
                    <div>
                    <img src={vineta} alt="Vineta" className="vineta"/>
                    <p>
                        VIAAC staff are the world's most experienced coke drum inspectors so can immediately identify, evaluate and assess the seriousness of a drum's condition at an expert level.<br/>
                    </p>
                    </div>
                    <div>
                    <img src={vineta} alt="Vineta" className="vineta"/>
                    <p>
                        low-profile, lightweight, and robust system mounts to the drill stem/ cutting tool, simplifying logistics, minimizing requirements for support staff, and reducing the amount of time needed to complete a scan.<br/>
                    </p>
                    </div>
                    <div>
                    <img src={vineta} alt="Vineta" className="vineta"/>
                    <p>
                        VIAAC has the experience and capability to scan drums with internal temperatures up to 55 degrees Celsius (131 degrees Fahrenheit) <br/>
                    </p>
                    </div>
                    <div>
                    <img src={vineta} alt="Vineta" className="vineta"/>
                    <p>
                        On-site data processing to find new bulges or distortions and allow them to be immediately inspected and assessed using a 30-times zoom HD camera and software that provides the precise location of each image.<br/>
                    </p>
                    </div>
                    <div>
                    <img src={vineta} alt="Vineta" className="vineta"/>
                    <p>
                        Custom software is provided to display laser maps with visual images located and categorized to link visual findings with the drum profile.<br/>
                    </p>
                    </div>
                    <div>
                    <img src={vineta} alt="Vineta" className="vineta"/>
                    <p>
                        High-quality laser data can be exported for an engineering assessment or other FEA analysis<br/>
                    </p>
                    </div>
                    <div>
                    <img src={vineta} alt="Vineta" className="vineta"/>
                    <p>
                        Provide reports that include a preliminary assessment of the likelihood of failure in the drum<br/>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
  
}


export default FooterHome;