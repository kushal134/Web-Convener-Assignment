import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "bootstrap/dist/css/bootstrap.min.css"

function Navigate() {
    return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed = "top">
  <Navbar.Brand >Kushal Kejriwal</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Item style = {{color : "white"}}>Institute Technical Summer Project</Nav.Item>
      

    </Nav>
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href = '/about'>
        About
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)
}

export default Navigate;