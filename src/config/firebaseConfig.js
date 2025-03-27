
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGTNqmSUmQ4EcBbx1_9fnuFRtP_cEtPgM",
  authDomain: "ptac27-03.firebaseapp.com",
  projectId: "ptac27-03",
  storageBucket: "ptac27-03.firebasestorage.app",
  messagingSenderId: "502293980806",
  appId: "1:502293980806:web:4c87b04bf3d77345a41307",
  measurementId: "G-REJZRKJ7FW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
