import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useSidebarDrawer } from '../../hooks/SidebarDrawerContext'

import { SidebarNav } from './SidebarNav'

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.200" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader borderBottomWidth={1} borderColor="gray.300" mb="4">
              <Flex align="center" mt="4" fontSize="1rem">
                <Box textAlign="right">
                  <Text>Luis Rodrigues</Text>
                  <Text color="gray.500">luis@luis.com</Text>
                </Box>

                <Avatar size="md" ml="4" name="U" />
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
