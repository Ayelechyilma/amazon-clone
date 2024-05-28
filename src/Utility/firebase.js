import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD-eSqkZL_dAwydQxRzuJZudEBKZ5AjwUo",
	authDomain: "clone-881d3.firebaseapp.com",
	projectId: "clone-881d3",
	storageBucket: "clone-881d3.appspot.com",
	messagingSenderId: "216503156720",
	appId: "1:216503156720:web:09bace2defc174d560e735",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
