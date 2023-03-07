import { DashboardTemplate } from '../templates/DashboardTemplate'

export const Layouts = {
  Dashboard: DashboardTemplate,
}
export type LayoutKeys = keyof typeof Layouts
