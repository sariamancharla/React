import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDnzY4RJPKSHtYR8ZL7dcL03OPwwfb_oPo",
    authDomain: "recipe-directory-2df12.firebaseapp.com",
    projectId: "recipe-directory-2df12",
    storageBucket: "recipe-directory-2df12.appspot.com",
    messagingSenderId: "138131083858",
    appId: "1:138131083858:web:3d74924768c10293ebc58b"
  };

firebase.initializeApp(firebaseConfig)

const projectFireStore=firebase.firestore()

export {projectFireStore}