import React from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Spacer,
} from '@chakra-ui/react'
import { routes, NavLink } from '@redwoodjs/router'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi'
import Navigation from 'src/components/Navigation'

const Sidebar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box display="flex">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: '', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="xl" fontFamily="monospace" fontWeight="bold">
          Wild Bill James
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <NavLink
        to={routes.home()}
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
        activeClassName="activeLink"
        className="link"
      >
        <Flex
          align="center"
          p="4"
          mx="3"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
        >
          <Icon
            mr="2"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={FiHome}
          />
          Home
        </Flex>
      </NavLink>
      <Spacer />
      <NavLink
        to={routes.about()}
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
        activeClassName="activeLink"
        className="link"
      >
        <Flex
          align="center"
          p="4"
          mx="3"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
        >
          <Icon
            mr="2"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={FiMenu}
          />
          About
        </Flex>
      </NavLink>
      <Spacer />
      <Flex alignItems="center" justifyContent="center">
        <Navigation />
      </Flex>
    </Box>
  )
}

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <NavLink
      to={routes.home()}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="3"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="2"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </NavLink>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="l" ml="8" fontFamily="monospace" fontWeight="bold">
        Wild Bill James
      </Text>
    </Flex>
  )
}

export default Sidebar
