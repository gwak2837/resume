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
                <td className="border-none p-px">ROTC 2019년 1월 ~ 2020년 8월</td>
              </tr>
              <tr>
                <td className="border-none p-px"></td>
                <td className="border-none p-px">카투사 2022년 3월 ~ 2023년 7월</td>
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
                  <a href="https://github.com/rmfpdlxmtidl" target="_blank" rel="noreferrer">
                    github.com/rmfpdlxmtidl
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
        고민하는 <b>개발자 및 클라우드 엔지니어</b> 곽태욱입니다.
      </p>
      <h2 className="text-3xl my-8 ">소개</h2>
      <p className="my-4 	">
        직접 만든 기프트링크 동아리의 소프트웨어 개발자로 시작해, 행복한 다람쥐단의 프론트엔드 인턴,
        (주)페스타의 프론트엔드 인턴, Headstart Silicon Valley의 프로젝트 관리자, 신디(Sindy)
        창업팀, (주)알파카살롱의 MVP 개발팀장, (주)더하트컴퍼니의 서비스 개발팀장 등에서 다양한
        프로젝트를 수행하며 서비스가 세상에 나오기 위한 개발 주기 과정을 전부 경험했습니다. 첫
        창업팀인 신디에서 서비스를 처음부터 구축해야 하다보니 여러 개발 분야를 경험했습니다.
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
        현재는 프론트엔드 분야를 집중적으로 연구하고 있고, 백엔드 및 클라우드 분야 등 서비스 출시를
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
            <td>졸업 등수: 남자 수석, 전체 4등</td>
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
            <td>627점 (전국 4등)</td>
            <td>과학기술정보통신부</td>
            <td>2021년 5월 22일</td>
          </tr>
          <tr>
            <td>G-TELP (Level 2)</td>
            <td>82점</td>
            <td>국제테스트 연구원</td>
            <td>2020년 5월 3일</td>
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
            <b>(주)더하트컴퍼니 @사람인</b>
            <div>2022년 2월 14일 ~ 3월 13일 (1개월)</div>
          </div>
          <div>직책: 개발팀장</div>
          <div>직급: 인턴</div>
          <div>역할: '다시 일하고 싶은 여성의 상호성장 플랫폼' 비마이시즌 개발</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>(주)알파카살롱 @로켓펀치</b>
            <div>2021년 11월 9일 ~ 2022년 2월 8일 (3개월)</div>
          </div>
          <div>직책: 개발팀장</div>
          <div>직급: 인턴</div>
          <div>역할: '4050 여성 전용 커뮤니티' 알파카살롱 기획 및 MVP 개발</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>(주)페스타 @로켓펀치</b>
            <div>2020년 9월 1일 ~ 12월 31일 (4개월)</div>
          </div>
          <div>직책: Frontend 개발팀원</div>
          <div>직급: 인턴</div>
          <div>역할: '페스타 서비스 관리자(Admin) 페이지' 기획 및 개발</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>(주)행복한 다람쥐단 @로켓펀치</b>
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
      <h2 className="text-3xl my-8">경험</h2>
      <ul>
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>카투사 1지역대 정보작전과 (동두천)</b>
            <div>2022년 12월 1일 ~ 2023년 7월 23일 (7개월)</div>
          </div>
          <div>직책: 전산병</div>
          <div>
            역할: 1지역대 내 한국군 컴퓨터 수리 및 유지보수, JavaScript 기반 업무 자동화 프로그램
            개발, 행정 문서 수합
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>카투사 제176재정관리지원대 (동두천)</b>
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
            <b>비욘드코딩 (코딩학원)</b>
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
            <b>Purdue University 온라인 해외교육</b>
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
            <b>쿠버네티스 기반 클라우드 시스템 엔지니어 양성 과정</b>
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
            <b>(주)리서치랩</b>
            <div>2017년 7월 31일 ~ 8월 25일 (1개월)</div>
          </div>
          <div>직책: 연구4팀 팀원</div>
          <div>직급: 인턴</div>
          <div>역할: 설문 조사 데이터 통계 분석 (엑셀), 설문지 작성 (워드)</div>
        </li>
      </ul>
      <h2 className="text-3xl my-8">수상</h2>
      <ul>
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>2022 인천 스마트관광 데이터 아이디어 공모전</b>
            <div>인천관광공사</div>
            <div>2022년 12월 9일</div>
          </div>
          <div>여행일지 자동기록 서비스 아이디어 제시 (2등, 150만원)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>MMO 해커톤 2회</b>
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
            <b>2021 AI 해커톤</b>
            <div>제주테크노벨리</div>
            <div>2022년 1월 22일</div>
          </div>
          <div>식의약용 자생식물 데이터 기반 사업화 서비스 아이디어 제시 (입상)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>2021 경희대학교 캠퍼스타운 입주 스타트업 캠퍼 2기</b>
            <div>경희대학교 캠퍼스타운</div>
            <div>2021년 11월 1일</div>
          </div>
          <div>Sindy 창업팀 선정 (2021년 11월 1일 ~ 2022년 8월 31일, 10개월)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>2021년 3차 포스코 창업인큐베이팅스쿨</b>
            <div>POSCO</div>
            <div>2021년 10월 18일</div>
          </div>
          <div>Sindy 창업팀 선정 (2021년 10월 18일 ~ 10월 29일, 2주)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>2021년도 LINC+ Start-up Members</b>
            <div>중앙대학교 LINC+사업단</div>
            <div>2021년 7월 1일</div>
          </div>
          <div>Sindy 창업팀 선정 (2021년 7월 1일 ~ 12월 31일, 6개월) (200만원)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>2021 실전창업교육 1기</b>
            <div>중소벤처기업부</div>
            <div>2021년 6월 1일</div>
          </div>
          <div>Sindy 창업팀 선정 및 2단계 진출 (2021년 6월 1일 ~ 7월 31일, 2개월)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>2021 동작구 스타트업 펀딩 사업</b>
            <div>동작구청</div>
            <div>2021년 2월 5일</div>
          </div>
          <div>Sindy 창업팀 선정 (2021년 2월 5일 ~ 11월 30일, 10개월) (500만원)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>2020년 C-디자인씽킹 아카데미 경진대회</b>
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
            <b>2018 창의ICT공과대학 학술제</b>
            <div>중앙대 창의ICT공과대학</div>
            <div>2018년 11월 30일</div>
          </div>
          <div>
            택배 상하차 아르바이트생의 열약한 근무 환경을 주제로 '초록 유니폼을 입은 알바생' VR 영상
            제작 및 우수상 수상&nbsp;
            <a href="https://www.youtube.com/watch?v=ruqZIWGwH-I" rel="noreferrer" target="_blank">
              YouTube
            </a>
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>BBR BlockCamp 블록체인 해커톤</b>
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
        </div>
        <div className="flex gap-1">
          <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"
              alt="tailwind Badge"
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
          <a href="https://www.figma.com/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=black"
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
              data-canonical-src="https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white"
            />
          </a>
          <a href="https://www.docker.com/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"
              alt="Docker Badge"
            />
          </a>
        </div>
        <div className="flex gap-1">
          <a href="https://expressjs.com/" rel="noreferrer">
            <img
              src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"
              alt="Fastify Badge"
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
        </div>
        <div className="flex gap-1">
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
              alt="GCP Badge"
            />
          </a>
        </div>
        <div className="flex gap-1">
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
        <li>Recoil.js, Context API 등 전역 상태 관리 경험이 있습니다.</li>
        <li>
          React Query, Apollo client, useSWR 등 네트워크 요청 및 응답 데이터 관리 경험이 있습니다.
        </li>
        <li>Next.js 프레임워크 기반 SSR 개발 경험이 있습니다.</li>
        <li>
          PWA를 적용해 모바일 접근성을 높이고, 브라우저 Notification/Push API로 사용자 재방문율을
          향상했습니다.
        </li>
        <li>Virtual DOM의 존재 의의와 언제 Reconciliation이 발생하는지 고민했습니다.</li>
        <li>
          함수 컴포넌트와 클래스 컴포넌트를 비교하며 여러 useEffect가 어떤 순서로 실행되는지
          고민했습니다.
        </li>
        <li>
          함수형 프로그래밍에서 나오는 클로저 개념을 활용해 useState를 간단하게 직접 구현했습니다.
        </li>
        <li>
          메모이제이션 개념을 이용한 useMemo, useCallback을 활용해 컴포넌트 렌더링을 최적화했습니다.
        </li>
      </dl>
      <h3 className="text-2xl my-4">HTML · CSS</h3>
      <dl>
        <li>
          W3C 웹 표준과 웹 접근성(a11y)을 지키려 노력하며 크로스 브라우징에 대응할 수 있습니다.
          (IE11 제외)
        </li>
        <li>Semantic HTML, SCSS 문법에 익숙합니다.</li>
        <li>keyframe, transition 등을 활용한 애니메이션 기법을 적용시킬 수 있습니다.</li>
        <li>마우스 Drag&Drop 기능과 스크롤 이벤트를 활용한 애니메이션을 구현할 수 있습니다.</li>
        <li>
          Zeplin, Figma, Adobe XD와 같은 디자인 툴을 이용해 디자이너와 협업한 경험이 있습니다.
        </li>
        <li>순수 CSS를 이용해 Drawer, Modal, Carousel을 직접 구현한 적이 있습니다.</li>
      </dl>
      <h3 className="text-2xl my-4">JavaScript</h3>
      <dl>
        <li>ES2022 까지의 문법 및 JavaScript 엔진에서 사용되는 비동기 개념에 익숙합니다.</li>
        <li>TypeScript와 type 자동 생성 라이브러리를 사용해 개발 생산성을 높였습니다.</li>
        <li>esbuild, Webpack 번들러를 사용해 Docker 이미지 크기를 줄였습니다.</li>
        <li>Promise, async await, generator 문법을 사용해 비동기 작업을 구현했습니다.</li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            target="_blank"
            rel="noreferrer"
          >
            Intersection Observer API
          </a>
          를 사용해 무한스크롤 페이지네이션을 구현했습니다.
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
          &nbsp;기능을 사용했습니다.
        </li>
        <li>웹소켓 또는 HTTP/2 Push 기능을 활용해 일대일 채팅 기능을 구현했습니다.</li>
      </dl>
      <h3 className="text-2xl my-4">Backend</h3>
      <dl>
        <li>Fastify, Next.js, Express.js, Koa.js 라이브러리로 REST API 서버를 개발했습니다.</li>
        <li>Apollo Server를 사용해 GraphQL API 서버를 개발했습니다.</li>
        <li>Jest를 사용한 유닛 테스트 자동화(CI) 경험이 있습니다.</li>
        <li>
          Dockerfile, compose.yaml 파일을 사용해 서버 인프라 설정, 컨테이너 관리를 자동화했습니다.
        </li>
        <li>간단한 PostgreSQL 쿼리 빌더 및 ORM을 직접 구현했습니다.</li>
        <li>
          BFF 개념을 활용해 프론트엔드 개별 페이지에 최적화된 엔드포인트를 설계 · 구현할 수
          있습니다.
        </li>
      </dl>
      <h3 className="text-2xl my-4">PostgreSQL</h3>
      <dl>
        <li>
          외래키와 junction 테이블을 사용해 테이블 간 일대일, 일대다, 다대다 관계를 설정한 경험이
          있습니다.
        </li>
        <li>JOIN 키워드를 활용해 여러 테이블에서 데이터를 가져올 수 있습니다.</li>
        <li>COPY 키워드를 사용해 데이터베이스 데이터를 CSV 파일로 관리한 경험이 있습니다.</li>
        <li>트랜잭션으로 여러 SQL문을 하나의 논리적 단위로 관리할 수 있습니다.</li>
        <li>함수, 프로시저, 트리거, PL/pgSQL을 사용해 SQL 요청 횟수를 줄인 경험이 있습니다.</li>
        <li>
          SQL 간 경쟁조건이 있을 때 의도된 결과를 얻기 위해 특정 테이블 또는 레코드를 잠글 수
          있습니다.
        </li>
        <li>Offset Pagination, Keyset Pagination 쿼리를 구현한 경험이 있습니다.</li>
      </dl>
      <h3 className="text-2xl my-4">Cloud</h3>
      <dl>
        <li>
          클라우드 가상 머신에 Docker 기반 SSL 전용 PostgreSQL 서버와 Redis 서버를 구축했습니다.
        </li>
        <li>
          Cloud Build와 Cloud Run을 활용해 Docker 이미지 빌드 · 배포를 자동화(CI · CD) 했습니다.
        </li>
        <li>Cloud Function을 사용한 Slack 알림봇 개발 경험이 있습니다.</li>
        <li>GCP VPC 네트워크에서 방화벽 규칙을 설정해 요청 IP 또는 포트 범위를 제한했습니다.</li>
        <li>Cloud Storage에 이미지 파일을 동적으로 업로드하고 서비스 했습니다.</li>
        <li>Cloud SQL 및 AWS RDS에 클라우드 DB 서버를 구축했습니다.</li>
        <li>
          AWS RDS, AWS EC2, AWS S3, Oracle Instance, 가비아 클라우드를 사용한 경험이 있습니다.
        </li>
      </dl>
      <h3 className="text-2xl my-4">외부 API</h3>
      <dl>
        <li>카카오 OAuth, Google OAuth, 비바톤 OAuth, 네이버 OAuth 등을 사용했습니다.</li>
        <li>카카오페이, 토스페이를 사용해 결제 시스템을 자동화한 경험이 있습니다.</li>
        <li>Google Analytics를 활용한 사이트 통계 분석 경험이 있습니다.</li>
        <li>네이버지도 API를 활용해 지도를 사용한 경험이 있습니다.</li>
        <li>
          채널톡 API, Telegram API, SOLAPI를 활용해 사용자에게 알림용 메시지를 보낸 경험이 있습니다.
        </li>
      </dl>

      <h2 className="text-3xl my-8">프로젝트</h2>
      <a
        href="https://gwak2837.notion.site/Resume-3fb93cf3019243fc8fd9103975f2872f"
        target="_blank"
        rel="noreferrer"
      >
        Notion
      </a>

      <div className="w-full text-center text-slate-800 text-sm mt-8">2022년 12월 14일</div>
      <div className="w-full text-center text-slate-800 text-sm">작성자: 곽태욱</div>
    </main>
  )
}
