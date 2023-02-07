import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
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
      _hover={{
        bg: 'gray.200',
      }}
    >
      {children}
    </Flex>
  )
}
