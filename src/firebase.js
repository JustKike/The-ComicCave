// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtKcmOXMNMXrtM8rYI_HMj-tsYC2YIqXI",
    authDomain: "the-comiccave.firebaseapp.com",
    projectId: "the-comiccave",
    storageBucket: "the-comiccave.appspot.com",
    messagingSenderId: "118805857459",
    appId: "1:118805857459:web:351708b28a43eae5d11cc6",
    measurementId: "G-1X10DS2LJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Creamos una constante db y la exportamos
export const db = getFirestore(app);