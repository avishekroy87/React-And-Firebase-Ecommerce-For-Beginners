// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBQsJ5MS4-MacHnO5wxQX8V2tGe0y6eCXo",
//   authDomain: "myecommerce2-7b8fc.firebaseapp.com",
//   projectId: "myecommerce2-7b8fc",
//   storageBucket: "myecommerce2-7b8fc.appspot.com",
//   messagingSenderId: "715233167432",
//   appId: "1:715233167432:web:3a0acec83b123399d3307d"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCW-L7vq2xQrB7pieSo6f6S2ep1OAvOU6Y",
  authDomain: "consumerapp-6f284.firebaseapp.com",
  projectId: "consumerapp-6f284",
  storageBucket: "consumerapp-6f284.firebasestorage.app",
  messagingSenderId: "54211313575",
  appId: "1:54211313575:web:c0be0dda26ca60e5124082"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
