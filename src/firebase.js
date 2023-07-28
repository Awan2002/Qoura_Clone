import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCryJ3uZ_0KTDPYtf5UVuOnYP6IqFF5Sf0",
    authDomain: "quora-4f7c6.firebaseapp.com",
    projectId: "quora-4f7c6",
    storageBucket: "quora-4f7c6.appspot.com",
    messagingSenderId: "1043627457301",
    appId: "1:1043627457301:web:648e568f1f734a1fe9471c"
  };


const firebaseApp =  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();

export {auth, provider}

export default db
