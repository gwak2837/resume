import RidiLogo from '../../svg/RidiLogo'

import { workExperiencesDict } from './dictionary/work-experiences'

import Image from 'next/image'
import { PropsWithChildren, ReactNode } from 'react'

type Props = {
  lang: 'ko' | 'en' | 'zh' | 'ja'
}

const TimelineDot = ({
  children,
  className = 'bg-blue-100 text-blue-700',
}: {
  children: ReactNode
  className?: string
}) => (
  <div
    className={`absolute left-0 top-2 w-16 h-16 rounded-full flex items-center justify-center ${className}`}
  >
    <span className="text-xs font-bold">{children}</span>
  </div>
)

const ExperienceCard = ({ children }: PropsWithChildren) => (
  <div className="ml-24 bg-white rounded-xl border-2 border-gray-200 p-6">{children}</div>
)

const CompanyInfo = ({ children }: PropsWithChildren) => (
  <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600">{children}</div>
)

const TechBadge = ({ tech }: { tech: string }) => (
  <span className="px-2 py-1 bg-gray-100 rounded text-xs">{tech}</span>
)

const Achievement = ({ children }: PropsWithChildren) => (
  <div className="flex items-start gap-2">
    <span className="text-green-500 mt-px">•</span>
    <div>{children}</div>
  </div>
)

const PositionDetails = ({
  title,
  team,
  period,
  open = true,
  children,
}: {
  title: string
  team: ReactNode
  period: string
  open?: boolean
  children: ReactNode
}) => (
  <details className="group" open={open}>
    <summary className="cursor-pointer list-none">
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg transition">
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-gray-700">{team}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">{period}</span>
          <svg
            className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </summary>
    <div className="p-4 space-y-3">{children}</div>
  </details>
)

export default function WorkExperiences({ lang }: Props) {
  return (
    <ul className="space-y-8">
      {/* RIDI */}
      <li className="relative">
        <TimelineDot>{workExperiencesDict.현재[lang]}</TimelineDot>
        <ExperienceCard>
          <div className="flex flex-row justify-between items-start gap-4 mb-4">
            <a
              href="https://www.linkedin.com/company/ridi/"
              className="flex gap-2 items-center"
              target="_blank"
            >
              <h3 className="text-lg font-bold">{workExperiencesDict.리디주[lang]}</h3>
              <RidiLogo />
            </a>
            <a
              href="/pdf/리디-재직증명서-2024.pdf"
              target="_blank"
              className="text-sm whitespace-nowrap"
            >
              {workExperiencesDict.리디_기간[lang]}
            </a>
          </div>
          <CompanyInfo>
            <div>
              {workExperiencesDict.매출[lang]}:{' '}
              <a href="https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20250402003376" target="_blank">
                {workExperiencesDict.리디_매출[lang]}
              </a>
            </div>
            <div>
              {workExperiencesDict.총원[lang]}:{' '}
              <a
                href="https://www.innoforest.co.kr/company/CP00000016/%EB%A6%AC%EB%94%94"
                target="_blank"
              >
                {workExperiencesDict.리디_총원[lang]}
              </a>
            </div>
          </CompanyInfo>
          <p className="text-sm text-gray-700 mb-4">{workExperiencesDict.리디_설명[lang]}</p>
          <div className="space-y-4">
            <PositionDetails
              title={`RIDI ${lang === 'ko' ? '웹' : lang === 'ja' ? 'ウェブ' : 'Web'}`}
              team={workExperiencesDict.리디웹_팀[lang]}
              period={workExperiencesDict.리디웹_기간[lang]}
            >
              <p className="text-sm">{workExperiencesDict.리디웹_설명[lang]}</p>
              <a
                href="https://ridibooks.com"
                target="_blank"
                className="hover:no-underline transition p-1 hover:bg-slate-100 rounded-lg focus:no-underline flex items-center gap-1 w-fit"
              >
                <Image
                  src="/images/ridi-icon.ico"
                  alt="ridi"
                  width="80"
                  height="80"
                  className="w-[16px] border rounded"
                />
                <h5 className="underline-offset-4 text-xs font-medium underline text-black decoration-gray-300">
                  ridibooks.com
                </h5>
              </a>
              <div className="flex flex-wrap gap-1 mb-3">
                {[
                  'React.js',
                  'Next.js',
                  'GraphQL',
                  'PHP',
                  'Node.js',
                  'MySQL',
                  'Playwright',
                  'Sentry',
                  'Datadog',
                ].map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
              <div className="space-y-2">
                <Achievement>
                  <strong className="text-sm">
                    {workExperiencesDict.성과평가[lang]}{' '}
                    <a
                      className="text-xs"
                      href="/pdf/RIDI Track Record Review 기준.pdf"
                      target="_blank"
                    >
                      {workExperiencesDict.성과평가_기준[lang]}
                    </a>
                  </strong>
                  <p className="text-sm text-gray-600 mt-1">
                    {workExperiencesDict.성과평가_결과[lang]}{' '}
                    <a
                      className="text-xs"
                      href="/pdf/RIDI Track Record Review 결과.pdf"
                      target="_blank"
                    >
                      <span>{workExperiencesDict.세부결과[lang]}</span>
                    </a>
                  </p>
                </Achievement>
                <Achievement>
                  <strong className="text-sm">{workExperiencesDict.만화이북_출시[lang]}</strong>
                  <p className="text-sm text-gray-600 mt-1">
                    {workExperiencesDict.만화이북_설명[lang]}
                  </p>
                </Achievement>
                <Achievement>
                  <strong className="text-sm">{workExperiencesDict.AB테스트[lang]}</strong>
                  <p className="text-sm text-gray-600 mt-1">
                    {workExperiencesDict.AB테스트_설명[lang]}
                  </p>
                </Achievement>
                <Achievement>
                  <strong className="text-sm">{workExperiencesDict.E2E테스트[lang]}</strong>
                  <p className="text-sm text-gray-600 mt-1">
                    {workExperiencesDict.E2E테스트_설명[lang]}
                  </p>
                </Achievement>
                <Achievement>
                  <strong className="text-sm">{workExperiencesDict.백엔드API개발[lang]}</strong>
                  <p className="text-sm text-gray-600 mt-1">
                    {workExperiencesDict.백엔드API개발_REST[lang]}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {workExperiencesDict.백엔드API개발_GraphQL[lang]}
                  </p>
                </Achievement>
              </div>
            </PositionDetails>
            <PositionDetails
              title="Manta - Unlimited Comics"
              team={workExperiencesDict.만타_팀[lang]}
              period={workExperiencesDict.만타_기간[lang]}
            >
              <p className="text-sm">{workExperiencesDict.만타_설명[lang]}</p>
              <div className="flex flex-wrap gap-0.5">
                {[
                  { href: 'https://manta.net/en', label: 'manta.net' },
                  {
                    href: 'https://play.google.com/store/apps/details?id=net.manta.comic&hl=en&gl=US&pli=1',
                    label: 'Google Play',
                  },
                  {
                    href: 'https://apps.apple.com/kr/app/manta-unlimited-comics/id1536116642',
                    label: 'App Store',
                  },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    className="hover:no-underline transition p-1 hover:bg-slate-100 rounded-lg focus:no-underline flex items-center gap-1 w-fit"
                  >
                    <Image
                      src="/images/manta-logo.png"
                      alt="manta"
                      width="64"
                      height="64"
                      className="w-[16px] border rounded"
                    />
                    <h5 className="underline-offset-4 text-xs font-medium underline text-black decoration-gray-300">
                      {link.label}
                    </h5>
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {['React Native', 'Next.js', 'Redux', 'Sentry'].map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
              <div className="space-y-2">
                <Achievement>
                  <strong className="text-sm">{workExperiencesDict.프랑스어출시[lang]}</strong>
                  <p className="text-sm text-gray-600 mt-1">
                    {workExperiencesDict.프랑스어출시_설명[lang]}
                  </p>
                </Achievement>
                <Achievement>
                  <strong className="text-sm">{workExperiencesDict.연관검색어[lang]}</strong>
                  <p className="text-sm text-gray-600 mt-1">
                    {workExperiencesDict.연관검색어_설명[lang]}
                  </p>
                </Achievement>
                <Achievement>
                  <strong className="text-sm">{workExperiencesDict.센트리오류분류[lang]}</strong>
                  <p className="text-sm text-gray-600 mt-1">
                    {workExperiencesDict.센트리오류분류_설명[lang]}
                  </p>
                </Achievement>
              </div>
            </PositionDetails>
          </div>
        </ExperienceCard>
      </li>

      {/* Toss Bank */}
      <li className="relative">
        <TimelineDot className="bg-purple-100 text-purple-700">2023</TimelineDot>
        <ExperienceCard>
          <div className="flex flex-row justify-between items-start gap-4 mb-4">
            <a
              href="https://www.linkedin.com/company/toss-bank/"
              className="flex gap-2 items-center"
              target="_blank"
            >
              <h3 className="text-lg font-bold">{workExperiencesDict.토스뱅크주[lang]}</h3>
              <Image
                src="/images/TossBank_Logo_Primary.png"
                alt="tossbank"
                width="4000"
                height="711"
                className="h-5 w-fit"
              />
            </a>
            <a
              href="/pdf/토스뱅크-경력증명서.pdf"
              target="_blank"
              className="text-sm whitespace-nowrap"
            >
              {workExperiencesDict.토스뱅크_기간[lang]}
            </a>
          </div>
          <CompanyInfo>
            <div>
              {workExperiencesDict.매출[lang]}:{' '}
              <a href="https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20240404002475" target="_blank">
                {workExperiencesDict.토스뱅크_매출[lang]}
              </a>
            </div>
            <div>
              {workExperiencesDict.총원[lang]}:{' '}
              <a
                href="https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20240404002475&dcmNo=9834643"
                target="_blank"
              >
                {workExperiencesDict.토스뱅크_총원[lang]}
              </a>
            </div>
          </CompanyInfo>
          <p className="text-sm text-gray-700 mb-4">{workExperiencesDict.토스뱅크_설명[lang]}</p>
          <div className="space-y-4">
            <PositionDetails
              title={workExperiencesDict.루모스[lang]}
              team={workExperiencesDict.루모스_팀[lang]}
              period={workExperiencesDict.루모스_기간[lang]}
            >
              <p className="text-sm">{workExperiencesDict.루모스_설명[lang]}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {['Next.js 13', 'Toss Design System', 'React Query'].map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
              <div className="space-y-2">
                <Achievement>
                  <strong className="text-sm">{workExperiencesDict.전월세보증금대출[lang]}</strong>
                  <p className="text-sm text-gray-600 mt-1">
                    {workExperiencesDict.전월세보증금대출_설명[lang]}
                  </p>
                </Achievement>
                <Achievement>
                  <strong className="text-sm">{workExperiencesDict.CI최적화[lang]}</strong>
                  <p className="text-sm text-gray-600 mt-1">
                    {workExperiencesDict.CI최적화_설명[lang]}
                  </p>
                </Achievement>
                <Achievement>
                  <strong className="text-sm">{workExperiencesDict.선언형프로그래밍[lang]}</strong>
                  <p className="text-sm text-gray-600 mt-1">
                    {workExperiencesDict.선언형프로그래밍_설명[lang]}
                  </p>
                </Achievement>
              </div>
            </PositionDetails>
          </div>
        </ExperienceCard>
      </li>
    </ul>
  )
}
