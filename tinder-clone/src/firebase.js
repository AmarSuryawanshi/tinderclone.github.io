import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9znbV8ijgI_Dr3lFMxYBWfqlHWM1yfvc",
  authDomain: "tinder-clone-777ad.firebaseapp.com",
  projectId: "tinder-clone-777ad",
  storageBucket: "tinder-clone-777ad.appspot.com",
  messagingSenderId: "1022618247165",
  appId: "1:1022618247165:web:ac7bd3bd86c9bfa774c394",
  measurementId: "G-1JBESENEN5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
