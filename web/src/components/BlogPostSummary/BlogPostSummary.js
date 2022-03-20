import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

const BlogPostSummary = ({ post }) => {
  const { hasRole } = useAuth()

  return (
    <Center py={6}>
      <Box
        maxW="460px"
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <Image
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            layout={'fill'}
          />
        </Box>
        <Stack py={24}>
          <Link to={routes.blogPost({ id: post.id })}>
            <Text
              color={'green.500'}
              fontWeight={800}
              fontSize={'sm'}
              letterspacing={1.1}
            >
              Article
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              {post.title}
            </Heading>
            <Text color="gray.700" noOfLines={6}>
              {post.body}
            </Text>
          </Link>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164531?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Kevin Sparling</Text>
            <Text color={'gray.500'}>
              <time dateTime={post.formattedDate}>{post.formattedDate}</time> ·
              6min read
            </Text>
          </Stack>
        </Stack>
        {(hasRole('admin') || hasRole('editor')) && (
          <Button colorScheme="purple" size="sm" ml={1}>
            <Link to={routes.editPost({ id: post.id })}>Edit</Link>
          </Button>
        )}
      </Box>
    </Center>
  )
}

export default BlogPostSummary
