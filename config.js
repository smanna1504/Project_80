import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
 apiKey: "AIzaSyAoPQLVB6aWmrrOpi4QNvB2E02NKIA9UbU",
    authDomain: "barter-app-49a3d.firebaseapp.com",
    projectId: "barter-app-49a3d",
    storageBucket: "barter-app-49a3d.appspot.com",
    messagingSenderId: "1007727083353",
    appId: "1:1007727083353:web:62200eb0c341e004ff5648"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
