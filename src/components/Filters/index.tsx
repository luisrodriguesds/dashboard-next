import { Box, Button, Flex, Icon, Select, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { RiFilter3Line } from 'react-icons/ri'
import { DateFilter } from '../DateFilter'
import { ToggleButton } from '../Form/Button'

export function Filters() {
  const [showFilters, setShowFilters] = useState(false)
  return (
    <Box>
      <Flex flex={1}>
        <Flex
          align="center"
          justify="space-between"
          flexDirection={['column', 'row']}
          flex="1"
          gap="2"
        >
          <Flex gap="2" flexDirection={['column', 'row']}>
            <Select
              placeholder="Todos os Usuários"
              backgroundColor="white"
              width="auto"
              h="42px"
              borderColor="gray.300"
            >
              <option value="option2">Ativos</option>
              <option value="option3">Inativos</option>
            </Select>
            <DateFilter />
          </Flex>
          <Flex gap="4">
            <Button colorScheme="blue" variant="link">
              Limpar filtros
            </Button>
            <ToggleButton
              leftIcon={<Icon as={RiFilter3Line} />}
              isActive={showFilters}
              onClick={() => setShowFilters((state) => !state)}
            >
              Mais Filtros (2)
            </ToggleButton>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        mt="4"
        p="5"
        backgroundColor="gray.100"
        borderRadius="lg"
        gap="2"
        flexDirection={['column', 'row']}
        hidden={!showFilters}
      >
        <Flex flexDirection="column" gap="1" flex="1">
          <Flex justify="space-between">
            <Text color="gray.700" fontWeight="medium">
              Tipo
            </Text>
            <Button colorScheme="blue" variant="link">
              Limpar
            </Button>
          </Flex>
          <Select
            placeholder="Todos"
            backgroundColor="white"
            width="auto"
            borderColor="gray.300"
          >
            <option value="option2">Administrador</option>
            <option value="option3">Técnico</option>
            <option value="option4">Aluno</option>
          </Select>
        </Flex>
        <Flex flexDirection="column" gap="1" flex="1">
          <Flex justify="space-between">
            <Text color="gray.700" fontWeight="medium">
              Tipo
            </Text>
            <Button colorScheme="blue" variant="link">
              Limpar
            </Button>
          </Flex>
          <Select
            placeholder="Todos"
            backgroundColor="white"
            width="auto"
            borderColor="gray.300"
          >
            <option value="option2">Administrador</option>
            <option value="option3">Técnico</option>
            <option value="option4">Aluno</option>
          </Select>
        </Flex>
        <Flex flexDirection="column" gap="1" flex="1">
          <Flex justify="space-between">
            <Text color="gray.700" fontWeight="medium">
              Tipo
            </Text>
            <Button colorScheme="blue" variant="link">
              Limpar
            </Button>
          </Flex>
          <Select
            placeholder="Todos"
            backgroundColor="white"
            width="auto"
            borderColor="gray.300"
          >
            <option value="option2">Administrador</option>
            <option value="option3">Técnico</option>
            <option value="option4">Aluno</option>
          </Select>
        </Flex>
      </Flex>
    </Box>
  )
}
