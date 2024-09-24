import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  addDoc,
  collection,
  getFirestore } from "firebase/firestore/lite";
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut} from "firebase/auth/web-extension";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCBnT82_yu3Sq7VThRZhu7bJ89lukCZxnY",
  authDomain: "netflix-clone-c3d43.firebaseapp.com",
  projectId: "netflix-clone-c3d43",
  storageBucket: "netflix-clone-c3d43.appspot.com",
  messagingSenderId: "378981551110",
  appId: "1:378981551110:web:141e65efeec91d71c70787",
  measurementId: "G-BQME7KXDD3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

// User SignUp Function Start

const signup = async (name, email, password)=> {
  try{
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  }catch (error){
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
    
  }
}
// User SignUp Function End


// User Login Function Start

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
    
  }
}

// User Login Function Start


// User SignOut Started

const logout = () => {
  signOut(auth);
}

// User SignOut Started


export {auth, db, login, signup, logout}