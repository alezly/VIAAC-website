import React from 'react';
import './ContactTop.css';

function ContactTop(props) {

  return (
    <>
        <div className='top-title-container'>
            <h1>Contact Us</h1>
        </div>
        <div className='top-description-container'>
            <p>
                Vessel Inspection and Assessment Corp. To assist us in answering your queries, please describe the issue 
                your site is experiencing and tell us what you wish to achieve. We aim to respond within one business day.
            </p>
        </div>
    </>
  );
  
}

export default ContactTop;