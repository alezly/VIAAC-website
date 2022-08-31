import React from 'react';
import './Video.css';

function Video(props) {

  return (
    <>
        <div className='main-video-container video-container'>
            <video src={props.video} width={props.videoWidth} height="auto" autoPlay loop controls controlsList="nodownload" oncontextmenu="return false;"></video>
        </div>
    </>
  );
  
}


export default Video;