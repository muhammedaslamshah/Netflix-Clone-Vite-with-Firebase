import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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