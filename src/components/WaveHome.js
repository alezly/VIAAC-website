import React from 'react';
import './HomePage.css';
import wave from '../assents/Img/wave.png'


function WaveHome(props) {

    const style ={
        width: "100%"
    }

  return (
    <>
        <img src={wave} alt="Blue background" style={style}/>
    </>
  );
  
}


export default WaveHome;