import { supabase } from '../utils/supabaseClient'
import { Button } from 'grommet'
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
      onClick={handleLogOut}>
      Logout
  </Button>
  )
  
}