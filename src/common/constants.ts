import { getISODate } from '../util/date'

export const NODE_ENV = process.env.NODE_ENV as string
export const PROJECT_ENV = process.env.PROJECT_ENV as string
export const NEXT_PUBLIC_PROJECT_ENV = process.env.NEXT_PUBLIC_PROJECT_ENV as string

const NEXT_PUBLIC_VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL as string
const NEXT_PUBLIC_VERCEL_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV as string

export const NEXT_PUBLIC_GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string
export const NEXT_PUBLIC_GA_ID = process.env.NEXT_PUBLIC_GA_ID as string

// 상수
export const APPLICATION_NAME = `${getISODate(new Date())} 이력서 포트폴리오`
export const APPLICATION_SHORT_NAME = `${getISODate(new Date())} 이력서 포트폴리오`
export const DESCRIPTION = '이력서'
export const KEYWORDS = `${APPLICATION_SHORT_NAME},이력서,resume,포트폴리오,portpolio` // 최대 10개
export const CATEGORY = '이력서'
export const AUTHOR = ''
export const THEME_COLOR = '#bae6fd'
export const CANONICAL_URL =
  NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? 'https://gwak2837.vercel.app'
    : NEXT_PUBLIC_VERCEL_ENV === 'preview'
    ? `https://${NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000'
