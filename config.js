import firebase from 'firebase';
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyDnqFNoBiMjj5aUso4gnXsGgwX49hk9ZIM",
    authDomain: "project77-71688.firebaseapp.com",
    projectId: "project77-71688",
    storageBucket: "project77-71688.appspot.com",
    messagingSenderId: "849161381991",
    appId: "1:849161381991:web:5649c8d6178c7c693f8cc2"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();