/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

import OtherCertificates from './OtherCertificates'

export default function HomePage() {
  return (
    <main className="mx-auto mb-8 max-w-[720px]">
      <a href="https://gwak2837.vercel.app" target="_blank" rel="noreferrer">
        <h1 className="text-4xl mb-6 font-semibold	w-full">이력서</h1>
      </a>
      <div>
        <div className="grid gap-4 grid-cols-[2fr_3fr]">
          <Image src="/images/1.jpeg" alt="asd" width="270" height="270" />
          <table className="border-none w-fit	">
            <tbody>
              <tr>
                <td className="border-none p-px">🧑&nbsp;&nbsp;</td>
                <td className="border-none p-px">곽태욱 (Taeuk Gwak, 郭泰昱)</td>
              </tr>
              <tr>
                <td className="border-none p-px">🎉</td>
                <td className="border-none p-px">1998년 4월 12일 (남)</td>
              </tr>
              <tr>
                <td className="border-none p-px">🎓</td>
                <td className="border-none p-px">중앙대학교 컴퓨터공학부 학사</td>
              </tr>
              <tr>
                <td className="border-none p-px">🏠</td>
                <td className="border-none p-px">서울시 강동구 천호동</td>
              </tr>
              <tr>
                <td className="border-none p-px">🪖</td>
                <td className="border-none p-px">ROTC 2019년 1월 ~ 2020년 9월 (1년 8개월)</td>
              </tr>
              <tr>
                <td className="border-none p-px"></td>
                <td className="border-none p-px">카투사 2022년 3월 ~ 2023년 7월 (1년 4개월)</td>
              </tr>
              <tr>
                <td className="border-none p-px">📱</td>
                <td className="border-none p-px">
                  <a href="tel:010-9203-2837">010-9203-2837</a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-px">✉️</td>
                <td className="border-none p-px">
                  <a href="mailto:gwak2837@kakao.com">gwak2837@kakao.com</a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-px">
                  <Image src="/images/github.svg" alt="github" width="16" height="16" />
                </td>
                <td className="border-none p-px">
                  <a href="https://github.com/gwak2837" target="_blank" rel="noreferrer">
                    github.com/gwak2837
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-px">
                  <Image src="/images/velog.png" alt="velog" width="16" height="16" />
                </td>
                <td className="border-none p-px">
                  <a href="https://velog.io/@gwak2837" target="_blank" rel="noreferrer">
                    velog.io/@gwak2837
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-px">
                  <Image src="/images/instagram.svg" alt="velog" width="16" height="16" />
                </td>
                <td className="border-none p-px">
                  <a href="https://www.instagram.com/gwak2837/" target="_blank" rel="noreferrer">
                    instagram.com/gwak2837
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="my-4 ">
        고객의 불편함을 해결하는 제품을 기획하면서 고객의 목소리에 귀 기울여 비즈니스 문제를
        해결하고, 제품을 개발하는 도중 얻은 지식을 다른 사람과 공유하면서 기술의 존재 이유를
        고민하는 <b>프론트엔드 개발자</b> 곽태욱입니다.
      </p>
      <h2 className="text-3xl my-8 ">소개</h2>
      <p className="my-4 	">
        직접 만든 기프트링크 동아리의 소프트웨어 개발자로 시작해, 행복한 다람쥐단 프론트엔드 인턴,
        (주)페스타 프론트엔드 인턴, Headstart Silicon Valley, Inc 프로젝트 매니저, 신디(Sindy)
        창업팀 프로토타입 개발팀장, (주)알파카살롱 MVP 개발팀장, (주)더하트컴퍼니 베타 서비스
        개발팀장 등에서 다양한 프로젝트를 수행하며 서비스가 세상에 나오기 위한 전체 개발 주기를
        경험했습니다. 첫 창업팀인 신디에서 서비스를 처음부터 구축해야 하다보니 여러 개발 분야를
        경험했습니다.
      </p>
      <p className="my-4 	">
        그러면서 서비스를 잘 만들려면 동료와의 협업이 중요하단 것과, 나와 동료의 성장이 수반되야
        좋은 서비스가 나올 수 있다는 것을 깨달았습니다. 아이디어가 프로토타입이 되고 프로토타입이
        제품 수준으로 성장하는 과정에서, 나와 동료가 성장하고 우리가 속한 조직이 성장하려면 필요한
        것이 무엇일까 고민하면서, 신디 창업팀에서 '카페의 특색을 담아내는 사용자 주도 SNS형 디저트
        정보 공유 공간' 서비스를 기획하고, 프론트엔드/백엔드 개발자와 클라우드 엔지니어로서 서비스를
        처음부터 키웠습니다.
      </p>
      <p className="	">
        현재는 프론트엔드 분야를 집중적으로 탐구하고 있고, 백엔드 및 클라우드 분야 등 서비스 출시를
        위해 필요한 분야로 관심사를 넓히고 있습니다.
      </p>
      <Image src="/images/mbti.png" alt="asd" width="2716" height="1200" />
      <h2 className="text-3xl my-8 ">학력</h2>
      <table>
        <thead>
          <tr>
            <td>이름</td>
            <td>세부</td>
            <td>기간</td>
            <td>비고</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-semibold">중앙대학교</td>
            <td>컴퓨터공학부 학사</td>
            <td>2017년 3월 ~ 2022년 2월</td>
            <td>
              전체 학점: 4.1 / 4.5 (163 학점) <br />
              전공 학점: 4.0 / 4.5 (89 학점)
            </td>
          </tr>
          <tr>
            <td className="font-semibold">호남고등학교</td>
            <td>이과 졸업</td>
            <td>2014년 3월 ~ 2017년 2월 </td>
            <td>평균 내신: 1.45</td>
          </tr>
          <tr>
            <td className="font-semibold">완주화산중학교</td>
            <td>졸업</td>
            <td>2011년 3월 ~ 2014년 2월 </td>
            <td>졸업 등수: 남자 수석 (전체 4등)</td>
          </tr>
        </tbody>
      </table>
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
            <td>TOPCIT 15회</td>
            <td className="text-center">627점 (전국 4등)</td>
            <td className="text-center">과학기술정보통신부</td>
            <td className="text-center">2021년 5월 22일</td>
          </tr>
          <tr>
            <td>G-TELP (Level 2)</td>
            <td className="text-center">82점</td>
            <td className="text-center">국제테스트 연구원</td>
            <td className="text-center">2020년 5월 3일</td>
          </tr>
          <tr>
            <td>대한검정회</td>
            <td className="text-center">준1급</td>
            <td className="text-center">대한민국한자교육연구회</td>
            <td className="text-center">2009년 11월 28일</td>
          </tr>
        </tbody>
      </table>
      <OtherCertificates />
      <h2 className="text-3xl my-8">
        개발 경력 <span className="text-base">(1년)</span>
      </h2>
      <ul>
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a
              href="https://www.saramin.co.kr/zf_user/company-info/view?csn=eFE2Qks5TzVpanROVE5pQW9ZbGMyZz09"
              target="_blank"
              rel="noreferrer"
            >
              <b>(주)더하트컴퍼니</b>
            </a>
            <div>2022년 2월 14일 ~ 3월 13일 (1개월)</div>
          </div>
          <div>직책: 개발팀장</div>
          <div>직급: 인턴</div>
          <div>역할: '다시 일하고 싶은 여성의 상호성장 플랫폼' 비마이시즌 개발</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a
              href="https://www.saramin.co.kr/zf_user/company-info/view?csn=TTNPako4L0s0cVFhdktlYjlwZ0JZUT09"
              target="_blank"
              rel="noreferrer"
            >
              <b>(주)알파카살롱</b>
            </a>
            <div>2021년 11월 9일 ~ 2022년 2월 8일 (3개월)</div>
          </div>
          <div>직책: 개발팀장</div>
          <div>직급: 인턴</div>
          <div>역할: '4050 여성 전용 커뮤니티' 알파카살롱 기획 및 MVP 개발</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a
              href="https://www.saramin.co.kr/zf_user/company-info/view?csn=VUxtcFBINlJLR2wra01lNlhjbEV0QT09"
              target="_blank"
              rel="noreferrer"
            >
              <b>(주)페스타</b>
            </a>
            <div>2020년 9월 1일 ~ 12월 31일 (4개월)</div>
          </div>
          <div>직책: Frontend 개발팀원</div>
          <div>직급: 인턴</div>
          <div>역할: '페스타 서비스 관리자(Admin) 페이지' 기획 및 개발</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a
              href="https://www.saramin.co.kr/zf_user/company-info/view?csn=VHFyWXhFL2E1N1hYMkhEZmUxK05SZz09"
              target="_blank"
              rel="noreferrer"
            >
              <b>(주)행복한 다람쥐단 </b>
            </a>
            <div>2019년 12월 23일 ~ 2020년 2월 21일 (2개월)</div>
          </div>
          <div>직책: 개발부원</div>
          <div>직급: 인턴</div>
          <div>역할: '방탈출 리뷰 웹사이트' 기획/디자인 및 MVP 개발</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>중앙대학교 적외선스텔스 실험실</b>
            <div>2019년 3월 26일 ~ 5월 31일 (2개월)</div>
          </div>
          <div>직책: SW 개발팀원</div>
          <div>직급: 인턴</div>
          <div>
            역할: 적외선 영상 통계 분석 개발 보조 (C++), OpenMP 라이브러리 기반 병렬처리로 수학 계산
            성능 최적화
          </div>
        </li>
      </ul>
      <h2 className="text-3xl my-8">프로젝트</h2>
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>중앙정부 · 지자체 세출</h4>
        <div>본인</div>
        <div>2023년 1월 24일 ~ 현재</div>
      </div>
      <div className="flex gap-0.5 my-2">
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
          href="https://lofin.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/vercel.png" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              lofin.vercel.app
            </h5>
          </div>
        </a>
        <a
          href="https://lofin-2uhldmgcia-du.a.run.app"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/cloud-run.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              lofin-2uhldmgcia-du.a.run.app
            </h5>
          </div>
        </a>
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
          정부에서 제공하는 OpenAPI를 이용해{' '}
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
          데이터를 데이터베이스에 저장함
        </li>
        <li>B-Tree 인덱스를 설계해 약 2억 개의 재정 데이터를 5초 안으로 검색할 수 있음</li>
        <li>
          JavaScript 번들 용량을 줄이기 위해 Next.js 13을 이용해 특정 URL의 HTML 파일을 캐싱함
        </li>
      </ol>
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>이력서</h4>
        <div>본인</div>
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
            src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white"
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
        <div>본인</div>
        <div>2022년 11월 22일 ~ 2023년 1월 19일 (2개월)</div>
      </div>
      <div className="flex gap-0.5 my-2">
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
      </div>
      <div>
        시시각각 변하는 쿠팡의 가격을 추적하여 알림을 받기 위해 프로젝트를 시작함. 이후 이 기능을
        쿠팡 파트너스의 제휴 URL과 연계해 수입을 얻을 예정임
      </div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white"
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
        <li>
          Apollo server 사용하다가 Apollo는 서버에 HTTP2를 적용할 수 없어서, HTTP2를 지원하면서
          Apollo server보다 몇 배 빠른 Fastify로 변경함
        </li>
        <li>GraphQL을 안 쓰게 돼서 Apoll client를 React Query로 변경함</li>
        <li>
          Next.js 페이지 revalidation을 위해 Next.js api 기능을 활용함. 이때 lru-cache를 통해 요청
          빈도를 제한함. 또한 font 로딩 속도 개선과 font 지연 로딩으로 인한 cumulative layout shift
          방지를 위해 @next/font를 사용함
        </li>
        <li>
          Styled components는 프로젝트 규모가 커질 수록 css 번들 크기가 선형으로 증가하는 단점이
          있음. 그래서 큰 프로젝트에서 css 번들 크기를 줄이기 위해 Tailwind를 사용함. Tailwind CSS를
          처음 도입하면 초기 학습 시간이 있는데, 시간이 지날 수록 Styled component처럼 따로 변수를
          만들지 않고 바로 className만 작성하면 된다는 부분에 편리함을 느낌
        </li>
        <li>
          Push API를 웹워커로 직접 구현하다가 Push API 관련 UI 구현 및 UX 개선하는데 품이 많이
          들어서 FlareLane을 선택함
        </li>
        <li>사이트를 크롤링 후 특정 조건을 만족하면 모바일로 알림을 보내는 알고리즘을 구현함</li>
        <li>
          서버리스 서비스인 Cloud Run에서 웹사이트 크롤링 용도로 설치한 puppeteer가 작동하지 않는
          문제가 발생함. root 사용자 대신 권한이 특정 폴더로 제한된 새로운 사용자를 만들어 puppeteer
          접근 범위를 제한하고, puppeteer가 컨테이너 위에서 실행되기 때문에 sandbox 보안 설정을
          해제하여 해결함
        </li>
        <li>
          Cheerio 패키지만으론 {`<iframe>`} 하위 HTML을 불러올 수 없어, Puppeteer 브라우저의
          자바스크립트를 사용해 불러옴
        </li>
        <li>
          one-to-many 관계의 테이블일 때 many 쪽 테이블에서 모든 레코드가 아닌 특정 레코드 N개만
          선택해 JOIN 해야하는 상황이 발생했는데, Greatest-N-Per-Group 알고리즘을 사용하여 해결함
        </li>
      </ol>
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>자유담</h4>
        <div>본인</div>
        <div>2022년 6월 1일 ~ 10월 31일 (5개월)</div>
      </div>
      <div className="flex gap-0.5 my-2">
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
      </div>
      <div>공공보건 증진을 위한 개인간 보건기록 QR코드 익명 인증 서비스</div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Apollo client-311C87?style=flat-square&logo=Apollo GraphQL&logoColor=white"
            alt="react-query"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Recoil.js-3578e5?style=flat-square&logo=&logoColor=white"
            alt="next.js"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/React Form-EC5990?style=flat-square&logo=react-hook-form&logoColor=white"
            alt="fastify"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Apollo server-311C87?style=flat-square&logo=Apollo GraphQL&logoColor=white"
            alt="tailwind"
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
          네트워크 요청 및 응답 데이터와 input 입력값 데이터 관리를 제외한, React 전역 상태 관리를
          위해 Recoil.js를 선택함. 네트워크 요청 및 응답 데이터는 Apollo client로 관리하고, input
          입력값 데이터는 React form으로 관리함
        </li>
        <li>
          웹소켓보다 가벼운 HTTP2 Server push를 사용해 채팅 기능을 구현함. 웹소켓을 사용하면
          서버와의 양방향 통신이 가능해 서버가 먼저 바이너리 데이터를 보낼 수 있는데, 본
          프로젝트에선 서버에서 바이너리 데이터를 먼저 보내는 경우가 없어 Server push로도 적당하다고
          판단함. 브라우저의 EventSource 기능을 활용하면 HTTP2 서버에서 브라우저로 먼저 요청할 수
          있음
        </li>
        <li>브라우저 카메라를 이용해 QR 코드 스캔 기능을 구현함</li>
      </ol>
      <Image
        src="/images/jayudam.png"
        alt="jayudam architecture"
        width="1920"
        height="1080"
        className="border"
      />
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>업비트 자동 매매</h4>
        <div>본인</div>
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
      <h4 className="my-2">Language</h4>
      <div className="flex gap-1">
        <a href="https://javascript.info/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/ES2022-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"
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
        <a href="https://www.shellscript.sh/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Shell Script-4EAA25?style=flat-square&logo=GNU-Bash&logoColor=white"
            alt="Shell Script Badge"
          />
        </a>
      </div>
      <h4 className="my-2">Frontend</h4>
      <div className="grid gap-1">
        <div className="flex gap-1">
          <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white"
              alt="Next.js Badge"
            />
          </a>
          <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/React.js-61DAFB?style=flat-square&logo=react&logoColor=black"
              alt="React Badge"
            />
          </a>
          <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"
              alt="tailwind Badge"
            />
          </a>
          <a href="https://web.dev/progressive-web-apps/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=PWA&logoColor=white"
              alt="PWA Badge"
            />
          </a>
          <a href="https://tanstack.com/query/v4/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=react-query&logoColor=white"
              alt="React Query Badge"
            />
          </a>
          <a href="https://recoiljs.org/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Recoil-3578e5?style=flat-square&logo=recoil&logoColor=white"
              alt="Recoil Badge"
            />
          </a>
          <a href="https://react-hook-form.com/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/React Form-EC5990?style=flat-square&logo=react-hook-form&logoColor=white"
              alt="styled Badge"
            />
          </a>
          <a href="https://analytics.google.com/analytics/web/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/GA-E37400?style=flat-square&logo=Google Analytics&logoColor=white"
              alt="GA Badge"
            />
          </a>
          <a href="https://www.figma.com/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=black"
              alt="Figma Badge"
            />
          </a>
        </div>

        <div className="flex gap-1">
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
          <a href="https://en.wikipedia.org/wiki/HTTP/2" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/HTTP2-4285F4?style=flat-square&logo=google-chrome&logoColor=white"
              alt="HTTP2 Badge"
            />
          </a>
          <a href="https://en.wikipedia.org/wiki/WebRTC" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/WebRTC-333333?style=flat-square&logo=webrtc&logoColor=white"
              alt="WebRTC Badge"
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
        <div className="flex gap-1">
          <a href="https://styled-components.com/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Styled-DB7093?style=flat-square&logo=styled-components&logoColor=white"
              alt="styled Badge"
            />
          </a>
          <a href="https://emotion.sh/docs/introduction" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Emotion-C43BAD?style=flat-square&logo=&logoColor=white"
              alt="emotion Badge"
            />
          </a>
          <a href="https://www.adobe.com/products/xd.html" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Adobe XD-FF61F6?style=flat-square&logo=Adobe XD&logoColor=black"
              alt="Adobe XD Badge"
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
              alt="Apollo Badge"
            />
          </a>
          <a href="https://en.wikipedia.org/wiki/HTTP/3" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/HTTP3-4285F4?style=flat-square&logo=google-chrome&logoColor=white"
              alt="HTTP3 Badge"
            />
          </a>
          <a
            href="https://en.wikipedia.org/wiki/HTTP/2_Server_Push"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://img.shields.io/badge/Server Push-4285F4?style=flat-square&logo=google-chrome&logoColor=white"
              alt="Server Push Badge"
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
        </div>
        <div className="flex gap-1">
          <a href="https://expressjs.com/" rel="noreferrer">
            <img
              src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"
              alt="Express Badge"
            />
          </a>
          <a href="https://www.apollographql.com/docs/apollo-server/" rel="noreferrer">
            <img
              src="https://img.shields.io/badge/Apollo-311C87?style=flat-square&logo=apollo-graphql&logoColor=white"
              alt="Express Badge"
            />
          </a>
          <a href="https://graphql.org/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white"
              alt="GraphQL Badge"
            />
          </a>
          <a href="https://socket.io/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=Socket.io&logoColor=white"
              alt="WebSocket Badge"
            />
          </a>
          <a href="https://www.mysql.com/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white"
              alt="MySQL Badge"
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
          <a href="" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Oracle Instance-F80000?style=flat-square&logo=oracle&logoColor=white"
              alt="Oracle Badge"
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
              src="https://img.shields.io/badge/Compute Engine-4285F4?style=flat-square&logo=google-cloud&logoColor=white"
              alt="GCP Badge"
            />
          </a>
          <a href="https://cloud.google.com/gcp/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Cloud Storage-4285F4?style=flat-square&logo=google-cloud&logoColor=white"
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
        <div className="flex gap-1">
          <a href="https://aws.amazon.com/ko/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/RDS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white"
              alt="AWS Badge"
            />
          </a>
          <a href="https://aws.amazon.com/ko/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/EC2-232F3E?style=flat-square&logo=Amazon-AWS&logoColor=white"
              alt="AWS Badge"
            />
          </a>
          <a href="https://aws.amazon.com/ko/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/S3-569A31?style=flat-square&logo=Amazon-S3&logoColor=white"
              alt="AWS Badge"
            />
          </a>
        </div>
      </div>
      <h4 className="my-2">Developer Tool</h4>
      <div className="grid gap-1">
        <div className="flex gap-1">
          <a href="https://yarnpkg.com/getting-started/install" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Yarn berry-2C8EBB?style=flat-square&logo=yarn&logoColor=white"
              alt="Yarn Berry Badge"
            />
          </a>
          <a href="https://esbuild.github.io/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/esbuild-FFCF00?style=flat-square&logo=esbuild&logoColor=black"
              alt="esbuild Badge"
            />
          </a>
          <a href="https://eslint.org/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white"
              alt="ESLint Badge"
            />
          </a>
          <a href="https://prettier.io/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black"
              alt="Prettier Badge"
            />
          </a>
          <a href="https://webpack.js.org/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=black"
              alt="Webpack Badge"
            />
          </a>
          <a href="" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white"
              alt="Jest Badge"
            />
          </a>
        </div>
        <div className="flex gap-1">
          <a href="" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"
              alt="Git Badge"
            />
          </a>
          <a href="https://code.visualstudio.com/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white"
              alt="VSCode Badge"
            />
          </a>
          <a href="" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Slack Bot-4A154B?style=flat-square&logo=slack&logoColor=white"
              alt="Slack Badge"
            />
          </a>
          <a href="" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white"
              alt="Notion Badge"
            />
          </a>

          <a href="" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=jira&logoColor=white"
              alt="Jira Badge"
            />
          </a>
        </div>
      </div>
      <h3 className="text-2xl my-4">React.js (Next.js)</h3>
      <dl>
        <li>Recoil.js, Context API 기능으로 전역 상태를 관리함</li>
        <li>React Query, Apollo client, useSWR 등 네트워크 요청 및 응답 데이터를 관리함</li>
        <li>Next.js 프레임워크 기반 SSR를 개발함</li>
        <li>
          PWA를 적용해 모바일 접근성을 높이고, 브라우저 Notification/Push API로 사용자 재방문율을
          향상함
        </li>
        <li>Virtual DOM의 존재 의의와 언제 Reconciliation이 발생하는지 고민함</li>
        <li>
          함수 컴포넌트와 클래스 컴포넌트를 비교하며 여러 useEffect가 어떤 순서로 실행되는지 고민함
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
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            target="_blank"
            rel="noreferrer"
          >
            Intersection Observer API
          </a>
          를 사용해 무한스크롤 페이지네이션을 구현함
        </li>
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
        <li>Offset Pagination, Keyset Pagination 쿼리를 구현할 수 있음</li>
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
              href="https://www.asiatoday.co.kr/view.php?key=20221216010008397"
              rel="noreferrer"
              target="_blank"
            >
              (2등, 150만원)
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
          <div>결식 아동에게 줄 크리스마스 선물 크라우드펀딩 서비스 (2등, 5만원)</div>
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
          <div>식의약용 자생식물 데이터 기반 사업화 서비스 아이디어 제시 (입상)</div>
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
          <div>‘온라인 새활용 제품 유통 플랫폼’ 기획으로 대상(1등, 250만원) 수상 및 특허 출원</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>국가우수장학생 (이공계)</b>
            <div>한국장학재단</div>
            <div>2019년 8월 14일</div>
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
            택배 상하차 아르바이트생의 열약한 근무 환경을 주제로 '초록 유니폼을 입은 알바생' VR 영상
            제작 및 우수상 수상{' '}
            <a href="https://www.youtube.com/watch?v=ruqZIWGwH-I" rel="noreferrer" target="_blank">
              YouTube
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
            <a href="https://bond687.wixsite.com/bbreview" rel="noreferrer" target="_blank">
              (피칭상)
            </a>
          </div>
        </li>
      </ul>
      <h2 className="text-3xl my-8">경험</h2>
      <ul>
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>카투사 1지역대 정보작전과 (동두천)</b>
            <div>2022년 12월 1일 ~ 2023년 7월 23일 (7개월)</div>
          </div>
          <div>직책: 전산병</div>
          <div>
            역할: 1지역대 내 한국군 컴퓨터 설치.수리.유지보수, 한셀 VBS(Visual basic script)로 업무
            자동화
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>카투사 미8군 제176재정관리지원대 (동두천)</b>
            <div>2022년 5월 11일 ~ 11월 30일 (6개월)</div>
          </div>
          <div>직책: SW Maintenance Team member</div>
          <div>
            역할: 미군 월급 관리 시스템(DJMS, Defense Joint Military pay Service), 미군 월급 관리
            웹사이트(MMPA, Master Military Pay Account) 유지보수
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
          <div>직책: 웹 개발 수업 강사</div>
          <div>
            역할: 초등학생/중학생을 대상으로 HTML/CSS/JS 개념 및 자기소개 웹페이지 제작 수업 (주
            2회, 1회 3시간)
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>과외</b>
            <div>2021년 8월 9일 ~ 2022년 2월 6일 (6개월)</div>
          </div>
          <div>
            역할: 대학생을 대상으로 프론트엔드/백엔드/클라우드 개념 및 인스타그램 클론 코딩 수업 (주
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
            <div>2021년 7월 5일 ~ 8월 20일 (2개월)</div>
          </div>
          <div>직책: 프로젝트 팀원</div>
          <div>
            역할: 'UAV ground scanning systems to find people or groups' 논문 작성, 학습 데이터 수집
            및 가공
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a href="https://www.onoffmix.com/event/236424" target="_blank" rel="noreferrer">
              <b>쿠버네티스 기반 클라우드 시스템 엔지니어 양성 과정</b>
            </a>
            <div>2021년 5월 31일 ~ 11월 9일 (5개월)</div>
          </div>
          <div>직책: 프로젝트 팀장</div>
          <div>역할: Docker 기반 심리테스트 웹사이트 구축, k8s와 CI/CD 기반 CRUD 게시판 구축</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>신디(SINDY, Signature in Dessert) 창업</b>
            <div>2021년 2월 25일 ~ 10월 31일 (8개월)</div>
          </div>
          <div>직책: 개발팀장 (Frontend/Backend/Cloud)</div>
          <div>
            역할: '카페의 특색을 담아내는 사용자 주도 SNS형 디저트 정보 공유 공간' 디저트핏 기획 및
            개발
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>Headstart Silicon Valley, Inc.</b>
            <div>2021년 1월 4일 ~ 2월 5일 (1개월)</div>
          </div>
          <div>직책: 프로젝트 팀장</div>
          <div>역할: ‘음성인식 기반 노래검색 서비스’ Icezam 기획 및 개발</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>중앙대학교 2019년 2학기 SW 기초 교과목 멘토</b>
            <div>2019년 9월 16일 ~ 12월 13일 (3개월)</div>
          </div>
          <div>직책: ‘컴퓨팅적 사고와 문제 해결’ 수업 조교</div>
          <div>역할: 수업 중 수강생의 Scratch 프로그래밍 관련 질의 응답 및 과제 채점</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a
              href="https://www.saramin.co.kr/zf_user/company-info/view/csn/b2ZtOGw4SWdmTldhbjVLK2pqNzdDZz09/company_nm/(%EC%A3%BC)%EB%A6%AC%EC%84%9C%EC%B9%98%EB%9E%A9"
              target="_blank"
              rel="noreferrer"
            >
              <b>(주)리서치랩</b>
            </a>
            <div>2017년 7월 31일 ~ 8월 25일 (1개월)</div>
          </div>
          <div>직책: 연구4팀 팀원</div>
          <div>직급: 인턴</div>
          <div>역할: 설문 조사 데이터 통계 분석 (엑셀), 설문지 작성 (워드)</div>
        </li>
      </ul>

      <div className="w-full text-center text-slate-800 text-sm mt-8">작성일: 2023년 6월 27일</div>
      <div className="w-full text-center text-slate-800 text-sm">작성자: 곽태욱</div>
    </main>
  )
}
