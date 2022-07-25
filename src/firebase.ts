import firebase, { FirebaseApp } from "firebase/app";
import "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase-admin/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAk5S1lKrRyyhvdBl0B7blU7HE6CPNeatc",
  authDomain: "linkedinclone-3447b.firebaseapp.com",
  projectId: "linkedinclone-3447b",
  storageBucket: "linkedinclone-3447b.appspot.com",
  messagingSenderId: "312983429814",
  appId: "1:312983429814:web:aa1d6c9c663c16a3dfbc17",
};
const app: FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
