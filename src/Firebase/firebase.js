import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyARdMUpl1fJjWY42eCjkLjghWYV7owsL30",
  authDomain: "sendapp-cfb6a.firebaseapp.com",
  projectId: "sendapp-cfb6a",
  storageBucket: "sendapp-cfb6a.appspot.com",
  messagingSenderId: "204865674719",
  appId: "1:204865674719:web:4dc570b512a7370b4cf86a",
  measurementId: "G-CMEN20ZYYH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export  {firebase,googleAuthProvider}