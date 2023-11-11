'use client'

import { useEffect } from 'react'

type Props = {
  lang: string
}

export default function LanguageUpdate({ lang }: Props) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return null
}
