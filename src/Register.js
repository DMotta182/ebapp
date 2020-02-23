import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Register() {
    return (
        <Container className="w-50 mt-4">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formNombre">
                <Form.Label className="text-">Nombre</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formApellido">
                <Form.Label className="text-">Apellido</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Form.Group>
            </Form.Row>  
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label className="text-">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label className="text-">Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label className="text-">Address</Form.Label>
              <Form.Control type="text" placeholder="Direccion"></Form.Control>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formNit">
                <Form.Label className="text-">Nit</Form.Label>
                <Form.Control type="text" placeholder="12345-6"></Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formPhone">
                <Form.Label className="text-">Phone Number</Form.Label>
                <Form.Control type="text" placeholder="4567-8765"></Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formSatCheck">
              <Form.Label>Autorizacion de la SAT</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Text className="text-muted">
              No compartiremos tu informacion con nadie
            </Form.Text>
            <Button variant="primary mt-2">
              Submit  
            </Button>  
          </Form>
        </Container>
    );
};


export default Register;