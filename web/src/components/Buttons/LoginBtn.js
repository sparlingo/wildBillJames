import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { Button } from '@chakra-ui/react'

const LoginBtn = () => {
  const { logIn } = useAuth()

  const onClick = async () => {
    await logIn()
    navigate(routes.home())
  }

  return <Button onClick={() => onClick()}>Login</Button>
}

export default LoginBtn
