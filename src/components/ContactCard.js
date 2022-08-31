import React from 'react';
import './Form.css';
import mail from '../assents/Img/mail.png'
import cell from '../assents/Img/cell.png'
import map from '../assents/Img/map.png'
import ln from '../assents/Img/ln.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactCard(props) {

  return (
    <>
        <div className='form-card'>
          <div className='form-max-width'>
            <Container fluid>
                <Row className='row-card-icon'>
                    <Col sm={6} md={6} lg={3} xl={3} xxl={3} className="col-contact-card">
                        <img src={mail} alt="Email" width={"100%"} height={"auto"}/>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3} xxl={3} className="col-contact-card">
                        <img src={cell} alt="Cellphone" width={"100%"} height={"auto"}/>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3} xxl={3} className="col-contact-card">
                        <img src={map} alt="Direction" width={"100%"} height={"auto"}/>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3} xxl={3} className="col-contact-card">
                        <img src={ln} alt="linkedin" width={"100%"} height={"auto"}/>
                    </Col>
                </Row>
            </Container>
          </div>
        </div>
    </>
  );
  
}

export default ContactCard;