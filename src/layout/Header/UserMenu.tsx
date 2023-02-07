import { ChevronDownIcon, LockIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  FlexProps,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { RiLogoutBoxLine, RiUser3Fill } from 'react-icons/ri'

export function UserMenu({ ...rest }: FlexProps) {
  return (
    <Flex gap="4" align="center" {...rest}>
      <Flex align="center">
        <Menu>
          <MenuButton as="button">
            <Flex align="center" gap="2">
              <Image
                h="48px"
                src="images/avatar.png"
                alt="avatar"
                rounded="full"
              />
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList>
            <Flex flexDirection="column">
              <MenuItem py="3">
                <Icon as={RiUser3Fill} fontSize="18" mr="4" />
                <Text ml="2" fontSize="sm">
                  My Account
                </Text>
              </MenuItem>
              <MenuItem py="3">
                <LockIcon fontSize="18" mr="4" />
                <Text ml="2" fontSize="sm">
                  Change Password
                </Text>
              </MenuItem>
              <MenuItem color="red.400" py="3">
                <Icon as={RiLogoutBoxLine} fontSize="18" mr="4" />
                <Text ml="2" fontSize="sm">
                  Logout
                </Text>
              </MenuItem>
            </Flex>
          </MenuList>
        </Menu>
      </Flex>
      <Box textAlign="left">
        <Text fontWeight="bold" color="blue.400">
          Luis
        </Text>
        <Text color="gray.500">luis@gmail.com</Text>
      </Box>
    </Flex>
  )
}
