import { Flex, Icon, Link, LinkProps, Text } from '@chakra-ui/react'
import { ElementType } from 'react'
import { ActiveLink } from './ActiveLink'

interface NavLinkProps extends LinkProps {
  icon: ElementType
  children: string
  href: string
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <Link
        display="flex"
        alignItems="center"
        p="2"
        _hover={{
          color: 'blue.400',
          bg: 'white',
          rounded: 'lg',
        }}
        {...rest}
      >
        <Flex
          justify="center"
          align="center"
          w="32px"
          h="32px"
          rounded="xl"
          bg="blue.200"
          color="white"
        >
          <Icon as={icon} fontSize="16" />
        </Flex>
        <Text ml="3" fontWeight="bold" fontSize="sm">
          {children}
        </Text>
      </Link>
    </ActiveLink>
  )
}
