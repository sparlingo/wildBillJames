import Head from 'next/head'
import Image from 'next/image'
import { supabase } from '../utils/supabaseClient'
import Logout from '../components/Logout'
import Login from '../components/Login'
const user = supabase.auth.user()

export default function Home() {
  return (
    <>
      <h1>blah</h1>
      { 
        user ? <Logout /> 
        : <Login />
      }
    </>
    
  )
}
