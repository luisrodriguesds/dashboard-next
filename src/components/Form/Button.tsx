import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ButtonProps extends ChakraButtonProps {
  children: ReactNode
}

export function Button({
  children,
  size = 'lg',
  colorScheme = 'blue',
  ...rest
}: ButtonProps) {
  return (
    <ChakraButton size={size} colorScheme={colorScheme} {...rest}>
      {children}
    </ChakraButton>
  )
}
