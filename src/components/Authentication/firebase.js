import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB32ObZcbF3bPJ_FGo4IRn7C2MeG8pHKeY",
    authDomain: "restraurantreactapp.firebaseapp.com",
    projectId: "restraurantreactapp",
    storageBucket: "restraurantreactapp.appspot.com",
    messagingSenderId: "284384963069",
    appId: "1:284384963069:web:ab45a22223e5fe1765d194",
    measurementId: "G-YSDP43T29V"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
