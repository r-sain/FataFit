// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlR_Gmq8RKGN2shBKm9-OX_NG7ef5L9yY",
  authDomain: "fatafit-c1f8e.firebaseapp.com",
  projectId: "fatafit-c1f8e",
  storageBucket: "fatafit-c1f8e.appspot.com",
  messagingSenderId: "198825329518",
  appId: "1:198825329518:web:94c11dbb311299f8cfb77f",
  measurementId: "G-RQHGETFNM4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export default app;
