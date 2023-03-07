import { Box, Flex, Icon, Text, Tooltip } from '@chakra-ui/react'
import {
  RiDeleteBinFill,
  RiDownloadCloud2Line,
  RiUser3Fill,
  RiUserAddFill,
} from 'react-icons/ri'
import { AppPage } from '../../../@types/AppPage'
import { Filters } from '../../../components/Filters'
import { ButtonAction } from '../../../components/Form/Button'
import { SearchInput } from '../../../components/Form/Input'

export const Users: AppPage = () => {
  return (
    <Box>
      <Flex
        align="center"
        flexDirection={['column', 'row']}
        gap="2"
        justify="space-between"
      >
        <Flex align="center" gap="2" flexDirection={['column', 'row']}>
          <Flex align="center" gap="2">
            <Icon as={RiUser3Fill} fontSize="2xl" />
            <Text fontWeight="semibold" fontSize="3xl">
              Users
            </Text>
          </Flex>
          <Flex align="center" gap="2">
            <Tooltip hasArrow label="Add User">
              <Box>
                <ButtonAction>
                  <Icon as={RiUserAddFill} />
                </ButtonAction>
              </Box>
            </Tooltip>
            <Tooltip hasArrow label="Remover User">
              <Box>
                <ButtonAction variantAction="red">
                  <Icon as={RiDeleteBinFill} />
                </ButtonAction>
              </Box>
            </Tooltip>
          </Flex>
        </Flex>
        <Flex gap="4" flexDirection={['column', 'row']}>
          <SearchInput placeholder="Procurar por" />
          <Tooltip hasArrow label="Exportar">
            <Box>
              <ButtonAction>
                <Icon as={RiDownloadCloud2Line} />
              </ButtonAction>
            </Box>
          </Tooltip>
        </Flex>
      </Flex>
      <Box mt="6">
        <Filters />
      </Box>
    </Box>
  )
}

Users.Layout = 'Dashboard'
export default Users
