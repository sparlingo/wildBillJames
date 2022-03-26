import { useState } from 'react'
import {
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
import { useRouter } from 'next/router'

export default function Login() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const router = useRouter()

  const signIn = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      email: email,
      password: pass
    })
    error ? console.log(error) : router.push("/")

  }

  return (
    <Container>
      <form py={12}
        onSubmit={e => e.preventDefault()}
      >
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input 
            id="email"
            type="email"
            placeholder="Email address"
            onChange={e => setEmail(e.target.value)}
          />
          
          <FormLabel htmlFor="pass">Password</FormLabel>
          <Input
            id="pass"
            type="password"
            placeholder="Password - minimum of 6 characters"
            onChange={(e) => setPass(e.target.value)}
          />
        </FormControl>
        <Button
          onClick={signIn}
          type="submit" 
          primary 
          label="Submit" 
        />
      </form>
    </Container>
  )
}