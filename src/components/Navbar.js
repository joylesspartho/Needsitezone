import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.css';

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" sticky="top" className="border-bottom">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center text-light">
          <img
            src="/logo.png"
            alt="NeedSite Logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
          NeedSite <span className="baby-green">Zone</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="text-center ">
            <Nav.Link href="/" className="text-light">Home</Nav.Link>
            <Nav.Link href="#services" className="text-light">Services</Nav.Link>
            <Nav.Link href="#portfolio" className="text-light">Portfolio</Nav.Link>
            <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
