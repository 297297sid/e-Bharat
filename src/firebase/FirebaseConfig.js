// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// //import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDB3lo5oCImcMpSNiuCh2PlRzsLt7w4XVY",
//   authDomain: "e-commerce-fad1e.firebaseapp.com",
//   projectId: "e-commerce-fad1e",
//   storageBucket: "e-commerce-fad1e.appspot.com",
//   messagingSenderId: "558393054864",
//   appId: "1:558393054864:web:ebb26cd72157d2d6fcea15"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const fireDB = getFirestore(app);
// const auth = getAuth(app)
// export {fireDB,auth } ;

// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const FirebaseConfig = {
  apiKey: "AIzaSyDB3lo5oCImcMpSNiuCh2PlRzsLt7w4XVY",
  authDomain: "e-commerce-fad1e.firebaseapp.com",
  projectId: "e-commerce-fad1e",
  storageBucket: "e-commerce-fad1e.appspot.com",
  messagingSenderId: "558393054864",
  appId: "1:558393054864:web:ebb26cd72157d2d6fcea15"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
