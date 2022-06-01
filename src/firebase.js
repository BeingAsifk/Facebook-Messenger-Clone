import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDVck2i4iGXtFvspNvsIR2rEJOeMk-Q50w",
  authDomain: "facebook-messenger-clone-4a8e7.firebaseapp.com",
  projectId: "facebook-messenger-clone-4a8e7",
  storageBucket: "facebook-messenger-clone-4a8e7.appspot.com",
  messagingSenderId: "535524228035",
  appId: "1:535524228035:web:17192fae8861ccdff2db76"
});

const db = firebaseApp.firestore();

export default db;