import React from 'react';
import Modal from 'react-modal';
import './ButtonServices.css';
import vineta from '../assents/Img/vineta.png'
import arrow from '../assents/Img/arrow-left.png'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    padding: "2rem",
    textAlign: "center",
    marginTop: "2rem",
    height: "80vh",
    overflow: "scroll"
  },
};

Modal.setAppElement('#root');

function ButtonServices() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
        <div className='btn-services-card'>
            <div className='btn-services container-btn-services'>
                <button onClick={openModal} className="open-btn">VIAAC Advantages:</button>
            </div>
        </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='paragraph'>
            <div>
            <img src={vineta} alt="Vineta" className="vineta"/>
            <p>
                Available Online Scanning <br/>
                VIAAC staff have the experience to capture data in tough industrial settings and use scanners
                that have proven accurate and reliable in hot environments, up to 55 degrees Celsius, typical of 
                operating coke drums. This reduces the total amount of time needed between cycles to conduct 
                an inspection.<br/>
            </p>
            </div>
            <div>
            <img src={vineta} alt="Vineta" className="vineta"/>
            <p>
                Motion Reduction <br/>
                A custom lightweight, low-profile adaptor system mounts to the cutting tool or drill stem and is 
                designed to absorb vibration.<br/>
            </p>
            </div>
            <div>
            <img src={vineta} alt="Vineta" className="vineta"/>
            <p>
                Instant Processing of Laser Data <br/>
                Custom algorithms are used to process the 100 million + data points collected by the laser system 
                during a drum scan. Accuracy in local profiles is +/- 1mm <br/>
            </p>
            </div>
            <div>
            <img src={vineta} alt="Vineta" className="vineta"/>
            <p>
                VIAAC’s custom Vessel Viewer™ software is used to show Radius Maps and surface profiles that 
                show changes in drum dimensions. The software is capable of loading exports of scans conducted 
                by other vendors so that no inspection history is lost.<br/>
            </p>
            </div>
            <div>
            <img src={vineta} alt="Vineta" className="vineta"/>
            <p>
                Use of unique In-situ Bulge Strain-Induced Damage assessment to instantly identify areas for 
                follow-upVIAAC compares the interior profile against the original design profile and/or previous 
                scans and immediately identifies areas where bulging is likely to cause surface damage. 
                These areas and circ welds are then targeted for visual inspection, a crucial second step in assessing 
                the condition of a coke drum. <br/>
            </p>
            </div>
            <div>
            <img src={vineta} alt="Vineta" className="vineta"/>
            <p>
                VIAAC inspectors make use of the experience of 800 + inspections to assess and categorize the 
                located images captured during the visual inspection. These categories are then used in both the 
                display and overall assessment of drum condition.<br/>
            </p>
            </div>
            <div>
            <img src={vineta} alt="Vineta" className="vineta"/>
            <p>
                Provide reports that include a preliminary assessment of the likelihood of failure in the drum<br/>
            </p>
            </div>
        </div>
        <img src={arrow} alt="Arrow left" className="arrow" onClick={closeModal}/>
        {/* <button onClick={closeModal}>close</button> */}
      </Modal>
    </>
  );
}
 
export default ButtonServices;