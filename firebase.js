// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXJSMLXU2PxWR5n83miNm_bVIBSY7eilo",
  authDomain: "inventorymanagement-11208.firebaseapp.com",
  projectId: "inventorymanagement-11208",
  storageBucket: "inventorymanagement-11208.appspot.com",
  messagingSenderId: "791559811905",
  appId: "1:791559811905:web:ac453f45094e40bb4027c0",
  measurementId: "G-JDQCHC60QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};