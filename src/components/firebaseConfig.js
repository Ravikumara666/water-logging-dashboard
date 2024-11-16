// src/firebaseConfig.js

// Import necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO_GRLkJ3vRE4c0zh009xpO9J32mB9h8g",
  authDomain: "new-realtime-3b520.firebaseapp.com",
  databaseURL: "https://new-realtime-3b520-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "new-realtime-3b520",
  storageBucket: "new-realtime-3b520.appspot.com",
  messagingSenderId: "703629943319",
  appId: "1:703629943319:web:a434040fec908e17703252",
  measurementId: "G-WYR0ZGGE9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export default database;