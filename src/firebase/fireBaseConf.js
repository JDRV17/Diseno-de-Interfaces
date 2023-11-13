import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBkqmBIL_o97XzAD103Z0xSFEo50Uon9Ck",
  authDomain: "proyecto-interfaces-6f616.firebaseapp.com",
  projectId: "proyecto-interfaces-6f616",
  storageBucket: "proyecto-interfaces-6f616.appspot.com",
  messagingSenderId: "591367059352",
  appId: "1:591367059352:web:36c58ed6b8f6385a905ded",
  measurementId: "G-0YK2WDQ8LX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};
