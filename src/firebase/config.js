// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWfbwIO7-u9j1rcsr_AUxXQNJPrcY8oVo",
    authDomain: "venta-guitarras.firebaseapp.com",
    projectId: "venta-guitarras",
    storageBucket: "venta-guitarras.appspot.com",
    messagingSenderId: "645329577669",
    appId: "1:645329577669:web:fc6e9f75264210eac332ac"
  };
//Firebase config ideal
//const firebaseConfig = {
//  apiKey: import.meta.env.VITE_apiKey,
//  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//  projectId: import.meta.env.VITE_PROYECT_ID,
//  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//  appId: import.meta.env.VITE_APP_ID
//};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//conectar a base de datos
export const db = getFirestore(app)