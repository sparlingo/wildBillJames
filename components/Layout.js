import {
  Box,
  Container,
  VStack,
  StackDivider
} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout({ children }) {

  return (
    <Container maxW={'100%'}>
      <VStack
        shouldWrapChildren
        spacing={20}
        align='stretch'
      >
        <Navbar />
          {children}
        <Footer />
      </VStack>
    </Container>
  )
}