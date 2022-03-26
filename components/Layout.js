import {
  Box,
  Container,
  VStack
} from '@chakra-ui/react'
import NextLink from 'next/link'

import Navbar from '../components/Navbar'

export default function Layout({ children }) {

  return (
    <Container>
      <VStack>
        <Navbar />
          {children}
        <Box>
          This is the footer
        </Box>
      </VStack>
    </Container>
  )
}