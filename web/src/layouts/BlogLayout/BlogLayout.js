import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Sidebar from 'src/components/Sidebar'

const BlogLayout = ({ children }) => {
  return (
    <>
      <Flex>
        <Sidebar />
        <Container maxW="container.xl">
          <Box maxW="2xl" borderWidth="1px" borderRadius="lg" py={2}>
            <Text fontSize="2xl" color="gray.800" centerContent>
              News
            </Text>
            {children}
          </Box>
        </Container>
      </Flex>
    </>
  )
}

export default BlogLayout
