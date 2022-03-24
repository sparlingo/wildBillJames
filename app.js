import React from 'react'
import { Router } from '@reach/router'
import Layout from './src/layouts/Layout'
import Profile from './src/components/Profile'
import Login from './src/components/Login'
import PrivateRoute from './src/components/PrivateRoute'
import indexPage from './src/pages/index'

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <Login path="/login" />
        <PrivateRoute path="/profile" component={Profile} />
        <indexPage path="/" />
      </Router>
    </Layout>
  )
}

export default App