import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.config';

 
 export const AuthProvider=createContext(null)



const FirebaseProvider = ({children}) => {
     const [user,setUser]=useState(null)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleProvider=new GoogleAuthProvider()
    const googleSignIn=()=>{
      return  signInWithPopup(auth,googleProvider)
    }
    const twitterProvider=new TwitterAuthProvider()
    const twitterSignIn=()=>{
        return signInWithPopup(auth,twitterProvider)
    }

   const logOut=()=>{
    return signOut(auth)
   }
   
   
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
             setUser(currentUser)
            } else {
             setUser(null)
            }
          });
          return ()=>{
            unSubscribe()
          }
      },[])
    const info={
        user,
        setUser,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        twitterSignIn
    }
    return (
        <AuthProvider.Provider value={info} >
            {
                children
            }
        </AuthProvider.Provider>
    );
};

export default FirebaseProvider;