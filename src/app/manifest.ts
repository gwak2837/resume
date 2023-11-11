import {
  CANONICAL_URL,
  APPLICATION_NAME,
  APPLICATION_SHORT_NAME,
  DESCRIPTION,
  THEME_COLOR,
} from '../common/constants'

import { type MetadataRoute } from 'next'

// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: CANONICAL_URL,
    name: APPLICATION_NAME,
    short_name: APPLICATION_SHORT_NAME,
    description: DESCRIPTION,
    start_url: '/',
    display: 'fullscreen',
    background_color: '#fff',
    theme_color: THEME_COLOR,
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
