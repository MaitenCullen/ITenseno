import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../utilities/servicies';

function NavBar() {

  let navigate = useNavigate()  

  const id  = localStorage.getItem('id')

  console.log(id);


  const logout = async () => {
    localStorage.clear()
    await logOut() .then (() => navigate('/'))
    navigate('/') 
  }

  return (
    <Navbar collapseOnSelect expand="lg" variant="light" id='Navbar1'>
      <Container>
        <Navbar.Brand as={Link} to='./' id='ITenseno'>ITenseño</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav id='navLinks'>
            <Nav.Link as={Link} to='./Search' id='linkClase' className='link1 mx-4'>Encuentra tu clase</Nav.Link>
            {id && <Nav.Link as={Link} to='./Profile' id='linkContacto' className='link1 mx-4'>Contacto</Nav.Link>}
            {!id && <Nav.Link as={Link} to='./Login' id='login' className='mx-4'>Inicia sesión</Nav.Link>}
            {!id && <Nav.Link as={Link} to='./Register' className='mx-4' id='check'>Regístrate</Nav.Link>}
            {id && <Nav.Link onClick={ logout} className='mx-4' id='check'>Cerrar sesión</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
