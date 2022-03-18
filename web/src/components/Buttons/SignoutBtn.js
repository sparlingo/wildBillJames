import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { Button } from '@chakra-ui/react'

const SignoutBtn = () => {
  const { logOut } = useAuth()

  const onClick = async () => {
    await logOut()
    navigate(routes.home())
  }

  return <Button onClick={() => onClick()}>Sign Out</Button>
}

export default SignoutBtn
