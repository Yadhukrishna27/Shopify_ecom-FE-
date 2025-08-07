import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
    
    <Navbar bg="white" expand="lg" className="border-bottom py-3">
        <Container fluid>
          <Navbar.Brand className='mx-5 fs-5' href="/"><strong>SHOPIFY</strong></Navbar.Brand>
          <Nav className="ms-auto d-none d-lg-flex gap-4 me-5">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 ">
                        <li className="nav-item"><a className="nav-link active fs-5" aria-current="page" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link fs-5 ms-2" href="/shop">Shop</a></li>
                        <li className="nav-item"><a className="nav-link fs-5 ms-2" href="/about">About</a></li>
                        <li className="nav-item"><a className="nav-link fs-5 ms-2" href="/cont">Contact</a></li>
                        </ul>
                         
                        <button className="d-flex btn btn-outline-dark ms-5" type="submit">
                            <i className="bi-cart "></i>
                            <a className="nav-link fs-6" href="/cart">Cart</a>
                            
                        </button>
                    
          </Nav>
        </Container>
      </Navbar>
        
    
    </>
  )
}

export default Header