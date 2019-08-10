import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAbK7-PBkm-uOdhCCQN7uld9VxOrVioBMI",
    authDomain: "crown-db-88763.firebaseapp.com",
    databaseURL: "https://crown-db-88763.firebaseio.com",
    projectId: "crown-db-88763",
    storageBucket: "",
    messagingSenderId: "881324738232",
    appId: "1:881324738232:web:ddadf1233ab8bbcd"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;