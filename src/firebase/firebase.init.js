// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDb7i64yJ8EiDqWGOiX3slyy3fNWtu17bw",
authDomain: "coffee-store-246d8.firebaseapp.com",
projectId: "coffee-store-246d8",
storageBucket: "coffee-store-246d8.firebasestorage.app",
messagingSenderId: "1039302955728",
appId: "1:1039302955728:web:30cefa67f4cc64d3d084d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;