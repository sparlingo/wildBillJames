import React from 'react'
import Layout from '../components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

import { SITE_DESCRIPTION, SITE_NAME } from '../config'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <NextSeo title={SITE_NAME} description={SITE_DESCRIPTION} />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
