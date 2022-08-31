import React from 'react';
import './BorderYellow.css';
import borderImg from '../assents/Img/Yellow-border.png'


function BorderYellow(props) {

  return (
    <>
        <div className='border-container' style={props.top}>
            <img src={borderImg} alt="border" className='border-img'/>
        </div>
    </>
  );
  
}


export default BorderYellow;