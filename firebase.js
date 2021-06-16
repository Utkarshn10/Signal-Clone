import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBDFYRw61joqB_JhMBdhsq6_gb7fysmyyw",
  authDomain: "signal-clone-e3c29.firebaseapp.com",
  projectId: "signal-clone-e3c29",
  storageBucket: "signal-clone-e3c29.appspot.com",
  messagingSenderId: "1015985473076",
  appId: "1:1015985473076:web:301f6baf6b9601069bec61",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();
export {db, auth};
