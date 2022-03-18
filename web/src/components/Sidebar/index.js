import React, { useColorModeValue } from 'react'
import { Box } from '@chakra-ui/react'
import SidebarContent from './SidebarContent'

function Sidebar(props) {
  const mainPanel = React.useRef()
  let variantChange = '0.2s linear'

  const { routes, sidebarVariant } = props

  let sidebarBg = 'none'
  let sidebarRadius = '0px'
  let sidebarMargins = '0px'

  if (sidebarVariant === 'opaque') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    sidebarBg = useColorModeValue('white', 'gray.700')
    sidebarRadius = '16px'
    sidebarMargins = '16px 0px 16px 16px'
  }

  return (
    <Box ref={mainPanel}>
      <Box display={{ sm: 'none', xl: 'block' }} position="fixed">
        <Box
          bg={sidebarBg}
          transition={variantChange}
          w="260px"
          maxW="260px"
          ms={{
            sm: '16px',
          }}
          my={{
            sm: '16px',
          }}
          h="calc(100vh - 32px)"
          ps="20px"
          pe="20px"
          m={sidebarMargins}
          borderRadius={sidebarRadius}
        >
          <SidebarContent
            routes={routes}
            logoText={'PURITY UI DASHBOARD'}
            display="none"
            sidebarVariant={sidebarVariant}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
