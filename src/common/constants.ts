export const NODE_ENV = process.env.NODE_ENV as string
export const PROJECT_ENV = process.env.PROJECT_ENV as string
export const NEXT_PUBLIC_PROJECT_ENV = process.env.NEXT_PUBLIC_PROJECT_ENV as string

const NEXT_PUBLIC_VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL as string
const NEXT_PUBLIC_VERCEL_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV as string

export const NEXT_PUBLIC_GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string
export const NEXT_PUBLIC_GA_ID = process.env.NEXT_PUBLIC_GA_ID as string

export const APPLICATION_NAME = '이력서 - 곽태욱' // = site.webmanifest name
export const APPLICATION_SHORT_NAME = '이력서' // = site.webmanifest short_name
export const SUBJECT = '이력서'
export const KEYWORDS = `${APPLICATION_SHORT_NAME},gwak2837` // 최대 10개
export const AUTHOR = '곽태욱(Taeuk Gwak)'
export const CANONICAL_URL =
  NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? 'https://gwak2837.vercel.app'
    : NEXT_PUBLIC_VERCEL_ENV === 'preview'
    ? `https://${NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000'

export const localStorage = globalThis.localStorage
export const sessionStorage = globalThis.sessionStorage
