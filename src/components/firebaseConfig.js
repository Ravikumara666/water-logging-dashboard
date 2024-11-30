// src/firebaseConfig.js

// Import necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "YourAPIKeyExample123456789",
authDomain: "example-project.firebaseapp.com",
databaseURL: "https://example-database-default-rtdb.firebaseio.com",
projectId: "example-project-id",
storageBucket: "example-project.appspot.com",
messagingSenderId: "123456789012",
appId: "1:123456789012:web:example1234567890abcdef",
measurementId: "G-EXAMPL1234"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export default database;
