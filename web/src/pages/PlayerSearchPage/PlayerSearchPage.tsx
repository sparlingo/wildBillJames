import { useState } from 'react'
import { Form, Submit } from '@redwoodjs/forms'
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Input,
} from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'

const PlayerSearchPage = () => {
  const [roster, setRoster] = useState()

  const onSubmit = (data) => {
    fetch(
      `http://lookup-service-prod.mlb.com/json/named.roster_team_alltime.bam?start_season='{data.season}'&end_season='{data.season}'&team_id='121'`
    )
      .then((response) => response.json())
      .then((json) => console.info(json))
  }

  return (
    <>
      <MetaTags title="PlayerSearch" description="PlayerSearch page" />

      <h1>PlayerSearchPage</h1>
      <Form onSubmit={onSubmit}>
        {/* <RangeSlider aria-label={['min', 'max']} defaultValue={[1977, 2021]}>
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider> */}
        <Input name="season" placeholder="Year" />
      </Form>
      <Submit>Go</Submit>
      {roster && JSON.stringify(roster)}
    </>
  )
}

export default PlayerSearchPage
