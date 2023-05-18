// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm5BBbUK0VCthxEixFZpHywB4EMv8LgV0",
  authDomain: "mealstogo-9cb03.firebaseapp.com",
  projectId: "mealstogo-9cb03",
  storageBucket: "mealstogo-9cb03.appspot.com",
  messagingSenderId: "738833542268",
  appId: "1:738833542268:web:87025291dbc6672f4fedf9",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();

export const CreateUserwithEmailandPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const SigninAuthUser = async (email, password) => {
  if (!email || !password) {
    return;
  }

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signUserOut = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
