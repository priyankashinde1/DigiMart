// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCT02GYj4PNoGdSnYp3wjI3P8jaWPbcd8k",
    authDomain: "mysecondapp-b226b.firebaseapp.com",
    projectId: "mysecondapp-b226b",
    storageBucket: "mysecondapp-b226b.appspot.com",
    messagingSenderId: "171968065976",
    appId: "1:171968065976:web:ca51fe364b9c110e865f4d",
    measurementId: "G-0DKTCPWFG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app);
const auth=getAuth(app);
export {fireDB,auth}