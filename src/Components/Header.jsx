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
          <Navbar.Brand className='mx-5' href="#"><strong>SHOPIFY</strong></Navbar.Brand>
          <Nav className="ms-auto d-none d-lg-flex gap-4 me-5">
            {/* <NavLink href="/">Home</NavLink>
            <NavLink href="/shop" className="fw-bold border-bottom border-dark">Shop</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/journal">Journal</NavLink> */}
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="/">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="/shop">Shop</a></li>
                        </ul>
                         <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
          </Nav>
        </Container>
      </Navbar>
        
    
    </>
  )
}

export default Header