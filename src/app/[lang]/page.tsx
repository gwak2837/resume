/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { APPLICATION_NAME } from '../../common/constants'
import { PageProps } from '../../common/types'
import FestaLogo from '../../svg/FestaLogo'
import Pin from '../../svg/Pin'
import PlanbyLogo from '../../svg/PlanbyLogo'
import RidiLogo from '../../svg/RidiLogo'
import { getISODate } from '../../util/date'

import { dict } from './dictionary'
import LanguageUpdate from './LanguageUpdate'
import OtherCertificates from './OtherCertificates'

import Image from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
  return [{ lang: 'ko' }, { lang: 'en' }, { lang: 'zh' }, { lang: 'ja' }]
}

export async function generateMetadata({ params }: PageProps) {
  const lang = params.lang as 'ko' | 'en' | 'zh' | 'ja'

  return {
    title:
      lang === 'ko'
        ? APPLICATION_NAME
        : lang === 'en'
        ? `Taeuk Gwak ${getISODate(new Date())} Resume Portpolio`
        : lang === 'zh'
        ? `郭泰昱 ${getISODate(new Date())} 履历书 作品集`
        : lang === 'ja'
        ? `郭泰昱 ${getISODate(new Date())} 履歴書 ポートフォリオ`
        : APPLICATION_NAME,
  }
}

export default function HomePage({ params }: PageProps) {
  const lang = params.lang as 'ko' | 'en' | 'zh' | 'ja'
  const date = dict.작성일[lang]

  return (
    <main className="mx-auto mb-8 max-w-[720px]">
      <LanguageUpdate lang={lang} />
      <div className="flex justify-between items-center">
        <h1 className="text-4xl mb-6 font-semibold w-full">{dict.이력서[lang]}</h1>
        <div className="flex whitespace-nowrap gap-2">
          <Link href="/ko">한국어</Link>
          <Link href="/en">English</Link>
          <Link href="/zh">中文</Link>
          <Link href="/ja">日本語</Link>
        </div>
      </div>
      <div>
        <div className="grid gap-4 grid-cols-2">
          <Image src="/images/1.webp" alt="asd" width="350" height="350" priority />
          <table className="border-none w-fit">
            <tbody>
              <tr>
                <td className="border-none p-0">🧑&nbsp;&nbsp;</td>
                <td className="border-none p-0">{dict.이름[lang]}</td>
              </tr>
              <tr>
                <td className="border-none p-0">🎉</td>
                <td className="border-none p-0">{dict.생일[lang]}</td>
              </tr>
              <tr>
                <td className="border-none p-0 align-top">🎓</td>
                <td className="border-none p-0">
                  <a href="/images/학위증.webp" target="_blank">
                    {dict.학위[lang]}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-0 align-top">🏠</td>
                <td className="border-none p-0">
                  <a href="https://naver.me/Fcg2bYyc" target="_blank" rel="noreferrer">
                    {dict.주소[lang]}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-0 align-top">🪖</td>
                <td className="border-none p-0">
                  <a href="/pdf/병적증명서.pdf" target="_blank">
                    {dict.병역[lang]}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-0"></td>
                <td className="border-none p-0">
                  <a href="/images/2023-military.webp" target="_blank">
                    {dict.KATUSA[lang]}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-0"></td>
                <td className="border-none p-0">{dict.ROTC[lang]}</td>
              </tr>
              <tr>
                <td className="border-none p-0">📱</td>
                <td className="border-none p-0">
                  <a href="tel:010-9203-2837">+82 010-9203-2837</a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-0">✉️</td>
                <td className="border-none p-0">
                  <a href="mailto:gwak2837@google.com">gwak2837@google.com</a>{' '}
                  <a href="mailto:gwak2837@kakao.com">(〃@kakao.com)</a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-0">
                  <Image src="/images/LinkedIn_icon.svg" alt="github" width="16" height="16" />
                </td>
                <td className="border-none p-0">
                  <a href="https://www.linkedin.com/in/gwak2837/" target="_blank">
                    linkedin.com/in/gwak2837
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-0">
                  <Image src="/images/github.svg" alt="github" width="16" height="16" />
                </td>
                <td className="border-none p-0">
                  <a href="https://github.com/gwak2837" target="_blank">
                    github.com/gwak2837
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-0">
                  <Image src="/images/velog.png" alt="velog" width="16" height="16" />
                </td>
                <td className="border-none p-0">
                  <a href="https://velog.io/@gwak2837" target="_blank">
                    velog.io/@gwak2837
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-0">
                  <Image src="/images/instagram.svg" alt="velog" width="16" height="16" />
                </td>
                <td className="border-none p-0">
                  <a href="https://www.instagram.com/gwak2837/" target="_blank" rel="noreferrer">
                    instagram.com/gwak2837
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="my-4 ">{dict.한줄소개[lang]}</p>
      <h2 className="text-3xl my-8">
        {dict.개발경력[lang]} <span className="text-sm">(1년 9개월+α)</span>
      </h2>
      <ul>
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a
              href="https://www.linkedin.com/company/ridi/"
              className="flex gap-2 items-center"
              target="_blank"
            >
              <b>리디(주)</b>
              <RidiLogo />
            </a>
            <a href="/pdf/리디-재직증명서.pdf" target="_blank">
              <div>2024년 4월 1일 ~ 현재 (+α개월)</div>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <div>직책: Frontend Engineer</div>
            <div>부서: 리디 웹팀</div>
            <div>직위: Junior (정규직)</div>
          </div>
          <div>역할: 리디 웹 서비스 개발</div>
        </li>
        <div className="h-2" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a
              href="https://www.linkedin.com/company/ridi/"
              className="flex gap-2 items-center"
              target="_blank"
            >
              <b>리디(주)</b>
              <RidiLogo />
            </a>
            <a href="/pdf/리디-재직증명서.pdf" target="_blank">
              <div>2023년 11월 27일 ~ 2024년 3월 31일 (4개월)</div>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <div>직책: Frontend Engineer</div>
            <div>부서: 만타제품그룹(20명) ⊃ 엔지니어링팀(10명)</div>
            <div>직위: Junior (정규직, 수습 기간 3개월)</div>
          </div>
          <div>
            역할: 만타 오리지널 콘텐츠를 제공하는 글로벌 웹툰 구독 서비스, 'Manta - Unlimited Comics
            Perfect to Binge' React Native App (
            <a
              href="https://play.google.com/store/apps/details?id=net.manta.comic&hl=en&gl=US&pli=1"
              target="_blank"
            >
              Android
            </a>{' '}
            ·{' '}
            <a
              href="https://apps.apple.com/kr/app/manta-unlimited-comics/id1536116642"
              target="_blank"
            >
              iOS
            </a>
            ),{' '}
            <a href="https://manta.net/en" target="_blank">
              PWA Web
            </a>{' '}
            개발
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a
              href="https://www.linkedin.com/company/toss-bank/"
              className="flex gap-2 items-center"
              target="_blank"
            >
              <b>토스뱅크(주)</b>
              <Image
                src="/images/TossBank_Logo_Primary.png"
                alt="tossbank"
                width="80"
                height="14"
              />
            </a>
            <a href="/pdf/토스뱅크-경력증명서.pdf" target="_blank">
              <div>2023년 8월 7일 ~ 11월 6일 (3개월)</div>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>직책: Admin Developer</div>
            <div>부서: Housing Loan Squad (12명)</div>
          </div>
          <div>직위: 직원 (계약직)</div>
          <div>
            역할: 대출 관련 프로세스 자동화로 토스씨엑스 담당자의 업무 효율성을 높이며, 대출 고객의
            불편함을 최소화하는 토스뱅크 여신 심사·관리·운영 시스템(LUMOS, 루모스) 개발
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a
              href="https://www.linkedin.com/company/planby-technologies/about/"
              className="flex gap-2 items-center"
              target="_blank"
              rel="noreferrer"
            >
              <b>(주)플랜바이테크놀로지스</b>
              <PlanbyLogo height="19" />
            </a>
            <div>
              <a href="/pdf/플랜바이테크놀로지스.pdf" target="_blank">
                2023년 7월 24일 ~ 8월 6일 (2주)
              </a>
              <br />
              2023년 11월 7일 ~ 11월 26일 (3주)
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>직책: Frontend Developer</div>
            <div>부서: 개발팀 (4명)</div>
          </div>
          <div>직위: 직원 (계약직)</div>
          <div>
            역할: 고등학교 친구가 창업한 스타트업에서{' '}
            <a href="https://planby.us/" target="_blank" rel="noreferrer">
              'HOMI AI - 인공지능이 꾸며주는 나의 공간'
            </a>{' '}
            인테리어 디자인 AI 자동화 솔루션 MVP 개발
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a
              href="https://www.saramin.co.kr/zf_user/company-info/view?csn=eFE2Qks5TzVpanROVE5pQW9ZbGMyZz09"
              className="flex gap-2 items-center"
              target="_blank"
              rel="noreferrer"
            >
              <b>(주)더하트컴퍼니</b>
              <Image
                src="/images/theheartcompany-logo.png"
                alt="theheartcompany"
                width="56"
                height="24"
              />
            </a>
            <div>
              <a href="/pdf/더하트컴퍼니.pdf" target="_blank">
                2022년 2월 14일 ~ 3월 13일 (1개월)
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>직책: Frontend Developer</div>
            <div>부서: 개발팀 (2명)</div>
          </div>
          <div>직위: 직원 (계약직)</div>
          <div>
            역할:{' '}
            <a href="https://www.bemyseason.co.kr/" target="_blank" rel="noreferrer">
              '비마이시즌 - 다시 일하고 싶은 여성의 상호성장 플랫폼'
            </a>{' '}
            MVP 개발
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="flex gap-2 items-center">
              <a
                href="https://www.linkedin.com/company/%EC%A3%BC-%EC%95%8C%ED%8C%8C%EC%B9%B4%EC%82%B4%EB%A1%B1/about/"
                className="flex gap-2 items-center"
                target="_blank"
                rel="noreferrer"
              >
                <b>(주)알파카살롱</b>{' '}
                <Image src="/images/알파카살롱-logo.jpg" alt="알파카살롱" width="72" height="24" />
              </a>
              <a
                href="https://www.linkedin.com/company/%EB%A6%AC%ED%8A%B8%EB%A6%AC%EB%B2%84%EC%82%B4%EB%A1%B1/"
                className="text-sm"
                target="_blank"
              >
                (現 리트리버살롱)
              </a>
            </div>
            <div>
              <a href="/pdf/알파카살롱.pdf" target="_blank">
                2021년 11월 9일 ~ 2022년 2월 8일 (3개월)
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>직책: Fullstack Developer (팀장)</div>
            <div>부서: 개발팀 (3명)</div>
          </div>
          <div>직위: 인턴</div>
          <div>역할: '4050 여성 전용 커뮤니티' 알파카살롱 기획 및 MVP 개발</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a href="http://pmcm.cau.ac.kr/" target="_blank" rel="noreferrer">
              <b>중앙대학교 건설경영정보 연구실 (김경주 교수)</b>
            </a>
            <a href="/images/2021-cau-lab.webp" target="_blank">
              2021년 6월 1일 ~ 8월 31일 (3개월)
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>직책: Frontend Developer (팀장)</div>
            <div>부서: 개발팀 (2명)</div>
          </div>
          <div>직위: 참여연구원</div>
          <div>
            역할: '3차) 블록체인 기술을 이용한 해외 건설프로젝트 스마트 분쟁관리 모델구축 연구' 과제
            참여. 건설 프로젝트 수주 협상 과정에서 주고 받는 이메일을 블록체인 상에 관리하여 추후
            분쟁 발생 여지를 최소화하는 사이트 개발
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="flex gap-2 items-center">
              <a
                href="https://www.linkedin.com/company/festaio/"
                className="flex gap-2 items-center"
                target="_blank"
                rel="noreferrer"
              >
                <b>(주)페스타</b>
                <FestaLogo />
              </a>
              <a
                href="https://www.sedaily.com/NewsView/264PCFEN6T"
                className="text-sm"
                target="_blank"
              >
                (現 당근마켓 피인수 기업)
              </a>
            </div>
            <div>
              <a href="/pdf/페스타.pdf" target="_blank">
                2020년 9월 1일 ~ 12월 31일 (4개월)
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>직책: Frontend Developer</div>
            <div>부서: Admin 개발팀 (4명)</div>
          </div>
          <div>직위: 인턴</div>
          <div>
            역할:{' '}
            <a href="https://festa.io/" target="_blank" rel="noreferrer">
              '페스타 - 온·오프라인 이벤트 티켓 및 고객 관리 서비스'
            </a>{' '}
            Admin(관리자) 서비스 기획 및 개발
          </div>
        </li>
        <div className="border w-full my-6" />

        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a href="https://web.cau.ac.kr/energy/index.htm" target="_blank" rel="noreferrer">
              <b>중앙대학교 에너지 및 복사특성 연구실 (김태국 교수)</b>
            </a>
            <div>
              <a href="/images/2019-cau-lab.webp" target="_blank">
                2019년 4월 1일
              </a>{' '}
              ~{' '}
              <a href="/images/2019-cau-lab2.webp" target="_blank">
                5월 31일 (2개월)
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>직책: Software Developer</div>
            <div>부서: 개발팀 (2명)</div>
          </div>
          <div>직위: 참여연구원</div>
          <div>
            역할: 'KFX IR 해석 기법 및 해석 소프트웨어 개발 연구' 과제 참여. 적외선 영상 통계 분석
            개발 보조 (C++), OpenMP 라이브러리 기반 병렬처리로 수학 계산 성능 최적화
          </div>
        </li>
      </ul>
      <h2 className="text-3xl my-8 ">{dict.학력[lang]}</h2>
      <table>
        <thead>
          <tr>
            <td>{dict.학력_이름[lang]}</td>
            <td>{dict.세부[lang]}</td>
            <td>{dict.기간[lang]}</td>
            <td>{dict.비고[lang]}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-semibold">
              <a href="https://www.cau.ac.kr" target="_blank" rel="noreferrer">
                {dict.중앙대학교[lang]}
              </a>
            </td>
            <td>
              <a href="/images/학위증.webp" target="_blank">
                {dict.학력_학위[lang]}
              </a>
              <div className="text-xs">(MAGNA CUM LAUDE)</div>
            </td>
            <td>
              <a href="/pdf/중앙대학교-졸업증명서.pdf" target="_blank">
                {dict.학력_기간[lang]}
              </a>
            </td>
            <td>
              <a href="/images/2022-univ.webp" target="_blank">
                {dict.학력_전체학점[lang]}
              </a>
              <br />
              {dict.학력_전공학점[lang]}
            </td>
          </tr>
          <tr>
            <td className="font-semibold">
              <a href="https://school.jbedu.kr/honam-h" target="_blank" rel="noreferrer">
                {dict.호남고등학교[lang]}
              </a>
            </td>
            <td>{dict.호남고등학교_세부[lang]}</td>
            <td>
              <a href="/pdf/호남고등학교-생활기록부.pdf" target="_blank">
                {dict.호남고등학교_기간[lang]}
              </a>
            </td>
            <td>
              <a href="/pdf/호남고등학교-성적증명서.pdf" target="_blank">
                {dict.호남고등학교_성적[lang]}
              </a>
            </td>
          </tr>
          <tr>
            <td className="font-semibold">
              <a href="https://school.jbedu.kr/jb-hs" target="_blank" rel="noreferrer">
                {dict.화산중학교[lang]}
              </a>
            </td>
            <td>{dict.기숙형자율학교[lang]}</td>
            <td>{dict.화산중학교_기간[lang]}</td>
            <td>
              <a href="/pdf/완주화산중학교-성적증명서.pdf" target="_blank">
                {dict.화산중학교_성적[lang]}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-3xl my-8">기술</h2>
      <h4 className="my-2">Language</h4>
      <div className="flex gap-1">
        <a href="https://javascript.info/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/ES2023-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"
            alt="JavaScript Badge"
          />
        </a>
        <a href="https://www.typescriptlang.org/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/TypeScript-235A97?style=flat-square&logo=Typescript&logoColor=white"
            alt="TypeScript Badge"
          />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
            alt="CSS3 Badge"
          />
        </a>
        <a href="https://www.python.org/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white"
            alt="Python Badge"
          />
        </a>
        <a href="https://en.wikipedia.org/wiki/SQL" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/SQL-003B57?style=flat-square&logo=SQL&logoColor=white"
            alt="SQL Badge"
          />
        </a>
        <a href="https://graphql.org/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white"
            alt="GraphQL Badge"
          />
        </a>
      </div>
      <h4 className="my-2">Frontend</h4>
      <div className="grid gap-1">
        <div className="flex gap-1">
          <a href="https://nextjs.org/" target="_blank">
            <img
              src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white"
              alt="Next.js Badge"
            />
          </a>
          <a href="https://reactjs.org/" target="_blank">
            <img
              src="https://img.shields.io/badge/React.js-61DAFB?style=flat-square&logo=react&logoColor=black"
              alt="React Badge"
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <img
              src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"
              alt="tailwind Badge"
            />
          </a>
          <a href="https://tanstack.com/query/latest/docs/react/overview" target="_blank">
            <img
              src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=react-query&logoColor=white"
              alt="react query Badge"
            />
          </a>
          <a href="https://zustand-demo.pmnd.rs/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Zustand-3578e5?style=flat-square&logo=Zustand&logoColor=white"
              alt="Zustand Badge"
            />
          </a>
          <a href="https://zod.dev/" target="_blank">
            <img
              src="https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white"
              alt="zod"
            />
          </a>
          <a href="https://sentry.io/welcome/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Sentry-362D59?style=flat-square&logo=sentry&logoColor=white"
              alt="Sentry"
            />
          </a>
          <a href="https://web.dev/progressive-web-apps/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=PWA&logoColor=white"
              alt="PWA Badge"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Push_API"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://img.shields.io/badge/Web Push-4285F4?style=flat-square&logo=google-chrome&logoColor=white"
              alt="Web Push Badge"
            />
          </a>
        </div>
      </div>
      <h4 className="my-2">Backend</h4>
      <div className="grid gap-1">
        <div className="flex gap-1">
          <a href="https://www.fastify.io/" rel="noreferrer">
            <img
              src="https://img.shields.io/badge/Fastify-000000?style=flat-square&logo=Fastify&logoColor=white"
              alt="Fastify Badge"
            />
          </a>
          <a
            href="https://en.wikipedia.org/wiki/HTTP/2_Server_Push"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://img.shields.io/badge/HTTP/2-4285F4?style=flat-square&logo=google-chrome&logoColor=white"
              alt="Server Push Badge"
            />
          </a>
          <a href="https://socket.io/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Socket.IO-010101?style=flat-square&logo=Socket.io&logoColor=white"
              alt="WebSocket Badge"
            />
          </a>
          <a href="https://www.prisma.io/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=Prisma&logoColor=white"
              alt="prisma Badge"
            />
          </a>
          <a href="https://nodejs.org/en/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white"
              alt="Node.js Badge"
            />
          </a>
          <a href="https://www.docker.com/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"
              alt="Docker Badge"
            />
          </a>
          <a href="https://www.postgresql.org/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=PostgreSQL&logoColor=white"
              alt="PostgreSQL Badge"
            />
          </a>
          <a href="https://redis.io/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white"
              alt="Redis Badge"
            />
          </a>
          <a href="https://www.elastic.co/kr" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Elasticsearch, Kibana-005571?style=flat-square&logo=elastic&logoColor=white"
              alt="elasticsearch Badge"
            />
          </a>
        </div>
      </div>
      <h4 className="my-2">Cloud</h4>
      <div className="grid gap-1">
        <div className="flex gap-1">
          <a href="https://vercel.com/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white"
              alt="Vercel Badge"
            />
          </a>
          <a href="https://cloud.google.com/gcp/" target="_blank">
            <img
              src="https://img.shields.io/badge/Cloud Run, Cloud Storage, Cloud SQL-4285F4?style=flat-square&logo=google-cloud&logoColor=white"
              alt="GCP Badge"
            />
          </a>
          <a href="https://firebase.google.com/" target="_blank">
            <img
              src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=black"
              alt="Firebase Badge"
            />
          </a>
          <a href="https://cloud.oracle.com/?region=ap-seoul-1" target="_blank">
            <img
              src="https://img.shields.io/badge/Instances-F80000?style=flat-square&logo=oracle&logoColor=white"
              alt="Oracle Badge"
            />
          </a>
          <a href="https://aws.amazon.com/ko/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/RDS, EC2, S3-232F3E?style=flat-square&logo=amazon-aws&logoColor=white"
              alt="AWS Badge"
            />
          </a>
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <h4 className="my-2">Developer Tool</h4>
          <div className="grid gap-1">
            <div className="flex gap-1">
              <a href="" rel="noreferrer" target="_blank">
                <img
                  src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"
                  alt="Git Badge"
                />
              </a>
              <a href="https://esbuild.github.io/" rel="noreferrer" target="_blank">
                <img
                  src="https://img.shields.io/badge/esbuild-FFCF00?style=flat-square&logo=esbuild&logoColor=black"
                  alt="esbuild Badge"
                />
              </a>
              <a href="" rel="noreferrer" target="_blank">
                <img
                  src="https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white"
                  alt="Jest Badge"
                />
              </a>
              <a href="https://code.visualstudio.com/" rel="noreferrer" target="_blank">
                <img
                  src="https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white"
                  alt="VSCode Badge"
                />
              </a>
              <a
                href="https://analytics.google.com/analytics/web/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="https://img.shields.io/badge/GA-E37400?style=flat-square&logo=Google Analytics&logoColor=white"
                  alt="GA Badge"
                />
              </a>
              <a href="https://www.figma.com/" rel="noreferrer" target="_blank">
                <img
                  src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"
                  alt="Figma Badge"
                />
              </a>
              <a href="https://www.framer.com/" rel="noreferrer" target="_blank">
                <img
                  src="https://img.shields.io/badge/Framer-0055FF?style=flat-square&logo=framer&logoColor=white"
                  alt="framer"
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h4 className="my-2">AI</h4>
          <div className="flex gap-1">
            <a href="https://github.com/AUTOMATIC1111/stable-diffusion-webui" target="_blank">
              <img
                src="https://img.shields.io/badge/Stable Diffusion-1F1E37?style=flat-square&logo=ngrok&logoColor=white"
                alt="Stable Diffusion Badge"
              />
            </a>
            <a href="https://github.com/bmaltais/kohya_ss" target="_blank">
              <img
                src="https://img.shields.io/badge/LoRA-1F1E37?style=flat-square&logo=ngrok&logoColor=white"
                alt="LoRA Badge"
              />
            </a>
            <a href="https://www.runpod.io/" target="_blank">
              <img
                src="https://img.shields.io/badge/RunPod-824edc?style=flat-square&logo=RunPod&logoColor=white"
                alt="RunPod Badge"
              />
            </a>
          </div>
        </div>
      </div>
      <h2 className="text-3xl my-8">수상</h2>
      <ul>
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <a
              href="https://www.ito.or.kr/main/bbs/bbsMsgDetail.do?msg_seq=684&bcd=notice"
              target="_blank"
              rel="noreferrer"
            >
              <b>2022 인천 스마트관광 데이터 아이디어 공모전</b>
            </a>
            <div>인천관광공사</div>
            <div>2022년 12월 9일</div>
          </div>
          <div>
            여행일지 자동기록 서비스 아이디어 제시{' '}
            <a
              href="https://www.asiatoday.co.kr/view.php?key=20221216010008397#:~:text=%27%EC%97%AC%ED%96%89%20%EC%9D%BC%EC%A7%80%20%EC%9E%90%EB%8F%99%20%EA%B8%B0%EB%A1%9D%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EA%B8%B0%EB%B0%98%2C%20%EC%9D%B8%EC%B2%9Ce%EC%A7%80%20%EC%95%B1%20%EC%97%AC%ED%96%89%ED%8C%A8%EC%8A%A4%2C%20%EB%A6%AC%EB%B7%B0%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EB%A6%AC%EB%89%B4%EC%96%BC(%ED%8C%80%EC%9E%A5%20%EA%B3%A0%ED%98%84%EC%A4%80)%27"
              rel="noreferrer"
              target="_blank"
            >
              (최우수상, 2등)
            </a>
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <a href="https://www.jungle.co.kr/contest/204985" target="_blank" rel="noreferrer">
              <b>MMO 해커톤 2회</b>
            </a>
            <div>
              MMO&nbsp;
              <span className="text-xs">(IT교육회사)</span>
            </div>
            <div>2022년 11월 27일</div>
          </div>
          <div>
            결식 아동에게 줄 크리스마스 선물 크라우드펀딩 서비스{' '}
            <a href="/pdf/해커톤 시상_우수상_개발자팀.pdf" target="_blank">
              (우수상, 2등)
            </a>
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <a href="https://event-us.kr/pmsolution/event/40979" target="_blank" rel="noreferrer">
              <b>2021 AI 해커톤</b>
            </a>
            <div>제주테크노벨리</div>
            <div>2022년 1월 22일</div>
          </div>
          <div>
            식의약용 자생식물 데이터 기반 사업화 서비스 아이디어 제시{' '}
            <a href="/pdf/입상_AHAH(고현준,곽태욱).pdf" target="_blank">
              (입상)
            </a>
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <a
              href="https://blog.naver.com/khucampustown/222535649294"
              target="_blank"
              rel="noreferrer"
            >
              <b>2021 경희대학교 캠퍼스타운 입주 스타트업 캠퍼 2기</b>
            </a>
            <div>경희대학교 캠퍼스타운</div>
            <div>2021년 11월 1일</div>
          </div>
          <div>Sindy 창업팀 추가 선정 (2021년 11월 1일 ~ 2022년 8월 31일, 10개월)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <a
              href="https://youth.posco.com/posco/edu/index.php?mod=incubator&pag=icb01#khwhay"
              target="_blank"
              rel="noreferrer"
            >
              <b>2021년 3차 포스코 창업인큐베이팅스쿨</b>
            </a>
            <div>POSCO</div>
            <div>2021년 10월 18일</div>
          </div>
          <div>Sindy 창업팀 선정 (2021년 10월 18일 ~ 10월 29일, 2주)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <a
              href="https://me.cau.ac.kr/bbs/board.php?bo_table=sub5_1&wr_id=4037&page=34"
              target="_blank"
              rel="noreferrer"
            >
              <b>2021년도 LINC+ Start-up Members</b>
            </a>
            <div>중앙대학교 LINC+사업단</div>
            <div>2021년 7월 1일</div>
          </div>
          <div>Sindy 창업팀 선정 (2021년 7월 1일 ~ 12월 31일, 6개월) (200만원)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <a
              href="https://www.kised.or.kr/board.es?mid=a10305000000&bid=0006&list_no=2255&act=view"
              target="_blank"
              rel="noreferrer"
            >
              <b>2021 실전창업교육 1기</b>
            </a>
            <div>중소벤처기업부</div>
            <div>2021년 6월 1일</div>
          </div>
          <div>Sindy 창업팀 선정 및 2단계 진출 (2021년 6월 1일 ~ 7월 31일, 2개월)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <a href="https://blog.naver.com/djsepc/222200468576" target="_blank" rel="noreferrer">
              <b>2021 동작구 스타트업 펀딩 사업</b>
            </a>
            <div>동작구청</div>
            <div>2021년 2월 5일</div>
          </div>
          <div>Sindy 창업팀 선정 (2021년 2월 5일 ~ 11월 30일, 10개월) (500만원)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <a
              href="https://www.donga.com/news/Society/article/all/20201217/104493689/2"
              target="_blank"
              rel="noreferrer"
            >
              <b>2020년 C-디자인씽킹 아카데미 경진대회</b>
            </a>
            <div>중앙대 교수학습개발센터</div>
            <div>2020년 12월 3일</div>
          </div>
          <div>‘버려지는 소재를 새로운 순환으로’를 주제로 사업계획서 작성</div>
          <div>
            ‘온라인 새활용 제품 유통 플랫폼’ 기획으로{' '}
            <a href="/images/2020-C-디자인씽킹-아카데미.jpeg" target="_blank">
              대상(1등)
            </a>{' '}
            수상 및 특허 출원
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>국가우수장학생 (이공계)</b>
            <div>한국장학재단</div>
            <div>
              <a href="/images/2019-scholarship.webp" target="_blank">
                2019년 8월 14일
              </a>
            </div>
          </div>
          <div>2019-1학기 ~ 2020-2학기 전액장학금 (4개 학기)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <a
              href="http://m.dhnews.co.kr/news/articleView.html?idxno=88851"
              target="_blank"
              rel="noreferrer"
            >
              <b>2018 창의ICT공과대학 학술제</b>
            </a>
            <div>중앙대 창의ICT공과대학</div>
            <div>2018년 11월 30일</div>
          </div>
          <div>
            택배 상하차 아르바이트생의 열약한 근무 환경을 주제로{' '}
            <a href="https://www.youtube.com/watch?v=ruqZIWGwH-I" target="_blank">
              '초록 유니폼을 입은 알바생' VR 영상
            </a>{' '}
            제작 및{' '}
            <a href="/images/2018-창의ICT공과대학-학술제-VR-공감-영상전.jpg" target="_blank">
              우수상 수상
            </a>
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <a href="https://onoffmix.com/event/153038" target="_blank" rel="noreferrer">
              <b>BBR BlockCamp 블록체인 해커톤</b>
            </a>
            <div>BBR, 디센터</div>
            <div>2018년 10월 29일</div>
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
      <h2 className="text-3xl my-8">자격증</h2>
      <table>
        <thead>
          <tr>
            <td>이름</td>
            <td>내용</td>
            <td>주관</td>
            <td>일시</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="https://www.topcit.or.kr/home.do" target="_blank" rel="noreferrer">
                TOPCIT
              </a>{' '}
              제15회
            </td>
            <td className="text-center">
              <a href="/pdf/2021-05-22_TOPCIT_15회.pdf" target="_blank">
                627점 (전국 4등)
              </a>
            </td>
            <td className="text-center">과학기술정보통신부</td>
            <td className="text-center">2021년 5월 22일</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.g-telp.co.kr:335/" target="_blank" rel="noreferrer">
                G-TELP (Level 2)
              </a>
            </td>
            <td className="text-center">
              <a href="/images/2020-gtelp.webp" target="_blank">
                82점
              </a>
            </td>
            <td className="text-center">국제테스트 연구원</td>
            <td className="text-center">2020년 5월 3일</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.hanja.ne.kr/index_original.asp" target="_blank" rel="noreferrer">
                대한검정회
              </a>
            </td>
            <td className="text-center">
              <a href="/images/2009-hanja.webp" target="_blank">
                준1급
              </a>
            </td>
            <td className="text-center">대한민국한자교육연구회</td>
            <td className="text-center">2009년 11월 28일</td>
          </tr>
        </tbody>
      </table>
      <OtherCertificates />
      <h2 className="text-3xl my-8">개발 경험</h2>
      <ul>
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a href="/images/2023-kim.webp" target="_blank">
              <b>과외</b>
            </a>
            <div>2023년 12월 30일 ~ 현재</div>
          </div>
          <div>
            역할: 대학생을 대상으로 OSI model,{' '}
            <a
              href="https://velog.io/@gwak2837/Next.js-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0"
              target="_blank"
            >
              SSR·CSR·SSG
            </a>
            , Database 개념 및 X 클론 코딩 수업 (주 2회, 1회 3시간)
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a href="http://www.beyondcoding.kr/about.php" target="_blank" rel="noreferrer">
              <b>비욘드코딩 (코딩학원)</b>
            </a>
            <div>2021년 8월 25일 ~ 9월 30일 (1개월)</div>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <div>직책: 웹 개발 수업 강사</div>
            <div>부서: Class Steve Jobs (초중등반, 6명)</div>
            <div>직위: 강사 (계약직)</div>
          </div>
          <div>
            역할: 초등학생/중학생을 대상으로 HTML/CSS/JS 개념 및 자기소개 웹페이지 제작 수업 (주
            2회, 1회 3시간)
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a href="/images/2023-kim.webp" target="_blank">
              <b>과외</b>
            </a>
            <div>2021년 8월 9일 ~ 2022년 2월 6일 (6개월)</div>
          </div>
          <div>
            역할: 대학생을 대상으로 Frontend·Backend·Cloud 개념 및 인스타그램 클론 코딩 수업 (주
            3회, 1회 2시간)
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a
              href="https://swedu.cau.ac.kr/core/program/programview?menuid=001004001002007&programgroupno=8&programno=420"
              target="_blank"
              rel="noreferrer"
            >
              <b>Purdue University 온라인 해외교육</b>
            </a>
            <div>
              <a href="/pdf/Certificates-IITP-Summer-2021-CAU.pdf" target="_blank">
                2021년 7월 5일 ~ 8월 20일 (2개월)
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <div>직책: Data Labeler</div>
            <div>부서: 논문3팀 (지도교수 포함 8명)</div>
            <div>직위: 교환학생</div>
          </div>
          <div>
            역할:{' '}
            <a href="/pdf/IITP_2021_summer_UAV_ground_scanning_system.pdf" target="_blank">
              'UAV Ground Scanning System'
            </a>{' '}
            논문 작성, 학습 데이터 수집 및 가공
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>신디(SinDy, Signature in Dessert) 창업</b>
            <div>2021년 2월 8일 ~ 11월 8일 (9개월)</div>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <div>직책: Fullstack Developer (팀장)</div>
            <div>부서: 개발팀 (2명)</div>
            <div>직위: 공동창업자</div>
          </div>
          <div>
            역할: '카페의 특색을 담아내는 사용자 주도 SNS형 디저트 정보 공유 공간' 디저트핏 기획 및
            Frontend · Backend · Cloud 개발
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a href="https://www.headstartsv.com/" target="_blank" rel="noreferrer">
              <b>Headstart Silicon Valley, Inc.</b>
            </a>
            <div>
              <a href="/images/2021-headstart-sv.webp" target="_blank">
                2021년 1월 4일 ~ 2월 5일 (1개월)
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>직책: Frontend Developer (팀장)</div>
            <div>부서: 프로젝트2팀 (6명)</div>
          </div>
          <div>직위: 인턴</div>
          <div>역할: ‘음성인식 기반 노래검색 서비스’ Icezam 기획 및 개발</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a
              href="https://www.saramin.co.kr/zf_user/company-info/view?csn=VHFyWXhFL2E1N1hYMkhEZmUxK05SZz09"
              className="flex gap-2 items-center"
              target="_blank"
              rel="noreferrer"
            >
              <b>(주)행복한 다람쥐단 </b>
              <Image
                src="/images/happydaram-logo.webp"
                alt="행복한다람쥐단"
                width="28"
                height="25"
              />
            </a>
            <div>
              <a href="/images/2019-happydaram.webp" target="_blank">
                2019년 12월 23일
              </a>{' '}
              ~{' '}
              <a href="/images/2019-happydaram2.webp" target="_blank">
                2020년 2월 21일 (2개월)
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>직책: Frontend Developer</div>
            <div>부서: 개발부 (3명)</div>
          </div>
          <div>직위: 인턴</div>
          <div>역할: '방탈출 리뷰 웹사이트' 기획·디자인 및 MVP 개발</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>중앙대학교 2019년 2학기 SW 기초 교과목 멘토</b>
            <div>2019년 9월 16일 ~ 12월 13일 (3개월)</div>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <div>직책: 수업 조교</div>
            <div>부서: ‘컴퓨팅적 사고와 문제 해결’ 과목</div>
            <div>직위: 근로장학생</div>
          </div>
          <div>
            역할: 수업 중 수강생의 Scratch 프로그래밍 관련 질의 응답 및 과제 채점 (주 2회, 1회
            2시간)
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a
              href="https://www.saramin.co.kr/zf_user/company-info/view/csn/b2ZtOGw4SWdmTldhbjVLK2pqNzdDZz09/company_nm/(%EC%A3%BC)%EB%A6%AC%EC%84%9C%EC%B9%98%EB%9E%A9"
              className="flex gap-2 items-center"
              target="_blank"
              rel="noreferrer"
            >
              <b>(주)리서치랩</b>
              <Image src="/images/researchlab-logo.jpg" alt="리서치랩" width="69" height="20" />
            </a>
            <div>
              <a href="/images/2017-researchlab.webp" target="_blank">
                2017년 7월 31일 ~ 8월 25일 (1개월)
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>직책: Data Analyst</div>
            <div>부서: 연구4팀 (10명)</div>
          </div>
          <div>직위: 인턴</div>
          <div>역할: 여론 조사 데이터 통계 분석 및 엑셀 함수 작성</div>
        </li>
      </ul>
      <h2 className="text-3xl my-8 ">소개</h2>
      <p className="my-2">
        직접 만든 기프트링크 동아리의 소프트웨어 개발자로 시작해, 행복한 다람쥐단 인턴, (주)페스타
        인턴, 신디(Sindy) 창업팀, (주)알파카살롱 인턴, (주)더하트컴퍼니 인턴, 토스뱅크(주) 계약직
        등에서 다양한 프로젝트를 수행하며 서비스가 세상에 나오기 위한 전체 개발 주기를 경험했습니다.
        이 과정에서 서비스의 성공은 동료와의 협업과 서로의 성장에 기반한다는 사실을 느꼈습니다.
      </p>
      <h3 className="text-lg my-4 ">
        가치관 및 신조 <span className="text-xs font-normal">약 900자</span>
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
        설정했습니다. 저는 프론트엔드 개발에서 디자이너에게 사용자 인터페이스에 대한 세밀한 피드백을
        제공했습니다. 또한 백엔드 개발에서 서비스의 사용자 경험을 개선하기 위해 필요한 데이터만 주고
        받도록 해서 데이터 처리의 효율성을 높였고,{' '}
        <a href="https://fe-developers.kakaoent.com/2022/220310-kakaopage-bff/" target="_blank">
          프론트엔드에 최적화된 백엔드 API
        </a>{' '}
        설계에 기여했습니다. 이 프로젝트는 성공적으로 출시되어 월간 사용자 수(Monthly Active User,
        MAU) 5천 명을 달성하는 성과를 이루었습니다.
      </p>
      <p className="my-2">
        개발자는 개인의 파트뿐만 아니라 프로젝트 전체적인 운영에 시야를 갖춰야 합니다. 개발 일정과
        코드 유지보수, 기획 요소를 녹일 수 있는 부분까지 고려하여 최적화된 기능을 구현하여야 만족도
        높은 결과물을 산출할 수 있기에, 이 부분에서 책임감을 나타낼 것을 약속드립니다.
      </p>
      <h3 className="text-lg my-4 ">
        성격의 장단점 <span className="text-xs font-normal">약 800자</span>
      </h3>
      <p className="my-2">
        저는 업무에 깊이 몰입하며 뛰어난 집중력을 발휘합니다. 이는 3개월 동안 토스뱅크(주)라는 금융
        기업에서 계약직으로 근무하면서 경험했습니다.
      </p>
      <p className="my-2">
        토스뱅크에서 Admin Developer로서 여신 심사·관리·운영 시스템의 화면 설계 및 개발을 담당하면서
        고객에게 직접 서비스를 제공하는 것에 중점을 두었습니다. 실제 금융 기업에서 근무하다보니 학부
        때와 달리 금융 분야에 특화된 지식과 여신 도메인에 대한 이해가 필요했습니다. 그래서 단순
        개발만 하는 것이 아니라 금융 관련 규제 및 법률을 검색하고 현업자분에게 피드백을 요청하며
        업무의 흐름을 읽어나갔습니다. 또한 안정적인 서비스 제공을 위해 오류 사항을 사전에
        검토하였고, 오류가 발생했을 때 즉시 이전 버전으로 롤백한 후 코드 수정사항을 살펴보며 사이드
        이펙트를 분석했습니다. 그리고 코드를 작성할 때도 유지보수가 가능하도록 선언적으로
        구성했습니다. 이러한 업무에 대한 몰입과 노력으로 토스뱅크의 전월세보증금대출 관련 프로세스를
        자동화하고 시스템 효율성을 증가시켰습니다.
      </p>
      <p className="my-2">
        반면, 한 가지에 집중하는 경우 부분적으로 놓치는 요소가 있었습니다. 하지만 다양한 프로젝트와
        인턴 실무를 경험하며 프로젝트의 전체적인 흐름과 업무 분배의 중요성을 깨달았습니다. 현재는
        업무 분석에 우선순위를 두고, 자체적인 데드라인 설정을 통해 시간 관리에 집중하고 있습니다.
        또한, 해당 도메인의 전문적인 지식을 가지고 있는 팀원에게 지속적으로 업무에 대한 피드백을
        요청해 서비스에 대한 시야를 넓히고 있으며, 프로젝트 전체를 이해하는 개발자로 성장하고
        있습니다.
      </p>
      <div className="w-full text-center text-slate-800 text-sm mt-8">작성일: {date}</div>
      <div className="w-full text-center text-slate-800 text-sm">작성자: 곽태욱</div>
      <div className="my-8" />
      <h1 className="text-4xl mb-8 font-semibold w-full break-before-page">포트폴리오</h1>
      <h2 className="text-3xl my-8">프로젝트</h2>
      <div className="grid grid-cols-[2fr_3fr_2fr] gap-4 my-4">
        <h4>Manta (만타)</h4>
        <div>만타제품그룹(20명) ⊃ 엔지니어링팀(10명)</div>
        <div>2023년 11월 27일 ~ 현재</div>
      </div>
      <div className="flex gap-0.5 my-2 items-center">
        <a
          href="https://github.com/ridi/manta"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              manta (Priv.)
            </h5>
          </div>
        </a>
        <a
          href="https://manta.net/en"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image
              src="/images/manta-logo.png"
              alt="manta"
              width="282"
              height="282"
              className="h-4 w-4"
            />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              manta.net
            </h5>
          </div>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=net.manta.comic&hl=en&gl=US&pli=1"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image
              src="/images/manta-logo.png"
              alt="manta"
              width="282"
              height="282"
              className="h-4 w-4"
            />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              Manta (Google Play)
            </h5>
          </div>
        </a>
        <a
          href="https://apps.apple.com/kr/app/manta-unlimited-comics/id1536116642"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image
              src="/images/manta-logo.png"
              alt="manta"
              width="282"
              height="282"
              className="h-4 w-4"
            />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              Manta (App Store)
            </h5>
          </div>
        </a>
      </div>
      <div>Unlimited Comics Perfect to Binge (글로벌 웹툰 구독 서비스)</div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="https://reactnative.dev/" target="_blank">
          <img
            src="https://img.shields.io/badge/React Native-61DAFB?style=flat-square&logo=React&logoColor=black"
            alt="React Native"
          />
        </a>
        <a href="https://nextjs.org" target="_blank">
          <img
            src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white"
            alt="next.js"
          />
        </a>
        <a href="https://ko.redux.js.org/" target="_blank">
          <img
            src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"
            alt="Redux"
          />
        </a>
        <a href="https://redux-toolkit.js.org/" target="_blank">
          <img
            src="https://img.shields.io/badge/Redux Tookit-764ABC?style=flat-square&logo=Redux&logoColor=white"
            alt="Redux Tookit"
          />
        </a>
        <a href="https://vanilla-extract.style/" target="_blank">
          <img
            src="https://img.shields.io/badge/Vanilla Extract-C2FCED?style=flat-square&logo=Vanilla Extract&logoColor=white"
            alt="Vanilla Extract"
          />
        </a>
        <a href="https://styled-components.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Styled-DB7093?style=flat-square&logo=styled-components&logoColor=white"
            alt="styled Badge"
          />
        </a>
        <a href="https://cloud.google.com/gcp/" target="_blank">
          <img
            src="https://img.shields.io/badge/Google Cloud-4285F4?style=flat-square&logo=google-cloud&logoColor=white"
            alt="GCP Badge"
          />
        </a>
        <a href="https://www.figma.com/" target="_blank">
          <img
            src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"
            alt="Figma"
          />
        </a>
      </div>
      <ol>
        <li>
          북미 웹툰 시장 점유율 2위인 글로벌 웹툰 서비스 Manta의 Frontend 분야를 개발함{' '}
          <a
            href="https://files-scs.pstatic.net/2024/01/03/mpZT5kjudA/%EC%9B%B9%ED%88%B0%EC%82%B0%EC%97%85_%EB%B0%B8%EB%A5%98%ED%8C%8C%EC%9D%B8%EB%8D%94.pdf"
            target="_blank"
            className="text-xs"
          >
            (2022년 점유율 9.8%)
          </a>
        </li>
        <li>
          React 문법을 기반으로 한 React Native 및 Next.js를 활용하여 코드 유지 관리 비용을
          최소화하여 앱 및 웹 환경에서 고객에게 서비스를 제공함
        </li>
        <li>
          팀 내 linguist와 Phrase 서비스를 통해 다양한 언어의 번역 파일을 관리하고, i18next
          라이브러리를 활용하여 다국어 및 지역화 기능을 구현함. 국가별 화폐 및 날짜 형식, 언어별
          텍스트 길이에 따른 디자인 차이 등을 고려하여 사용자들에게 향샹된 현지화 경험을 제공함.
        </li>
        <li>
          사용자 행동 분석과 안정적인 서비스 운영을 위해 Firebase와 Braze를 활용하여 자체 이벤트를
          기록하고, 오류 발생 시 Crashlytics에 로그를 기록함. 이를 바탕으로 CS 문의 등 다양한
          상황에서 Google Cloud 콘솔의 로그 탐색기를 활용하여 사용자의 행동 기록을 분석하여 문제를
          해결함.
        </li>
      </ol>
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>OFFICE AI</h4>
        <div>4명</div>
        <div>2023년 11월 7일 ~ 11월 26일 (3주)</div>
      </div>
      <div className="flex gap-0.5 my-2 items-center">
        <a
          href="https://github.com/gwak2837/homi-ai-client"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              homi-ai-client
            </h5>
          </div>
        </a>
        <a
          href="https://app.planby.us"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/vercel.png" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              app.planby.us
            </h5>
          </div>
        </a>
      </div>
      <div>인테리어 디자인 AI 자동화 솔루션 - 인공지능이 꾸며주는 사무 공간</div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="https://nextjs.org" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Next.js 13-000000?style=flat-square&logo=next.js&logoColor=white"
            alt="next.js"
          />
        </a>
        <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"
            alt="tailwind"
          />
        </a>
        <a href="https://swr.vercel.app/" target="_blank">
          <img
            src="https://img.shields.io/badge/SWR-000000?style=flat-square&logo=SWR&logoColor=white"
            alt="SWR Badge"
          />
        </a>
        <a href="https://vercel.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white"
            alt="Vercel Badge"
          />
        </a>
        <a href="https://www.figma.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"
            alt="Figma Badge"
          />
        </a>
      </div>
      <ol>
        <li>검색 순위 향상을 위해 Search Engine Optimization 관련 HTML 메타데이터를 설정함</li>
        <li>
          네트워크 응답 시간이 긴 AI 서비스 특성에 맞게 SWR 등을 활용해 데이터 불러오기 UI를 구현함
        </li>
      </ol>
      <div className="grid grid-cols-3 gap-1">
        <Image
          src="/images/2023-11-homi-ai-5.webp"
          alt="2023-11-homi-ai-2"
          width="1526"
          height="1700"
          className="border"
        />
        <Image
          src="/images/2023-11-homi-ai-1.webp"
          alt="2023-11-homi-ai-1"
          width="1536"
          height="1702"
          className="border"
        />
        <Image
          src="/images/2023-11-homi-ai-4.webp"
          alt="2023-11-homi-ai-1"
          width="1532"
          height="1708"
          className="border"
        />
        <Image
          src="/images/2023-11-homi-ai-2.webp"
          alt="2023-11-homi-ai-2"
          width="1540"
          height="1694"
          className="border"
        />
        <Image
          src="/images/2023-11-homi-ai-3.webp"
          alt="2023-11-homi-ai-3"
          width="1538"
          height="1690"
          className="border"
        />

        <Image
          src="/images/2023-11-homi-ai-6.webp"
          alt="2023-11-homi-ai-3"
          width="1536"
          height="1690"
          className="border"
        />
      </div>
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_2fr_3fr] gap-4 my-4">
        <h4>
          토스뱅크 LUMOS, 루모스 <br />
          (여신 심사·관리·운영 시스템)
        </h4>
        <div>개발: 6명 | 비개발: 6명</div>
        <a href="/pdf/토스뱅크-경력증명서.pdf" target="_blank">
          <div>2023년 8월 7일 ~ 11월 6일 (3개월)</div>
        </a>
      </div>
      <div className="flex gap-0.5 my-2">
        <a
          href="https://github.tossbank.it/bank-lumos"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              bank-lumos (Priv.)
            </h5>
          </div>
        </a>
      </div>
      <div>
        기존 은행에서 사용하는 통합단말을 대체하면서, 토스씨엑스 내부적으로 사용하는 여신
        심사·관리·운영 시스템을 Next.js와 Toss Design System 기반으로 개발함
      </div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="https://nextjs.org" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Next.js 13-000000?style=flat-square&logo=next.js&logoColor=white"
            alt="next.js"
          />
        </a>
        <a href="https://toss.im/slash-21/sessions/3-4" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Toss Design System-0064FF?style=flat-square&logoColor=white"
            alt="toss design system"
          />
        </a>
        <a href="https://tanstack.com/query/v4/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=react-query&logoColor=white"
            alt="React Query Badge"
          />
        </a>
        <a href="https://zod.dev/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white"
            alt="zod"
          />
        </a>
        <a href="https://www.framer.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Framer-0055FF?style=flat-square&logo=framer&logoColor=white"
            alt="framer"
          />
        </a>
        <a href="https://www.elastic.co/kr/kibana" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Kibana-005571?style=flat-square&logo=kibana&logoColor=white"
            alt="kibana"
          />
        </a>
        <div className="pr-2" />
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=slack&logoColor=white"
            alt="Slack Badge"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=jira&logoColor=white"
            alt="Jira Badge"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white"
            alt="Notion Badge"
          />
        </a>
      </div>
      <ol>
        <li>
          전월세보증금대출 상품 출시 전후 토스씨엑스 팀원과 소통하며 서류심사, 사후관리, 지킴보증
          관련 기능을 개발함
        </li>
        <li>Suspense 컴포넌트와 ErrorBoundary 개념을 이용해 네트워크 상태를 선언적으로 관리함</li>
        <li>React Query를 사용해 응답 순서가 보장되지 않는 네트워크 요청을 비동기로 관리함</li>
        <li>Promise를 활용해 Modal, Dialog 등의 컴포넌트 열기/닫기 로직을 선언적으로 관리함</li>
        <li>
          <code>ts-pattern</code>의 match 함수와 Funnel 패턴을 활용해 다단계 페이지 이동을
          명시적으로 관리함
        </li>
        <li>
          검색 조건을 querystring에 저장해 페이지 이동이 일어나도 입력했던 검색 조건을 유지시킴
        </li>
        <li>
          디자이너 팀원이 프레이머로 제작한 시안과 토스 디자인 시스템을 기반으로 화면 프로토타입을
          빠르게 구현함
        </li>
        <li>
          서비스 기능 장애가 발생했을 때 관련 커밋을 롤백한 후 Kibana 검색 및 집계 기능을 사용하여
          오류 발생 주기와 원인을 분석함. 또한 해결 방안을 논의해 문서로 남긴 후 개선된 코드를
          제안하고 구현함
        </li>
        <li>LUMOS 프로젝트 Docker 이미지 빌드 시간을 305초 → 213초로 (30%) 개선함</li>
        <li>
          사전에 팀의 코드 컨벤션과 브랜치 전략을 논의하고{' '}
          <a href="https://blog.banksalad.com/tech/banksalad-code-review-culture/" target="_blank">
            Pn 룰
          </a>{' '}
          등을 공유해 Code Review 효율성을 높임
        </li>
        <li>
          연관된 코드는 가까운 곳에 배치하여 컴포넌트 응집도를 높이고, 로직 세부 구현은 hook으로
          숨겨 코드 파악에 필수적인 정보가 잘 보이도록 개선함
        </li>
      </ol>
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>HOMI AI</h4>
        <div>4명</div>
        <a href="/pdf/플랜바이테크놀로지스.pdf" target="_blank">
          <div>2023년 7월 24일 ~ 8월 6일 (2주)</div>
        </a>
      </div>
      <div className="flex gap-0.5 my-2 items-center">
        <a
          href="https://github.com/gwak2837/tomorrow-house"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              tomorrow-house
            </h5>
          </div>
        </a>
        <a
          href="https://github.com/gwak2837/tomorrow-house-backend"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              tomorrow-house-backend
            </h5>
          </div>
        </a>
        <a
          href="https://tomorrow-house.vercel.app/image/upload"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/vercel.png" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              tomorrow-house.vercel.app
            </h5>
          </div>
        </a>
        <span className="text-xs text-red-500">백엔드 비활성화됨</span>
      </div>
      <div>AI가 만드는 내일의 우리집 인테리어를 경험해보세요</div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="https://nextjs.org" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Next.js 13-000000?style=flat-square&logo=next.js&logoColor=white"
            alt="next.js"
          />
        </a>
        <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"
            alt="tailwind"
          />
        </a>
        <a href="https://www.fastify.io/" rel="noreferrer">
          <img
            src="https://img.shields.io/badge/Fastify-000000?style=flat-square&logo=Fastify&logoColor=white"
            alt="Fastify Badge"
          />
        </a>
        <a href="https://en.wikipedia.org/wiki/HTTP/2_Server_Push" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/HTTP/2 Server Push-4285F4?style=flat-square&logo=google-chrome&logoColor=white"
            alt="Server Push Badge"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Recoil.js-3578e5?style=flat-square&logo=recoil&logoColor=white"
            alt="Recoil.js"
          />
        </a>
        <a href="https://vercel.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white"
            alt="Vercel Badge"
          />
        </a>
        <a href="https://www.figma.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"
            alt="Figma Badge"
          />
        </a>
      </div>
      <ol>
        <li>Figma UI 디자인을 참조해 프로토타입 개발 및 Vercel 클라우드에 자동 배포</li>
        <li>React Query로 AI 서버 응답 관리 및 Recoil.js로 클라이언트 전역 상태 관리</li>
      </ol>
      <div className="grid grid-cols-3">
        <Image
          src="/images/tomorrow-house-1.webp"
          alt="jayudam architecture"
          width="1170"
          height="2532"
        />
        <Image
          src="/images/tomorrow-house-3.webp"
          alt="jayudam architecture"
          width="1170"
          height="2532"
        />
        <Image
          src="/images/tomorrow-house-4.webp"
          alt="jayudam architecture"
          width="1170"
          height="2532"
        />
        <Image
          src="/images/tomorrow-house-5.webp"
          alt="jayudam architecture"
          width="1170"
          height="2532"
        />
        <Image
          src="/images/tomorrow-house-6.webp"
          alt="jayudam architecture"
          width="1170"
          height="2532"
        />
        <Image
          src="/images/tomorrow-house-7.webp"
          alt="jayudam architecture"
          width="1170"
          height="2532"
        />
      </div>
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>코리아톡</h4>
        <div>1명 (본인)</div>
        <div>2023년 7월 15일 (9시간)</div>
      </div>
      <div className="flex gap-0.5 my-2">
        <a
          href="https://github.com/gwak2837/korea-talk"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              korea-talk
            </h5>
          </div>
        </a>
        <a
          href="https://korea-talk.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/vercel.png" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              korea-talk.vercel.app
            </h5>
          </div>
        </a>
      </div>
      <div>
        코리아톡은 고객의 문의를 관리자 화면에서 통합하여 응대할 수 있음. 여기서 고객에게 문의가
        들어올 때 문의에 대한 내용을 답변하기 위해서 클라이언트 화면에 여러 기능을 추가함.
      </div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/React.js-61DAFB?style=flat-square&logo=react&logoColor=black"
            alt="React Badge"
          />
        </a>
        <a href="https://styled-components.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Styled-DB7093?style=flat-square&logo=styled-components&logoColor=white"
            alt="styled Badge"
          />
        </a>
        <a href="https://socket.io/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=Socket.io&logoColor=white"
            alt="WebSocket Badge"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Recoil.js-3578e5?style=flat-square&logo=recoil&logoColor=white"
            alt="Recoil.js"
          />
        </a>
      </div>
      <ol>
        <li>
          디자인: 페이지 왼쪽엔 자신의 대화방 목록을 불러오고 각 대화방을 클릭 시 해당 대화방 id를
          참조하여 대화 내용을 오른쪽에 보여줌. 대화 목록은 마지막 대화 시각 기준 내림차순으로
          이메일은 생성일 기준 오름차순으로 클라이언트 측에서 정렬해서 표시해 줌
        </li>
        <li>
          메시지 전송: 특정 대화방에서 대화 입력 중 Shift+Enter를 눌렀을 땐 전송 가능하지만 아무
          내용이 없을 경우에는 전송이 불가능함. 대화를 전송하면 카카오톡과 비슷하게 응답이 올 때까지
          로딩 상태의 말풍선을 보여줌. 그 후 서버 응답이 오면 서버 응답 내용으로 대체됨. 메시지를
          2개 이상 동시에 전송해도 일관성 있는 UI를 보여줌.
        </li>
        <li>
          메시지 응답: 메시지를 전송하면 임의의 시간 이후에 답장이 소켓으로 옴. 이를{' '}
          <pre>Socket.io</pre>를 이용해 대화 목록에 실시간으로 추가시킴. 서버 응답을 소켓으로 받기
          때문에, 여러 브라우저 창에서 코리아톡 사이트를 열었을 때 한 창에서 메시지를 전송하더라도
          서버 응답이 다른 창에서도 보임. 소켓으로 다른 대화방 대화 내용이 오면 대화방 목록의 마지막
          대화 시각을 갱신하고 정렬해줌.
        </li>
        <li>
          SWR: 각 대화방의 대화 내용을 <pre>Recoil.js</pre>로 캐싱해서 해당 대화방의 마지막 대화
          시각이 변경되지 않으면 서버에 추가로 요청하지 않고 이전에 불러왔던 데이터를 보여줌
        </li>
      </ol>
      <Image
        src="/images/korea-talk.webp"
        alt="jayudam architecture"
        width="1656"
        height="1256"
        // className="border"
      />
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>지키다</h4>
        <div>1명 (본인)</div>
        <div>2023년 1월 24일 ~ 8월 6일 (6개월)</div>
      </div>
      <div className="flex gap-0.5 my-2 items-center">
        <a
          href="https://github.com/gwak2837/lofin"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">lofin</h5>
          </div>
        </a>
        <a
          href="https://github.com/gwak2837/lofin-backend"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              lofin-backend
            </h5>
          </div>
        </a>
        <a
          href="https://jikida.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/vercel.png" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              jikida.vercel.app
            </h5>
          </div>
        </a>
        <span className="text-xs text-red-500">백엔드 비활성화됨</span>
      </div>
      <div>
        대한민국 한 해 예산이 약 600조이고 이걸 중앙 정부와 지자체가 나눠서 가져간다. 하지만 현재
        해마다 집행되는 예산이 선출직 공직자의 공약대로 쓰여졌는지 판단할 수 있는 방법이 부족하다.
        그래서 편성된 예산이 국민의 감시 하에 원래 목적대로 사용될 수 있도록 해당 프로젝트를
        기획했다. 나아가 집행된 예산이 타당하게 쓰였는지 검증하기 위해 집행일, 지자체, 분야별로
        평가할 수 있는 시스템을 구축해, 정부 정책이 국민을 위한 방향으로 수립되는 것을 목표로 한다.
      </div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="https://nextjs.org" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Next.js 13-000000?style=flat-square&logo=next.js&logoColor=white"
            alt="next.js"
          />
        </a>
        <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"
            alt="tailwind"
          />
        </a>
        <a href="https://tanstack.com/query/v4/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=react-query&logoColor=white"
            alt="React Query Badge"
          />
        </a>
        <a href="https://vercel.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white"
            alt="Vercel Badge"
          />
        </a>
        <a href="https://www.postgresql.org/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=PostgreSQL&logoColor=white"
            alt="PostgreSQL Badge"
          />
        </a>
        <a href="https://cloud.google.com/gcp/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Cloud Run-4285F4?style=flat-square&logo=google-cloud&logoColor=white"
            alt="GCP Badge"
          />
        </a>
        <a href="https://cloud.google.com/gcp/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Cloud SQL-4285F4?style=flat-square&logo=google-cloud&logoColor=white"
            alt="GCP Badge"
          />
        </a>
      </div>
      <ol>
        <li>
          SQL 개선: 약 2억 개의 예산 데이터 검색에 50초 걸리는 응답시간을{' '}
          <a
            href="https://velog.io/@emplam27/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%EA%B7%B8%EB%A6%BC%EC%9C%BC%EB%A1%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-B-Plus-Tree"
            target="_blank"
            rel="noreferrer"
          >
            B+Tree
          </a>{' '}
          인덱스를 설계해 5초로 개선함
        </li>
        <li>
          <a
            href="https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-upsert/"
            target="_blank"
            rel="noreferrer"
          >
            UPSERT
          </a>
          : 기존 데이터의 업데이트와 새로운 데이터의 삽입이 반복적으로 발생하는 상황에서, SQL의
          UPSERT 개념을 적용하여 데이터가 이미 존재할 경우 해당 데이터를 업데이트하고 그렇지 않을
          경우 새로운 데이터를 삽입해, 불필요한 중복 삽입을 방지하고 데이터베이스의 무결성을
          유지하면서 데이터 관리를 효율적으로 수행함
        </li>
        <li>
          렌더링 개선: 페이지 렌더링에 필요한 리소스 용량을 줄이기 위해 Next.js 13을 이용해 특정
          URL의 HTML 파일을 캐싱함.{' '}
          <a
            href="https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading"
            target="_blank"
            rel="noreferrer"
          >
            Dynamic import
          </a>
          를 사용해 클라이언트 JS 번들 크기를 줄임.
        </li>
        <li>
          크롤링: OpenAPI를 이용해{' '}
          <a
            href="https://www.openfiscaldata.go.kr/op/ko/sd/UOPKOSDA01?odtId=5Y5A50K2L4CW2IRKI2J0F2C8T"
            rel="noreferrer"
            target="_blank"
          >
            중앙정부 세출
          </a>
          과{' '}
          <a
            href="https://lofin.mois.go.kr/portal/service/openInfPage.do?infId=0GAR4HBB8LWEBSL4NIHZ817053&srvCd=#"
            rel="noreferrer"
            target="_blank"
          >
            지방자치단체 세출
          </a>{' '}
          데이터를 데이터베이스에 주기적으로 저장함
        </li>
      </ol>
      <Image
        src="/images/jikida1.webp"
        alt="jayudam architecture"
        width="1656"
        height="1256"
        className="my-2 border"
      />
      <Image
        src="/images/jikida2.webp"
        alt="jayudam architecture"
        width="1656"
        height="1256"
        className="my-2 border"
      />
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>이력서</h4>
        <div>1명 (본인)</div>
        <div>2022년 12월 12일 ~ 수시</div>
      </div>
      <div className="flex gap-0.5 my-2">
        <a
          href="https://github.com/gwak2837/resume"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">resume</h5>
          </div>
        </a>
        <a
          href="https://gwak2837.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/vercel.png" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              gwak2837.vercel.app
            </h5>
          </div>
        </a>
      </div>
      <div>
        Notion, Confluence, Google Docs 등 온라인 기반 문서 편집기는 PDF 변환 기능이 미흡해, 깔끔한
        문서 인쇄 및 PDF 변환을 목적으로 프로젝트를 시작함. 이력서를 작성하는데 품이 들지만, 특정
        형식에 얽메이지 않고 작성할 수 있어서 좋음
      </div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="https://nextjs.org" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Next.js 13-000000?style=flat-square&logo=next.js&logoColor=white"
            alt="next.js"
          />
        </a>
        <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"
            alt="tailwind"
          />
        </a>
        <a href="https://vercel.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white"
            alt="Vercel Badge"
          />
        </a>
      </div>
      <ol>
        <li>빠른 개발을 위해 Next.js와 TailwindCSS, Vercel을 이용함</li>
      </ol>
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>쿠팡 가격 알리미</h4>
        <div>1명 (본인)</div>
        <div>2022년 11월 22일 ~ 2023년 1월 19일 (2개월)</div>
      </div>
      <div className="flex gap-0.5 my-2 items-center">
        <a
          href="https://github.com/gwak2837/yeou"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">yeou</h5>
          </div>
        </a>
        <a
          href="https://github.com/gwak2837/yeou-backend"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300	">
              yeou-backend
            </h5>
          </div>
        </a>
        <a
          href="https://yeou.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/vercel.png" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 		">
              yeou.vercel.app
            </h5>
          </div>
        </a>
        <span className="text-xs text-red-500">백엔드 비활성화됨</span>
      </div>
      <div>시시각각 변하는 쿠팡의 가격을 추적하여 알림을 받기 위해 프로젝트를 시작함</div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Next.js 13-000000?style=flat-square&logo=next.js&logoColor=white"
            alt="next.js"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"
            alt="tailwind"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=react-query&logoColor=white"
            alt="react-query"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Fastify-000000?style=flat-square&logo=fastify&logoColor=white"
            alt="fastify"
          />
        </a>
        <a href="https://web.dev/progressive-web-apps/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=PWA&logoColor=white"
            alt="PWA Badge"
          />
        </a>
        <a href="https://en.wikipedia.org/wiki/HTTP/2" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/HTTP2-4285F4?style=flat-square&logo=google-chrome&logoColor=white"
            alt="HTTP2 Badge"
          />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Push_API"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://img.shields.io/badge/Web Push-4285F4?style=flat-square&logo=google-chrome&logoColor=white"
            alt="Web Push Badge"
          />
        </a>
      </div>
      <ol>
        <li>사이트를 크롤링 후 특정 조건을 만족하면 모바일로 알림을 보내는 알고리즘을 구현함</li>
        <li>
          특정 사용자의 최근 N개 알림 목록과 같이, one-to-many 관계의 테이블일 때 many 쪽 테이블에서
          모든 레코드가 아닌 특정 레코드 N개만 선택해 JOIN 해야하는 상황이 발생했는데,{' '}
          <a href="https://stackoverflow.com/a/7745635" target="_blank" rel="noreferrer">
            Greatest-N-Per-Group
          </a>{' '}
          알고리즘을 사용하여 해결함
        </li>
        <li>
          프로젝트의 규모가 커질 수록 Styled components는 CSS 번들 크기의 선형적 증가라는 단점이
          있어 Tailwind를 도입함. Tailwind는 사용 시 별도 CSS 문법을 익혀야한다는 단점이 있지만,
          Styled component와 달리 Tailwind에서는 별도로 변수를 설정할 필요 없이 바로 className만을
          작성하면 되는 점이 편리하다고 느낌.
        </li>
        <li>
          서버리스 서비스인 Cloud Run에서 웹사이트 크롤링 용도로 설치한 puppeteer가 작동하지 않는
          문제가 발생함. root 사용자 대신 권한이 특정 폴더로 제한된 새로운 사용자를 만들어 puppeteer
          접근 범위를 제한하고, puppeteer가 컨테이너 위에서 실행되기 때문에 sandbox 보안 설정을
          해제하여 해결함
        </li>
      </ol>
      <div className="grid grid-cols-2 gap-2">
        <Image
          src="/images/yeou1.webp"
          alt="jayudam architecture"
          width="792"
          height="1040"
          className="border"
        />
        <Image
          src="/images/yeou2.webp"
          alt="jayudam architecture"
          width="792"
          height="1040"
          className="border"
        />
      </div>
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>자유담</h4>
        <div>1명 (본인)</div>
        <div>2022년 6월 1일 ~ 10월 31일 (5개월)</div>
      </div>
      <div className="flex gap-0.5 my-2 items-center">
        <a
          href="https://github.com/gwak2837/jayudam"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">jayudam</h5>
          </div>
        </a>
        <a
          href="https://github.com/gwak2837/jayudam-backend"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              jayudam-backend
            </h5>
          </div>
        </a>
        <a
          href="https://jayudam.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/vercel.png" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              jayudam.vercel.app
            </h5>
          </div>
        </a>
        <span className="text-xs text-red-500">백엔드 비활성화됨</span>
      </div>
      <div>공공보건 증진을 위한 개인간 보건기록 QR코드 익명 인증 서비스</div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Apollo Server/Client-311C87?style=flat-square&logo=Apollo GraphQL&logoColor=white"
            alt="react-query"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Recoil.js-3578e5?style=flat-square&logo=recoil&logoColor=white"
            alt="Recoil.js"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/React Form-EC5990?style=flat-square&logo=react-hook-form&logoColor=white"
            alt="fastify"
          />
        </a>
        <a href="https://en.wikipedia.org/wiki/HTTP/2" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/HTTP2-4285F4?style=flat-square&logo=google-chrome&logoColor=white"
            alt="HTTP2 Badge"
          />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/EventSource"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://img.shields.io/badge/Event Source-4285F4?style=flat-square&logo=google-chrome&logoColor=white"
            alt="Event Source Badge"
          />
        </a>
        <a href="https://en.wikipedia.org/wiki/HTTP/2_Server_Push" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Server Push-4285F4?style=flat-square&logo=google-chrome&logoColor=white"
            alt="Server Push Badge"
          />
        </a>
        <a href="https://en.wikipedia.org/wiki/WebRTC" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/WebRTC-333333?style=flat-square&logo=webrtc&logoColor=white"
            alt="WebRTC Badge"
          />
        </a>
      </div>
      <ol>
        <li>
          상태 관리: 네트워크 요청 및 응답 데이터는 Apollo client로 관리하고, input 입력값 데이터는
          React form으로 관리하고, 클라이언트 전역 상태는 Recoil.js로 관리함
        </li>
        <li>
          페이지네이션: Offset Pagination,{' '}
          <a
            href="https://www.cockroachlabs.com/docs/stable/pagination"
            target="_blank"
            rel="noreferrer"
          >
            Keyset Pagination
          </a>{' '}
          개념을 활용한 SQL 쿼리를 작성함
        </li>
        <li>
          실시간 통신: 웹소켓보다 가벼운 HTTP2 Server push를 사용해 채팅 기능을 구현함. 본
          프로젝트에선 바이너리 데이터를 서버에서 클라이언트로 먼저 보내는 경우가 없어 Server
          push로도 적당하다고 판단함. 브라우저의 EventSource 기능을 활용하면 HTTP2 서버에서
          브라우저로 먼저 요청할 수 있음
        </li>
        <li>WebRTC: 브라우저 카메라를 이용해 QR 코드 스캔 기능을 구현함</li>
      </ol>
      <div className="grid grid-cols-2 gap-2">
        <Image
          src="/images/jayudam1.webp"
          alt="jayudam architecture"
          width="1920"
          height="1080"
          className="border"
        />
        <Image
          src="/images/jayudam4.webp"
          alt="jayudam architecture"
          width="1920"
          height="1080"
          className="border"
        />
        <Image
          src="/images/jayudam2.webp"
          alt="jayudam architecture"
          width="1920"
          height="1080"
          className="border"
        />
        <Image
          src="/images/jayudam3.webp"
          alt="jayudam architecture"
          width="1920"
          height="1080"
          className="border"
        />
      </div>
      <Image
        src="/images/jayudam.png"
        alt="jayudam architecture"
        width="1920"
        height="1080"
        className="my-2 border"
      />
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>비마이시즌</h4>
        <div>2명</div>
        <div>
          <a href="/pdf/더하트컴퍼니.pdf" target="_blank">
            2022년 2월 14일 ~ 3월 13일 (1개월)
          </a>
        </div>
      </div>
      <div className="flex gap-0.5 my-2">
        <a
          href="https://github.com/gwak2837/be-my-season"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              be-my-season
            </h5>
          </div>
        </a>
        <a
          href="https://www.bemyseason.co.kr/"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              www.bemyseason.co.kr
            </h5>
          </div>
        </a>
      </div>
      <div>
        경력보유여성을 위해 교육, 문화컨텐츠, 커뮤니티를 만들어가는 다시 일하고 싶은 여성의 상호성장
        플랫폼
      </div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="https://nextjs.org" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Next.js 13-000000?style=flat-square&logo=next.js&logoColor=white"
            alt="next.js"
          />
        </a>
        <a href="https://nextjs.org" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=nginx&logoColor=white"
            alt="next.js"
          />
        </a>
        <a href="https://www.mysql.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white"
            alt="MySQL Badge"
          />
        </a>
      </div>
      <ol>
        <li>Nginx를 사용해 동일 호스트 내 멀티 도메인 및 멀티 서버 구축</li>
        <li>가비아 클라우드 내 g클라우드 서버 임대 후 도메인 및 네트워크 설정</li>
        <li>Certbot을 사용해 HTTPS 적용 및 Crontab으로 인증서 자동 갱신</li>
        <li>TOAST UI 및 채널톡 적용</li>
      </ol>
      <div className="grid grid-cols-4 gap-2">
        <Image
          src="/images/be-my-season1.png"
          alt="jayudam architecture"
          width="394"
          height="843"
          className="border"
        />
        <Image
          src="/images/be-my-season2.png"
          alt="jayudam architecture"
          width="394"
          height="843"
          className="border"
        />
        <Image
          src="/images/be-my-season3.png"
          alt="jayudam architecture"
          width="394"
          height="843"
          className="border"
        />
        <Image
          src="/images/be-my-season4.png"
          alt="jayudam architecture"
          width="394"
          height="843"
          className="border"
        />
        <Image
          src="/images/be-my-season5.png"
          alt="jayudam architecture"
          width="394"
          height="843"
          className="border"
        />
        <Image
          src="/images/be-my-season6.png"
          alt="jayudam architecture"
          width="394"
          height="843"
          className="border"
        />
        <Image
          src="/images/be-my-season7.png"
          alt="jayudam architecture"
          width="394"
          height="843"
          className="border"
        />
        <Image
          src="/images/be-my-season8.png"
          alt="jayudam architecture"
          width="394"
          height="843"
          className="border"
        />
      </div>
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>알파카살롱</h4>
        <div>1명 (본인)</div>
        <a href="/pdf/알파카살롱.pdf" target="_blank">
          2021년 12월 21일 ~ 2022년 1월 10일 (3주)
        </a>
      </div>
      <div className="flex gap-0.5 my-2">
        <a
          href="https://github.com/gwak2837/alpacasalon"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              alpacasalon
            </h5>
          </div>
        </a>
        <a
          href="https://github.com/gwak2837/alpacasalon-backend"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              alpacasalon-backend
            </h5>
          </div>
        </a>
      </div>
      <div></div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="https://nextjs.org" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Next.js 13-000000?style=flat-square&logo=next.js&logoColor=white"
            alt="next.js"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Apollo Server/Client-311C87?style=flat-square&logo=Apollo GraphQL&logoColor=white"
            alt="react-query"
          />
        </a>
        <a href="https://www.postgresql.org/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=PostgreSQL&logoColor=white"
            alt="PostgreSQL Badge"
          />
        </a>
        <a href="https://cloud.google.com/gcp/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Cloud Run-4285F4?style=flat-square&logo=google-cloud&logoColor=white"
            alt="GCP Badge"
          />
        </a>
        <a href="https://cloud.google.com/gcp/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Cloud Storage-4285F4?style=flat-square&logo=google-cloud&logoColor=white"
            alt="GCP Badge"
          />
        </a>
      </div>
      <ol>
        <li>게시글·댓글·답글 CRUD, 회원·그룹 CRUD, 댓글 좋아요 기능 구현</li>
        <li>순수 CSS와 React portal을 이용해 Drawer·Modal 직접 구현</li>
        <li>Google Cloud Build를 활용해 CI·CD 설정, Google Cloud Storage에 이미지 자동 업로드</li>
        <li>카카오 OAuth 및 자동 로그인</li>
        <li>카카오 비즈 채널로 카카오 알림톡·친구톡 연동해서 새 댓글 및 답글 등 알림 기능</li>
      </ol>
      <div className="break-inside-auto">
        <div className="grid grid-cols-4 gap-2 my-2">
          <Image
            src="/images/alpacasalon-1.png"
            alt="jayudam architecture"
            width="368"
            height="804"
            className="border"
          />
          <Image
            src="/images/alpacasalon-2.png"
            alt="jayudam architecture"
            width="368"
            height="804"
            className="border"
          />
          <Image
            src="/images/alpacasalon-3.png"
            alt="jayudam architecture"
            width="368"
            height="804"
            className="border"
          />
          <Image
            src="/images/alpacasalon-4.png"
            alt="jayudam architecture"
            width="368"
            height="804"
            className="border"
          />
          <Image
            src="/images/alpacasalon-5.png"
            alt="jayudam architecture"
            width="368"
            height="804"
            className="border"
          />
          <Image
            src="/images/alpacasalon-7.png"
            alt="jayudam architecture"
            width="368"
            height="804"
            className="border"
          />
          <Image
            src="/images/alpacasalon-6.png"
            alt="jayudam architecture"
            width="368"
            height="804"
            className="border"
          />
          <Image
            src="/images/alpacasalon-8.png"
            alt="jayudam architecture"
            width="368"
            height="804"
            className="border"
          />
          <Image
            src="/images/alpacasalon-9.png"
            alt="jayudam architecture"
            width="368"
            height="804"
            className="border"
          />
          <Image
            src="/images/alpacasalon-10.png"
            alt="jayudam architecture"
            width="368"
            height="804"
            className="border"
          />
          <Image
            src="/images/alpacasalon-11.png"
            alt="jayudam architecture"
            width="368"
            height="804"
            className="border"
          />
          <Image
            src="/images/alpacasalon-12.png"
            alt="jayudam architecture"
            width="368"
            height="804"
            className="border"
          />
        </div>
      </div>
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>게시판</h4>
        <div>4명</div>
        <div>
          <a href="/images/2021-kpc.webp" target="_blank">
            2021년 10월 21일 ~ 11월 5일 (2주)
          </a>
        </div>
      </div>
      <div className="flex gap-0.5 my-2 items-center">
        <a
          href="https://github.com/gwak2837/kubernetes-cloud"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              frontend
            </h5>
          </div>
        </a>
        <a
          href=" https://github.com/gwak2837/kubernetes-cloud-backend"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">backend</h5>
          </div>
        </a>
        <a
          href="https://kubernetes-cloud.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/vercel.png" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              kubernetes-cloud.vercel.app
            </h5>
          </div>
        </a>
        <span className="text-xs text-red-500">백엔드 비활성화됨</span>
      </div>
      <div>
        <a href="https://www.onoffmix.com/event/236424" target="_blank" rel="noreferrer">
          쿠버네티스 기반 클라우드 시스템 엔지니어 양성 과정
        </a>{' '}
        교육에서 Google Kubernetes Engine(GKE) 상 게시글 CRUD 및 로그인 회원가입 서비스 구현
      </div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white"
            alt="Next.js Badge"
          />
        </a>
        <a href="https://ant.design/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Ant_Design-0170FE?style=flat-square&logo=Ant-Design&logoColor=white"
            alt="antd Badge"
          />
        </a>
        <a href="https://www.postgresql.org/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white"
            alt="jsonwebtokens Badge"
          />
        </a>
        <a href="https://www.typescriptlang.org/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Koa-33333D?style=flat-square&logo=koa&logoColor=white"
            alt="Koa"
          />
        </a>
        <a href="https://www.postgresql.org/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=PostgreSQL&logoColor=white"
            alt="PostgreSQL Badge"
          />
        </a>
        <a href="https://cloud.google.com/gcp/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Kubernetes Engine-4285F4?style=flat-square&logo=google-cloud&logoColor=white"
            alt="GCP Badge"
          />
        </a>
      </div>
      <ol>
        <li>
          <pre>display: grid</pre>, <pre>@media</pre> 쿼리를 사용해 반응형 디자인을 구현함
        </li>
        <li>
          GKE를 사용하여 클러스터, 노드, 팟을 설정하고, 컨테이너의 자동 스케일링과 로드 밸런싱을
          구현함
        </li>
        <li>GCP 상의 IP, 포트 방화벽 등 네트워크 환경을 설정함</li>
      </ol>
      <div className="grid grid-cols-4 gap-2">
        <Image src="/images/k8s-1.png" alt="k8s" width="376" height="810" className="border" />
        <Image src="/images/k8s-2.png" alt="k8s" width="376" height="810" className="border" />
        <Image src="/images/k8s-3.png" alt="k8s" width="376" height="810" className="border" />
        <Image src="/images/k8s-4.png" alt="k8s" width="376" height="810" className="border" />
        <Image src="/images/k8s-5.png" alt="k8s" width="376" height="810" className="border" />
        <Image src="/images/k8s-7.png" alt="k8s" width="376" height="810" className="border" />
        <Image
          src="/images/k8s-8.png"
          alt="k8s"
          width="376"
          height="810"
          className="border col-span-2"
        />
      </div>
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>업비트 자동 매매</h4>
        <div>1명 (본인)</div>
        <div>2021년 9월 25일 ~ 수시</div>
      </div>
      <div className="flex gap-0.5 my-2">
        <a
          href="https://github.com/gwak2837/upbit-trading"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              upbit-trading
            </h5>
          </div>
        </a>
      </div>
      <div>
        <a href="https://docs.upbit.com/docs" rel="noreferrer" target="_blank">
          업비트 API
        </a>
        를 활용한 코인 자동 매매 프로그램 개발
      </div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="https://www.typescriptlang.org/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/TypeScript-235A97?style=flat-square&logo=Typescript&logoColor=white"
            alt="TypeScript Badge"
          />
        </a>
        <a href="https://nodejs.org/en/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white"
            alt="Node.js Badge"
          />
        </a>
        <a href="https://www.docker.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"
            alt="Docker Badge"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Oracle Instance-F80000?style=flat-square&logo=oracle&logoColor=white"
            alt="Oracle Badge"
          />
        </a>
      </div>
      <ol>
        <li>웹소켓을 활용해 실시간으로 코인 시세를 획득함</li>
        <li>이동평균선, RSI, MFI 등 차트 보조 지표를 구현해 매매 알고리즘에 활용함</li>
        <li>Docker를 활용해 오류 등으로 컨테이너가 종료됐을 때 자동으로 재실행됨</li>
      </ol>
      <Image
        src="/images/upbit-2.webp"
        alt="jayudam architecture"
        width="2650"
        height="1104"
        className="text-center"
      />
      <Image
        src="/images/upbit-1.webp"
        alt="jayudam architecture"
        width="2278"
        height="1286"
        className="text-center"
      />
      <div className="grid grid-cols-2 gap-2"></div>
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>소복</h4>
        <div>2명</div>
        2021년 8월 10일 ~ 10월 31일 (2개월 20일)
      </div>
      <div className="flex gap-0.5 my-2 items-center">
        <a
          href="https://github.com/gwak2837/sobok"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">sobok</h5>
          </div>
        </a>
        <a
          href="https://github.com/gwak2837/sobok-backend"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              sobok-backend
            </h5>
          </div>
        </a>
        <a
          href="https://sobok.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/vercel.png" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              sobok.vercel.app
            </h5>
          </div>
        </a>
        <span className="text-xs text-red-500">백엔드 비활성화됨</span>
      </div>
      <div>
        <b>소</b>소한 행<b>복</b> :) 카페 및 디저트 매장 검색이 불편하니 검색을 편리하게 만들자!{' '}
      </div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white"
            alt="Next.js Badge"
          />
        </a>
        <a href="https://web.dev/progressive-web-apps/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=PWA&logoColor=white"
            alt="PWA Badge"
          />
        </a>
        <a href="https://analytics.google.com/analytics/web/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/GA-E37400?style=flat-square&logo=Google Analytics&logoColor=white"
            alt="GA Badge"
          />
        </a>
        <a href="https://vercel.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white"
            alt="Vercel Badge"
          />
        </a>
        <a href="https://www.apollographql.com/docs/apollo-server/" rel="noreferrer">
          <img
            src="https://img.shields.io/badge/Apollo-311C87?style=flat-square&logo=apollo-graphql&logoColor=white"
            alt="apollographql Badge"
          />
        </a>
        <a href="https://graphql.org/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white"
            alt="GraphQL Badge"
          />
        </a>
        <a href="https://www.docker.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"
            alt="Docker Badge"
          />
        </a>
        <a href="https://cloud.google.com/gcp/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Cloud Run-4285F4?style=flat-square&logo=google-cloud&logoColor=white"
            alt="GCP Badge"
          />
        </a>
        <a href="https://cloud.google.com/gcp/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Cloud Storage-4285F4?style=flat-square&logo=google-cloud&logoColor=white"
            alt="GCP Badge"
          />
        </a>
      </div>
      <ol>
        <li>GCP 백엔드 아키텍처 설계 및 클라우드 CI·CD 구성</li>
        <li>PostgreSQL 쿼리 빌더를 간단하게 구현하고 PL/pgSQL을 사용하여 SQL 요청 횟수 줄임</li>
        <li>
          Webpack을 활용해 JavaScript 코드를 압축하여 Docker 이미지 크기 최적화 (140MB → 40MB)
        </li>
        <li>디자이너와 Figma 및 Zeplin을 통해 페이지 디자인 및 SVG 벡터 이미지 공유</li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            target="_blank"
            rel="noreferrer"
          >
            Intersection Observer API
          </a>
          를 사용해 무한스크롤 페이지네이션을 구현함
        </li>
      </ol>
      <div className="grid grid-cols-4 gap-2">
        <Image
          src="/images/sobok1.png"
          alt="jayudam architecture"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/sobok2.png"
          alt="jayudam architecture"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/sobok3.png"
          alt="jayudam architecture"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/sobok9.png"
          alt="jayudam architecture"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/sobok7.png"
          alt="jayudam architecture"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/sobok8.png"
          alt="jayudam architecture"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/sobok4.png"
          alt="jayudam architecture"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/sobok5.png"
          alt="jayudam architecture"
          width="376"
          height="810"
          className="border"
        />
      </div>
      <Image
        src="/images/sobok11.webp"
        alt="jayudam architecture"
        width="1920"
        height="1080"
        className="my-2 border"
      />
      <Image
        src="/images/sobok12.webp"
        alt="jayudam architecture"
        width="1920"
        height="1080"
        className="my-2 border"
      />
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>수능 모의고사 웹사이트</h4>
        <div>4명</div>
        <div>2021년 7월 16일 ~ 7월 18일 (3일)</div>
      </div>
      <div className="flex gap-0.5 my-2">
        <a
          href="https://github.com/gwak2837/moigosa"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">moigosa</h5>
          </div>
        </a>
        <a
          href="https://github.com/gwak2837/moigosa-backend"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              moigosa-backend
            </h5>
          </div>
        </a>
        <a
          href="https://moigosa.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/vercel.png" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              moigosa.vercel.app
            </h5>
          </div>
        </a>
      </div>
      <div>
        코로나19로 어려워진 대면 시험.. 수능 성적을 올리고 싶다면? 나는 타고난 수능 만점자인 것인가?
        당신의 숨겨진 성적을 깨닫고 싶다면?
      </div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white"
            alt="Next.js Badge"
          />
        </a>
        <a href="https://expressjs.com/" rel="noreferrer">
          <img
            src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"
            alt="Express Badge"
          />
        </a>
        <a href="https://www.postgresql.org/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=PostgreSQL&logoColor=white"
            alt="PostgreSQL Badge"
          />
        </a>
        <a href="https://vercel.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white"
            alt="Vercel Badge"
          />
        </a>
        <a href="https://vercel.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Virtual Box-183A61?style=flat-square&logo=virtualbox&logoColor=white"
            alt="Vercel Badge"
          />
        </a>
      </div>
      <ol>
        <li>Virtual Box VM 인스턴스를 활용해 웹 서버, API 서버, DB 서버 구축</li>
        <li>사설 IP를 활용해 3가지 서버 연결 및 각 서버별 방화벽 설정</li>
        <li>
          배포 자동화를 위해 리눅스 crontab을 활용하여 <pre>git pull</pre> 자동화
        </li>
      </ol>
      <div className="grid grid-cols-4 gap-2">
        <Image
          src="/images/moigosa-1.png"
          alt="preview"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/moigosa-2.png"
          alt="preview"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/moigosa-3.png"
          alt="preview"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/moigosa-4.png"
          alt="preview"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/moigosa-5.png"
          alt="preview"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/moigosa-6.png"
          alt="preview"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/moigosa-7.png"
          alt="preview"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/moigosa-8.png"
          alt="preview"
          width="376"
          height="810"
          className="border"
        />
      </div>
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>심리 테스트</h4>
        <div>4명</div>
        <div>
          <div>Frontend: 2021년 6월 14일 ~ 16일 (3일)</div>
          <div>Backend: 2021년 7월 1일 ~ 3일 (3일)</div>
        </div>
      </div>
      <div className="flex gap-0.5 my-2">
        <a
          href="https://github.com/gwak2837/simli-test"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              simli-test
            </h5>
          </div>
        </a>
        <a
          href="https://github.com/gwak2837/simli-test-backend"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              simli-test-backend
            </h5>
          </div>
        </a>
        <a
          href="https://simli.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/vercel.png" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              simli.vercel.app
            </h5>
          </div>
        </a>
      </div>
      <div>
        쟤도 날 좋아할까? 그/그녀의 심리를 알고 싶다면? 나는 타고난 어그로 꾼인가? 당신의 숨겨진
        정체를 깨닫고 싶다면? 이 말을 가짜라고 생각하고 무시한다면 정말 안 좋은 사고가 꼭
        일어납니다. 지금 당장 시작하세요.
      </div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white"
            alt="Next.js Badge"
          />
        </a>
        <a href="https://web.dev/progressive-web-apps/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=PWA&logoColor=white"
            alt="PWA Badge"
          />
        </a>
        <a href="https://expressjs.com/" rel="noreferrer">
          <img
            src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"
            alt="Express Badge"
          />
        </a>
        <a href="https://ant.design/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white"
            alt="mariadb Badge"
          />
        </a>
        <a href="https://vercel.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white"
            alt="Vercel Badge"
          />
        </a>
        <a href="https://cloud.google.com/gcp/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Cloud Run-4285F4?style=flat-square&logo=google-cloud&logoColor=white"
            alt="GCP Badge"
          />
        </a>
      </div>
      <ol>
        <li>Vercel에 프론트엔드 자동 배포, Cloud Run에 백엔드 자동 배포</li>
        <li>Slack에 프론트엔드·백엔드 배포 알림 설정 및 GitHub, Slack을 사용해서 협업</li>
        <li>Google Analytics를 적용해 방문하는 사용자 분석</li>
        <li>PWA를 적용해 모바일 환경의 사용자 경험 및 접근성 향상</li>
      </ol>
      <div className="grid grid-cols-4 gap-2">
        <Image
          src="/images/simli-1.png"
          alt="jayudam architecture"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/simli-2.png"
          alt="jayudam architecture"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/simli-3.png"
          alt="jayudam architecture"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/simli-4.png"
          alt="jayudam architecture"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/simli-5.png"
          alt="jayudam architecture"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/simli-6.png"
          alt="jayudam architecture"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/simli-7.png"
          alt="jayudam architecture"
          width="376"
          height="810"
          className="border"
        />
        <Image
          src="/images/simli-8.png"
          alt="jayudam architecture"
          width="376"
          height="810"
          className="border"
        />
      </div>
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>이메일 블록체인 검증</h4>
        <div>2명</div>
        <a href="/images/2021-cau-lab.webp" target="_blank">
          2021년 6월 1일 ~ 8월 31일 (3개월)
        </a>
      </div>
      <div className="flex gap-0.5 my-2">
        <a
          href="https://github.com/gwak2837/email-blockchain"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              email-blockchain
            </h5>
          </div>
        </a>
      </div>
      <div>
        이메일 수발신을 블록체인 상의 하나의 트랜잭션 및 블록으로 관리하면 이메일을 주고 받을 때마다
        블록이 생성되어 블록체인 형태가 되는데, 추후에 이메일 내용 관련으로 분쟁이 발생하면 각 블록
        및 트랜잭션의 검증된 해시값을 사용하여 이메일 내용의 무결성을 증명할 수 있음
      </div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white"
            alt="Next.js Badge"
          />
        </a>
        <a href="https://ant.design/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Ant_Design-0170FE?style=flat-square&logo=Ant-Design&logoColor=white"
            alt="styled Badge"
          />
        </a>
        <a href="https://styled-components.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Styled-DB7093?style=flat-square&logo=styled-components&logoColor=white"
            alt="styled Badge"
          />
        </a>
        <a href="https://vercel.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white"
            alt="Vercel Badge"
          />
        </a>
      </div>
      <ol>
        <li>
          Next.js{' '}
          <a
            href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes"
            target="_blank"
            rel="noreferrer"
          >
            API Routes
          </a>{' '}
          기능을 이용해 비공개 블록체인의 개별 노드와 통신
        </li>
        <li>
          <a href="https://github.com/emailjs-com/emailjs-sdk" target="_blank" rel="noreferrer">
            <pre>@emailjs/browser</pre>
          </a>{' '}
          라이브러리를 사용해 다른 서버로 이메일 전송 및{' '}
          <a href="https://github.com/mscdex/node-imap" target="_blank" rel="noreferrer">
            <pre>imap</pre>
          </a>{' '}
          라이브러리를 사용해 다른 IMAP 이메일 서버 내용을 가져옴
        </li>
      </ol>
      <div className="border w-full my-6" />
      <h4 className="my-8">이전 프로젝트 목록</h4>
      <a
        href="https://gwak2837.notion.site/Resume-3fb93cf3019243fc8fd9103975f2872f"
        target="_blank"
        rel="noreferrer"
      >
        Notion에서 보기
      </a>
      <h2 className="text-3xl my-8">기술</h2>
      <h3 className="text-2xl my-4">React.js (Next.js)</h3>
      <dl>
        <li>Recoil.js, Context API 기능으로 전역 상태를 관리함</li>
        <li>React Query, Apollo client, useSWR 등 네트워크 요청 및 응답 데이터를 관리함</li>
        <li>Next.js 프레임워크 기반 SSR를 개발함</li>
        <li>
          PWA를 적용해 모바일 접근성을 높이고, 브라우저 Notification/Push API로 사용자 재방문율을
          향상함
        </li>
        <li>
          <a
            href="https://velog.io/@gwak2837/React-Virtual-DOM-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0"
            target="_blank"
            rel="noreferrer"
          >
            Virtual DOM의 존재 의의와 언제 Reconciliation이 발생하는지 고민함
          </a>
        </li>
        <li>
          <a
            href="https://velog.io/@gwak2837/React-Hooks%EC%9D%98-%EC%9D%B4%ED%95%B4#effect-%ED%95%A8%EC%88%98%EC%99%80-clean-up-%ED%95%A8%EC%88%98"
            target="_blank"
            rel="noreferrer"
          >
            함수 컴포넌트와 클래스 컴포넌트를 비교하며 여러 useEffect가 어떤 순서로 실행되는지
            고민함
          </a>
        </li>
        <li>함수형 프로그래밍에서 나오는 클로저 개념을 활용해 useState를 간단하게 직접 구현함</li>
        <li>메모이제이션 개념을 이용한 useMemo, useCallback을 활용해 컴포넌트 렌더링을 최적화함</li>
      </dl>
      <h3 className="text-2xl my-4">HTML · CSS</h3>
      <dl>
        <li>
          W3C 웹 표준과 웹 접근성(a11y)을 지키려 노력하며 크로스 브라우징에 대응할 수 있음 (IE11
          제외)
        </li>
        <li>Semantic HTML, SCSS 문법에 익숙함</li>
        <li>keyframe, transition 등을 활용한 애니메이션 구현 가능함</li>
        <li>마우스 Drag&Drop 기능과 스크롤 이벤트를 활용한 애니메이션 구현 가능함</li>
        <li>Figma, Zeplin, Adobe XD와 같은 디자인 툴을 이용해 디자이너와 협업함</li>
        <li>순수 CSS를 이용해 Drawer, Modal, Carousel을 직접 구현 가능함</li>
      </dl>
      <h3 className="text-2xl my-4">JavaScript</h3>
      <dl>
        <li>ES2022 까지의 문법 및 JavaScript 엔진에서 사용되는 비동기 개념에 익숙함</li>
        <li>TypeScript와 type 자동 생성 라이브러리를 사용해 개발 생산성을 높임</li>
        <li>esbuild, Webpack 번들러를 사용해 Docker 이미지 크기를 줄임</li>
        <li>Promise, async await, generator 문법을 사용해 비동기 작업을 구현 가능함</li>
        <li>
          브라우저의{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"
            target="_blank"
            rel="noreferrer"
          >
            Geolocation API
          </a>
          ,&nbsp;
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API"
            target="_blank"
            rel="noreferrer"
          >
            Notification API
          </a>
          ,&nbsp;
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API"
            target="_blank"
            rel="noreferrer"
          >
            WebRTC API
          </a>
          ,&nbsp;
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Push_API"
            target="_blank"
            rel="noreferrer"
          >
            Push API
          </a>
          &nbsp;기능을 사용할 수 있음
        </li>
        <li>웹소켓 또는 HTTP/2 Push 기능을 활용해 일대일 채팅 기능을 구현함</li>
      </dl>
      <h3 className="text-2xl my-4">Backend</h3>
      <dl>
        <li>Fastify, Next.js, Express.js, Koa.js 라이브러리로 REST API 서버를 개발함</li>
        <li>Apollo Server를 사용해 GraphQL API 서버를 개발함</li>
        <li>Jest를 사용한 유닛 테스트 자동화(CI) 경험이 있음</li>
        <li>Dockerfile, compose.yaml 파일을 사용해 서버 인프라 설정, 컨테이너 관리를 자동화함</li>
        <li>간단한 PostgreSQL 쿼리 빌더 및 ORM을 직접 구현함</li>
        <li>
          BFF 개념을 활용해 프론트엔드 개별 페이지에 최적화된 엔드포인트를 설계 · 구현할 수 있음
        </li>
      </dl>
      <h3 className="text-2xl my-4">PostgreSQL</h3>
      <dl>
        <li>
          외래키와 junction 테이블을 사용해 테이블 간 일대일, 일대다, 다대다 관계를 설정할 수 있음
        </li>
        <li>JOIN 키워드를 활용해 여러 테이블에서 데이터를 가져올 수 있음</li>
        <li>COPY 키워드를 사용해 데이터베이스 데이터를 CSV 파일로 관리할 수 있음</li>
        <li>트랜잭션으로 여러 SQL문을 하나의 논리적 단위로 관리할 수 있음</li>
        <li>함수, 프로시저, 트리거, PL/pgSQL을 사용해 SQL 요청 횟수를 줄일 수 있음</li>
        <li>
          SQL 간 경쟁조건이 있을 때 의도된 결과를 얻기 위해 특정 테이블 또는 레코드를 잠글 수 있음
        </li>
      </dl>
      <h3 className="text-2xl my-4">Cloud</h3>
      <dl>
        <li>클라우드 가상 머신에 Docker 기반 SSL 전용 PostgreSQL 서버와 Redis 서버를 구축함</li>
        <li>Cloud Build와 Cloud Run을 활용해 Docker 이미지 빌드 · 배포를 자동화(CI · CD)함</li>
        <li>Cloud Function을 사용한 Slack 알림봇 개발 가능함</li>
        <li>GCP VPC 네트워크에서 방화벽 규칙을 설정해 요청 IP 또는 포트 범위를 제한함</li>
        <li>Cloud Storage에 이미지 파일을 동적으로 업로드하고 서비스 했음</li>
        <li>Cloud SQL 및 AWS RDS에 클라우드 DB 서버를 구축했음</li>
        <li>AWS RDS, AWS EC2, AWS S3, Oracle Instance, 가비아 클라우드를 사용한 경험이 있음</li>
      </dl>
      <h3 className="text-2xl my-4">외부 API</h3>
      <dl>
        <li>카카오 OAuth, Google OAuth, 비바톤 OAuth, 네이버 OAuth 등과 연동 가능함</li>
        <li>카카오페이, 토스페이를 사용해 결제 시스템을 자동화할 수 있음</li>
        <li>Google Analytics를 활용한 사이트 통계 분석 경험이 있음</li>
        <li>네이버지도 API를 활용해 지도 기능을 개발할 수 있음</li>
        <li>채널톡 API, Telegram API, SOLAPI를 활용해 사용자에게 알림용 메시지를 보낼 수 있음</li>
      </dl>

      <div className="w-full text-center text-slate-800 text-sm mt-8">작성일: {date}</div>
      <div className="w-full text-center text-slate-800 text-sm">작성자: 곽태욱</div>
    </main>
  )
}
