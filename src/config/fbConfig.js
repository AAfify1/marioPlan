import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBzdy2LfvAZ7g_N17LhiOkAqc-2dBMIaEM",
    authDomain: "marioplan-5cea1.firebaseapp.com",
    databaseURL: "https://marioplan-5cea1.firebaseio.com",
    projectId: "marioplan-5cea1",
    storageBucket: "marioplan-5cea1.appspot.com",
    messagingSenderId: "508672315847",
    appId: "1:508672315847:web:75b73e0000eb372d8889e2",
    measurementId: "G-T8VWZQSMD1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase