import React from 'react';
import './Banner.css';

function Banner(props) {

  return (
    <>
        <div className='banner-container'>
            <img src={props.bannerImg} alt="banner" className='banner-img'/>
            <div className="centered">{props.mainTitle}</div>
        </div>
    </>
  );
  
}


export default Banner;