'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()
  const params = useParams()

  const routes = [
    {
      href: `/${params.clientId}`,
      label: 'Home',
      active: pathname === `/${params.clientId}`
    },
    {
      href: `/${params.clientId}/assets`,
      label: 'Assets',
      active: pathname === `/${params.clientId}/assets`
    },
    {
      href: `/${params.clientId}/products`,
      label: 'Products',
      active: pathname === `/${params.clientId}/products`
    },
    {
      href: `/${params.clientId}/support`,
      label: 'Support',
      active: pathname === `/${params.clientId}/support`
    },
    {
      href: `/${params.clientId}/insights`,
      label: 'Insights',
      active: pathname === `/${params.clientId}/insights`
    },
    {
      href: `/${params.clientId}/sales`,
      label: 'Sales',
      active: pathname === `/${params.clientId}/sales`
    },
    {
      href: `/${params.clientId}/docs`,
      label: 'Docs',
      active: pathname === `/${params.clientId}/docs`
    },
    {
      href: `/${params.clientId}/settings`,
      label: 'Settings',
      active: pathname === `/${params.clientId}/settings`
    }
  ]

  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x', className)}>
      {routes.map(route => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'test-sm font-medium transition-colors hover:text-primary',
            route.active
              ? 'text-black dark:text-white'
              : 'text-muted-foreground'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
