import RidiLogo from '../../svg/RidiLogo'

import Image from 'next/image'

export default function WorkExperiences() {
  return (
    <ul className="space-y-8">
      <li className="relative">
        <div className="absolute left-0 top-2 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-blue-700">현재</span>
        </div>
        <div className="ml-24 bg-white rounded-xl border-2 border-gray-200 p-6">
          <div className="flex flex-row justify-between items-start gap-4 mb-4">
            <a
              href="https://www.linkedin.com/company/ridi/"
              className="flex gap-2 items-center"
              target="_blank"
            >
              <h3 className="text-lg font-bold">리디(주)</h3>
              <RidiLogo />
            </a>
            <a
              href="/pdf/리디-재직증명서.pdf"
              target="_blank"
              className="text-sm whitespace-nowrap"
            >
              2023.11.27 ~ 현재
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600">
            <div>
              매출: 2024년{' '}
              <a href="https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20250402003376" target="_blank">
                2,354억원 (연결)
              </a>
            </div>
            <div>
              총원: 2024년{' '}
              <a
                href="https://www.innoforest.co.kr/company/CP00000016/%EB%A6%AC%EB%94%94"
                target="_blank"
              >
                12월 445명
              </a>
            </div>
          </div>

          <p className="text-sm text-gray-700 mb-4">
            글로벌 시장을 무대로 웹툰, 웹소설, 만화, 전자책 등을 온라인으로 제공하는 콘텐츠 플랫폼
            기업
          </p>

          {/* Sub-experiences */}
          <div className="space-y-4">
            <details className="group" open>
              <summary className="cursor-pointer list-none">
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg transition">
                  <div>
                    <h4 className="font-semibold">RIDI 웹</h4>
                    <p className="text-sm text-gray-700">
                      Frontend Engineer{' '}
                      <span className="text-gray-500 font-medium text-xs">(Junior)</span> · Web Team{' '}
                      <span className="text-gray-500 font-medium text-xs">(6명)</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">2024.04 ~ 현재</span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </summary>
              <div className="p-4 space-y-3">
                <p className="text-sm">
                  국내 전자책 시장에서{' '}
                  <a href="https://blog.toss.im/article/fabonika-03-ridi" target="_blank">
                    점유율 50% 이상
                  </a>
                  을 차지하는 리디 웹 사이트 신규 기능 개발 및 유지보수
                </p>
                <a
                  href="https://ridibooks.com"
                  target="_blank"
                  className="hover:no-underline  transition p-1 hover:bg-slate-100 rounded-lg focus:no-underline flex items-center gap-1 w-fit"
                >
                  <Image
                    src="/images/ridi-icon.ico"
                    alt="ridi"
                    width="80"
                    height="80"
                    className="w-[16px] border rounded"
                  />
                  <h5 className="underline-offset-4 text-xs font-medium underline text-black decoration-gray-300 ">
                    ridibooks.com
                  </h5>
                </a>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">React.js</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Next.js</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">GraphQL</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">PHP</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Node.js</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">MySQL</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Playwright</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Sentry</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Datadog</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-px">•</span>
                    <div>
                      <strong className="text-sm">
                        성과 평가{' '}
                        <a
                          className="text-xs"
                          href="/pdf/RIDI Track Record Review 기준.pdf"
                          target="_blank"
                        >
                          (기준: Outstanding, Excellent, Good, Moderate, Need Improvement)
                        </a>
                      </strong>
                      <p className="text-sm text-gray-600 mt-1">
                        2024-09 Excellent{' '}
                        <a
                          className="text-xs"
                          href="/pdf/RIDI Track Record Review 결과.pdf"
                          target="_blank"
                        >
                          <span>(세부 결과)</span>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-px">•</span>
                    <div>
                      <strong className="text-sm">만화e북 웹 뷰어 출시</strong>
                      <p className="text-sm text-gray-600 mt-1">
                        일본 디지털 만화 시장의 성장에 발맞춰 기존 리디 웹 뷰어에서 만화e북 파일도
                        열람할 수 있도록 지원함. 사용자가 웹에서 바로 만화를 감상할 수 있게 해서,
                        출시 이후 만화e북 판매 매출이 전월 대비 3.61% 증가하는 데 기여했고, 만화e북
                        신규 고객의 웹 뷰어 사용율이 5%로 증가함. 구체적으로 모바일 / PC 웹뷰어
                        전환율이 각각 8.5%p / 99%p 증가했고, 뷰어 이탈율이 각각 5%p / 99%p
                        감소했으며, 뷰어 오픈 시간이 각각 91% / 99% 단축됨.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-px">•</span>
                    <div>
                      <strong className="text-sm">A/B 테스트</strong>
                      <p className="text-sm text-gray-600 mt-1">
                        총 10만 명의 사용자를 대상으로 2주간 여러 UI 개선안에 대한 A/B 테스트를
                        진행함. 사용자 중 50%는 기존 UI를 유지했고, 나머지 50%는 여러 그룹으로
                        나누어 각기 다른 UI 개선안을 제공함. 실험 결과, 새로운 UI를 사용하는 특정
                        그룹에서 매출 등 주요 가드레일 지표가 유지되는 동시에, KPI인 사용자 참여율이
                        10%p, 유료 전환율이 5%p 상승한 것을 확인함. 이 데이터를 바탕으로 해당 UI
                        개선안을 프로덕션 환경에 최종 배포함. 이를 통해 UI 개선 효과를 데이터
                        기반으로 평가하고 가장 효율적인 UI를 식별할 수 있었음.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-px">•</span>
                    <div>
                      <strong className="text-sm">E2E 테스트 자동화</strong>
                      <p className="text-sm text-gray-600 mt-1">
                        Playwright로 30여 개 핵심 사용자 시나리오의 E2E 테스트 자동화 파이프라인을
                        구축함. 프로덕션 배포 전 수동으로 진행하던 QA 업무를 E2E 테스트로
                        자동화하여, 배포 전 리그레션 테스트에 소요되는 시간을 평균 31분 → 18분으로
                        42% 단축시켜 배포 생산성을 향상시킴.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-px">•</span>
                    <div>
                      <strong className="text-sm">Node.js 기반 백엔드 API 개발</strong>
                      <p className="text-sm text-gray-600 mt-1">
                        REST API 리팩토링: 필요한 데이터만 보내주는 신규 REST API를 설계하고 기존
                        로직을 리팩토링하여 응답 크기를 40.5 kB → 20.5 kB로 절반 가까이 줄임.
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        GraphQL API 확장: 작품 정보 페이지에 쿠폰 프로모션 배너를 신규로 노출하기
                        위해 GraphQL 스키마 타입을 새로 정의하고, 쿠폰 도메인 데이터베이스 쿼리 및
                        GraphQL resolver를 구현하여 UI와 연동함.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </details>
            <details className="group" open>
              <summary className="cursor-pointer list-none">
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg transition">
                  <div>
                    <h4 className="font-semibold">Manta - Unlimited Comics</h4>
                    <p className="text-sm text-gray-700">
                      Frontend Engineer{' '}
                      <span className="text-gray-500 font-medium text-xs">(Junior)</span> ·
                      Engineering Team{' '}
                      <span className="text-gray-500 font-medium text-xs">(10명)</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">2023.11 ~ 2024.03</span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </summary>

              <div className="p-4 space-y-3">
                <p className="text-sm">
                  북미 웹툰 시장{' '}
                  <a
                    href="https://files-scs.pstatic.net/2024/01/03/mpZT5kjudA/%EC%9B%B9%ED%88%B0%EC%82%B0%EC%97%85_%EB%B0%B8%EB%A5%98%ED%8C%8C%EC%9D%B8%EB%8D%94.pdf"
                    target="_blank"
                  >
                    점유율 2위
                  </a>
                  인 글로벌 웹툰 서비스 Manta의 React Native 앱 & Next.js 웹 개발
                </p>
                <div className="flex flex-wrap gap-0.5">
                  <a
                    href="https://manta.net/en"
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
                      manta.net
                    </h5>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=net.manta.comic&hl=en&gl=US&pli=1"
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
                      Google Play
                    </h5>
                  </a>
                  <a
                    href="https://apps.apple.com/kr/app/manta-unlimited-comics/id1536116642"
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
                      App Store
                    </h5>
                  </a>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">React Native</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Next.js</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Redux</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Sentry</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-px">•</span>
                    <div>
                      <strong className="text-sm">프랑스어 출시</strong>
                      <p className="text-sm text-gray-600 mt-1">
                        프랑스어를 사용하는 사용자를 위해 국가별 화폐 및 날짜 형식, 언어별 텍스트
                        길이에 따른 디자인 차이, 콘텐츠 연령 등급 관련 현지 법률 등을 고려한
                        국제화(i18n) 디자인을 적용함.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-px">•</span>
                    <div>
                      <strong className="text-sm">연관 검색어 기능</strong>
                      <p className="text-sm text-gray-600 mt-1">
                        사용자 검색 경험을 향상시키기 위해 프론트엔드에 연관 검색어 기능을 적용함.
                        출시 대비 사용자의 검색 화면 체류 시간이 20% 이상 증가하는 등 사용자가
                        원하는 콘텐츠를 빠르게 찾을 수 있게 함.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-px">•</span>
                    <div>
                      <strong className="text-sm">Sentry 오류 분류 시스템 구축</strong>
                      <p className="text-sm text-gray-600 mt-1">
                        기존에 오류가 <code className="text-xs">Unknown Error</code>로 보고되어
                        디버깅이 어려웠던 문제를 해결하기 위해 클라이언트 측 오류 필터링 시스템을
                        구축함. 네트워크 오류(status code 0)를 별도로 분류하고, 오류 유형별 커스텀
                        태그를 적용하여 오류 원인을 체계적으로 분류함. 이를 통해 전체 오류의 약
                        35%를 차지하던 네트워크 오류를 식별하고, 나머지 오류를 5개 주요 카테고리(API
                        응답 오류, 렌더링 오류, 상태 관리 오류, 서드파티 SDK 오류, 사용자 권한
                        오류)로 분류하여, 주간 오류 분석 회의 시간을 평균 1시간에서 45분으로 25%
                        단축시킴.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </li>
      <li className="relative">
        {/* Timeline dot */}
        <div className="absolute left-0 top-2 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-purple-700">2023</span>
        </div>
        <div className="ml-24 bg-white rounded-xl border-2 border-gray-200 p-6">
          <div className="flex flex-row justify-between items-start gap-4 mb-4">
            <a
              href="https://www.linkedin.com/company/toss-bank/"
              className="flex gap-2 items-center"
              target="_blank"
            >
              <h3 className="text-lg font-bold">토스뱅크(주)</h3>
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
              2023.08 ~ 2023.11 (3개월)
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600">
            <div>
              매출: 2023년{' '}
              <a href="https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20240404002475" target="_blank">
                1조 2,609억원 (개별)
              </a>
            </div>
            <div>
              총원: 2023년{' '}
              <a
                href="https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20240404002475&dcmNo=9834643"
                target="_blank"
              >
                12월 533명
              </a>
            </div>
          </div>

          <p className="text-sm text-gray-700 mb-4">
            토스의 운영사인 (주)비바리퍼블리카에서 만든 대한민국의 3번째 인터넷 전문 은행
          </p>

          {/* Sub-experiences */}
          <div className="space-y-4">
            <details className="group" open>
              <summary className="cursor-pointer list-none">
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg transition">
                  <div>
                    <h4 className="font-semibold">토스뱅크 루모스 (여신 심사·관리·운영 시스템)</h4>
                    <p className="text-sm text-gray-700">
                      Admin Developer{' '}
                      <span className="text-gray-500 font-medium text-xs">(계약직)</span> · Housing
                      Loan Squad <span className="text-gray-500 font-medium text-xs">(12명)</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">2023.08 ~ 2023.11</span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </summary>
              <div className="p-4 space-y-3">
                <p className="text-sm">
                  대출 관련 프로세스 자동화로 토스씨엑스 담당자의 업무 효율성을 높이며, 대출 고객의
                  불편함을 최소화하는 토스뱅크 여신 심사·관리·운영 시스템을 Next.js 및 Toss Design
                  System 기반으로 개발
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Next.js 13</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Toss Design System</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">React Query</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-px">•</span>
                    <div>
                      <strong className="text-sm">전월세보증금대출 출시</strong>
                      <p className="text-sm text-gray-600 mt-1">
                        토스뱅크 개발자 및 토스CX 담당자와 협업하여 대출 서류 심사, 사후 관리, 지킴
                        보증 관련 기능을 출시함으로써, 토스뱅크 개인 담보대출 부문에서
                        <a
                          href="https://www.sisajournal-e.com/news/articleView.html?idxno=401727"
                          target="_blank"
                        >
                          약 2,000억원 대출 잔액 증가
                        </a>
                        에 기여함.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-px">•</span>
                    <div>
                      <strong className="text-sm">CI 최적화</strong>
                      <p className="text-sm text-gray-600 mt-1">
                        Docker 이미지 레이어에 원격 클라우드 캐싱을 적용하여 프로젝트 빌드 시간을
                        평균 300초에서 210초로 30% 단축함.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-px">•</span>
                    <div>
                      <strong className="text-sm">선언형 프로그래밍</strong>
                      <p className="text-sm text-gray-600 mt-1">
                        Suspense와 ErrorBoundary 개념을 이용해 네트워크 상태를 선언적으로 관리하고,
                        React Query를 사용해 응답 순서가 보장되지 않는 네트워크 요청을 비동기로
                        관리함. 또한 Promise를 활용해 Modal, Dialog 컴포넌트 상태를 선언적으로
                        관리하고, Funnel 패턴을 활용해 다단계 페이지 이동도 선언적으로 관리함.
                        그리고 연관된 코드는 가까운 곳에 배치하여 컴포넌트 응집도를 높이고, 로직
                        세부 구현은 hook으로 숨겨 코드 파악에 필수적인 정보가 잘 보이도록 개선함.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </li>
    </ul>
  )
}
