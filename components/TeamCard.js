import React from 'react'
//import Link from 'next/link'
import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useBreakPointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { FavouriteButton } from './FavoriteButton'
import { LgDivTag } from './LgDivTag'

export const TeamCard = (props) => {
  const { team, rootProps } = props
  const { id, name, logoURL, league, division } = team
  return (
    <Stack
      spacing={'4'}
      {...rootProps}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={logoURL}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={'md'}
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
            {name}
          </Text>
          <LgDivTag league={league} division={division} />
        </Stack>
        <HStack>
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            12 Somethings
          </Text>
        </HStack>
      </Stack>
      <Stack align="center">
        <Link href={`/teams/${encodeURIComponent(id)}`} passhref>
          <Button colorScheme="blue" isFullWidth>
            Team History
          </Button>
        </Link>
        <Link
          textDecoration="underline"
          fontWeight="medium"
          color={useColorModeValue('gray.600', 'gray.400')}
        >
          Something Else
        </Link>
      </Stack>
    </Stack>
  )
}
