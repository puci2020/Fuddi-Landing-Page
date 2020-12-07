import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = firebase.initializeApp(  {
    apiKey: "AIzaSyAVOv1Tyqg8qW_l0G6vWurwHbOQdZ3SoCE",
    authDomain: "fuddi-d039f.firebaseapp.com",
    databaseURL: "https://fuddi-d039f.firebaseio.com",
    projectId: "fuddi-d039f",
    storageBucket: "fuddi-d039f.appspot.com",
    messagingSenderId: "813440231050",
    appId: "1:813440231050:web:e6e58d2dab8e742127af73",
    measurementId: "G-TWN10TK6J5"
});
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebaseConfig.firestore();
const auth = firebaseConfig.auth();
const storage = firebaseConfig.storage();

export {db, auth, storage};
