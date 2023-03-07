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

interface ButtonActionProps extends ButtonProps {
  variantAction?: 'red'
}
export function ButtonAction({
  children,
  variantAction,
  size = 'md',
  colorScheme = 'gray',
  backgroundColor = 'white',
  borderColor = 'gray.300',
  borderWidth = '1px',
  ...rest
}: ButtonActionProps) {
  const variantActionSchema = {
    red: {
      backgroundColor: 'red.400',
      _hover: {
        backgroundColor: 'red.600',
      },
      color: 'white',
      border: '0',
    },
  }
  if (variantAction && variantAction === 'red') {
    return (
      <ChakraButton {...variantActionSchema[variantAction]} {...rest}>
        {children}
      </ChakraButton>
    )
  }
  return (
    <ChakraButton
      size={size}
      colorScheme={colorScheme}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      {...rest}
    >
      {children}
    </ChakraButton>
  )
}

interface ToggleButtonProps extends ButtonProps {
  isActive?: boolean
}
export function ToggleButton({
  children,
  isActive,
  size = 'md',
  colorScheme = 'gray',
  backgroundColor = 'white',
  borderColor = 'gray.300',
  borderWidth = '1px',
  onClick,
  ...rest
}: ToggleButtonProps) {
  return (
    <ChakraButton
      size={size}
      colorScheme={colorScheme}
      backgroundColor={isActive ? 'gray.200' : backgroundColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      {...rest}
      onClick={(e) => {
        onClick && onClick(e)
      }}
    >
      {children}
    </ChakraButton>
  )
}
