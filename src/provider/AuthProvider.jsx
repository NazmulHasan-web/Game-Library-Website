import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase/firebase.init';

export const authContext=createContext()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading ,setLoading]=useState(true)
    console.log(user,loading)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser=(updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }

    useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
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
        loading,
        setLoading,
        updateUser,
    }
    return <authContext.Provider value={authData}>{children}</authContext.Provider>
};

export default AuthProvider;