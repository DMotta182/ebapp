import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
//import FormControl from 'react-bootstrap/FormControl';
// // import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
//import Image from 'react-bootstrap/Image';
//import Button from 'react-bootstrap/Button';
//import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';
// import NewItem from './NewItem';
// import Divider from '@material-ui/core/Divider';
//import Login from './login';
//import NavMenu from './Navbar';
//import Table from 'react-bootstrap/Table';
//import Card from 'react-bootstrap/Card';
import BillCard from './BillCard.js'
// import firebase from 'firebase';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: '',
      index: 0,
      myBills: []
    }
  }

  render(){
    return(
      <Container>
        
      </Container>
    );
  }
}

export default App;
