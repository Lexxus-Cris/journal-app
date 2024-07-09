// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqO-K1sVk9PZEGof4_t0thxSSmZ5ooiMg",
    authDomain: "react-cursos-b6873.firebaseapp.com",
    projectId: "react-cursos-b6873",
    storageBucket: "react-cursos-b6873.appspot.com",
    messagingSenderId: "943417378194",
    appId: "1:943417378194:web:d4f8fb913fffe46a8c6d4b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// Exportación para utilizar la autenticación
export const FirebaseAuth = getAuth(FirebaseApp);
// Exportación para la base de datos FireStore
export const FirebaseDB = getFirestore(FirebaseApp);
