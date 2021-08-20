import {createContext, useState,useEffect} from "react";
import {auth} from "./firebase";
import { firestore } from "./firebase";
let authContext=createContext();

let AuthProvider=(props)=>{

    // console.log(props.children);
    let [user,setUser]=useState(null);
    let[loading,setLoading]=useState(true);

    // use efeect ek bar chlega bas (1 case of useEfeect )
    useEffect(() => {

        // but is function ko hme ek bar register krna hai jbh first bar render hoga 
        // hmara component or ye ek event listener hai jbh bhi user login krrega tbh ye 
        // user ka object dedega or jbh logout krrega tbh null dedega 
        let unSub=auth.onAuthStateChanged( async (user)=>{
            if(user){
                console.log(user.uid);
                let {displayName,email,uid,photoURL}=user;

                let docRef=firestore.collection("users").doc(uid);
                let documentSnapshot= await docRef.get();

                if(!documentSnapshot.exists){
                    docRef.set({
                        displayName,
                        email,
                        photoURL
                    })
                }
                setUser({displayName,email,uid,photoURL})
            }
            else{
                setUser(null);
            }

            setLoading(false);
        });

        // cleanup 
        return ()=>{
            unSub();
        }
    }, []);

    return(
        <>
        <authContext.Provider value={user}>
        {!loading && props.children}
        </authContext.Provider>
        </>
    )
}

export default AuthProvider;
export {authContext};