import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAPehD85-e1ZEKuSG0eepzGLu75oSiQyVA",
    authDomain: "soccer-master.firebaseapp.com",
    databaseURL: "https://soccer-master.firebaseio.com",
    projectId: "soccer-master",
    storageBucket: "",
    messagingSenderId: "161518567682"
  };
  firebase.initializeApp(config);

  export default firebase ;
