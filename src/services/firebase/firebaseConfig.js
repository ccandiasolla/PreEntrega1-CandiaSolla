// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHxkZxDGHBD6QjOibOPFP-o_y6iH5EmqU",
  authDomain: "candiasolla-reactjs.firebaseapp.com",
  projectId: "candiasolla-reactjs",
  storageBucket: "candiasolla-reactjs.appspot.com",
  messagingSenderId: "697522842769",
  appId: "1:697522842769:web:7cc59a61cecc27accde330",
  measurementId: "G-69RPLTWGLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)