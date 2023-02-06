import { Box, ChakraProps, Stack, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface NavSectionProps extends ChakraProps {
  title: string
  children: ReactNode
}

export function NavSection({ title, children, ...rest }: NavSectionProps) {
  return (
    <Box {...rest}>
      <Text
        fontWeight="bold"
        textTransform="uppercase"
        fontSize="small"
        color="gray.600"
      >
        {title}
      </Text>

      <Stack spacing="5" mt="6" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}
