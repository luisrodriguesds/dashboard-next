import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useSidebarDrawer } from '../../hooks/SidebarDrawerContext'
import { UserMenu } from '../Header/UserMenu'

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
            <DrawerCloseButton mt="2" />
            <DrawerHeader borderBottomWidth={1} borderColor="gray.300" mb="4">
              <Flex align="center" mt="4" fontSize="sm">
                <UserMenu />
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" w="56" mr="4">
      <SidebarNav />
    </Box>
  )
}
