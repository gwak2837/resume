/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[720px]">
      <h1 className="text-4xl mb-6 font-semibold	w-full">이력서</h1>

      <div>
        <div className="grid gap-4 grid-cols-[2fr_3fr]">
          <Image src="/images/1.jpeg" alt="asd" width="250" height="250" />
          <ol>
            <div>🧑&nbsp; 곽태욱 (Taeuk Gwak, 郭泰昱)</div>
            <div>🎉&nbsp; 1998년 4월 12일 (남)</div>
            <div>🎓&nbsp; 중앙대학교 컴퓨터공학부 학사</div>
            <div>🏠&nbsp; 서울시 강동구 천호동</div>
            <div>🪖&nbsp; ROTC 2019년 1월 ~ 2020년 8월</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 카투사 2022년 3월 ~ 2023년 7월</div>
            <div>
              📱&nbsp; <a href="tel:010-9203-2837">010-9203-2837</a>
            </div>
            <div>
              ✉️&nbsp; <a href="mailto:gwak2837@kakao.com">gwak2837@kakao.com</a>
            </div>
            <div>
              🖥&nbsp;{' '}
              <a href="https://github.com/rmfpdlxmtidl" target="_blank" rel="noreferrer">
                github.com/rmfpdlxmtidl
              </a>
            </div>
            <div>
              🌐&nbsp;{' '}
              <a href="https://velog.io/@gwak2837" target="_blank" rel="noreferrer">
                velog.io/@gwak2837
              </a>
            </div>
            <div>
              📷&nbsp;{' '}
              <a href="https://www.instagram.com/gwak2837/" target="_blank" rel="noreferrer">
                instagram.com/gwak2837
              </a>
            </div>
          </ol>
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
            <td>TOPCIT 14회</td>
            <td>523점</td>
            <td>과학기술정보통신부</td>
            <td>2020년 10월 31일</td>
          </tr>
          <tr>
            <td>TOPCIT 13회</td>
            <td>609점</td>
            <td>과학기술정보통신부</td>
            <td>2020년 6월 20일</td>
          </tr>
          <tr>
            <td>G-TELP (Level 2)</td>
            <td>82점</td>
            <td>국제테스트 연구원</td>
            <td>2020년 5월 3일</td>
          </tr>
          <tr>
            <td>TOPCIT 12회</td>
            <td>488점</td>
            <td>과학기술정보통신부</td>
            <td>2019년 10월 19일</td>
          </tr>
          <tr>
            <td>TOPCIT 11회</td>
            <td>383점</td>
            <td>과학기술정보통신부</td>
            <td>2019년 5월 18일</td>
          </tr>
          <tr>
            <td>TOPCIT 10회</td>
            <td>343점</td>
            <td>과학기술정보통신부</td>
            <td>2018년 10월 20일</td>
          </tr>
          <tr>
            <td>TOPCIT 9회</td>
            <td>397점</td>
            <td>과학기술정보통신부</td>
            <td>2018년 5월 19일</td>
          </tr>
          <tr>
            <td>대한검정회</td>
            <td>준1급</td>
            <td>대한민국한자교육연구회</td>
            <td>2009년 11월 28일</td>
          </tr>
          <tr>
            <td>워드프로세서</td>
            <td>3급</td>
            <td>대한상공회의소</td>
            <td>2008년 12월 26일</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-3xl my-8">경력</h2>

      <ul>
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>카투사 1지역대 정보작전과 (동두천)</b>
            <div>2022년 12월 1일 ~</div>
          </div>
          <div>직책: 전산병</div>
          <div>직급: 병장</div>
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
          <div>직급: 병장</div>
          <div>
            역할: 미군 월급 관리 시스템(DJMS, Defense Joint Military pay Service), 미군 월급 관리
            웹사이트(MMPA, Master Military Pay Account) 유지보수
          </div>
        </li>
        <div className="border w-full my-6" />
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
            <b>Purdue University 온라인 해외교육</b>
            <div>2021년 7월 5일 ~ 8월 20일 (2개월)</div>
          </div>
          <div>직책: 프로젝트 팀원</div>
          <div>직급: 교육생</div>
          <div>
            역할: 'UAV ground scanning systems to find people or groups' 논문 작성, 학습 데이터 수집
            및 가공
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>Headstart Silicon Valley, Inc.</b>
            <div>2021년 1월 4일 ~ 2월 5일 (1개월)</div>
          </div>
          <div>직책: 프로젝트 팀장</div>
          <div>직급: 인턴</div>
          <div>역할: ‘음성인식 기반 노래검색 서비스’ Icezam 기획 및 개발</div>
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
        <li>인천e지 인천스마트시티 2022년 12월 9일 최우수상(2등)</li>
        <div className="border w-full my-6" />

        <li>MMO 해커톤 2022년 11월 27일 우수상(2등)</li>
        <div className="border w-full my-6" />

        <li>
          <b>2021 AI 해커톤</b> 2022년 1월 22일. 제주테크노벨리 식의약용 자생식물 데이터 기반 사업화
          서비스 아이디어 제시 (입상)
        </li>
        <div className="border w-full my-6" />
        <li>
          <b>2021 경희대학교 캠퍼스타운 입주 스타트업 '캠퍼 2기'</b> 2021년 11월 1일 ~ 2022년 8월
          31일. 경희대학교 Sindy 창업팀 선정
        </li>
        <div className="border w-full my-6" />
        <li>
          <b>2021년 3차 포스코 창업인큐베이팅스쿨</b> 2021년 10월 18일 ~ 10월 29일. 포스코 Sindy
          창업팀 선정
        </li>
        <div className="border w-full my-6" />
        <li>
          <b>2021년도 LINC+ Start-up Members</b> 2021년 7월 1일 ~ 12월 31일. 중앙대학교 Sindy 창업팀
          선정
        </li>
        <div className="border w-full my-6" />
        <li>
          <b>2021 실전창업교육 1기 (2단계)</b> 2021년 6월 1일 ~ 7월 31일. 중소벤처기업부 Sindy
          창업팀 선정 및 2단계 진출
        </li>
        <div className="border w-full my-6" />
        <li>
          <b>2021 동작구 스타트업 펀딩 사업</b> 2021년 2월 5일 ~ 11월 30일. 동작구청 Sindy 창업팀
          선정
        </li>
        <div className="border w-full my-6" />
        <li>
          <b>2021년 K-Startup 예비창업패키지 대비 멘토링</b> 2021년 1월 11일 ~ 3월 30일. 중앙대학교
          Sindy 창업팀 선정
        </li>
        <div className="border w-full my-6" />
        <li>
          <b>경기 창업아이템 Jump-up School</b> 2021. 1. 6. ~ 2. 28. Sindy 창업팀 선정
        </li>
        <div className="border w-full my-6" />
        <li>
          <b>2020년 C-디자인씽킹 아카데미 경진대회</b> 2020년 12월 3일. 중앙대학교 ‘버려지는 소재를
          새로운 순환으로’를 주제로 사업계획서 작성 ‘온라인 새활용 제품 유통 플랫폼’ 기획으로
          대상(1등) 수상 및 특허 출원
        </li>
        <div className="border w-full my-6" />
        <li>
          <b>국가우수장학생 (이공계)</b> 2019년 8월 14일. 한국장학재단
        </li>
        <div className="border w-full my-6" />
        <li>
          <b>2018 창의ICT공과대학 학술제</b> 2018년 11월 30일. 중앙대학교 택배 상하차 아르바이트생의
          열약한 근무 환경 [#YouTube](https://www.youtube.com/watch?v=ruqZIWGwH-I) VR 공감 영상전
          (제목: 초록 유니폼을 입은 알바생) 우수상
        </li>
        <div className="border w-full my-6" />
        <li>
          <b>BBR BlockCamp Hackathon X 데이빗 배 블록체인 해커톤</b> 2018년 10월 29일. BBR, 디센터
          블록체인 기반 전자투표 시스템(e-voting) 기획 및 개발 (피칭상)
        </li>
      </ul>
    </main>
  )
}
