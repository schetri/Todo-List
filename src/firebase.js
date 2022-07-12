import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyA2vdEvS1Wgnvid4SLRYASccFVxADA0m-8",
  authDomain: "todoapp-b7f32.firebaseapp.com",
  projectId: "todoapp-b7f32",
  storageBucket: "todoapp-b7f32.appspot.com",
  messagingSenderId: "929314887495",
  appId: "1:929314887495:web:6edcb3e0c6f543dba65e62",
  measurementId: "G-L004260SHF"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
 
export default db;