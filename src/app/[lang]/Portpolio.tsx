/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

type Props = {
  date: string
}

export default function Portpolio({ date }: Props) {
  return (
    <>
      <h1 className="text-4xl mb-8 font-semibold w-full break-before-page">포트폴리오</h1>
      <h2 className="text-2xl my-8">프로젝트</h2>
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
        <span className="text-sm text-red-500">백엔드 비활성화됨</span>
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
        <span className="text-sm text-red-500">백엔드 비활성화됨</span>
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
        <span className="text-sm text-red-500">백엔드 비활성화됨</span>
      </div>
      <div>시시각각 변하는 쿠팡의 가격을 추적하여 알림을 받기 위해 프로젝트를 시작함</div>
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
        <span className="text-sm text-red-500">백엔드 비활성화됨</span>
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
            src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white"
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
            src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white"
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
        <span className="text-sm text-red-500">백엔드 비활성화됨</span>
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
        <span className="text-sm text-red-500">백엔드 비활성화됨</span>
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
      <h2 className="text-2xl my-8">기술</h2>
      <h3 className="text-xl my-4">React.js (Next.js)</h3>
      <dl>
        <li>React Query, Apollo client, useSWR 등 네트워크 요청 및 응답 데이터를 관리함</li>
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
      <h3 className="text-xl my-4">HTML · CSS</h3>
      <dl>
        <li>
          W3C 웹 표준과 웹 접근성(a11y)을 지키려 노력하며 크로스 브라우징에 대응할 수 있음 (IE11
          제외)
        </li>
        <li>Semantic HTML, SCSS 문법에 익숙함</li>
        <li>keyframe, transition 등을 활용한 애니메이션 구현 가능함</li>
        <li>마우스 Drag&Drop 기능과 스크롤 이벤트를 활용한 애니메이션 구현 가능함</li>
        <li>순수 CSS를 이용해 Drawer, Modal, Carousel을 직접 구현 가능함</li>
      </dl>
      <h3 className="text-xl my-4">JavaScript</h3>
      <dl>
        <li>ES2022 까지의 문법 및 JavaScript 엔진에서 사용되는 비동기 개념에 익숙함</li>
        <li>TypeScript와 type 자동 생성 라이브러리를 사용해 개발 생산성을 높임</li>
        <li>esbuild, Webpack 번들러를 사용해 Docker 이미지 크기를 줄임</li>
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
      <h3 className="text-xl my-4">Backend</h3>
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
      <h3 className="text-xl my-4">PostgreSQL</h3>
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
      <h3 className="text-xl my-4">Cloud</h3>
      <dl>
        <li>클라우드 가상 머신에 Docker 기반 SSL 전용 PostgreSQL 서버와 Redis 서버를 구축함</li>
        <li>Cloud Build와 Cloud Run을 활용해 Docker 이미지 빌드 · 배포를 자동화(CI · CD)함</li>
        <li>GCP VPC 네트워크에서 방화벽 규칙을 설정해 요청 IP 또는 포트 범위를 제한함</li>
        <li>Cloud Storage에 이미지 파일을 동적으로 업로드하고 서비스 했음</li>
        <li>Cloud SQL 및 AWS RDS에 클라우드 DB 서버를 구축했음</li>
        <li>AWS RDS, AWS EC2, AWS S3, Oracle Instance, 가비아 클라우드를 사용한 경험이 있음</li>
      </dl>
      <h3 className="text-xl my-4">외부 API</h3>
      <dl>
        <li>OAuth 2.0 스펙을 따르는 소셜 로그인 기능을 연동할 수 있음</li>
        <li>카카오페이, 토스페이를 사용해 결제 시스템을 자동화할 수 있음</li>
        <li>Google Analytics를 활용한 사이트 통계 분석 경험이 있음</li>
      </dl>
      <div className="w-full text-center text-slate-800  mt-8">작성일: {date}</div>
      <div className="w-full text-center text-slate-800 ">작성자: 곽태욱</div>
    </>
  )
}
