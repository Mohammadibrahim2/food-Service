// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_API_apiKey,
  authDomain: REACT_API_authDomain,
  projectId: REACT_API_projectId,
  storageBucket: REACT_API_storageBucket,
  messagingSenderId: REACT_API_messagingSenderId,
  appId: REACT_API_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;