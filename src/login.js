import React from 'react';
//import * as firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Login(){
    return(
        <Container className="w-50 mt-5">
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              No compartiremos tu informacion con nadie
            </Form.Text>
          </Form.Group>
  
          <Form.Group controlId="formPassword">
            <Form.Label className="text-">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recordarme" />
          </Form.Group>
          <Row className="text-center">
            <Col>
              <Button variant="primary" className="register" type="submit">
                Register
              </Button>
            </Col>  
            <Col>
              <Button variant="primary" className="submit" type="submit">
                Submit
              </Button>
            </Col>  
          </Row>  
        </Form>
      </Container>
    );
}

export default Login;