import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAuQLu2y8teD-lin3menhrzbOBTU9TcGx8",
    authDomain: "react-todo-51dcb.firebaseapp.com",
    projectId: "react-todo-51dcb",
    storageBucket: "react-todo-51dcb.appspot.com",
    messagingSenderId: "692518183860",
    appId: "1:692518183860:web:bd1507183342e7ddf9c8e1",
    measurementId: "G-TF56J3LMVG"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();