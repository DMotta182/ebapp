import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

// import firebase from 'firebase';

function NewItem() {

  let index = 0;
  return(
    <Container className="mt-2">
      <Form.Row>
        <Form.Group as={Col} lg={1} controlId={'newItemNumber' + index}>
          <Form.Control type="text" placeholder="3"></Form.Control>
        </Form.Group>
        <Form.Group as={Col} lg={8} controlId={'newItemDescription' + index}>
          <Form.Control type="text" placeholder="Write a description"></Form.Control>
        </Form.Group>
        <Form.Group as={Col} lg={3} controlId={'newItemPrice' + index}>
          <Form.Control type="text" placeholder="200.00"></Form.Control>
        </Form.Group>
      </Form.Row>
    </Container>  
  );
}

export default NewItem;
