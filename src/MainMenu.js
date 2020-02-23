import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';



function MainMenu() {
    return(
      <Container>
        <Col className="mx-auto" xs={6} md={6}>
          <Image src={logo}/>
          <Button variant="primary" size="lg" block>Nueva Factura</Button>
          <Button variant="primary" size="lg" block>Mis Facturas</Button>
        </Col>
      </Container>
    );
  }

export default MainMenu;   