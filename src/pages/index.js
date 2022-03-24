import React from 'react'
import { Link } from "gatsby"

import { getUser, isLoggedIn } from "../services/auth"
import Layout from '../layouts/Layout'

const indexPage = () => {
  return (
    <>
      <Layout>
        <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
        <p>
          {isLoggedIn() ? (
            <>
              You are logged in, so check your{" "}
              <Link to="/profile">profile</Link>
            </>
          ) : (
            <>
              You should <Link to="/login">log in</Link> to see restricted
              content
            </>
          )}
        </p>
      </Layout>
    </>
  )
}
 export default indexPage
