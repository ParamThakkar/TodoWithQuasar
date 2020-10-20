// import something here
import * as firebase from "firebase/app";


// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database"

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file

  var firebaseConfig = {
    apiKey: "AIzaSyA2s_7m6D3CsuGibR584Od0x9yk3iKTZFo",
    authDomain: "quasar-todo-745c6.firebaseapp.com",
    databaseURL: "https://quasar-todo-745c6.firebaseio.com",
    projectId: "quasar-todo-745c6",
    storageBucket: "quasar-todo-745c6.appspot.com",
    messagingSenderId: "620226745896",
    appId: "1:620226745896:web:ff8fa048213637c720c71d",
    measurementId: "G-RKSFMD6CEW"
  };
  // Initialize Firebase
  let firebaseApp = firebase.initializeApp(firebaseConfig);
  let firebaseAuth = firebaseApp.auth();
  let firebaseDb = firebaseApp.database();

  export { firebaseAuth ,firebaseDb}


