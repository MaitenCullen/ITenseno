import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" id='Navbar1'>
      <Container>
        <Navbar.Brand as={Link} to='./' id='ITenseno'>ITenseño</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav id='navLinks'>
            <Nav.Link href="#features" className='link1 mx-5'>Encuentra tu clase</Nav.Link>
            <Nav.Link as={Link} to='./Profile' className='link1 mx-5'>Contacto</Nav.Link>
            <Nav.Link as={Link} to='./Login' id='login' className='mx-2'>Inicia sesión</Nav.Link>
            <Nav.Link as={Link} to='./Registrer' id='check'>Regístrate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
