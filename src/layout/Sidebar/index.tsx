import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useSidebarDrawer } from '../../hooks/SidebarDrawerContext'
import { Logo } from '../Header/Logo'

import { SidebarNav } from './SidebarNav'

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })
  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={() => onClose()}>
        <DrawerOverlay>
          <DrawerContent bg="gray.100" p="2">
            <DrawerCloseButton mt="1" />
            <DrawerHeader mb="2" p="0">
              <Logo />
              <Divider />
            </DrawerHeader>
            <DrawerBody px="4">
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box
      as="aside"
      minW="280px"
      borderRightWidth="1px"
      borderColor="gray.200"
      bg="gray.50"
      boxShadow="md"
    >
      <Box py="4">
        <Logo />
        <Box px="6" margin="0 auto">
          <Divider />
        </Box>
      </Box>
      <Box pl="6" pr="4">
        <SidebarNav />
      </Box>
    </Box>
  )
}
