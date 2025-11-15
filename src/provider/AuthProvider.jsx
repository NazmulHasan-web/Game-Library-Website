import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase/firebase.init';

export const authContext=createContext()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    console.log(user)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    

  const  authData={
        user,
        setUser,
        createUser,
        logOut,
        signIn,
    }
    return <authContext.Provider value={authData}>{children}</authContext.Provider>
};

export default AuthProvider;