import { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Switch,
  useColorMode,
  useDisclosure
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { supabase } from '../utils/supabaseClient'
import NextLink from 'next/link'
import Logout from '../components/Logout'


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <Box zIndex="100">
      <Flex
        position="fixed"
        top="1rem"
        right="1rem"
        align="center"
      >
        {/* Desktop */}
        <Flex
          display={['none', 'none', 'flex','flex']}
        >
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Home
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
            >
              About
            </Button>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Contact
            </Button>
          </NextLink>
          {!session 
            ? <NextLink href="/login" passHref>
                <Button
                  variant="ghost"
                  aria-label="Login"
                  my={5}
                  w="100%"
                >
                  Login
                </Button>
              </NextLink>
            : <Logout />
          }
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={
            <HamburgerIcon />
          }
          onClick={onOpen}
          // onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
        <Switch
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>
        <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Navigation</DrawerHeader>
            <DrawerBody>
              <NextLink href="/" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Home"
                  my={5}
                  w="100%"
                >
                  Home
                </Button>
              </NextLink>

              <NextLink href="/about" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="About"
                  my={5}
                  w="100%"
                >
                  About
                </Button>
              </NextLink>

              <NextLink href="/contact" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Contact"
                  my={5}
                  w="100%"
                >
                  Contact
                </Button>
              </NextLink>
              {!session 
                ? <NextLink href="/login" passHref>
                    <Button
                      variant="ghost"
                      aria-label="Login"
                      my={5}
                      w="100%"
                    >
                      Login
                    </Button>
                  </NextLink>
                : <Logout />
              }
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}