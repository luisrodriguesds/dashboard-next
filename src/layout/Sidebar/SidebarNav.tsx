import { Stack } from '@chakra-ui/react'
import { RiDashboardLine, RiUser3Fill } from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function SidebarNav() {
  return (
    <Stack spacing="8">
      <NavLink href="/dashboard" icon={RiDashboardLine}>
        Dashboard
      </NavLink>
      <NavSection title="Menus">
        <NavLink href="/users" icon={RiUser3Fill}>
          Users
        </NavLink>
      </NavSection>
    </Stack>
  )
}
