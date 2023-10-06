import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaXGt882dTBaZAlrEy7CFFPY6FifYCdRc",
  authDomain: "notes-app-react-aa4e3.firebaseapp.com",
  projectId: "notes-app-react-aa4e3",
  storageBucket: "notes-app-react-aa4e3.appspot.com",
  messagingSenderId: "1031357489248",
  appId: "1:1031357489248:web:1053123a21d782a1522305",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
