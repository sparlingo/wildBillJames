import React from 'react'
import { Box, Text } from '@chakra-ui/react'

import Layout from '../layouts/Layout'

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Box p={8}>
          <Text fontSize='xl'>{3 + 2}</Text>
        </Box>
      </Layout>
    </>
  )
}
 export default IndexPage
