// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCypZauQCCS6u5WiX-QhgF9hkSueTzu1fY",
  authDomain: "simple-firebase-eb2a8.firebaseapp.com",
  projectId: "simple-firebase-eb2a8",
  storageBucket: "simple-firebase-eb2a8.firebasestorage.app",
  messagingSenderId: "166500168940",
  appId: "1:166500168940:web:056fe74dace807612d21c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);