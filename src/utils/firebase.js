// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5A2_zne_l3zokt-vPYjJobRwpk5TF2cg",
  authDomain: "netflixgpt-a347f.firebaseapp.com",
  projectId: "netflixgpt-a347f",
  storageBucket: "netflixgpt-a347f.appspot.com",
  messagingSenderId: "398023291077",
  appId: "1:398023291077:web:88cc7d5d5e3b8cfcfec0ac",
  measurementId: "G-0EBC3F4QBQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;
