// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f5503.firebaseapp.com",
  projectId: "mern-blog-f5503",
  storageBucket: "mern-blog-f5503.firebasestorage.app",
  messagingSenderId: "376323326307",
  appId: "1:376323326307:web:a607fed682421c2b0fd356",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
