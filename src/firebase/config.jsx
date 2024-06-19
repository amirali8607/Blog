import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoGjCBmUy2cNCVveVg_7M8zk2qQGx_xcY",
  authDomain: "abdelahi-blog.firebaseapp.com",
  projectId: "abdelahi-blog",
  storageBucket: "abdelahi-blog.appspot.com",
  messagingSenderId: "980126110645",
  appId: "1:980126110645:web:ee28a0c956ca72a6e4fffc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
export const auth = getAuth(app);
// Initialize Firestore
export const db = getFirestore(app);