import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4eAkgh7LQZ6brR0DYWBOnfVn_MQBSYvI",
  authDomain: "redo-215cb.firebaseapp.com",
  projectId: "redo-215cb",
  storageBucket: "redo-215cb.appspot.com",
  messagingSenderId: "490401602806",
  appId: "1:490401602806:web:54c5bb8284bc31203260d7",
  measurementId: "G-540R7XDBR9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };