import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { ReactNode } from 'react'
interface RoundCardProps {
  children: ReactNode
}
export function RoundCard({ children }: RoundCardProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex
      as="button"
      rounded="full"
      bg="gray.100"
      h={isWideVersion ? '48px' : '32px'}
      w={isWideVersion ? '48px' : '32px'}
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
