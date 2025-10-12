import Image from 'next/image'
import { ReactNode } from 'react'

import { heroDict } from './dictionary/hero'

type Props = {
  lang: 'ko' | 'en' | 'zh' | 'ja'
}

// SVG Icons as constants
const ICONS = {
  phone: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  ),
  email: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  externalLink: (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  ),
}

// Reusable contact link component
const ContactLink = ({
  href,
  icon,
  children,
  className = '',
}: {
  href: string
  icon: ReactNode
  children: ReactNode
  className?: string
}) => (
  <a href={href} className={`inline-flex items-center gap-2 text-gray-700 transition ${className}`}>
    {icon}
    <span className="font-medium">{children}</span>
  </a>
)

// Reusable external link component
const ExternalLink = ({
  href,
  children,
}: {
  href: string
  children: ReactNode
  showIcon?: boolean
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="transition inline-flex items-center gap-1"
  >
    {children}
  </a>
)

// Info section component
const InfoSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <div>
    <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">{title}</h2>
    <dl className="space-y-3">{children}</dl>
  </div>
)

// Info item component
const InfoItem = ({ label, children }: { label: string; children: ReactNode }) => (
  <div>
    <dt className="text-sm text-gray-500">{label}</dt>
    <dd className="text-sm font-medium text-gray-900">{children}</dd>
  </div>
)

// Social link component
const SocialLink = ({ href, icon, text }: { href: string; icon: string; text: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition"
  >
    <Image src={icon} alt={text.split('/')[0]} width={16} height={16} className="opacity-80" />
    {text}
  </a>
)

const socialLinks = [
  {
    href: 'https://github.com/gwak2837',
    icon: '/images/github.svg',
    text: 'github.com/gwak2837',
  },
  {
    href: 'https://www.linkedin.com/in/gwak2837/',
    icon: '/images/LinkedIn_icon.svg',
    text: 'linkedin.com/in/gwak2837',
  },
  { href: 'https://velog.io/@gwak2837', icon: '/images/velog.png', text: 'velog.io/@gwak2837' },
]

export default function Hero({ lang }: Props) {
  return (
    <div className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
      {/* Header Section with Profile */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 px-8 py-6">
        <div className="flex flex-row items-start gap-6">
          {/* Profile Image */}
          <Image
            src="/images/profile.webp"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md"
            alt="profile"
            width={150}
            height={150}
            priority
          />

          {/* Name and Title */}
          <div className="flex-1 text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">{heroDict.이름[lang]}</h1>
            <p className="text-xl text-gray-600 mb-3">{heroDict.jobTitle[lang]}</p>

            {/* Primary Contact - Most Important for Interviewers */}
            <div className="flex flex-col sm:flex-row gap-3 text-sm">
              <ContactLink href="tel:010-9203-2837" icon={ICONS.phone}>
                +82 10-9203-2837
              </ContactLink>
              <span className="hidden sm:inline text-gray-300">|</span>
              <ContactLink href="mailto:gwak2837@google.com" icon={ICONS.email}>
                gwak2837@google.com
              </ContactLink>
            </div>
          </div>

          {/* Quick Status Badge */}
          <div className="ml-auto">
            <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              <span className="relative flex w-2 h-2 mr-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex w-full rounded-full bg-green-500" />
              </span>
              {heroDict.availableStatus[lang]}
            </span>
          </div>
        </div>
      </div>

      {/* Information Grid - Clear Sections */}
      <div className="p-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Column 1: Basic Information */}
          <InfoSection title={heroDict.basicInfoTitle[lang]}>
            <InfoItem label={heroDict.birthLabel[lang]}>{heroDict.생일[lang]}</InfoItem>
            <InfoItem label={heroDict.locationLabel[lang]}>
              <ExternalLink href="https://naver.me/Fcg2bYyc">{heroDict.주소[lang]}</ExternalLink>
            </InfoItem>
            <InfoItem label={heroDict.interestsLabel[lang]}>{heroDict.interests[lang]}</InfoItem>
          </InfoSection>

          {/* Column 2: Education & Military */}
          <InfoSection title={heroDict.educationServiceTitle[lang]}>
            <InfoItem label={heroDict.degreeLabel[lang]}>
              <ExternalLink href="/images/학위증.webp">{heroDict.학위[lang]}</ExternalLink>
            </InfoItem>
            <InfoItem label={heroDict.militaryLabel[lang]}>
              <ExternalLink href="/pdf/병적증명서.pdf">{heroDict.병역[lang]}</ExternalLink>
              <ul className="mt-2 ml-2 space-y-1 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <a href="/images/2023-military.webp" target="_blank" className="transition">
                    {heroDict.KATUSA[lang]}
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  {heroDict.ROTC[lang]}
                </li>
              </ul>
            </InfoItem>
          </InfoSection>

          {/* Column 3: Contact & Links */}
          <InfoSection title={heroDict.other[lang]}>
            <InfoItem label={heroDict.onlineProfilesLabel[lang]}>
              <div className="space-y-1 mt-2">
                {socialLinks.map((link) => (
                  <SocialLink key={link.href} {...link} />
                ))}
              </div>
            </InfoItem>
          </InfoSection>
        </div>
      </div>
    </div>
  )
}
