// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-02.firebaseapp.com",
  projectId: "mern-auth-02",
  storageBucket: "mern-auth-02.firebasestorage.app",
  messagingSenderId: "503893252722",
  appId: "1:503893252722:web:2c9042950b43483952c0eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);