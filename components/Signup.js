import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Container,
  TextInput
} from '@chakra-ui/react'
import { supabase } from '../utils/supabaseClient'
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
      <form
        onSubmit={e => e.preventDefault()}
      >
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
            <Input 
              id="email" 
              name="email"
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              name="pass"
              type="password"
              placeholder="Enter a password..."
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              />
          <Button
            onClick={signUp}
            type="submit" 
            primary 
            label="Submit" 
          />
        </FormControl>
      </form>
    </Box>
  )
}