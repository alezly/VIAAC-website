import React from 'react';
import './HomePage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assents/Img/logo-homepage.png'


function InfoHome(props) {

  return (
    <>  
    <div className='info-home-card'>
        <div className='info-home-max-width'> 
            <Row>
                <Col lg={2} style={{textAlign:"center"}}>
                    <img src={logo} alt="Logo" className='logo-description-homepage'/>
                </Col>
                <Col lg={10} className="info">
                    <h1>The Importance of Regular Coke Drum Inspection</h1>
                    <p>
                        Delayed Coker operations produces severe thermal cycles that, over time, cause distortions, cracking, and other damage. To ensure safe and profitable operation of the Delayed Coker Unit and allow efficient maintenance planning, remotely operated 3D Laser Scans and Visual Inspection allows a refinery to locate and assess the damage that accumulates over time. This avoids costly production and damage losses due to unpredicted outages.
                    <br/>
                    <br/>
                        Vessel Inspection and Assessment Corp. (VIAAC) specializes in capturing the internal profile of each coke drum inspected and any change from the original design or previous inspections. This allows an immediate assessment of the likelihood of failure derived using a proprietary technique based on strain to find and categorize damage during an inspection using our staff's years of observation of coke drum damage and failures.
                    <br/>
                    <br/>
                        An assessment whether an inspected coke drum remains at or near its designed parameters and the locations of areas that may need further assessment, inspection or repair is provided before our staff leaves site. The highly accurate data set of each coke drum cylinder and cone is displayed using VIAAC's custom Vessel Viewer software to provide comparisons to monitor changes over time. A written report, including graphs and tables so that the information is readily understandable, is provided, and forms the basis for institutional understanding of the coke drum condition.
                    </p>
                </Col>
            </Row>
        </div>
    </div>
         

    </>
  );
  
}


export default InfoHome;