import React from 'react'
import { Col, Row } from 'react-bootstrap'


function About() {
  return (
    <>
    <div className="container my-4">
      <h3 className='text-center fw-bolder mb-5'>About Us</h3>
      <Row>
        <Col><img style={{maxwidth:"49vh", maxHeight:"49vh"}} src="https://www.appnova.com/wp-content/uploads/2024/10/An-Essential-Guide-to-Fashion-eCommerce-Top-Trends-Winning-Strategies-and-More1.jpg" alt="" /></Col>
        <Col className='mt-3'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla necessitatibus reiciendis quia porro pariatur a id, ullam incidunt, iusto eius harum temporibus? Error ab, corrupti quaerat aliquam ipsa minima?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad tempora praesentium eos aut officia amet repellat nesciunt aliquid veniam. Alias placeat sequi aliquam porro magnam quia esse modi ducimus?
          </p>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default About