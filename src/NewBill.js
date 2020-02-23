import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import NewItem from './NewItem';
import Divider from '@material-ui/core/Divider';

// import firebase from 'firebase';

function NewBill() {
  //let index = 1;
  return(
    <Container className="mt-2">
      <Form>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Juanito Lopez" />
        </Form.Group>
        <Form.Group>
          <Form.Label>NIT</Form.Label>
          <Form.Control type="text" placeholder="123456-7" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="juanito@ebapp.com" />
        </Form.Group>
      </Form>
      <Divider variant="inset" className="m-3"  />
      <Row>
        <Col lg={1}>Cantidad</Col>
        <Col lg={8}>Descripcion</Col>
        <Col lg={3} className="pl-0">Precio</Col>
        <NewItem></NewItem>
        {/*----------------------- Render index amount NEW ITEM -----------------------*/}
        <Button className="mt-3 ml-auto" variant="dark">Add New Item</Button>
        <Button className="mt-3" variant="dark" size="lg" block>Submit</Button>
      </Row>
    </Container>  
  );
}

export default NewBill;
