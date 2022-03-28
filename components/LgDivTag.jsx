import React from 'react'
import {
  HStack,
  Tag,
  TagLabel,
  useColorModeValue as mode,
} from '@chakra-ui/react'

export const LgDivTag = (props) => {
  const { league, division, rootProps } = props
  // if (league == 'NL') {
  //   let tagColor = 'blue'
  // } else {
  //   let tagColor = 'red'
  // }
  let tagColor = 'blue'

  return (
    <HStack spacing="1" {...rootProps}>
      <Tag
        size="md"
        variant="subtle"
        colorScheme={tagColor}
      >
        <TagLabel>{league}</TagLabel>
      </Tag>
      <Tag
        size="md"
        variant="subtle"
        colorScheme="gray"
      >
        <TagLabel>{division}</TagLabel>
      </Tag>
    </HStack>
  )
}

