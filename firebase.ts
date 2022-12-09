// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR5jGyozZDq7AkZVJOPeQtBjOcbbWEfIA",
  authDomain: "nefflix-clone-yt.firebaseapp.com",
  projectId: "nefflix-clone-yt",
  storageBucket: "nefflix-clone-yt.appspot.com",
  messagingSenderId: "472293106147",
  appId: "1:472293106147:web:985d1cc7774f8e865e40d6",
  measurementId: "G-3SKCBQ9GSE",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
