import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import * as firebase from 'firebase';


// const firebaseConfig = {
//     apiKey: "AIzaSyBIbgDlaoN2iEWNu84Du3iRiXRbXqGzJro",
//     authDomain: "ebapp-66a90.firebaseapp.com",
//     databaseURL: "https://ebapp-66a90.firebaseio.com",
//     projectId: "ebapp-66a90",
//     storageBucket: "ebapp-66a90.appspot.com",
//     messagingSenderId: "776118482651",
//     appId: "1:776118482651:web:7eb7edce5603854651fefe",
//     measurementId: "G-JH48TP1D51"
//   };
// firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
