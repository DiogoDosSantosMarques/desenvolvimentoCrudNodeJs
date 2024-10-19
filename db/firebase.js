const {initializeApp} = require("firebase/app");
const {getFirestore} = require('firebase/firestore');


const firebaseConfig = {
    apiKey: "AIzaSyBgX01ylHpK2y36FPxn8x5WbkP_JJE7aGU",
  authDomain: "crud-nodejs-e669e.firebaseapp.com",
  projectId: "crud-nodejs-e669e",
  storageBucket: "crud-nodejs-e669e.appspot.com",
  messagingSenderId: "440778587839",
  appId: "1:440778587839:web:938c6c4fb29140ca24500a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

module.exports = db;