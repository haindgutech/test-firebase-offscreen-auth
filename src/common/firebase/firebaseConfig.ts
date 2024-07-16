// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC92bsKGmOTBoWyhkKrs-l9IFyHZ4kODRA",
  authDomain: "gu-haind.firebaseapp.com",
  projectId: "gu-haind",
  storageBucket: "gu-haind.appspot.com",
  messagingSenderId: "533478190015",
  appId: "1:533478190015:web:5f01329b1dd8f872528f0a",
  measurementId: "G-2VCSNNGKCT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  googleProvider,
  signInWithCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
};
