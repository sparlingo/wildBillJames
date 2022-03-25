import { supabase } from '../utils/supabaseClient'
import { Box, Form, FormField, TextInput, Button } from 'grommet'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const router = useRouter()
  const user = supabase.auth.user()

  const signUp = async () => {
    const { user, session, error } = await supabase.auth.signUp({
      email: email,
      password: pass
    })
    error ? console.log(error) : console.log(user)
    user ? router.push("/") : null
  }

  return (
    <Box>
      <Form 
        onSubmit={e => e.preventDefault()}
      >
        <FormField label="Email">
          <TextInput 
            id="email" 
            placeholder="Enter your email..."
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </FormField>
        <FormField label="Password">
          <TextInput 
            id="password"
            placeholder="Enter a password..."
            name="pass"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            />
        </FormField>
        <Button
          onClick={signUp}
          type="submit" 
          primary 
          label="Submit" 
        />
      </Form>
    </Box>
  )
}