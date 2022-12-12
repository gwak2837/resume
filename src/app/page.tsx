/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="p-12 mx-auto max-w-[790px]">
      <h1 className="text-4xl mb-6 font-semibold	w-full">이력서</h1>

      <div>
        <div className="grid gap-4 grid-cols-[2fr_3fr]">
          <Image src="/images/1.jpeg" alt="asd" width="250" height="250" />
          <ul>
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
              🖥&nbsp; <a href="https://github.com/rmfpdlxmtidl">github.com/rmfpdlxmtidl</a>
            </div>
            <div>
              🌐&nbsp; <a href="https://velog.io/@gwak2837">velog.io/@gwak2837</a>
            </div>
            <div>
              📷&nbsp; <a href="https://www.instagram.com/gwak2837/">instagram.com/gwak2837</a>
            </div>
          </ul>
        </div>
      </div>
      <p className="my-4 ">
        고객의 불편함을 해결하는 제품을 기획하면서 고객의 목소리에 귀 기울여 비즈니스 문제를
        해결하고, 제품을 개발하는 도중 얻은 지식을 다른 사람과 공유하면서 기술의 존재 이유를
        고민하는 개발자 및 클라우드 엔지니어 곽태욱입니다.
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

      <h2 className="text-3xl my-8">개발 경력</h2>
    </main>
  )
}
