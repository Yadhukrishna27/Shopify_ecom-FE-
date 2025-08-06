import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Feedback() {
  return (
    <>
    <div className="conatiner my-4">
        <Row>
            <Col className='text-center'>
            
            <h5 className='fw-bold'>Easy Exchange Policy</h5>
            <h5>We Offer Hassle Free Exchange Policy</h5>
            
            </Col>
            <Col className='text-center'>
            <h5 className='fw-bold'>Easy Exchange Policy</h5>
            <h5>We Offer Hassle Free Exchange Policy</h5>
            </Col>
            <Col className='text-center'>
            <h5 className='fw-bold'>Easy Exchange Policy</h5>
            <h5>We Offer Hassle Free Exchange Policy</h5>
            </Col>
        </Row>
        <div className="container my-5 text-center">
            <h4>Contact Us</h4>
             <Form.Control type="email"  placeholder="Enter email id" />
        <Form.Text className="text"></Form.Text>
        </div>

        
    </div>
    
    </>
  )
}

export default Feedback