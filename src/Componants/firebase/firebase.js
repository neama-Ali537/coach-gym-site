// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBlO1bk32623Aq3D0ow5OaYpZosXWfTPA",
  authDomain: "c-hagar-alaa.firebaseapp.com",
  projectId: "c-hagar-alaa",
  storageBucket: "c-hagar-alaa.firebasestorage.app",
  messagingSenderId: "726774116628",
  appId: "1:726774116628:web:25444ebfb9d6a05a24d201",
  measurementId: "G-4BE9S3WQ4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

