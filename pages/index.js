import { supabase } from '../utils/supabaseClient'
import { 
  Box,
  Container,
  Heading,
} from '@chakra-ui/react'
import { TeamsGrid } from '../components/TeamsGrid'
import { TeamCard } from '../components/TeamCard'


export default function HomePage({franchises}) {
  //console.log(franchises)

  return (
    <>
      <Container>
        <Heading as='h1' size="2xl">Wild Bill James</Heading>
      </Container>
      <Box
        maxW="7xl"
        mx="auto"
        px={{
          base: '4',
          md: '8',
          lg: '12',
        }}
        py={{
          base: '6',
          md: '8',
          lg: '12'
        }}
      >
        <TeamsGrid>
          {franchises.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </TeamsGrid>
      </Box>
    </>
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