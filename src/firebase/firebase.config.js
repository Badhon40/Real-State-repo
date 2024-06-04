// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-uZpOBA7_QRR3voObZ6Fvsb6wp54kV4A",
  authDomain: "real-state-web-6fb12.firebaseapp.com",
  projectId: "real-state-web-6fb12",
  storageBucket: "real-state-web-6fb12.appspot.com",
  messagingSenderId: "119523143620",
  appId: "1:119523143620:web:677980c15b5399db9dfe91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth=getAuth(app)

 export default auth;


