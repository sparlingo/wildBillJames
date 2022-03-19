import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Box, Heading, StackDivider, Text, Button } from '@chakra-ui/react'

const BlogPostSummary = ({ post }) => {
  const { hasRole } = useAuth()

  return (
    <Box
      divider={<StackDivider borderColor="red.300" />}
      alignItems="-moz-initial"
      w="100%"
      p={3}
      bgGradient="linear(to-r, blue.200, purple.300)"
    >
      <Heading as="h4" size="md">
        {post.title}
      </Heading>
      <Text color="gray.700" noOfLines={3}>
        {post.body}
      </Text>

      <Text color="gray.500">
        <time dateTime={post.formattedDate}>{post.formattedDate}</time>
      </Text>
      <Button colorScheme="blue" size="sm">
        <Link to={routes.blogPost({ id: post.id })}>Read full story</Link>
      </Button>

      {(hasRole('admin') || hasRole('editor')) && (
        <Button colorScheme="purple" size="sm" ml={1}>
          <Link to={routes.editPost({ id: post.id })}>Edit</Link>
        </Button>
      )}
    </Box>
  )
}

export default BlogPostSummary
