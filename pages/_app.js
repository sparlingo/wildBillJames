import React from 'react'
import { UserProvider } from '@supabase/supabase-auth-helpers/react'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <Component {...pageProps} />
    </UserProvider>
  )
}
