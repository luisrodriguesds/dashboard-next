import { Flex, FlexProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface CardProps extends FlexProps {
  children: ReactNode
}
export function Card({
  children,
  w = '100%',
  bg = 'gray.300',
  p = '8',
  borderRadius = 8,
  flexDirection = 'column',
  ...rest
}: CardProps) {
  return (
    <Flex
      w={w}
      bg={bg}
      p={p}
      borderRadius={borderRadius}
      flexDirection={flexDirection}
      {...rest}
    >
      {children}
    </Flex>
  )
}
