/* eslint-disable @next/next/no-img-element */
type Props = {
  href: string
  alt: string
  bgColor: string
  logoColor?: string
  logo?: string
}

export default function ShieldBadge({
  href,
  alt,
  bgColor,
  logoColor = 'white',
  logo = alt,
}: Props) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img
        src={`https://img.shields.io/badge/${alt}-${bgColor}?style=flat-square&logo=${logo}&logoColor=${logoColor}`}
        alt={alt}
      />
    </a>
  )
}
