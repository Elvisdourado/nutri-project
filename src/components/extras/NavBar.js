import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav/'
import MainLogo from '../assets/marca_NEG.png'


function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
        <Navbar.Brand href="/"><img src={MainLogo} height='50px' width='150px' alt='logo' /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/FullSearch">Busca completa</Nav.Link>
            <Nav.Link href="/About">Sobre</Nav.Link>
          </Nav>          
        </Navbar.Collapse>
      </Navbar>


    </div>
  )
}
export default NavBar
