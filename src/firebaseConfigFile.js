import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAvcGc7_YO6YNUcuI0vxYQmtZ68F1LuXkg",
    authDomain: "fuddi-landing-page.firebaseapp.com",
    databaseURL: "https://fuddi-landing-page.firebaseio.com",
    projectId: "fuddi-landing-page",
    storageBucket: "fuddi-landing-page.appspot.com",
    messagingSenderId: "70540378752",
    appId: "1:70540378752:web:2f4ff657ed05ee5f715c65",
    measurementId: "G-M946MGV635"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
