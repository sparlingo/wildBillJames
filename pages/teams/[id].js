import { supabase } from '../../utils/supabaseClient'
import {
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
const ReactFrappeChart = dynamic(import('react-frappe-charts'), { ssr: false })

export default function TeamPage({teams}) {
  console.log(teams[[0]].franchName)
  return (
    <Container>
      <Heading as='h2' size={'xl'}>{teams[[0]].franchName}</Heading>
    </Container>
  )
}

export const getStaticPaths = async () => {
  try {
    const { data, error } = await supabase.from('franchises').select('id')
    if (error) {
      throw error
    }
    if (data) {
      const paths = data.map((team) => ({ params: { id: JSON.stringify(team.id)}}))
      return {
        paths: paths,
        fallback: 'blocking'
      }
    }
    return {
      paths: [],
      fallback: false,
    }
  } catch (error) {
    return {
      paths: [],
      fallback: false
    }
  }
}

export const getStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const { data: teams } = await supabase.from('franchises').select('*').filter('id', 'eq', id)

    return { 
      props: {
        teams,
      }
    }
  } catch (error) {
    return { props: { errors: error.message }}
  }
  
}
