import React from 'react'
import { AreaClosed } from '@visx/shape'
import { AxisLeft, AxisBottom } from '@visx/axis'
import { GradientOrangeRed } from '@visx/gradient'
import { Group } from '@visx/group'
import { browserUsage, genDataValue } from '@visx/mock-data'
import { scaleLinear, scaleTime } from '@visx/scale'
import { appleStock } from '@visx/mock-data'
import { extent, max } from 'd3-array'
import { Layout } from '../layouts/Layout'

const data = appleStock
const width = 750
const height = 400

const margin = {
  top: 60,
  bottom: 60,
  left: 80,
  right: 80
}
const xMax = width - margin.left - margin.right
const yMax = height - margin.left - margin.right
const x = (d) => new Date(d.date)
const y = (d) => d.close
data.map(y)

const xScale = scaleTime({
  range: [0, xMax],
  domain: extent(data, x),
  nice: true
})
const yScale = scaleLinear({
  range: [yMax, 0],
  domain: [0, max(data, y)],
  nice: true
})


const VisxPage = () => {
  return (
    <>
      <svg width={width} height={height}>
        <Group top={margin.top} left={margin.left}>
          <AxisLeft
            scale={yScale}
            top={0}
            left={0}
            label={'Close Price ($)'}
            stroke={'#1b1a1e'}
            tickTextFill={'#1b1a1e'}
          />
          <AxisBottom
            scale={xScale}
            top={yMax}
            label={'Years'}
            stroke={'#1b1a1e'}
            tickTextFill={'#1b1a1e'}
            />
          <AreaClosed
            data={data}
            yScale={yScale}
            x={x}
            y={y}
            strokeWidth={1}
            fill={"red"}
          />
        </Group>
      </svg>
    </>
  )
}

export default VisxPage