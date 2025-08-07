import React from 'react'
import { Col, Row } from 'react-bootstrap'


function About() {
  return (
    <>
    <div className="container mt-5">
      <h3 className=' fw-bold my-2'>About Us:</h3>
      <Row>
        
        <Col className='mt-3'>
          <p>Shopify is one of the world's leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores natus aliquam mollitia odio ad esse hic ut illum veritatis tempora ratione nihil atque, doloremque iusto earum odit minus labore totam.
          </p>

          <h3 className=' fw-bold mb-3 mt-4'>Our Mission</h3>
          <p>At Enhance Clothing, our mission is to empower individuals through fashion by offering high-quality, stylish, and versatile clothing that celebrates uniqueness. We aim to inspire confidence and self-expression while prioritizing inclusivity, sustainability, and customer satisfaction.</p>
        </Col>
        
      </Row>
    </div>
    </>
  )
}

export default About