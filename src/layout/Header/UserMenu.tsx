import { ChevronDownIcon, LockIcon } from '@chakra-ui/icons'
import {
  Box,
  Divider,
  Flex,
  FlexProps,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { RiLogoutBoxLine, RiUser3Fill } from 'react-icons/ri'

export function UserMenu({ ...rest }: FlexProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex gap="4" align="center" {...rest}>
      <Flex align="center">
        <Menu>
          <MenuButton as="button">
            <Flex align="center" gap="2">
              <Image
                h={isWideVersion ? '48px' : '32px'}
                src="images/avatar.png"
                alt="avatar"
                rounded="full"
              />
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList pt="0" pb="1" minW="250px">
            <Flex flexDirection="column">
              <Flex py="3" px="2" gap="2">
                <Image
                  h="38px"
                  src="images/avatar.png"
                  alt="avatar"
                  rounded="full"
                />
                <Box textAlign="left">
                  <Text fontWeight="bold" fontSize="sm" color="blue.400">
                    Luis Italo Amorim Rodrigues
                  </Text>
                  <Text color="gray.500" fontSize="sm">
                    luis@gmail.com
                  </Text>
                  <Text color="gray.600" fontSize="smaller" fontWeight="medium">
                    Administrador
                  </Text>
                </Box>
              </Flex>
              <Divider />
              <MenuItem py="3">
                <Icon as={RiUser3Fill} fontSize="18" mr="2" />
                <Text ml="2" fontSize="sm">
                  My Account
                </Text>
              </MenuItem>
              <MenuItem py="3">
                <LockIcon fontSize="18" mr="2" />
                <Text ml="2" fontSize="sm">
                  Change Password
                </Text>
              </MenuItem>
              <Divider />

              <MenuItem color="red.400" py="3">
                <Icon as={RiLogoutBoxLine} fontSize="18" mr="2" />
                <Text ml="2" fontSize="sm">
                  Logout
                </Text>
              </MenuItem>
            </Flex>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
}
