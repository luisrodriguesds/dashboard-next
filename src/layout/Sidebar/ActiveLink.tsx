import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMatchExactHref?: boolean
}

export function ActiveLink({
  children,
  shouldMatchExactHref,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()
  let isActive = false

  if (
    shouldMatchExactHref &&
    [rest.href, rest.as].some((item) => item === asPath)
  ) {
    isActive = true
  }

  if (
    !shouldMatchExactHref &&
    [rest.href, rest.as].some((item) => asPath.startsWith(String(item)))
  ) {
    isActive = true
  }
  const activeProps = isActive
    ? {
        color: 'blue.400',
        bg: 'white',
        rounded: 'lg',
        py: '2',
        px: '2',
      }
    : {}
  return (
    <Link {...rest}>
      {cloneElement(children, {
        ...activeProps,
      })}
    </Link>
  )
}
