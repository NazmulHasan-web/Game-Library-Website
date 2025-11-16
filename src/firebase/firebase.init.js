// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyBlrmrJ55uZ-St4tPvvL8i7Wb_yAB66JHg",
  authDomain: "game-library-website.firebaseapp.com",
  projectId: "game-library-website",
  storageBucket: "game-library-website.firebasestorage.app",
  messagingSenderId: "293461549048",
  appId: "1:293461549048:web:7069d8caaefdadb17ec00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);