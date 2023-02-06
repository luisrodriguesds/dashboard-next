import {
  ChevronDownIcon,
  LockIcon,
  BellIcon,
  Search2Icon,
} from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
// import { useRouter } from 'next/dist/client/router'
import { RiLogoutBoxLine, RiMenuLine, RiUser3Fill } from 'react-icons/ri'
import { useSidebarDrawer } from '../../hooks/SidebarDrawerContext'

export function Header() {
  // const route = useRouter()
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  // function handleSignOut() {
  //   route.replace('/')
  // }

  return (
    <Flex
      as="header"
      w="100%"
      // maxW={1480}
      // h="20"
      // mx="auto"
      mt="4"
      // px="6"
      align="center"
      justifyContent="space-between"
    >
      <Flex>
        {!isWideVersion && (
          <IconButton
            aria-label="Open navigation"
            icon={<Icon as={RiMenuLine} />}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            mr="2"
          />
        )}
        <Flex flexDirection="column">
          <Box as="nav">
            <Flex as="ol" listStyleType="none">
              <Flex as="li">
                <Link color="gray.400">Pages</Link>
                <Text as="span" mx="2">
                  /
                </Text>
              </Flex>
              <Flex as="li">
                <Link>Dashboard</Link>
              </Flex>
            </Flex>
          </Box>
          <Link mt="1" fontWeight="bold">
            Dashboard
          </Link>
        </Flex>
      </Flex>

      <Flex align="center" gap="4">
        <Flex
          gap="4"
          pr="4"
          align="center"
          borderRightWidth="1px"
          borderColor="gray.300"
        >
          <RoundCard>
            <Search2Icon fontFamily="18" />
          </RoundCard>
          <RoundCard>
            <BellIcon fontSize="18" />
          </RoundCard>
        </Flex>
        <Flex align="center">
          <Menu>
            <MenuButton as="button">
              <Flex align="center" gap="2">
                <Image
                  h="48px"
                  src="/images/avatar.png"
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
    </Flex>
  )
}

interface RoundCardProps {
  children: ReactNode
}
export function RoundCard({ children }: RoundCardProps) {
  return (
    <Flex
      as="button"
      rounded="full"
      bg="gray.100"
      h="48px"
      w="48px"
      justify="center"
      align="center"
    >
      {children}
    </Flex>
  )
}
