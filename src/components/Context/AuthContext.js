import { createContext, useContext, useEffect, useState } from 'react'
import { auth, signInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword, logout, getLoggedUser } from "../Firebase/Firebase";

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loggedUser, setLoggedUser] = useState()
  const [loading, setLoading] = useState(true)

  const login = (email, password) => {
    try {
      return signInWithEmailAndPassword(email, password)
    }
    catch {
      // console.log("No encontró el usuario")
    }
  }

  const loginWithGoogle = () => {
    return signInWithGoogle()
  }

  const signOut = () => {
    setCurrentUser(null)
    setLoggedUser(null)
    return logout();
  }

  const createWithEmailAndPassword = (name, email, password) => {
    return registerWithEmailAndPassword(name, email, password)
  }

  const getUser = async () => {
    const user = auth.currentUser;
    // console.log(user)
    let result = null
    if (user && user.uid) {
      result = await getLoggedUser(user.uid)
      setLoggedUser(result)
    }
  }

  useEffect(() => {
    const getLoggedUser = async () => {
      await getUser()
    }
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    getLoggedUser()
    return unsubscribe
  }, [currentUser])

  const value = {
    currentUser,
    loggedUser,
    login,
    loginWithGoogle,
    createWithEmailAndPassword,
    signOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}