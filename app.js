import React from 'react'
import { Router, Route } from '@reach/router'
import Layout from './src/layouts/Layout'
import Profile from './src/components/Profile'
import Login from './src/components/Login'
import PrivateRoute from './src/components/PrivateRoute'
import IndexPage from './src/pages/index'
import { AuthProvider } from './src/services/auth'

const App = () => {
  return (
    <Layout>
      <Router basepath="/">
        <AuthProvider>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/profile" component={Profile} />
          <IndexPage path="/" />
        </AuthProvider>
      </Router>
    </Layout>
  )
}

export default App