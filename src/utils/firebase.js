// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACirRdLgUWX3IuQ2Iv1x25nmqtBDZTIz8",
  authDomain: "tattoo-e2363.firebaseapp.com",
  projectId: "tattoo-e2363",
  storageBucket: "tattoo-e2363.appspot.com",
  messagingSenderId: "14208536227",
  appId: "1:14208536227:web:9578fd18da3054296c3916",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//Auth init
export const auth = getAuth();

export const colRef = collection(db, "tats");
// Get all documents in a collectio

//All
export async function getFire() {
  const querySnapshot = await getDocs(colRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  // console.log(dataArr);

  return dataArr;
}

// One
export async function getOne(collection, id) {
  const docRef = doc(db, collection, id);
  const oneSnapshot = await getDoc(docRef);
  return {
    ...oneSnapshot.data(),
    id: oneSnapshot.id,
  };
}

// Query
export async function getSelected() {
  const q = query(colRef, where("price.current_retail", ">", 300));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

// import { doc, onSnapshot } from "firebase/firestore";

// const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
//     console.log("Current data: ", doc.data());
// });

// const unsubscribe = onSnapshot(collection(db, "tats"), () => console.log("change"));
export async function listenFire() {
  const querySnapshot = await onSnapshot(colRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}
