import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav/'
import MainLogo from '../assets/marca_NEG.png'
import {Link} from 'react-router-dom'


function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
        <Link to="/"><img src={MainLogo} height='50px' width='150px' alt='logo' /> </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className='btn btn-secondary m-1' style={{backgroundColor: "#343a40", border: "none"}} to="/">Home</Link>
            <Link className='btn btn-secondary m-1' style={{backgroundColor: "#343a40", border: "none"}} to="/FullSearch">Busca completa</Link>
            <Link className='btn btn-secondary m-1' style={{backgroundColor: "#343a40", border: "none"}} to="/About">Sobre</Link>
          </Nav>          
        </Navbar.Collapse>
      </Navbar>


    </div>
  )
}
export default NavBar
