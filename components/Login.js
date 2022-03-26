import { useState } from 'react'
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading,
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
    <Container maxW='container.md'>
      <Heading as='h2' size='xl' mb={3}>Login</Heading>
      <form my={3}
        onSubmit={e => e.preventDefault()}
      >
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input 
            id="email"
            size="sm"
            type="email"
            placeholder="Email address"
            onChange={e => setEmail(e.target.value)}
          />
          
          <FormLabel htmlFor="pass">Password</FormLabel>
          <Input
            id="pass"
            size="sm"
            type="password"
            placeholder="Password - minimum of 6 characters"
            onChange={(e) => setPass(e.target.value)}
          />
        </FormControl>
        <Button
          onClick={signIn}
          type="submit"
          colorScheme="blue"
          my={5}
        >
          Login
        </Button>
      </form>
    </Container>
  )
}