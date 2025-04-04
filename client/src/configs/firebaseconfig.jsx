// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: import.meta.env.VITE_FIREBASE_KEY,
  
    authDomain: "ai-cademy-f0166.firebaseapp.com",
  
    projectId: "ai-cademy-f0166",
  
    storageBucket: "ai-cademy-f0166.firebasestorage.app",
  
    messagingSenderId: "393533618320",
  
    appId: "1:393533618320:web:0a801d4e177ecbbcb00015",
  
    measurementId: "G-4KQKDCK5LX"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)