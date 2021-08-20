import firebase from "firebase/app";
import "firebase/firestore"
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

// flag => using google 
let provider=new firebase.auth.GoogleAuthProvider();

// object jiske andr login/logout/signup 
export const auth=firebase.auth();
export const firestore=firebase.firestore();
export const signInWithGoogle=()=>{
    // ki mujhe popup ko use krke sign up krna hai with google 
    auth.signInWithPopup(provider);
}

export default firebase;