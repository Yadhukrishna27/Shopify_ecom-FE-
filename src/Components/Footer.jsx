import React from 'react'
import { Row,Col } from 'react-bootstrap'

function Footer() {
  return (
    <>
    <div className=" text-light container pt-5 ">
       <Row>
          {/* Left Column */}
          <Col md={6} lg={6}>
            <h4>Shop</h4>
            <p style={{ color: '#333', maxWidth: '90%' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus vel quas vero voluptates facilis.
              Magnam alias, optio placeat vitae distinctio esse soluta veritatis cumque libero beatae!
            </p>
          </Col>

          {/* Middle Column */}
          <Col md={3} lg={3}>
            <h5 style={{ fontWeight: 'bold' }}>COMPANY</h5>
            <ul className="list-unstyled mt-2">
              <li><a href="/home" style={{ textDecoration: 'none', color: '#333' }}>Home</a></li>
              <li><a href="/about" style={{ textDecoration: 'none', color: '#333' }}>About Us</a></li>
              <li><a href="/shop" style={{ textDecoration: 'none', color: '#333' }}>Shop</a></li>
              <li><a href="/" style={{ textDecoration: 'none', color: '#333' }}>Privacy</a></li>
            </ul>
          </Col>

          {/* Right Column */}
          <Col md={3} lg={3}>
            <h5 style={{ fontWeight: 'bold' }}>GET IN TOUCH</h5>
            <ul className="list-unstyled mt-2">
              <li style={{ color: '#333' }}>+1234567890</li>
              <li style={{ color: '#333' }}>contactshop@gmail.com</li>
            </ul>
          </Col>
        </Row>
      
    </div>
    </>
  )
}

export default Footer