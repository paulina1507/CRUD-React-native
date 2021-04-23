import firebase from 'firebase';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyAyk6B8FdckNLWuPlDzIw-N6wRVDpHXe4w",
    authDomain: "react-509b8.firebaseapp.com",
    projectId: "react-509b8",
    storageBucket: "react-509b8.appspot.com",
    messagingSenderId: "664577539178",
    appId: "1:664577539178:web:d0cc0d630e48636ee99e13"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default {
    firebase,
    db
  }