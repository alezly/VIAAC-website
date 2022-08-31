import React from 'react';
import './Footer.css';
import home from '../assents/Img/home.png'
import service from '../assents/Img/service.png'
import software from '../assents/Img/software.png'
import team from '../assents/Img/team.png'
import about from '../assents/Img/about.png'
import contact from '../assents/Img/contact.png'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function Footer(props) {

  return (
    <>
        <div className='footer-container' style={props.back}>
            <div className="row-menu-footer">
                <div
                    className="row row-cols-3 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 row-cols-xl-6 row-cols-xxl-6"
                >
                    <div className="col">
                        <Link 
                            to='/' 
                            className='footer-links' 
                        >
                            <div className="circle-container">
                            <img src={home} alt="Home"/>
                            <div className="circle-info">Home</div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link 
                                to='/services' 
                                className='footer-links' 
                            >
                            <div className="circle-container">
                            <img src={service} alt="Services"/>
                            <div className="circle-info">Services</div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link 
                                    to='/software' 
                                    className='footer-links' 
                                >
                            <div className="circle-container">
                            <img src={software} alt="Software"/>
                            <div className="circle-info">Software</div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                    <Link 
                                to='/team' 
                                className='footer-links' 
                            >
                        <div className="circle-container">
                        <img src={team} alt="Team"/>
                        <div className="circle-info">Team</div>
                        </div>
                    </Link>
                    </div>
                    <div className="col">
                        <Link 
                                    to='/about' 
                                    className='footer-links' 
                                >
                            <div className="circle-container">
                            <img src={about} alt="About us"/>
                            <div className="circle-info">About us</div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link 
                                        to='/contact' 
                                        className='footer-links' 
                                    >
                            <div className="circle-container">
                            <img src={contact} alt="Contact Us"/>
                            <div className="circle-info">Contact us</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row-text" style={props.style}>Coke Drum Management Solutions</div>
        </div>
    </>
  );
  
}


export default Footer;