import { Search2Icon } from '@chakra-ui/icons'
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputLeftElement,
  InputGroup,
  Text,
  Icon,
} from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

interface InputProps extends ChakraInputProps {
  label?: string
  error?: string
  iconLeft?: IconType
}

export function Input({ label, error = '', iconLeft, ...rest }: InputProps) {
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        {iconLeft && (
          <InputLeftElement pointerEvents="none">
            <Icon as={iconLeft} />
          </InputLeftElement>
        )}
        <ChakraInput bg="gray.200" size="lg" isInvalid={!!error} {...rest} />
      </InputGroup>
      {!!error && (
        <Text fontSize="sm" color="red">
          {error}
        </Text>
      )}
    </FormControl>
  )
}

interface SearchInputProps {
  onChange?: (value: any) => void
  placeholder?: string
}
export function SearchInput({ onChange, placeholder }: SearchInputProps) {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="gray.300" />
      </InputLeftElement>
      <ChakraInput
        type="tel"
        placeholder={placeholder}
        backgroundColor="white"
        onChange={(e) => onChange && onChange(e)}
      />
    </InputGroup>
  )
}
