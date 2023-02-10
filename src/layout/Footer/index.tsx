import { Box, Flex, Link, Text } from '@chakra-ui/react'

export function Footer() {
  return (
    <Flex bg="white" color="gray.500" fontSize="sm" px="4" py="3" gap="2">
      <Text fontWeight="semibold">
        System ADM
        <Box as="span" color="blue.300">
          .
        </Box>
      </Text>
      | <Text> Copyright © 2019</Text>|
      <Text>
        Developed By{' '}
        <Link color="blue.400" href="#">
          Luis Rodrigues
        </Link>
      </Text>
    </Flex>
  )
}
