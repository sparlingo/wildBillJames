import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react'
// import Sidebar from 'src/components/Sidebar'

const BlogLayout = ({ children }) => {
  return (
    <>
      <Flex>
        <Container maxW="container.xl">
          <Box>
            <Text fontSize="xl" color="gray.800">
              News
            </Text>
          </Box>
          <SimpleGrid columns={2} spacing={10}>
            {children}
          </SimpleGrid>
        </Container>
      </Flex>
    </>
  )
}

export default BlogLayout
