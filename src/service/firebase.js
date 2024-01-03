// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore'
import { getAuth } from "@firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_CUZXmqn5JeIIg2mQCPmmuVRp8hHGNYo",
    authDomain: "signin-f6a1e.firebaseapp.com",
    projectId: "signin-f6a1e",
    storageBucket: "signin-f6a1e.appspot.com",
    messagingSenderId: "81971566837",
    appId: "1:81971566837:web:605d00f069c30fdaa40dbc",
    measurementId: "G-WCE9C1JV50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const auth = getAuth(app);