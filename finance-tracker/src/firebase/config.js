import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCBHT6zAbI0jCKE7Ul6b5I3UxJBQ3Hw_oA",
    authDomain: "financetracker-469a8.firebaseapp.com",
    projectId: "financetracker-469a8",
    storageBucket: "financetracker-469a8.appspot.com",
    messagingSenderId: "1066923397000",
    appId: "1:1066923397000:web:b458706c5538a18013b43d"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init service
  const projectFireStore=firebase.firestore();
  const projectAuth=firebase.auth();

  export {projectFireStore,projectAuth}