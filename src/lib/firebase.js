import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-7e405.firebaseapp.com",
  projectId: "chatapp-7e405",
  storageBucket: "chatapp-7e405.appspot.com",
  messagingSenderId: "366763103134",
  appId: "1:366763103134:web:d4f98d76f6225cfc25bc8f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(); // login and register uising this authencation
export const db = getFirestore(); //creating user info using this database
export const storage = getStorage(); // uploade images using this storage
