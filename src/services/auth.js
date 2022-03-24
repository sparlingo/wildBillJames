import React, { useContext, useState, useEffect } from "react"
import { supabase } from '../contexts/supabase'

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const session = supabase.auth.session()

    setUser(session?.user ?? null)
    setLoading(false)

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )
    return () => {
      listener?.unsubscribe()
    }
  }, [])
  const value = {
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user,
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

// export const isBrowser = () => typeof window !== "undefined"

// export const getUser = () =>
//   isBrowser() && window.localStorage.getItem("gatsbyUser")
//     ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
//     : {}

// const setUser = user =>
//   window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

// export const handleLogin = ({ username, password }) => {
//   if (username === `john` && password === `pass`) {
//     return setUser({
//       username: `john`,
//       name: `Johnny`,
//       email: `johnny@example.org`,
//     })
//   }

//   return false
// }

// export const isLoggedIn = () => {
//   const user = getUser()

//   return !!user.username
// }

// export const logout = callback => {
//   setUser({})
//   callback()
// }