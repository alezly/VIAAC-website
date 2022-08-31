import React from 'react';
import './ServicesTextCard.css';

function ServicesTextCard(props) {

  return (
    <>
        <div className='services-text-card' style={props.cardWithoutMt}>
          <div className='services-text-card-container container-text'>
            <p className='first-p' style={props.center}>{props.firstText}</p>
            <h1 className='title'>{props.title}</h1>
            <p className='main-p'>
                {props.mainPOne} 
                <br/>
                <br/>
                <br/>
                {props.mainPTwo} 
            </p>
            <h2 className='darkTitle'>{props.darkTitle}</h2>
          </div>
        </div>
    </>
  );
  
}


export default ServicesTextCard;