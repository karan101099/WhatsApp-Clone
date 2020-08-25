import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDgcFESZu6P4-56N6Kq0XVmzg9HLi6-EHM",
  authDomain: "whatsapp-clone-15177.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-15177.firebaseio.com",
  projectId: "whatsapp-clone-15177",
  storageBucket: "whatsapp-clone-15177.appspot.com",
  messagingSenderId: "88600478910",
  appId: "1:88600478910:web:d022971379f4cf8b03caef",
  measurementId: "G-9GSVN08VZL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;