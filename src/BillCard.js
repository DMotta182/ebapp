import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
// import firebase from 'firebase';
  function BillCard(){
    return(
      <a className="m-1" href="asdf">
        <Card text="light" bg="dark">
        <Card.Body>
          <Card.Title>Juan Lopez</Card.Title>
          <Card.Text>123456-7</Card.Text>
          <Card.Text>21 - 05 - 2020</Card.Text>
          <Card.Text>250.00</Card.Text>
        </Card.Body>
      </Card>
      </a>
    );
  }

export default BillCard;
