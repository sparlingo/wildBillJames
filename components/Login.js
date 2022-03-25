import { useState } from 'react'
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Container
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
          <Input id="email" type="email" value="email"/>
        </FormControl>
        {/* <FormField label="Email">
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
        </FormField> */}
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