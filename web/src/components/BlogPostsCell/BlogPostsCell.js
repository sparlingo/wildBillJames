import BlogPostSummary from 'src/components/BlogPostSummary'
import { Skeleton, Stack } from '@chakra-ui/react'

export const QUERY = gql`
  query BLOG_POSTS {
    posts {
      ...postFields
    }
  }

  fragment postFields on Post {
    id
    title
    body
    createdAt
    formattedDate
  }
`

export const Loading = () => {
  return (
    <Stack>
      <Skeleton heigh="200px" />
    </Stack>
  )
}

export const Empty = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="px-4 py-5 sm:p-6 ">No news is good news</div>
    </div>
  )
}
export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map((post) => <BlogPostSummary key={post.id} post={post} />)
}
