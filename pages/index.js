import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Login from '../components/Login'
import Account from '../components/Account'


export default function HomePage() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div >
      {!session ? <Login /> : <Account key={session.user.id} session={session} />}
    </div>
  )
}
