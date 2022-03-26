import {
  Box,
  Container,
  VStack,
  StackDivider
} from '@chakra-ui/react'

import Navbar from '../components/Navbar'

export default function Layout({ children }) {

  return (
    <Container maxW={'1680'}>
      <VStack
        shouldWrapChildren
        divider={<StackDivider borderColor='gray.200' />}
        spacing={20}
        align='stretch'
      >
        <Navbar />
          {children}
        <Box w="100%" bgColor="blue.300">
          This is the footer
        </Box>
      </VStack>
    </Container>
  )
}