import React from 'react';
import './Form.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import logo from '../assents/Img/form-logo.png'

function Forms(props) {

  return (
    <>  
        <div className='form-card'>
            <div className='form-max-width'>
                <div className='form-container'>
                    <div className='border-form'>
                        <img src={logo} alt="Logo" className='form-icon'/>
                    </div>
                    <Form className='form'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>FORM:</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>

                        <Row>
                            <Form.Group className="mb-3 col-sm-12 col-md-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" controlId="formBasicPassword">
                                <Form.Label>First Name:</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>

                            <Form.Group className="mb-3 col-sm-12 col-md-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" controlId="formBasicPassword">
                                <Form.Label>Last Name:</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3 col-sm-12 col-md-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8" controlId="formBasicPassword">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-12 col-md-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8" controlId="formBasicPassword">
                            <Form.Label>Mobile:</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>

                        <Form.Group className="mb-3 col-sm-12 col-md-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message:</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>

                        <Button variant="primary" type="submit" className='btn-send'>
                            Send
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    </>
  );
  
}

export default Forms;