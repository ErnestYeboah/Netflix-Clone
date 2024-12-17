import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyC7cjt6XG09YC_lbGi4uPJdKcedPoHd-Vo",
  authDomain: "netflix-45391.firebaseapp.com",
  projectId: "netflix-45391",
  storageBucket: "netflix-45391.firebasestorage.app",
  messagingSenderId: "566331086542",
  appId: "1:566331086542:web:cd5e4d8bc11b0c258da29f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

const signUp = async (name: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(database, "userDetails"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error: any) {
    toast.error(error.code);
  }
};

const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e: any) {
    toast.error(e.code);
  }
};

const logOut = () => {
  signOut(auth);
};

export { database, auth, signIn, signUp, logOut };
