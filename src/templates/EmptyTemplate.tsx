import { ReactNode } from 'react'

interface EmptyTemplateProps {
  children: ReactNode
}
export function EmptyTemplate({ children }: EmptyTemplateProps) {
  return <>{children}</>
}
