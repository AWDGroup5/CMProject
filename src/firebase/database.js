// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, serverTimestamp, collection, onSnapshot, query, where, deleteDoc, getDocs, setDoc, doc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhBjlTDBs3abAeHLI0FiZb9TpFOZZjic4",
  authDomain: "cmproject-bcb24.firebaseapp.com",
  projectId: "cmproject-bcb24",
  storageBucket: "cmproject-bcb24.appspot.com",
  messagingSenderId: "1041373723866",
  appId: "1:1041373723866:web:5f644a709309039c9f39e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuthentication = getAuth();
const firebaseFireStore = getFirestore();
const timestamp = serverTimestamp();

export { app, firebaseAuthentication, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile,
  firebaseFireStore, timestamp, collection, onSnapshot, serverTimestamp, query, where, deleteDoc, getDocs, setDoc, doc, getDoc, sendPasswordResetEmail };