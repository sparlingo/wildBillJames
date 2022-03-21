import React, { PureComponent } from 'react'
import { Box, Text } from '@chakra-ui/react'
//import { LineChart, Line, ResponsiveContainer } from 'recharts'
import {XYPlot, LineSeries, XAxis, YAxis, HorizontalGridLines} from 'react-vis';

import Layout from '../layouts/Layout'

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Box p={8}>
          <Text fontSize='xl'>{3 + 2}</Text>
        </Box>
        <XYPlot
          width={300}
          height={300}>
          <HorizontalGridLines />
          <LineSeries
            color="red"
            data={[
              {x: 1, y: 10},
              {x: 2, y: 5},
              {x: 3, y: 15}
            ]}/>
          <XAxis title="X" />
          <YAxis />
        </XYPlot>
      </Layout>
      
    </>
  )
}
 export default IndexPage
