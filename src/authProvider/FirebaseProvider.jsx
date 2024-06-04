import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.config';

 
 export const AuthProvider=createContext(null)



const FirebaseProvider = ({children}) => {
     const [user,setUser]=useState(null)
     const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleProvider=new GoogleAuthProvider()
    const googleSignIn=()=>{
        setLoading(true)
      return  signInWithPopup(auth,googleProvider)
    }
    const twitterProvider=new TwitterAuthProvider()
    const twitterSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,twitterProvider)
    }

   const logOut=()=>{
    setLoading(true)
    return signOut(auth)
   }
   
   
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
             setUser(currentUser)
             setLoading(false)
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
        twitterSignIn,
        loading
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