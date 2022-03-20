import { Box, Container, Flex } from '@chakra-ui/react'
import Sidebar from 'src/components/Sidebar'
import Footer from 'src/components/Footer'

const BlogLayout = ({ children }) => {
  return (
    <>
      <Flex>
        <Sidebar />
        <Container maxW="2xl">
          <Box maxW="2xl" borderWidth="1px" borderRadius="lg" py={2}>
            {children}
          </Box>
        </Container>
      </Flex>
      <Footer />
    </>
  )
}

export default BlogLayout
