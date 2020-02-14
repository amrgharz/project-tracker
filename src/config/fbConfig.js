import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAKcfgk461MH7hnX6ZBCEZ8pVhYMTlNVAI",
    authDomain: "project-tracker-25334.firebaseapp.com",
    databaseURL: "https://project-tracker-25334.firebaseio.com",
    projectId: "project-tracker-25334",
    storageBucket: "project-tracker-25334.appspot.com",
    messagingSenderId: "464977875297",
    appId: "1:464977875297:web:d5e39867dfdb7e16cb3520",
    measurementId: "G-DJJZLTPJ67"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.fireStore().settings({ timestampsInSnapshots: true});
  firebase.analytics();

  export default firebase;
