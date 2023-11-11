import { type ReactNode } from 'react'

export type LayoutProps = {
  children: ReactNode
  params: Record<string, any>
}

export type PageProps = {
  params: Record<string, any>
  searchParams: Record<string, string | string[] | undefined>
}

export type ErrorProps = {
  error: Error
  reset: () => void
}

export type RouteProps = {
  params: Record<string, string>
}
