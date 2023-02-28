// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDocs,
  collection,
  writeBatch,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBvfxHv0hSi7gysCon27RC7gl6PVbk00Ec",
  authDomain: "clw-auth-30699.firebaseapp.com",
  projectId: "clw-auth-30699",
  storageBucket: "clw-auth-30699.appspot.com",
  messagingSenderId: "740425172278",
  appId: "1:740425172278:web:0b71866091e4a70c7c9f97",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const SignInWithGoogle = async () => {
  const user = await signInWithPopup(auth, provider);
};
export const SingOutWithGoogle = async () => {
  await signOut(auth);
};
export const Data = async () => {
  const docRef = collection(db, "catgories");
  const querySnapshot = await getDocs(docRef);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const UpdatingItems = async (items) => {
  const collectionRef = collection(db, "catgories");
  const batch = writeBatch(db);

  items.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.update(docRef, object);
  });

  await batch.commit();
  console.log("done");
};
