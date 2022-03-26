import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { 
  Container,
  Heading,
} from '@chakra-ui/react'



export default function HomePage() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <Container>
      <Heading as='h1' size="2xl">Wild Bill James</Heading>
    </Container>
  )
}
