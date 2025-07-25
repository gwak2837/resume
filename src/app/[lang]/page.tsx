import { APPLICATION_NAME } from '../../common/constants'
import { PageProps } from '../../common/types'
import FestaLogo from '../../svg/FestaLogo'
import PlanbyLogo from '../../svg/PlanbyLogo'
import { getISODate } from '../../util/date'

import Certificates from './Certificates'
import { generalDict } from './dictionary/general'
import Education from './Education'
import Hero from './Hero'
import LanguageUpdate from './LanguageUpdate'
import OtherCertificates from './OtherCertificates'
import Portpolio from './Portpolio'
import ShieldBadge from './ShieldBadge'
import WorkExperiences from './WorkExperiences'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

export async function generateStaticParams() {
  return [{ lang: 'ko' }, { lang: 'en' }, { lang: 'zh' }, { lang: 'ja' }]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = (await params).lang as 'ko' | 'en' | 'zh' | 'ja'

  if (lang === 'ko') {
    return { title: APPLICATION_NAME }
  } else if (lang === 'en') {
    return { title: `Taeuk Gwak ${getISODate(new Date())} Resume Portpolio` }
  } else if (lang === 'zh') {
    return { title: `郭泰昱 ${getISODate(new Date())} 履历书 作品集` }
  } else if (lang === 'ja') {
    return { title: `郭泰昱 ${getISODate(new Date())} 履歴書 ポートフォリオ` }
  }

  return { title: APPLICATION_NAME }
}

export default async function HomePage({ params }: PageProps) {
  const lang = (await params).lang as 'ko' | 'en' | 'zh' | 'ja'
  const date = generalDict.작성일[lang]

  return (
    <main className="mx-auto max-w-[720px]">
      <LanguageUpdate lang={lang} />
      <div className="flex justify-end items-center">
        <h1 className="sr-only">{generalDict.이력서[lang]}</h1>
        <div className="flex whitespace-nowrap gap-2">
          <Link href="/ko">한국어</Link>
          <Link href="/en">English</Link>
          <Link href="/zh">中文</Link>
          <Link href="/ja">日本語</Link>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="mb-12">
        <h2 className="bg-none text-2xl my-4 text-center">
          다만, 사랑하고 살아가는 프론트엔드 개발자
        </h2>
        <Hero lang={lang} />
        <p className="my-4">{generalDict.한줄소개[lang]}</p>
      </section>

      {/* 경력 */}
      <section id="work-experience" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h2 className="text-3xl font-bold">
            {generalDict.개발경력[lang]}{' '}
            <span className="text-sm font-semibold text-gray-600">
              {generalDict.경력기간[lang](date)}
            </span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
          <WorkExperiences lang={lang} />
        </div>
      </section>

      {/* 학력 */}
      <section id="education" className="mb-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {' '}
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />{' '}
            </svg>
            <h2 className="text-3xl font-bold">{generalDict.학력[lang]}</h2>
          </div>
          <Education lang={lang} />
        </div>
      </section>

      {/* 자격증 */}
      <section id="certificate" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <svg
            className="w-8 h-8 text-yellow-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <h2 className="text-3xl font-bold">자격증</h2>
        </div>
        <Certificates />
        <OtherCertificates />
      </section>

      {/* 기술 스택 */}
      <section id="skill" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <svg
            className="w-8 h-8 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <h2 className="text-3xl font-bold">기술 스택</h2>
        </div>
        <h4 className="my-2">Language</h4>
        <div className="flex gap-1">
          <ShieldBadge
            href="https://javascript.info/"
            alt="ES2023"
            logo="JavaScript"
            logoColor="black"
            bgColor="F7DF1E"
          />
          <ShieldBadge href="https://www.typescriptlang.org/" alt="TypeScript" bgColor="235A97" />
          <ShieldBadge
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            alt="CSS3"
            logo="CSS"
            bgColor="663399"
          />
          <ShieldBadge href="https://www.python.org/" alt="Python" bgColor="3776AB" />
          <ShieldBadge href="https://en.wikipedia.org/wiki/SQL" alt="SQL" bgColor="003B57" />
        </div>
        <h4 className="my-2">Frontend</h4>
        <div className="grid gap-1">
          <div className="flex gap-1">
            <ShieldBadge
              href="https://nextjs.org/"
              alt="Next.js App router"
              logo="next.js"
              bgColor="000000"
            />
            <ShieldBadge
              href="https://react.dev/"
              alt="React.js"
              logo="react"
              logoColor="black"
              bgColor="61DAFB"
            />
            <ShieldBadge
              href="https://tailwindcss.com/"
              alt="Tailwind"
              logo="tailwindcss"
              bgColor="06B6D4"
            />
            <ShieldBadge href="https://zustand-demo.pmnd.rs/" alt="Zustand" bgColor="3578e5" />
            <ShieldBadge
              href="https://playwright.dev/"
              alt="Playwright"
              logo="Playwright"
              bgColor="45ba4b"
            />
            <ShieldBadge href="https://web.dev/progressive-web-apps/" alt="PWA" bgColor="5A0FC8" />
            <ShieldBadge
              href="https://reactnative.dev/"
              alt="React Native"
              logo="react"
              logoColor="black"
              bgColor="61DAFB"
            />
          </div>
        </div>
        <h4 className="my-2">Backend</h4>
        <div className="grid gap-1">
          <div className="flex gap-1">
            <ShieldBadge href="https://nodejs.org/en/" alt="Node.js" bgColor="43853D" />
            <ShieldBadge href="https://socket.io/" alt="Socket.IO" bgColor="010101" />
            <ShieldBadge
              href="https://orm.drizzle.team/"
              alt="Drizzle"
              bgColor="C5F74F"
              logoColor="black"
            />
            <ShieldBadge href="https://www.docker.com/" alt="Docker" bgColor="2496ED" />
            <ShieldBadge href="https://www.postgresql.org/" alt="PostgreSQL" bgColor="4169E1" />
            <ShieldBadge href="https://redis.io/" alt="Redis" bgColor="DC382D" />
            <ShieldBadge
              href="https://www.elastic.co/kr"
              alt="Elasticsearch, Kibana"
              logo="elastic"
              bgColor="005571"
            />
          </div>
        </div>
        <h4 className="my-2">Cloud</h4>
        <div className="grid gap-1">
          <div className="flex gap-1">
            <ShieldBadge href="https://vercel.com/" alt="Vercel" bgColor="000000" />
            <ShieldBadge href="https://supabase.com/" alt="Supabase" bgColor="3FCF8E" />
            <ShieldBadge href="https://www.cloudflare.com/" alt="Cloudflare" bgColor="F38020" />
            <ShieldBadge
              href="https://cloud.google.com/gcp/"
              alt="Cloud Run, Cloud Storage, Cloud SQL"
              logo="Google Cloud"
              bgColor="4285F4"
            />
            <ShieldBadge
              href="https://aws.amazon.com/ko/"
              alt="AWS - RDS, EC2, S3"
              bgColor="232F3E"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <h4 className="my-2">Operation Tool</h4>
            <div className="grid gap-1">
              <div className="flex gap-1">
                <ShieldBadge href="https://vitest.dev/" alt="Vitest" bgColor="6E9F18" />
                <ShieldBadge href="https://sentry.io/welcome/" alt="Sentry" bgColor="362D59" />
                <ShieldBadge href="https://datadoghq.com/" alt="Datadog" bgColor="632CA6" />
                <ShieldBadge
                  href="https://analytics.google.com/analytics/web/"
                  alt="GA"
                  logo="Google Analytics"
                  bgColor="E37400"
                />
                <ShieldBadge href="https://amplitude.com/" alt="Amplitude" bgColor="1e61f0" />
                <ShieldBadge href="https://www.growthbook.io/" alt="GrowthBook" bgColor="590dbd" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="my-2">AI</h4>
            <div className="flex gap-1">
              <ShieldBadge
                href="https://github.com/comfyanonymous/ComfyUI"
                alt="ComfyUI"
                bgColor="F0FF41"
              />
              <ShieldBadge
                href="https://github.com/bmaltais/kohya_ss"
                alt="LoRA"
                bgColor="1F1E37"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 개발 경험 */}
      <section id="development-experience" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h2 className="text-3xl font-bold">
            개발 경험{' '}
            <span className="text-sm font-semibold text-gray-600">(급여 O, 4대보험 X)</span>
          </h2>
        </div>
        <ul>
          {[
            {
              이름: (
                <a
                  href="https://www.linkedin.com/company/planby-technologies/about/"
                  className="flex gap-2 items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3 className="w-fit">(주)플랜바이테크놀로지스</h3>
                  <PlanbyLogo height="19" />
                </a>
              ),
              기간: (
                <div>
                  2023.11.07 ~ 11.26 (3주),{' '}
                  <a href="/pdf/플랜바이테크놀로지스.pdf" target="_blank">
                    2023.07.24 ~ 08.06 (2주)
                  </a>
                </div>
              ),
              직책: 'Frontend Developer',
              부서: '개발팀 (4명)',
              역할: (
                <>
                  <a href="https://planby.us/" target="_blank" rel="noreferrer">
                    'HOMI AI - 인공지능이 꾸며주는 나의 공간'
                  </a>{' '}
                  인테리어 디자인 AI 자동화 MVP 개발
                </>
              ),
            },
            {
              이름: (
                <a
                  href="https://www.saramin.co.kr/zf_user/company-info/view?csn=eFE2Qks5TzVpanROVE5pQW9ZbGMyZz09"
                  className="flex gap-2 items-center"
                  target="_blank"
                >
                  <h3 className="w-fit">(주)더하트컴퍼니</h3>
                  <Image
                    src="/images/theheartcompany-logo.png"
                    alt="theheartcompany"
                    width="56"
                    height="24"
                  />
                </a>
              ),
              기간: (
                <a href="/pdf/더하트컴퍼니.pdf" target="_blank">
                  2022.02.14 ~ 03.13 (1개월)
                </a>
              ),
              직책: 'Frontend Developer 팀장',
              부서: '개발팀 (2명)',
              역할: (
                <>
                  <a href="https://www.instagram.com/be_myseason/" target="_blank" rel="noreferrer">
                    '비마이시즌 - 다시 일하고 싶은 여성의 상호성장 플랫폼'
                  </a>{' '}
                  MVP 개발
                </>
              ),
            },
            {
              이름: (
                <div className="flex gap-2 items-center">
                  <a
                    href="https://www.linkedin.com/company/%EC%A3%BC-%EC%95%8C%ED%8C%8C%EC%B9%B4%EC%82%B4%EB%A1%B1/about/"
                    className="flex gap-2 items-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className="w-fit">(주)알파카살롱</h3>
                    <Image
                      src="/images/알파카살롱-logo.jpg"
                      alt="알파카살롱"
                      width="72"
                      height="24"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/%EB%A6%AC%ED%8A%B8%EB%A6%AC%EB%B2%84%EC%82%B4%EB%A1%B1/"
                    target="_blank"
                  >
                    (現 리트리버살롱)
                  </a>
                </div>
              ),
              기간: (
                <a href="/pdf/알파카살롱.pdf" target="_blank">
                  2021.11.09 ~ 2022.02.08 (3개월)
                </a>
              ),
              직책: 'Full stack Developer 팀장',
              부서: '개발팀 (3명)',
              역할: "'4050 여성 전용 커뮤니티' 알파카살롱 기획 및 MVP 개발",
            },
            {
              이름: (
                <a href="http://www.beyondcoding.kr/about.php" target="_blank" rel="noreferrer">
                  <h3 className="w-fit">비욘드코딩 (코딩학원)</h3>
                </a>
              ),
              기간: <div>2021.08.25 ~ 09.30 (1개월)</div>,
              직책: '웹 개발 수업 강사',
              부서: '초중등반 (6명)',
              역할: '초등학생/중학생을 대상으로 HTML/CSS/JS 개념 및 자기소개 웹페이지 제작 수업 (주 2회, 1회 3시간)',
            },
            {
              이름: (
                <a
                  href="https://kimstudy.com/tutor/379acc6f-43dd-4544-8e99-54dc4e2e6b1f"
                  target="_blank"
                >
                  <h3 className="w-fit">개인 과외</h3>
                </a>
              ),
              기간: (
                <a href="/pdf/김과외.pdf" target="_blank">
                  2021.08.09 ~ 2022.02.06 (6개월)
                </a>
              ),
              직책: '',
              부서: '',
              역할: (
                <>
                  대학생을 대상으로 Frontend·Backend·Cloud 개념, 네트워크 OSI 계층,{' '}
                  <a
                    href="https://velog.io/@gwak2837/Next.js-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0"
                    target="_blank"
                  >
                    SSR·CSR·SSG
                  </a>
                  , Database 개념 수업 및 인스타그램 클론 코딩 수업 (주 3회, 1회 2시간)
                </>
              ),
            },
            {
              이름: (
                <a href="http://pmcm.cau.ac.kr/" target="_blank" rel="noreferrer">
                  <h3 className="w-fit">중앙대학교 건설경영정보 연구실 (김경주 교수)</h3>
                </a>
              ),
              기간: (
                <a href="/images/2021-cau-lab.webp" target="_blank">
                  2021.06.01 ~ 08.31 (3개월)
                </a>
              ),
              직책: 'Frontend Developer 팀장 (참여연구원)',
              부서: '개발팀 (2명)',
              역할: "'3차) 블록체인 기술을 이용한 해외 건설프로젝트 스마트 분쟁관리 모델구축 연구' 과제 참여. 건설 프로젝트 수주 협상 과정에서 주고 받는 이메일을 블록체인 상에 관리하여 추후 분쟁 발생 여지를 최소화하는 사이트 개발",
            },
            {
              이름: (
                <div className="flex gap-2 items-center">
                  <a
                    href="https://www.linkedin.com/company/festaio/"
                    className="flex gap-2 items-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className="w-fit">(주)페스타</h3>
                    <FestaLogo />
                  </a>
                  <a href="https://www.sedaily.com/NewsView/264PCFEN6T" target="_blank">
                    (現 당근마켓 피인수 기업)
                  </a>
                </div>
              ),
              기간: (
                <a href="/pdf/페스타.pdf" target="_blank">
                  2020.09.01 ~ 12.31 (4개월)
                </a>
              ),
              직책: 'Frontend Developer',
              부서: '개발팀 (4명)',
              역할: (
                <>
                  <a href="https://festa.io/" target="_blank" rel="noreferrer">
                    '페스타 - 온·오프라인 이벤트 티켓 및 고객 관리 서비스'
                  </a>{' '}
                  Admin(관리자) 서비스 기획 및 개발
                </>
              ),
            },
            {
              이름: (
                <a
                  href="https://www.saramin.co.kr/zf_user/company-info/view?csn=VHFyWXhFL2E1N1hYMkhEZmUxK05SZz09"
                  className="flex gap-2 items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3 className="w-fit">(주)행복한 다람쥐단</h3>
                  <Image
                    src="/images/happydaram-logo.webp"
                    alt="행복한다람쥐단"
                    width="28"
                    height="25"
                  />
                </a>
              ),
              기간: (
                <div>
                  <a href="/images/2019-happydaram.webp" target="_blank">
                    2019.12.23
                  </a>{' '}
                  ~{' '}
                  <a href="/images/2019-happydaram2.webp" target="_blank">
                    2020.02.21 (2개월)
                  </a>
                </div>
              ),
              직책: 'Frontend Developer',
              부서: '개발부 (3명)',
              역할: "'방탈출 리뷰 웹사이트' 기획·디자인 및 MVP 개발",
            },
            {
              이름: <h3 className="w-fit">중앙대학교 2019년 2학기 SW 기초 교과목 멘토</h3>,
              기간: <div>2019.09.16 ~ 12.13 (3개월)</div>,
              직책: '수업 조교 (근로장학생)',
              부서: "'컴퓨팅적 사고와 문제 해결' 과목",
              역할: '수업 중 수강생의 Scratch 프로그래밍 관련 질의 응답 및 과제 채점 (주 2회, 1회 2시간)',
            },
            {
              이름: (
                <a href="https://web.cau.ac.kr/energy/index.htm" target="_blank" rel="noreferrer">
                  <h3 className="w-fit">중앙대학교 에너지 및 복사특성 연구실 (김태국 교수)</h3>
                </a>
              ),
              기간: (
                <a href="/images/2019-cau-lab.webp" target="_blank">
                  2019.04.01 ~ 08.31 (5개월)
                </a>
              ),
              직책: 'Software Developer (참여연구원)',
              부서: '개발팀 (2명)',
              역할: "'KFX IR 해석 기법 및 해석 소프트웨어 개발 연구' 과제 참여. 적외선 영상 통계 분석 개발 보조 (C++), OpenMP 라이브러리 기반 병렬처리로 수학 계산 성능 최적화",
            },
            {
              이름: (
                <a
                  href="https://www.saramin.co.kr/zf_user/company-info/view/csn/b2ZtOGw4SWdmTldhbjVLK2pqNzdDZz09/company_nm/(%EC%A3%BC)%EB%A6%AC%EC%84%9C%EC%B9%98%EB%9E%A9"
                  className="flex gap-2 items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3 className="w-fit">(주)리서치랩</h3>
                  <Image src="/images/researchlab-logo.jpg" alt="리서치랩" width="69" height="20" />
                </a>
              ),
              기간: (
                <a href="/images/2017-researchlab.webp" target="_blank">
                  2017.07.31 ~ 08.25 (1개월)
                </a>
              ),
              직책: 'Data Analyst',
              부서: '연구4팀 (10명)',
              역할: '여론 조사 데이터 통계 분석 및 엑셀 함수 작성',
            },
          ].map(({ 이름, 기간, 직책, 부서, 역할 }, i) => (
            <Fragment key={i}>
              <li>
                <div className="grid grid-cols-2 items-center gap-4 my-4">
                  {이름}
                  {기간}
                </div>
                <div className="grid grid-cols-2 gap-x-4">
                  {직책 && <div>직책: {직책}</div>}
                  {부서 && <div>부서: {부서}</div>}
                  <div className="col-span-2">역할: {역할}</div>
                </div>
              </li>
              <div className="border last-of-type:hidden w-full my-5" />
            </Fragment>
          ))}
        </ul>
      </section>

      {/* 개발 활동 */}
      <section id="activity" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h2 className="text-3xl font-bold">
            개발 활동 <span className="text-sm font-semibold text-gray-600">(급여 X)</span>
          </h2>
        </div>
        <ul>
          {[
            {
              이름: (
                <a
                  href="https://swedu.cau.ac.kr/core/program/programview?menuid=001004001002007&programgroupno=8&programno=420"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3 className="w-fit">Purdue University 해외교육</h3>
                </a>
              ),
              기간: (
                <a href="/pdf/Certificates-IITP-Summer-2021-CAU.pdf" target="_blank">
                  2021.07.05 ~ 08.20 (2개월)
                </a>
              ),
              직책: 'Data Labeler (교환학생)',
              부서: '3팀 (지도교수 포함 8명)',
              역할: (
                <>
                  <a href="/pdf/IITP_2021_summer_UAV_ground_scanning_system.pdf" target="_blank">
                    'UAV Ground Scanning System'
                  </a>{' '}
                  논문 작성 및 학습 데이터 수집/가공
                </>
              ),
            },
            {
              이름: <h3 className="w-fit">신디(SinDy, Signature in Dessert) 창업</h3>,
              기간: <div>2021.02.08 ~ 11.08 (9개월)</div>,
              직책: 'Full stack Developer 팀장 (공동창업자)',
              부서: '전체(5명) ⊃ 개발팀(2명)',
              역할: "'카페의 특색을 담아내는 사용자 주도 SNS형 디저트 정보 공유 공간' 디저트핏 기획 및 Frontend · Backend · Cloud 개발",
            },
          ].map(({ 이름, 기간, 직책, 부서, 역할 }, i) => (
            <Fragment key={i}>
              <li>
                <div className="grid grid-cols-2 items-center gap-4 my-4">
                  {이름}
                  {기간}
                </div>
                <div className="grid grid-cols-2 gap-x-4">
                  {직책 && <div>직책: {직책}</div>}
                  {부서 && <div>부서: {부서}</div>}
                  <div className="col-span-2">역할: {역할}</div>
                </div>
              </li>
              <div className="border last-of-type:hidden w-full my-5" />
            </Fragment>
          ))}
        </ul>
      </section>

      {/* 수상 */}
      <section id="award" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <svg
            className="w-8 h-8 text-orange-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          <h2 className="text-3xl font-bold">수상</h2>
        </div>
        <ul>
          <li>
            <div className="grid grid-cols-[5fr_3fr_1fr_2fr] gap-4 my-2">
              <a
                href="https://www.ito.or.kr/main/bbs/bbsMsgDetail.do?msg_seq=684&bcd=notice"
                target="_blank"
                rel="noreferrer"
              >
                <b>2022 인천 스마트관광 데이터 아이디어 공모전</b>
              </a>
              <div>인천관광공사</div>
              <div>팀원 2명</div>
              <div>2022.12.09</div>
            </div>
            <div>
              여행일지 자동기록 서비스 아이디어 제시{' '}
              <a
                href="https://www.asiatoday.co.kr/view.php?key=20221216010008397#:~:text=%27%EC%97%AC%ED%96%89%20%EC%9D%BC%EC%A7%80%20%EC%9E%90%EB%8F%99%20%EA%B8%B0%EB%A1%9D%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EA%B8%B0%EB%B0%98%2C%20%EC%9D%B8%EC%B2%9Ce%EC%A7%80%20%EC%95%B1%20%EC%97%AC%ED%96%89%ED%8C%A8%EC%8A%A4%2C%20%EB%A6%AC%EB%B7%B0%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EB%A6%AC%EB%89%B4%EC%96%BC(%ED%8C%80%EC%9E%A5%20%EA%B3%A0%ED%98%84%EC%A4%80)%27"
                rel="noreferrer"
                target="_blank"
              >
                (최우수상, 2등
              </a>
              , 상금 150만원)
            </div>
          </li>
          <div className="border w-full my-6" />
          <li>
            <div className="grid grid-cols-[5fr_3fr_1fr_2fr] gap-4 my-2">
              <a href="https://www.jungle.co.kr/contest/204985" target="_blank" rel="noreferrer">
                <b>MMO 해커톤 2회</b>
              </a>
              <div>
                MMO&nbsp;
                <span className="text-sm">(IT교육회사)</span>
              </div>
              <div>팀원 3명</div>
              <div>2022.11.27</div>
            </div>
            <div>
              결식 아동에게 줄 크리스마스 선물 크라우드펀딩 서비스{' '}
              <a href="/pdf/해커톤 시상_우수상_개발자팀.pdf" target="_blank">
                (우수상, 2등
              </a>
              , 상금 5만원)
            </div>
          </li>
          <div className="border w-full my-6" />
          <li>
            <div className="grid grid-cols-[5fr_3fr_1fr_2fr] gap-4 my-2">
              <a href="https://event-us.kr/pmsolution/event/40979" target="_blank" rel="noreferrer">
                <b>2021 AI 해커톤</b>
              </a>
              <div>제주테크노벨리</div>
              <div>팀원 3명</div>
              <div>2022.01.22</div>
            </div>
            <div>
              식의약용 자생식물 데이터 기반 사업화 서비스 아이디어 제시{' '}
              <a href="/pdf/입상_AHAH(고현준,곽태욱).pdf" target="_blank">
                (입상, 6~15등)
              </a>
            </div>
          </li>
          <div className="border w-full my-6" />
          <li>
            <div className="grid grid-cols-[5fr_3fr_1fr_2fr] gap-4 my-2">
              <a
                href="https://blog.naver.com/khucampustown/222535649294"
                target="_blank"
                rel="noreferrer"
              >
                <b>2021 경희대학교 캠퍼스타운 스타트업 캠퍼 2기</b>
              </a>
              <div>경희대학교 캠퍼스타운</div>
              <div>팀원 5명</div>
              <div>2021.11.01</div>
            </div>
            <div>Sindy 창업팀 추가 선정 (2021.11.01 ~ 2022.08.31, 10개월)</div>
          </li>
          <div className="border w-full my-6" />
          <li>
            <div className="grid grid-cols-[5fr_3fr_1fr_2fr] gap-4 my-2">
              <a
                href="https://youth.posco.com/posco/edu/index.php?mod=incubator&pag=icb01#khwhay"
                target="_blank"
                rel="noreferrer"
              >
                <b>2021년 3차 포스코 창업인큐베이팅스쿨</b>
              </a>
              <div>POSCO</div>
              <div>팀원 5명</div>
              <div>2021.10.18</div>
            </div>
            <div>Sindy 창업팀 선정 (2021.10.18 ~ 10.29, 2주)</div>
          </li>
          <div className="border w-full my-6" />
          <li>
            <div className="grid grid-cols-[5fr_3fr_1fr_2fr] gap-4 my-2">
              <a
                href="https://me.cau.ac.kr/bbs/board.php?bo_table=sub5_1&wr_id=4037&page=34"
                target="_blank"
                rel="noreferrer"
              >
                <b>2021년도 LINC+ Start-up Members</b>
              </a>
              <div>중앙대학교 LINC+</div>
              <div>팀원 5명</div>
              <div>2021.07.01</div>
            </div>
            <div>Sindy 창업팀 선정 (2021.07.01 ~ 12.31, 6개월, 지원금 200만원)</div>
          </li>
          <div className="border w-full my-6" />
          <li>
            <div className="grid grid-cols-[5fr_3fr_1fr_2fr] gap-4 my-2">
              <a
                href="https://www.kised.or.kr/board.es?mid=a10305000000&bid=0006&list_no=2255&act=view"
                target="_blank"
                rel="noreferrer"
              >
                <b>2021 실전창업교육 1기</b>
              </a>
              <div>중소벤처기업부</div>
              <div>팀원 5명</div>
              <div>2021.06.01</div>
            </div>
            <div>Sindy 창업팀 선정 및 2단계 진출 (2021.06.01 ~ 07.31, 2개월)</div>
          </li>
          <div className="border w-full my-6" />
          <li>
            <div className="grid grid-cols-[5fr_3fr_1fr_2fr] gap-4 my-2">
              <a href="https://blog.naver.com/djsepc/222200468576" target="_blank" rel="noreferrer">
                <b>2021 동작구 스타트업 펀딩 사업</b>
              </a>
              <div>동작구청</div>
              <div>팀원 5명</div>
              <div>2021.02.05</div>
            </div>
            <div>Sindy 창업팀 선정 (2021.02.05 ~ 11.30, 10개월, 지원금 500만원)</div>
          </li>
          <div className="border w-full my-6" />
          <li>
            <div className="grid grid-cols-[5fr_3fr_1fr_2fr] gap-4 my-2">
              <a
                href="https://www.donga.com/news/Society/article/all/20201217/104493689/2"
                target="_blank"
                rel="noreferrer"
              >
                <b>2020년 C-디자인씽킹 아카데미 경진대회</b>
              </a>
              <div>중앙대 다빈치학습혁신원</div>
              <div>팀원 5명</div>
              <div>2020.12.03</div>
            </div>
            <div>'버려지는 소재를 새로운 순환으로'를 주제로 사업계획서 작성</div>
            <div>
              '온라인 새활용 제품 유통 플랫폼' 기획으로{' '}
              <a href="/images/2020-C-디자인씽킹-아카데미.jpeg" target="_blank">
                대상(1등)
              </a>{' '}
              수상 및 특허 출원
            </div>
          </li>
          <div className="border w-full my-6" />
          <li>
            <div className="grid grid-cols-[5fr_3fr_1fr_2fr] gap-4 my-2">
              <b>국가우수장학생 (이공계)</b>
              <div>한국장학재단</div>
              <div>본인</div>
              <a href="/images/2019-scholarship.webp" target="_blank">
                2019.08.14
              </a>
            </div>
            <div>2019-1학기 ~ 2020-2학기 전액장학금 (4개 학기)</div>
          </li>
          <div className="border w-full my-6" />
          <li>
            <div className="grid grid-cols-[5fr_3fr_1fr_2fr] gap-4 my-2">
              <a href="https://onoffmix.com/event/153038" target="_blank" rel="noreferrer">
                <b>BBR BlockCamp 블록체인 해커톤</b>
              </a>
              <div>BBR, 디센터</div>
              <div>팀원 7명</div>
              <div>2018.10.29</div>
            </div>
            <div>
              블록체인 기반 전자투표 시스템(e-voting) 기획 및 개발{' '}
              <a
                href="https://bond687.wixsite.com/bbreview#:~:text=BBR%20Hackathon%20%EC%88%98%EC%83%81%EC%9E%90%20%EB%AA%85%EB%8B%A8"
                rel="noreferrer"
                target="_blank"
              >
                (피칭상, 6등)
              </a>
            </div>
          </li>
        </ul>
      </section>

      {/* 소개 */}
      <section id="about" className="my-12">
        <div className="flex items-center gap-3 mb-6">
          <svg
            className="w-8 h-8 text-indigo-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <h2 className="text-3xl font-bold">소개</h2>
        </div>
        <p className="my-2">
          직접 만든 기프트링크 동아리의 소프트웨어 개발자로 시작해, (주)페스타 인턴, 신디(Sindy)
          창업팀, 토스뱅크(주) 계약직, 리디(주) 정규직 등에서 다양한 프로젝트를 수행하며 서비스가
          세상에 나오기 위한 전체 개발 주기를 경험했습니다. 이 과정에서 서비스의 성공은 동료와의
          협업과 서로의 성장에 기반한다는 사실을 느꼈습니다.
        </p>
        <h3 className="text-lg my-4 ">
          문제 해결 경험 <span className="text-sm font-normal">약 950자</span>
        </h3>
        <p className="my-2">
          제가 난관에 부딪혔을 때 해결했던 사례로 토스뱅크에서의 경험을 말씀드릴 수 있습니다.
          토스뱅크에서 Admin Developer로 근무하며 여신 심사·관리·운영 시스템의 화면 설계와 개발을
          담당하던 중, 금융 분야에 특화된 지식과 여신 도메인에 대한 이해 부족이라는 문제에
          직면했습니다. 단순한 개발 지식만으로는 장님이 코끼리 다리 만지는 방식과 비슷하여, 금융
          도메인 지식을 알지 못하면 복잡한 금융 시스템을 효율적으로 구축할 수 없다는 것을
          깨달았습니다.
        </p>
        <p className="my-2">
          이 문제를 해결하기 위해 먼저 금융 관련 규제와 법률을 조사했습니다. 개인정보보호법과
          은행법의 관련 조항을 검토하여 시스템이 준수해야 할 요건과 제한 사항을 파악했습니다. 특히
          어떤 정보가 필수적으로 마스킹되어야 하는지 확인하기 위해 금융 업계 출신의 팀원들과
          협업하여 실무적인 지식을 습득했습니다. 이 과정에서 주민등록번호와 핸드폰 번호 등 그
          자체만으로 고객을 특정할 수 있는 민감한 정보는 암호화하여 저장하고, 화면에 표시될 때는
          마스킹되어 보여지도록 구현했습니다.
        </p>
        <p className="my-2">
          또한 전월세보증금의 자금 흐름을 명확히 파악하기 위해 대출 프로세스에서 각 주체--임대인,
          임차인, 보증 기관, 금융 기관--간의 역할과 거래 구조를 분석했습니다. 이를 통해 자금이 어떤
          경로로 이동하며, 어떤 주체가 대출금을 어떻게 보증하고, 각 단계에서 필요한 법적 요건과
          컴플라이언스 사항이 무엇인지 이해했습니다. 그 후 전월세보증금 대출의 승인 과정에서 필요한
          문서와 정보를 효율적으로 처리할 수 있도록 루모스(내부 여신 시스템) 워크플로우를 개선하고,
          관련 법률에 따른 보고 및 감사 요구사항을 충족하도록 데이터 관리 방안을 수립하여, 시스템
          설계와 개발 과정에서 서비스의 보안성과 규제 준수성을 높였습니다.
        </p>
        <p className="my-2">
          이러한 경험을 통해 난관에 부딪혔을 때 문제의 근본 원인을 분석하고, 필요한 지식을 습득하며,
          팀원들과의 협업을 통해 해결책을 모색하는 것이 중요하다는 것을 배웠습니다.
        </p>
        <h3 className="text-lg my-4 ">
          직무 성취 경험 <span className="text-sm font-normal">약 900자</span>
        </h3>
        <p className="my-2">
          제가 가장 큰 성취감을 느낄 때는 제가 참여한 프로젝트가 회사와 사용자 모두에게 실질적인
          가치를 제공하고, 그 결과가 명확한 지표로 나타날 때입니다. 저는 사용자와 비즈니스에
          긍정적인 영향을 미치는 결과를 만들어낼 때, 그리고 어려운 문제를 해결하여 팀의 목표 달성에
          기여할 때 가장 큰 성취감을 느낍니다.
        </p>
        <p className="my-2">
          예를 들어, 리디에서 만화 e북 웹 뷰어를 출시한 경험이 있습니다. 이 프로젝트에서는 사용자가
          웹에서 직접 만화를 감상할 수 있도록 기존 뷰어를 개선했습니다. 출시 후 만화 e북 판매 매출이
          전월 대비 3.61% 증가했고, 만화 e북 신규 고객의 웹 뷰어 사용률이 5%로 상승했습니다.
          구체적으로 모바일과 PC 웹 뷰어의 전환율은 각각 8.5%p와 99%p 증가했으며, 뷰어 이탈률은
          5%p와 99%p 감소했습니다. 또한 뷰어 오픈 시간도 각각 91%와 99% 단축되었습니다. 이러한
          성과를 통해 제가 기여한 기술적 개선이 사용자 경험과 비즈니스 성과에 직접적인 영향을
          미쳤음을 확인할 수 있었고, 이는 큰 보람으로 다가왔습니다.
        </p>
        <p className="my-2">
          또한, 난관을 극복하고 새로운 지식을 습득하여 문제를 해결했을 때 성취감을 느낍니다.
          토스뱅크에서 여신 심사·관리·운영 시스템을 개발할 당시, 금융 분야의 전문 지식이 부족하여
          어려움이 있었습니다. 이를 해결하기 위해 금융 관련 규제와 법률을 적극적으로 학습하고, 금융
          업계 출신 팀원들과 협업하여 도메인 지식을 습득했습니다. 전월세보증금 대출 프로세스에서
          자금의 흐름과 각 주체의 역할을 명확히 이해한 후, 시스템에 이를 정확하게 반영했습니다. 그
          결과, 전월세보증금대출 관련 프로세스를 자동화하고 시스템 효율성을 높여 개인 담보대출
          부문에서 약 2,000억 원의 대출 잔액 증가에 기여할 수 있었습니다. 금융 산업의 문제를
          분석하고 해결하여 팀의 목표 달성에 이바지했다는 점에서 큰 만족감을 얻었습니다.
        </p>
        <h3 className="text-lg my-4 ">
          가치관 및 신조 <span className="text-sm font-normal">약 900자</span>
        </h3>
        <p className="my-2">
          저는 개인적인 성장과 팀의 목표 달성을 중시하는 프론트엔드 개발자입니다. 프론트엔드 개발의
          핵심은 사용자 경험 최적화와 고객 간 신뢰 구축에 있다고 믿습니다. 이는 화면에 콘텐츠를
          처음으로 표시하는 시점(First Contentful Paint, FCP)의 최적화와 같은 기술적 세부사항부터
          시작됩니다. 제가 신디 창업팀의 일원으로 '카페 특색을 담은 SNS형 디저트 정보 공유 서비스'
          프로젝트에 참여한 경험은 이러한 신념을 실현하는 과정이었습니다.
        </p>
        <p className="my-2">
          대학에서 컴퓨터공학을 전공하며 팀 프로젝트와 서비스 개발 실무 경험을 쌓기 위해, 신디
          창업팀의 'SNS형 디저트 정보 공유 서비스' 개발에 참여하여 카페와 디저트에 관한 다양한
          아이디어를 모아 초기 MVP(Minimum Viable Product)을 제작했습니다. 하지만 이 MVP는 추후
          설문조사 및 인터뷰를 통해 얻은 고객의 요구사항과 다소 차이가 있었고 추가적인 성능 개선도
          필요했습니다. 이에 신디 개발팀장으로서 팀원의 강점에 맞는 역할을 할당하고 프로젝트 방향을
          설정했습니다. 저는 프론트엔드 개발에서 디자이너에게 사용자 인터페이스에 대한 세밀한
          피드백을 제공했습니다. 또한 백엔드 개발에서 서비스의 사용자 경험을 개선하기 위해 필요한
          데이터만 주고 받도록 해서 데이터 처리의 효율성을 높였고,{' '}
          <a href="https://fe-developers.kakaoent.com/2022/220310-kakaopage-bff/" target="_blank">
            프론트엔드에 최적화된 백엔드 API
          </a>{' '}
          설계에 기여했습니다. 이 프로젝트는 성공적으로 출시되어 월간 사용자 수(Monthly Active User,
          MAU) 5천 명을 달성하는 성과를 이루었습니다.
        </p>
        <p className="my-2">
          개발자는 개인의 파트뿐만 아니라 프로젝트 전체적인 운영에 시야를 갖춰야 합니다. 개발 일정과
          코드 유지보수, 기획 요소를 녹일 수 있는 부분까지 고려하여 최적화된 기능을 구현하여야
          만족도 높은 결과물을 산출할 수 있기에, 이 부분에서 책임감을 나타낼 것을 약속드립니다.
        </p>
        <h3 className="text-lg my-4 ">
          이루고 싶은 것 <span className="text-sm font-normal">약 850자</span>
        </h3>
        <p className="my-2">
          개발자로서 이루고자 하는 것은 기술을 통해 일상생활에서 사람들이 겪는 불편함을 해결하고,
          실질적인 가치를 제공하는 것입니다. 리디와 토스뱅크에서의 웹 프론트엔드 개발 경험을
          바탕으로, 사용자에게 이익이 되면서 비즈니스 매출을 증대시키고 낭비되는 비용을 줄일 수 있는
          솔루션을 개발하는 데 집중하고자 합니다.
        </p>
        <p className="my-2">
          예를 들어, 의료 분야에서 병원 간 데이터 공유가 원활하지 않아 환자들이 다른 병원을
          방문하거나 상급 병원으로 전원할 때 동일한 진료를 여러 번 받아야 하는 문제가 있습니다.
          또한, 진료 데이터를 공유하기 위해 환자가 직접 개별 병원에 자신의 진료 기록을 수동으로
          전달해야 하는 번거로움도 존재합니다. 이러한 문제를 해결하기 위해 의료 데이터의 표준화와,
          개인정보보호법과 의료법을 준수하는 안전한 공유 시스템을 구축하여 환자들의 불필요한 불편을
          줄이고자 합니다.
        </p>
        <p className="my-2">
          또한, 최근 빠르게 성장하고 있는 무인 매장 시장에서, 무인 매장을 운영하면서 빈번하게
          발생하는 도난 문제는 운영 효율성과 신뢰성에 큰 영향을 미칩니다. 이를 해결하기 위해 영상
          인식 기술과 센서 데이터를 활용한 실시간 모니터링 시스템을 개발하여 도난을 예방하고,
          점주들이 수동으로 CCTV 화면을 주 52시간 이상 모니터링하지 않고도, 청소 및 매대 정리 등
          하루에 1시간만으로도 운영할 수 있는 솔루션을 구현하여 무인 매장의 운영 효율성을 높이고
          싶습니다.{' '}
        </p>
        <p className="my-2">
          그밖에도 높은 공실률로 인해 빌딩 자산이 효율적으로 활용되지 못하고 가치가 낭비되는 현상이
          있습니다. 이에 대한 해결책으로, 빌딩의 사용 데이터를 분석하고 수요와 공급을 매칭하는
          플랫폼을 개발하여, 빈 공간을 커뮤니티 시설로 전환하는 등 자산의 가치를 극대화할 수 있는
          방안을 모색하고 싶습니다.
        </p>
        <h3 className="text-lg my-4 ">
          성격의 장단점 <span className="text-sm font-normal">약 300자</span>
        </h3>
        <p className="my-2">
          저는 업무에 깊이 몰입하며 뛰어난 집중력을 발휘합니다. 이는 3개월 동안 토스뱅크(주)라는
          금융 기업에서 계약직으로 근무하면서 경험했습니다. 반면, 한 가지에 집중하는 경우 부분적으로
          놓치는 요소가 있었습니다. 하지만 다양한 프로젝트와 인턴 실무를 경험하며 프로젝트의
          전체적인 흐름과 업무 분배의 중요성을 깨달았습니다.
        </p>
        <p className="my-2">
          현재는 업무 분석에 우선순위를 두고, 자체적인 데드라인 설정을 통해 시간 관리에 집중하고
          있습니다. 또한, 해당 도메인의 전문적인 지식을 가지고 있는 팀원에게 지속적으로 업무에 대한
          피드백을 요청해 서비스에 대한 시야를 넓히고 있으며, 프로젝트 전체를 이해하는 개발자로
          성장하고 있습니다.
        </p>
      </section>

      <div className="w-full text-center text-sm text-slate-800  mt-8">작성일: {date}</div>
      <div className="w-full text-center text-sm text-slate-800 ">작성자: 곽태욱</div>
      <div className="my-8" />
      <Portpolio date={date} />
    </main>
  )
}
