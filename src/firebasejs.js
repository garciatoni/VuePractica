import firebase from 'firebase/app';
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyCTmuwm9gYg7CMUrGEaGZWw3Iy1JeqZBV8",
    authDomain: "ejercicio6-402d5.firebaseapp.com",
    // databaseURL: "https://ejercicio6-402d5-default-rtdb.firebaseio.com",
    projectId: "ejercicio6-402d5",
    storageBucket: "ejercicio6-402d5.appspot.com",
    messagingSenderId: "156737264262",
    appId: "1:156737264262:web:2e9fb105d7b5fdad9bcf07",
    measurementId: "G-DQ6827E86X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };