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

export default function BlueJays({ seasons }) {

  return (
    <Container>
      <Heading as='h2' size="lg">Toronto Blue Jays</Heading>
      
        <Table>
          <Thead>
            <Tr>
              <Th>Season</Th>
              <Th>Wins</Th>
              <Th>Losses</Th>
              <Th>Rank</Th>
            </Tr>
          </Thead>
          <Tbody>
          {seasons.map((season, id) => (
            <Tr key={id}>
              <Td>{season.yearID}</Td>
              <Td>{season.W}</Td>
              <Td>{season.L}</Td>
              <Td>{season.Rank}</Td>
            </Tr>
          ))}
          </Tbody>
        </Table>
      
      
      {/* <ReactFrappeChart
        type="line"
        colors={['#21ba45']}
        height={450}
        data={{
          labels: {seasons.map(id => )}
        }}
      /> */}
    </Container>
  )
}

export const getStaticProps = async () => {
  const { data: seasons } = await supabase.from('teams').select('*').eq('teamID', 'TOR')

  return {
    props: {
      seasons,
    }
  }
}