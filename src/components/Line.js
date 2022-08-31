import React from 'react';
import './Form.css';
import line from '../assents/Img/border-white-form.png'

function Line(props) {

  return (
    <>  
        <div className='form-card'>
            <div className='form-max-width'>
                <img src={line} alt="Line white" className='line-white'/>
            </div>
        </div>
    </>
  );
  
}

export default Line;