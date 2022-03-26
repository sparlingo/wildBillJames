import { useState, useEffect } from 'react'
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { supabase } from '../utils/supabaseClient'

export default function Account({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={() => updateProfile({ username, website, avatar_url })}>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input placeholder={session.user.email} />
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          id="username"
          name="username"
          placeholder={username || ''}
          onChange={e => setUsername(e.target.value)}
        />
        <FormLabel htmlFor="website">Website</FormLabel>
        <Input
          id="website"
          name="website"
          value={website || ''}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <Button colorScheme={'blue'}>Update Profile</Button>
      </FormControl>
    </form>
  )
}
