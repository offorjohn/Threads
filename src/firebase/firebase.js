import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCNHxkNRv4dBQWlWaF8BWrzkfknzdni_rM",
  authDomain: "hamuscreativity.firebaseapp.com",
  projectId: "hamuscreativity",
  storageBucket: "hamuscreativity.appspot.com",
  messagingSenderId: "1076368551775",
  appId: "1:1076368551775:web:36bc9c79399b784bf0d0ea",
  measurementId: "G-FQRMTJ6145"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };