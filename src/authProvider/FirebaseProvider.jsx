import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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
       return signInWithPopup(auth,googleProvider)
    }

    const twitterProvider=new TwitterAuthProvider()
    const twitterSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,twitterProvider)
    }

    const githubProvider=new GithubAuthProvider()
    const githubSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }
     
    const logOut=()=>{
        return signOut(auth)
        
    }
 
   
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
             setUser(currentUser)
             setLoading(false)
             
            } 
            else{
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
        googleSignIn,
        twitterSignIn,
        githubSignIn,
        logOut,
        loading,
        setLoading
        
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