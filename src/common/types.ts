import { type ReactNode } from 'react'

export type LayoutProps = {
  children: ReactNode
  params: Promise<Record<string, any>>
}

export type PageProps = {
  params: Promise<Record<string, any>>
  searchParams: Record<string, string | string[] | undefined>
}

export type ErrorProps = {
  error: Error
  reset: () => void
}

export type RouteProps = {
  params: Promise<Record<string, string>>
}
