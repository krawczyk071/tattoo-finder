import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyACirRdLgUWX3IuQ2Iv1x25nmqtBDZTIz8",
  authDomain: "tattoo-e2363.firebaseapp.com",
  projectId: "tattoo-e2363",
  storageBucket: "tattoo-e2363.appspot.com",
  messagingSenderId: "14208536227",
  appId: "1:14208536227:web:9578fd18da3054296c3916",
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
