import React from 'react'
import { Row,Col } from 'react-bootstrap'

function Footer() {
  return (
    <>
    <div className=" container pt-5 mb-5 ">
       <Row>
          {/* Left Column */}
          <Col md={6} lg={6}>
            <h4>Shop</h4>
            <p className='fs-6 fw-bold' style={{ color: '#333', maxWidth: '90%' }}>
              Shopify is one of the world's leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style. 
            </p>
          </Col>

          {/* Middle Column */}
          <Col md={3} lg={3}>
            <h5 style={{ fontWeight: 'bold' }}>COMPANY</h5>
            <ul className="list-styled mt-2 fs-6 fw-bold">
              <li><a href="/home" style={{ textDecoration: 'none', color: '#333' }}>Home</a></li>
              <li><a href="/about" style={{ textDecoration: 'none', color: '#333' }}>About Us</a></li>
              <li><a href="/shop" style={{ textDecoration: 'none', color: '#333' }}>Shop</a></li>
              <li><a href="/" style={{ textDecoration: 'none', color: '#333' }}>Privacy</a></li>
            </ul>
          </Col>

          {/* Right Column */}
          <Col md={3} lg={3}>
            <h5 style={{ fontWeight: 'bold' }}>CONNECT US</h5>
            <ul className="list-styled  mt-4 fs-6 fw-bold">
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