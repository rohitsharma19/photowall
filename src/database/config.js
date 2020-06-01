import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyA8f0OK7lSZGtEAGppq647dOQPR5CYFxHI",
    authDomain: "photowall-ef219.firebaseapp.com",
    databaseURL: "https://photowall-ef219.firebaseio.com",
    projectId: "photowall-ef219",
    storageBucket: "photowall-ef219.appspot.com",
    messagingSenderId: "473591503379",
    appId: "1:473591503379:web:0c9312d765de5aea90bde6",
    measurementId: "G-GL4P736M3F"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  export {database}