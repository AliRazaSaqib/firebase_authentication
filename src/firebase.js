/** @format */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAXvXs_WRpFzhXBYZDNk1_IewSOuDKpmmQ",
  authDomain: "react-app-fb6f3.firebaseapp.com",
  projectId: "react-app-fb6f3",
  storageBucket: "react-app-fb6f3.appspot.com",
  messagingSenderId: "116358497425",
  appId: "1:116358497425:web:d912eeac5c09223e29ab30",
  measurementId: "G-R5CJ5D7LFB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
