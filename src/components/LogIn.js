// import React from "react"
// import { navigate } from "gatsby"
// import { handleLogin, isLoggedIn } from "../services/auth"

// class Login extends React.Component {
//   state = {
//     username: ``,
//     password: ``,
//   }

//   handleUpdate = event => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     })
//   }

//   handleSubmit = event => {
//     event.preventDefault()
//     handleLogin(this.state)
//   }

//   render() {
//     if (isLoggedIn()) {
//       navigate(`/app/profile`)
//     }

//     return (
//       <>
//         <h1>Log in</h1>
//         <form
//           method="post"
//           onSubmit={event => {
//             this.handleSubmit(event)
//             navigate(`/profile`)
//           }}
//         >
//           <label>
//             Username
//             <input type="text" name="username" onChange={this.handleUpdate} />
//           </label>
//           <label>
//             Password
//             <input
//               type="password"
//               name="password"
//               onChange={this.handleUpdate}
//             />
//           </label>
//           <input type="submit" value="Log In" />
//         </form>
//       </>
//     )
//   }
// }

// export default Login

import React, { useRef, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import { useAuth } from '../services/auth'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

  // Get signUp function from the auth context
  const { signIn } = useAuth()

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    // Get email and password input values
    const email = emailRef.current.value
    const password = passwordRef.current.value

    // Calls `signIn` function from the context
    const { error } = await signIn({ email, password })

    if (error) {
      alert('error signing in')
    } else {
      // Redirect user to Dashboard
      history.push('/')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>{/* ... */}</form>

      <br />

      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  )
}