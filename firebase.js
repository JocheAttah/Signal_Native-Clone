import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWh_LQIPMAV2Ye5HK70m52czx8AJcnG5Y",
  authDomain: "signal-native-7ff66.firebaseapp.com",
  projectId: "signal-native-7ff66",
  storageBucket: "signal-native-7ff66.appspot.com",
  messagingSenderId: "770734863887",
  appId: "1:770734863887:web:9407bee2f18da405fe557a",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
