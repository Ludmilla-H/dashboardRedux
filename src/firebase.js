// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" ;
import { getStorage } from 'firebase/storage' ;
import {getAuth} from "firebase/auth" ;


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACgczbnQVGnSjeE_Q0ixa6x6-B5UROUM8",
  authDomain: "dasboard-5a906.firebaseapp.com",
  projectId: "dasboard-5a906",
  storageBucket: "dasboard-5a906.appspot.com",
  messagingSenderId: "992469368203",
  appId: "1:992469368203:web:b5bd460ba6a1fa5fe9038e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize dbFirestore
export const dbFirestore = getFirestore(app) ;


// Initialize Firebase Auth
export const auth = getAuth(app);

//init storage
export const storage = getStorage(app) ;


export default app;

