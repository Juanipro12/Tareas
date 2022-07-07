// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClou-2_C3wUxQWQ6cv4WyjrD1MudTqOIo",
  authDomain: "ejemployt-85a53.firebaseapp.com",
  projectId: "ejemployt-85a53",
  storageBucket: "ejemployt-85a53.appspot.com",
  messagingSenderId: "585257265536",
  appId: "1:585257265536:web:7ef362caaf6f92b1193965"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();