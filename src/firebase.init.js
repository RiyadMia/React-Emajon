// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3rGeOnEQjalWlspkvBspAWCJ8O8vircM",
  authDomain: "emajon-simple-c2bc1.firebaseapp.com",
  projectId: "emajon-simple-c2bc1",
  storageBucket: "emajon-simple-c2bc1.appspot.com",
  messagingSenderId: "44083781244",
  appId: "1:44083781244:web:b2b9f902ad38fc6dbc73f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
