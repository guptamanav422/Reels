import firebase from "firebase/app";

// firebase authentication module 
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB91CQzSYmCDLHgidlpE8QI98VLmT2chHg",
    authDomain: "reels-66477.firebaseapp.com",
    projectId: "reels-66477",
    storageBucket: "reels-66477.appspot.com",
    messagingSenderId: "626836690051",
    appId: "1:626836690051:web:f72626496772f38b8f37b6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;