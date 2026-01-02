// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApI15ym42HUeuLWc5yfUpPoUzBHD0jeI8",
  authDomain: "lym-services.firebaseapp.com",
  projectId: "lym-services",
  storageBucket: "lym-services.firebasestorage.app",
  messagingSenderId: "61327418530",
  appId: "1:61327418530:web:dd2be68b2e85e56586e3fb",
  measurementId: "G-R4FXGS31CX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);