import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // Import Firestore

const firebaseConfig = {
    apiKey: "AIzaSyBpOK1ECFYJ9rC5InPf9nruWSi9mBk3Ixs",
    authDomain: "test-82560.firebaseapp.com",
    projectId: "test-82560",
    storageBucket: "test-82560.appspot.com",
    messagingSenderId: "922642082577",
    appId: "1:922642082577:web:d4f41233ace47817f03ab0"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
