import { Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { SidebarDrawerProvider } from '../hooks/SidebarDrawerContext'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import { Sidebar } from '../layout/Sidebar'

interface DashboardTemplateProps {
  children: ReactNode
}
export function DashboardTemplate({ children }: DashboardTemplateProps) {
  return (
    <SidebarDrawerProvider>
      <Flex w="100%" h={['auto', '100vh']}>
        <Sidebar />
        <Flex
          w="100%"
          flexDirection="column"
          maxW={1480}
          mx="auto"
          pb="6"
          bg="gray.50"
        >
          <Header />
          <Box py="6" px="4">
            {children}
          </Box>
          <Footer />
        </Flex>
      </Flex>
    </SidebarDrawerProvider>
  )
}
