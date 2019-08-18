import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlqKmmjQF8MtE6tGYN1Cahg-HJ-dIXPis",
  authDomain: "to-do-list-react-f86f0.firebaseapp.com",
  databaseURL: "https://to-do-list-react-f86f0.firebaseio.com",
  projectId: "to-do-list-react-f86f0",
  storageBucket: "to-do-list-react-f86f0.appspot.com",
  messagingSenderId: "159596091481",
  appId: "1:159596091481:web:9ac00a62b68bef67"
};

firebase.initializeApp(firebaseConfig);

// Exporting connection to database as a variable
export const firestore = firebase.firestore();

export default firebase;
