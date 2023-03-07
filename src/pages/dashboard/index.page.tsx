import { Flex, Grid } from '@chakra-ui/react'
import { AppPage } from '../../@types/AppPage'
import { StatCard } from '../../components/StatCard'

export const Dashboard: AppPage = () => {
  return (
    <Flex flexDirection="column">
      <Grid gap="5" templateColumns={['auto', 'repeat(4, 1fr)']}>
        <StatCard />
        <StatCard />
        <StatCard />
        <StatCard />
      </Grid>
    </Flex>
  )
}
Dashboard.Layout = 'Dashboard'
export default Dashboard
