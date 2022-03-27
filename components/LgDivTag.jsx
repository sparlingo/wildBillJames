import { HStack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import React from 'react'

export const LgDivTag = (props) => {
  const { lgID, divID, rootProps } = props
  
  return (
    <HStack spacing="1" {...rootProps}>

    </HStack>
  )
}

const Tag = (props) => {
  const { isWinner, children, textProps } = props
  const ALColor = mode('red.400', 'red.700')
  const NLColor = mode('blue.400', 'blue.700')
  const color = isWinner ? winnerColor : defaultColor

  // return (
  //   <Text

  // )
}