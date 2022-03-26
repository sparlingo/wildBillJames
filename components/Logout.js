import { supabase } from '../utils/supabaseClient'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Logout() {
  const router = useRouter()
  const handleLogOut = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push('/');
    }
  }
  return (
    <Button
      onClick={handleLogOut}
      variant="ghost"
      aria-label="Logout"
      colorScheme="red"
      my={5}
      mx={3}
    >
      Logout
  </Button>
  )
  
}