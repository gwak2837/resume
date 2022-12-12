import { APPLICATION_SHORT_NAME, CANONICAL_URL } from '../common/constants'

export default function HomeHead() {
  const title = '이력서'
  const description = '이력서'

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/og-image.webp" />
      <meta property="og:image:alt" content={`${APPLICATION_SHORT_NAME} 로고`} />
      <meta property="og:url" content={`${CANONICAL_URL}`} />
    </>
  )
}
