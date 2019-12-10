import firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAS4-FyNAsrooEWL5E-B2dLbc6hgq6K5Lk",
  authDomain: "chaton-a3c2b.firebaseapp.com",
  databaseURL: "https://chaton-a3c2b.firebaseio.com",
  projectId: "chaton-a3c2b",
  storageBucket: "chaton-a3c2b.appspot.com",
  messagingSenderId: "915834754270",
  appId: "1:915834754270:web:d667a5242517cdd0ec1e4f",
  measurementId: "G-QWMJQYKETJ"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
