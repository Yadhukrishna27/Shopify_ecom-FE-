import React from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';


function Placeorder() {
  return (
    <>
    <div className="container my-5">
        <Row>
            {/* Information */}
            <Col md={6}>
          <h5 className="mb-4">
            <span style={{ borderBottom: '2px solid black', paddingBottom: '4px' }}>DELIVERY</span>
            <span style={{ fontWeight: 'bold' }}> INFORMATION</span>
          </h5>
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Street" />
            </Form.Group>
            <Row className="mb-3">
              <Col>
                <Form.Control placeholder="City" />
              </Col>
              <Col>
                <Form.Control placeholder="State" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Control placeholder="Zipcode" />
              </Col>
              <Col>
                <Form.Control placeholder="Country" />
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Phone" />
            </Form.Group>
          </Form>
        </Col>

        {/* Cart Totals & Payment */}
        
        </Row>

    </div>
    </>
  )
}

export default Placeorder