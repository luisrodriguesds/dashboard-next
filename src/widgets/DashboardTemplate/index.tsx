import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Header } from '../../layout/Header'
import { Sidebar } from '../../layout/Sidebar'

interface DashboardTemplateProps {
  children: ReactNode
}
export function DashboardTemplate({ children }: DashboardTemplateProps) {
  return (
    <Flex w="100%" h="100vh">
      <Sidebar />

      <Flex w="100%" flexDirection="column" maxW={1480} mx="auto" px="6" pb="6">
        <Header />
        {children}
      </Flex>
    </Flex>
  )
}
