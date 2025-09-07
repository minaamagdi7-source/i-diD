// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKuEGoUAcbKCPRNQtYvKfz4WPTGQUHR0w",
  authDomain: "idid-store.firebaseapp.com",
  projectId: "idid-store",
  storageBucket: "idid-store.firebasestorage.app",
  messagingSenderId: "1024069736444",
  appId: "1:1024069736444:web:1eba37134473a9474b4479",
  measurementId: "G-8EDE7V59JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
