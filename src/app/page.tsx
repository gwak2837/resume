/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

import OtherCertificates from './OtherCertificates'

export default function HomePage() {
  const date = '2023년 8월 8일'
  return (
    <main className="mx-auto mb-8 max-w-[720px]">
      <h1 className="text-4xl mb-6 font-semibold w-full">이력서</h1>
      <div>
        <div className="grid gap-4 grid-cols-2">
          <Image src="/images/1.webp" alt="asd" width="350" height="350" />
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
                <td className="border-none p-px">
                  <a href="/images/2022-graduate.webp" target="_blank">
                    중앙대학교 컴퓨터공학부 학사
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-px">🏠</td>
                <td className="border-none p-px">
                  <a href="https://naver.me/Fcg2bYyc" target="_blank" rel="noreferrer">
                    서울특별시 강동구 천호동
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-px">🪖</td>
                <td className="border-none p-px">군필 (육군 병장 만기전역):</td>
              </tr>
              <tr>
                <td className="border-none p-px"></td>
                <td className="border-none p-px">학군사관후보생 2019년 1월 ~ 2020년 9월</td>
              </tr>
              <tr>
                <td className="border-none p-px"></td>
                <td className="border-none p-px">
                  <a href="/images/2023-military.webp" target="_blank">
                    KATUSA 2022년 3월 ~ 2023년 7월
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-px">📱</td>
                <td className="border-none p-px">
                  <a href="tel:010-9203-2837">+82 010-9203-2837</a>
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
            <td>
              <a href="/images/2022-graduate.webp" target="_blank">
                2017년 3월 ~ 2022년 2월
              </a>
            </td>
            <td>
              <a href="/images/2022-univ.webp" target="_blank">
                전체 학점: 4.1 / 4.5 (163 학점)
              </a>
              <br />
              전공 학점: 4.0 / 4.5 (89 학점)
            </td>
          </tr>
          <tr>
            <td className="font-semibold">호남고등학교</td>
            <td>이과 졸업</td>
            <td>2014년 3월 ~ 2017년 2월 </td>
            <td>
              <a href="/images/2016-high.webp" target="_blank">
                평균
              </a>{' '}
              <a href="/images/2016-high2.webp" target="_blank">
                내신:
              </a>{' '}
              <a href="/images/2016-high3.webp" target="_blank">
                1.45
              </a>
            </td>
          </tr>
          <tr>
            <td className="font-semibold">완주화산중학교</td>
            <td>졸업</td>
            <td>2011년 3월 ~ 2014년 2월 </td>
            <td>
              <a href="/images/2013-middle.webp" target="_blank">
                졸업 등수:
              </a>{' '}
              <a href="/images/2013-middle2.webp" target="_blank">
                남자 수석 (전체 4등)
              </a>{' '}
            </td>
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
            <td>
              <a href="https://www.topcit.or.kr/home.do" target="_blank" rel="noreferrer">
                TOPCIT
              </a>{' '}
              제15회
            </td>
            <td className="text-center">
              <a href="/images/2021-topcit-627.webp" target="_blank">
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
              alt="eact-hook-form Badge"
            />
          </a>
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
          <a href="https://analytics.google.com/analytics/web/" rel="noreferrer" target="_blank">
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
              alt="Fastify Badge"
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
              alt="apollographql Badge"
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
      <h2 className="text-3xl my-8">
        개발 경력 <span className="text-base">(1년 4개월+)</span>
      </h2>
      <ul>
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a href="https://www.tossbank.com/" target="_blank" rel="noreferrer">
              <b>토스뱅크(주)</b>
            </a>
            <div>2023년 8월 7일 ~ 현재</div>
          </div>
          <div>직책: Admin Developer</div>
          <div>직급: 단기계약직</div>
          <div>
            역할: 토스씨엑스 담당자의 대출 상품 심사·승인·운영 업무의 효율성을 높이며, 대출 고객의
            불편함을 최소화하는 여신 관리 제품 개발
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a
              href="https://www.saramin.co.kr/zf_user/company-info/view?csn=eFE2Qks5TzVpanROVE5pQW9ZbGMyZz09"
              target="_blank"
              rel="noreferrer"
            >
              <b>(주)더하트컴퍼니</b>
            </a>
            <div>
              <a href="/images/2022-theheartcompany.webp" target="_blank">
                2022년 2월 14일
              </a>{' '}
              ~{' '}
              <a href="/images/2022-theheartcompany2.png" target="_blank">
                3월 13일 (1개월)
              </a>
            </div>
          </div>
          <div>직책: 개발팀장 (팀장 포함 2명)</div>
          <div>직급: 인턴</div>
          <div>
            역할:{' '}
            <a href="https://www.bemyseason.co.kr/" target="_blank" rel="noreferrer">
              '비마이시즌 - 다시 일하고 싶은 여성의 상호성장 플랫폼'
            </a>{' '}
            개발
          </div>
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
            <div>
              <a href="/images/2021-alpacasalon.webp" target="_blank">
                2021년 11월 9일 ~ 2022년 2월 8일 (3개월)
              </a>
            </div>
          </div>
          <div>직책: 개발팀장 (팀장 포함 3명)</div>
          <div>직급: 인턴</div>
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
          <div>직책: 개발팀장 (팀장 포함 2명)</div>
          <div>직급: 참여연구원</div>
          <div>
            역할: '3차) 블록체인 기술을 이용한 해외 건설프로젝트 스마트 분쟁관리 모델구축 연구' 과제
            참여. 건설 프로젝트 수주 협상 과정에서 주고 받는 이메일을 블록체인 상에 관리하여 추후
            분쟁 발생 여지를 최소화하는 사이트 개발
          </div>
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
            <div>
              <a href="/images/2020-festa.webp" target="_blank">
                2020년 9월 1일 ~ 12월 31일 (4개월)
              </a>
            </div>
          </div>
          <div>직책: Frontend 개발팀원 (팀장 포함 3명)</div>
          <div>직급: 인턴</div>
          <div>
            역할:{' '}
            <a href="https://festa.io/" target="_blank" rel="noreferrer">
              '페스타 - 온·오프라인 이벤트 티켓 및 고객 관리 서비스'
            </a>{' '}
            관리자(Admin) 페이지 기획 및 개발
          </div>
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
          <div>직책: 개발부원 (팀장 포함 3명)</div>
          <div>직급: 인턴</div>
          <div>역할: '방탈출 리뷰 웹사이트' 기획·디자인 및 MVP 개발</div>
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
          <div>직책: 개발팀원 (팀장 포함 2명)</div>
          <div>직급: 참여연구원</div>
          <div>
            역할: 'KFX IR 해석 기법 및 해석 소프트웨어 개발 연구' 과제 참여. 적외선 영상 통계 분석
            개발 보조 (C++), OpenMP 라이브러리 기반 병렬처리로 수학 계산 성능 최적화
          </div>
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
            <div>
              <a href="/images/2017-researchlab.webp" target="_blank">
                2017년 7월 31일 ~ 8월 25일 (1개월)
              </a>
            </div>
          </div>
          <div>직책: 연구4팀 팀원 (팀장 포함 10명 이상)</div>
          <div>직급: 인턴</div>
          <div>역할: 설문 조사 데이터 통계 분석 및 엑셀 함수 작성</div>
        </li>
      </ul>
      <h2 className="text-3xl my-8">개발 경험</h2>
      <ul>
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <a
              href="https://innotalk.co.kr/channel/detail?cid=C0008652"
              target="_blank"
              rel="noreferrer"
            >
              <b>주식회사 플랜바이테크놀로지스</b>
            </a>
            <div>
              <a href="/images/planby-1.webp" target="_blank">
                2023년 7월 24일
              </a>
              {' ~ '}
              <a href="/images/planby-2.webp" target="_blank">
                8월 6일
              </a>{' '}
              <a href="/images/planby-3.webp" target="_blank">
                (2주)
              </a>
            </div>
          </div>
          <div>직책: 개발자문</div>
          <div>
            역할: 고등학교 친구가 창업한 스타트업의{' '}
            <a href="https://landing.planby.us/" target="_blank" rel="noreferrer">
              'HOMI AI - 인공지능이 꾸며주는 나의 공간'
            </a>{' '}
            인테리어 디자인 AI 자동화 솔루션 MVP 개발
          </div>
        </li>
        <div className="border w-full my-6" />
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
            <div>
              <a href="/images/2021-purdue.webp" target="_blank">
                2021년 7월 5일 ~ 8월 20일 (2개월)
              </a>
            </div>
          </div>
          <div>직책: 프로젝트 팀원 (지도교수 포함 8명)</div>
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
            <div>
              <a href="/images/2021-kpc.webp" target="_blank">
                2021년 5월 31일 ~ 11월 9일 (5개월)
              </a>
            </div>
          </div>
          <div>직책: 프로젝트 팀장 (팀장 포함 5명)</div>
          <div>역할: Docker 기반 심리테스트 웹사이트 구축, k8s와 CI/CD 기반 CRUD 게시판 구축</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>신디(SINDY, Signature in Dessert) 창업</b>
            <div>2021년 2월 25일 ~ 10월 31일 (8개월)</div>
          </div>
          <div>직책: 개발팀장 (팀장 포함 2명)</div>
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
          <div>직책: 프로젝트 팀장 (팀장 포함 5명)</div>
          <div>역할: ‘음성인식 기반 노래검색 서비스’ Icezam 기획 및 개발</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>중앙대학교 2019년 2학기 SW 기초 교과목 멘토</b>
            <div>2019년 9월 16일 ~ 12월 13일 (3개월)</div>
          </div>
          <div>직책: ‘컴퓨팅적 사고와 문제 해결’ 수업 조교</div>
          <div>
            역할: 수업 중 수강생의 Scratch 프로그래밍 관련 질의 응답 및 과제 채점 (주 2회, 1회
            2시간)
          </div>
        </li>
      </ul>
      <div className="w-full text-center text-slate-800 text-sm mt-8">작성일: {date}</div>
      <div className="w-full text-center text-slate-800 text-sm">작성자: 곽태욱</div>

      <div className="my-8" />
      <h1 className="text-4xl mb-8 font-semibold w-full break-before-page">포트폴리오</h1>
      <h2 className="text-3xl my-8 ">소개</h2>
      <p className="my-4 	">
        직접 만든 기프트링크 동아리의 소프트웨어 개발자로 시작해, 행복한 다람쥐단 인턴, (주)페스타
        인턴, 신디(Sindy) 창업팀, (주)알파카살롱 인턴, (주)더하트컴퍼니 인턴 등에서 다양한
        프로젝트를 수행하며 서비스가 세상에 나오기 위한 전체 개발 주기를 경험했습니다. 이 과정에서
        서비스의 성공은 동료와의 협업과 서로의 성장에 기반한다는 사실을 느꼈습니다.
      </p>
      <p className="my-4 	">
        이는 신디 창업팀에서 '카페의 특색을 담아내는 SNS형 디저트 정보 공유 공간' 서비스를 제작하는
        과정에서 얻었습니다. 프로젝트 초기, 저희 팀은 수많은 아이디어를 결합하여 초기 프로토타입을
        개발했는데, 이 초기 프로토타입은 최종적으로 제공하고자 했던 서비스와는 차이가 있었고, 실제로
        사용하기에 성능 개선도 필요했습니다. 이에 대한 해결책을 찾기 위해 저희는 각자의 분야에
        한정하지 않고 협업하였습니다.
      </p>
      <p className="my-4 	">
        특히, 프론트엔드 개발자는 사용자 인터페이스에 대한 세세한 피드백을 제공하였고, 그 피드백을
        기반으로{' '}
        <a
          href="https://fe-developers.kakaoent.com/2022/220310-kakaopage-bff/"
          target="_blank"
          rel="noreferrer"
        >
          프론트엔드에 최적화된 백엔드 API
        </a>
        를 설계할 수 있었습니다. 예를 들면, 사용자가 서비스를 더욱 빠르고 원활하게 이용할 수 있도록
        필요한 데이터만 주고 데이터 처리 효율을 높이는 방향으로 백엔드 시스템을 개선하였습니다.
      </p>
      <p className="my-4 	">
        또한, 클라우드 엔지니어링이 백엔드에서 사용하는 기술 선택에도 영향을 끼쳤습니다. 예를 들어,
        실시간 사용자 상호작용을 위해 웹소켓 기술과 HTTP2 Server Push 기술 중 어떤 것을 사용할지
        고민하다가, 다중 컨테이너 오케스트레이션 환경에선{' '}
        <a
          href="https://cloud.google.com/run/docs/triggering/websockets?hl=ko"
          target="_blank"
          rel="noreferrer"
        >
          컨테이너 인스턴스 간에 소켓 데이터를 동기화하는 것
        </a>
        이 까다롭기 때문에 서비스의 빠른 개발을 위해 HTTP2 Server Push 기술을 선택하였습니다. 이렇게
        선택된 기술은 서비스의 안정성을 보장하며 동시에 확장성 있는 시스템 아키텍처 개선에도
        기여하였습니다.
      </p>
      <p className="my-4 	">
        아이디어를 프로토타입으로 변환하고 그 프로토타입을 실제 서비스로 발전시키는 과정에서, 저를
        비롯한 팀원 모두 성장하면서 '소복: 카페·디저트 정보 공유 커뮤니티' 서비스를 성공적으로
        출시할 수 있었습니다. 현재는 프론트엔드 분야를 집중적으로 탐구하고 있고, 백엔드 및 클라우드
        분야 등 서비스 출시를 위해 필요한 분야로 관심사를 넓히고 있습니다.
      </p>
      <Image src="/images/mbti.png" alt="asd" width="551" height="304" className="mx-auto" />
      <h2 className="text-3xl my-8">프로젝트</h2>
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>토스뱅크 여신 Admin</h4>
        <div>10명 이상</div>
        <div>2023년 8월 7일 ~ 현재</div>
      </div>
      <div className="flex gap-0.5 my-2">
        <a
          href="https://github.tossbank.it/loans-admin"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              loans-admin (Priv.)
            </h5>
          </div>
        </a>
      </div>
      <div>
        기존 은행에서 사용하는 통합단말을 대체하고, 토스씨엑스 내부적으로 사용하는 여신
        심사·승인·운영 서비스를 Next.js 기반으로 Toss Design System을 적용하여 개발함.
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
            src="https://img.shields.io/badge/Toss Design-0064FF?style=flat-square&logoColor=white"
            alt="toss design system"
          />
        </a>
        <a href="https://tanstack.com/query/v4/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=react-query&logoColor=white"
            alt="React Query Badge"
          />
        </a>
      </div>
      <ol>
        <li>Housing Loan 관련 대출 상품 </li>
        <li>기존 Next.js 11 버전 대규모 코드베이스를 13으로 마이그레이션</li>
        <li>
          React.js 18 Suspense 기반 Layout, Page, fallback, loading 구조 적용으로 페이지 렌더링
          최적화
        </li>
      </ol>
      <div className="grid grid-cols-3"></div>

      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>내일의집</h4>
        <div>2명</div>
        <div>2023년 7월 24일 ~ 8월 6일 (2주)</div>
      </div>
      <div className="flex gap-0.5 my-2">
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
          href="https://tomorrow-house.vercel.app"
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
        <a
          href="https://lofin-gxyyph2xda-du.a.run.app"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/cloud-run.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              lofin-gxyyph2xda-du.a.run.app
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
          <a href="/images/2022-theheartcompany.png" target="_blank">
            2022년 2월 14일
          </a>{' '}
          ~{' '}
          <a href="/images/2022-theheartcompany2.png" target="_blank">
            3월 13일 (1개월)
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
        <a href="/images/2021-alpacasalon.webp" target="_blank">
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
          <Image
            src="/images/alpacasalon-13.png"
            alt="jayudam architecture"
            width="368"
            height="804"
            className="border"
          />
          <Image
            src="/images/alpacasalon-14.png"
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
        <div>1명 (본인)</div>
        <div>2021년 10월 21일 ~ 11월 5일 (2주)</div>
      </div>
      <div className="flex gap-0.5 my-2">
        <a
          href="https://github.com/gwak2837/kubernetes-cloud"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              kubernetes-cloud
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
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              kubernetes-cloud-backend
            </h5>
          </div>
        </a>
      </div>
      <div>Google Kubernetes Engine(GKE) 상 게시글 CRUD 및 로그인 회원가입 서비스 구현</div>
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
      <div className="flex gap-0.5 my-2">
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
      </div>
      <div>
        <b>소</b>소한 행<b>복</b> :) 카페 및 디저트 매장 검색이 불편하니 검색을 편리하게 만들자!
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
            <a href="/images/2019-scholarship.webp" target="_blank">
              <b>국가우수장학생 (이공계)</b>
            </a>
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

      <div className="w-full text-center text-slate-800 text-sm mt-8">작성일: {date}</div>
      <div className="w-full text-center text-slate-800 text-sm">작성자: 곽태욱</div>
    </main>
  )
}
