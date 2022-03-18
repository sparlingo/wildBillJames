import { useAuth } from '@redwoodjs/auth'
import SignoutBtn from 'src/components/Buttons/SignoutBtn'
import LoginBtn from 'src/components/Buttons/LoginBtn'

const Navigation = () => {
  const { logIn, signUp, isAuthenticated } = useAuth()

  return (
    <nav>
      {isAuthenticated ? (
        <SignoutBtn />
      ) : (
        <>
          <LoginBtn />
        </>
      )}
    </nav>
  )
}

export default Navigation
