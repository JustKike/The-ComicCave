// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBtKcmOXMNMXrtM8rYI_HMj-tsYC2YIqXI",
    authDomain: "the-comiccave.firebaseapp.com",
    projectId: "the-comiccave",
    storageBucket: "gs://the-comiccave.appspot.com/",
    messagingSenderId: "118805857459",
    appId: "1:118805857459:web:351708b28a43eae5d11cc6",
    measurementId: "G-1X10DS2LJG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);

//Creamos una constante db y la exportamos
export const db = getFirestore(app);

// Get a reference to the storage service
export const storage = getStorage(firebaseApp);