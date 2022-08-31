import React from 'react';
import './SoftwareDescription.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import rightSofware from '../assents/Img/right-software.png'



function SoftwareDescription(props) {

  return (
    <>
        <div className='description-card'>
          <div className='description-card-container container-sofware'>
            <div className="row row-description">
                <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 col-xxl-8 soft-text '>
                    <h1>Vessel Viewer</h1>
                    <p>
                    Vessel Viewer™ is VIAAC’s custom software for viewing laser data 
                    and visual images captured during an inspection. It is available in 
                    different versions and uses an innovative user interface to display 
                    drum condition. Drum features including welds, repairs and overlay 
                    can be displayed, as can located and categorized images from 
                    current and past inspections, including those captured by other 
                    vendors.
                    </p>
                </div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4 col-software-img'>
                    <img src={rightSofware} alt="Logo" className='sofware-icon'/>
                </div>
            </div>
          </div>
        </div>
    </>
  );
  
}


export default SoftwareDescription;