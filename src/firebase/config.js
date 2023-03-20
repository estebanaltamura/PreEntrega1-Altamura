// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHm5I3GR4fChHk450rWVL8EFZCrNuAb7Q",
  authDomain: "e-commerce-react-5b7de.firebaseapp.com",
  projectId: "e-commerce-react-5b7de",
  storageBucket: "e-commerce-react-5b7de.appspot.com",
  messagingSenderId: "100266299470",
  appId: "1:100266299470:web:7fca35c60ba707d928b31f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFireBase = ()=> app