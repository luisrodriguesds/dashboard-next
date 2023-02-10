import { Heading } from '@chakra-ui/react'
import { DashboardTemplate } from '../../widgets/DashboardTemplate'

export default function Dashboard() {
  return (
    <DashboardTemplate>
      <Heading as="h2" fontSize="2xl">
        Dashboard page here
      </Heading>
    </DashboardTemplate>
  )
}
