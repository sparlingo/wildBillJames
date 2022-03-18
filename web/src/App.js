import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { ChakraProvider } from '@chakra-ui/react'
import { isBrowser } from '@redwoodjs/prerender/browserUtils'

import Routes from 'src/Routes'
import FatalErrorPage from 'src/pages/FatalErrorPage'

isBrowser && netlifyIdentity.init()

const App = () => (
  <ChakraProvider>
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <AuthProvider client={netlifyIdentity} type="netlify">
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </AuthProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  </ChakraProvider>
)

export default App
