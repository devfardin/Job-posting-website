import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import { Auth } from '../../../firebase.confige'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'




export const contextProvider = createContext(null)

const AppContext = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs]=useState([])
  const googleProvider = new GoogleAuthProvider

// all job post data
  const jobsData= async()=>{
    const jobs= await fetch('https://assignment11-server-site-ashen.vercel.app/postobdata')
    .then(res=> res.json())
    setJobs(jobs)
  }
  useEffect(()=>{
    jobsData()
  },[])


// User authoncation
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(Auth, email, password)
  }
  const updateUser = ({ name, profile }) => {
    return updateProfile(Auth.currentUser, {
      displayName: name,
      photoURL: profile

    })
  }
  const userLogOut = () => {
    signOut(Auth)
  }
  const userSignIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(Auth, email, password)
  }
  const handelGoogle = (googleProvider) => {
    setLoading(true)
    return signInWithPopup(Auth, googleProvider)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => { unSubscribe() }
  },[])

  const contextInfo = { user, loading,createUser,  handelGoogle, userLogOut, userSignIn, updateUser, jobs }

  return (
    <contextProvider.Provider value={contextInfo}>
      {children}
    </contextProvider.Provider>
  )
}
export default AppContext
