import React from 'react';
import './HomePage.css';
import icon from '../assents/Img/isotipo-blanco.png'


function Title(props) {

  return (
    <>
        <div className='container-title'>
            <h1>VIAAC</h1>
            <img src={icon} alt="Isotipo" className='isotipo'/>
        </div>
    </>
  );
  
}


export default Title;