// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGmzsQhbDhih4mchg4bZ--XIgoUVil-L8",
  authDomain: "fir-new-1c02e.firebaseapp.com",
  databaseURL: "https://fir-new-1c02e-default-rtdb.firebaseio.com",
  projectId: "fir-new-1c02e",
  storageBucket: "fir-new-1c02e.appspot.com",
  messagingSenderId: "443312480447",
  appId: "1:443312480447:web:208711501d8a77e52de60a",
  measurementId: "G-D8F8ET1S7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);