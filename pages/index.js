import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { 
  Container,
  Heading,
} from '@chakra-ui/react'



export default function HomePage({franchises}) {
  console.log(franchises)

  return (
    <Container>
      <Heading as='h1' size="2xl">Wild Bill James</Heading>
    </Container>
  )
}

export const getStaticProps = async () => {
  try {
    const { data: franchises } = await supabase.from('franchises').select('*').filter('active', 'eq', 'Y')
    
    return {
      props: {
        franchises,
      }
    }
  } catch (error) {
    return { props: { errors: error.message }}
  }
}
