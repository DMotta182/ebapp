import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// import firebase from 'firebase';

function NavMenu() {
  return(
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">EBApp</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">About Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
