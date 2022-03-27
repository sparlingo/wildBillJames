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

export default function TeamPage({franchise, seasons}) {
  let years = []
  let wins = []
  {seasons.map(season => (
    years.push(season.yearID)
  ))}
  {seasons.map(season => (
    wins.push(season.W)
  ))}

  return (
    <Container>
      <Heading as='h2' size={'xl'}>{franchise[[0]].franchName}</Heading>

      <ReactFrappeChart
        type="line"
        title="Wins by Year"
        xLabe
        colors={['#21ba45']}
        height={450}
        axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
        data={{
          labels: years,
          datasets: [{values: wins}]
        }}
        />
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
    const { data: franchise } = await supabase.from('franchises').select('*').filter('id', 'eq', id)
 
    const franchID = franchise[[0]].franchID
    const { data: seasons } = await supabase.from('teams').select('*').filter('franchID', 'eq', franchID).order('yearID')

    return { 
      props: {
        franchise,
        seasons
      }
    }
  } catch (error) {
    return { props: { errors: error.message }}
  }
}
