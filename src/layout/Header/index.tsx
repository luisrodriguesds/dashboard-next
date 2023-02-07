import { BellIcon, Search2Icon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Link,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { RoundCard } from '../../components/RoundCard'
import { useSidebarDrawer } from '../../hooks/SidebarDrawerContext'
import { UserMenu } from './UserMenu'

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
  console.log(onOpen)
  return (
    <Flex
      as="header"
      w="100%"
      // maxW={1480}
      // h="20"
      // mx="auto"
      py="4"
      px="2"
      align="center"
      justifyContent="space-between"
    >
      <Flex>
        {!isWideVersion ? (
          <IconButton
            aria-label="Open navigation"
            icon={<Icon as={RiMenuLine} />}
            fontSize="24"
            variant="unstyled"
            onClick={() => onOpen()}
            mr="2"
          />
        ) : (
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
        )}
      </Flex>

      <Flex align="center" gap="4">
        <Flex
          gap="4"
          pr="4"
          align="center"
          borderRightWidth={!isWideVersion ? '0' : '1px'}
          borderColor="gray.300"
        >
          <RoundCard>
            <Search2Icon fontFamily="18" />
          </RoundCard>
          <RoundCard>
            <BellIcon fontSize="18" />
          </RoundCard>
        </Flex>
        {isWideVersion && <UserMenu />}
      </Flex>
    </Flex>
  )
}
