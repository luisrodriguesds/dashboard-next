import { Flex, Text, Icon } from '@chakra-ui/react'
import { RiWallet3Fill } from 'react-icons/ri'

export function StatCard() {
  return (
    <Flex
      bg="white"
      borderRadius="md"
      p="5"
      boxShadow="md"
      justify="space-between"
    >
      <Flex flexDirection="column">
        <Text color="gray.400" fontWeight="semibold" fontSize="sm">
          Today&apos;s Moneys
        </Text>
        <Text color="gray.700" fontWeight="bold">
          $53,000
        </Text>
      </Flex>
      <Flex
        justify="center"
        align="center"
        w="48px"
        h="48px"
        rounded="xl"
        bg="blue.200"
        color="white"
      >
        <Icon as={RiWallet3Fill} fontSize="18" />
      </Flex>
    </Flex>
  )
}
