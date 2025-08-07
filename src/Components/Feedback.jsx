import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Feedback() {
  return (
    <>
    
        <Container className="my-5 text-center">
      <h4>Subscribe to our Newsletter</h4>
      <Form className="d-inline-block w-100" style={{ maxWidth: '400px' }}>
        <Form.Control type="email" placeholder="Enter email id" className="my-3" />
        <Form.Text className="text-muted">
          We’ll never share your email with anyone else.
        </Form.Text>
      </Form>
    </Container>
        
    
    
    </>
  )
}

export default Feedback