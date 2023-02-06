import { Stack } from '@chakra-ui/react'
import {
  RiBuildingLine,
  RiDashboardLine,
  RiUserLine,
  RiUserStarLine,
} from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function SidebarNav() {
  return (
    <Stack spacing="8">
      <NavSection title="Geral">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
      </NavSection>
      <NavSection title="Empresas">
        <NavLink href="/companies" icon={RiBuildingLine}>
          Listar Empresas
        </NavLink>
      </NavSection>
      <NavSection title="Grupos">
        <NavLink href="/groups" icon={RiUserStarLine}>
          Listar Grupos
        </NavLink>
      </NavSection>
      <NavSection title="Operadores">
        <NavLink href="/operators" icon={RiUserLine}>
          Liberar Operadores
        </NavLink>
        <NavLink href="/linked-operators" icon={RiUserLine}>
          Desligar Repres. ou Prep.
        </NavLink>
      </NavSection>
    </Stack>
  )
}
