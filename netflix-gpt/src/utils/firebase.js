// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARrAOqZ4XIZdBkYY5NJc2bbDijElJJN1Q",
  authDomain: "netflix-gpt-bb82f.firebaseapp.com",
  projectId: "netflix-gpt-bb82f",
  storageBucket: "netflix-gpt-bb82f.appspot.com",
  messagingSenderId: "772285663422",
  appId: "1:772285663422:web:b69ebb17b9f0af2f1036ef",
  measurementId: "G-J0D8GDBE8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();