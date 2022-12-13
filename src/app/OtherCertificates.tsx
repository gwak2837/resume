'use client'

import { useState } from 'react'

export default function OtherCertificates() {
  const [show, setShow] = useState(false)

  return (
    <>
      <button
        className="w-full text-center my-4 text-slate-500 text-sm"
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? '기타 자격증 숨기' : '기타 자격증 보기'}
      </button>
      {show && (
        <>
          <h2 className="text-3xl my-8">기타 자격증</h2>
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
                <td>태권도</td>
                <td>1단</td>
                <td>국기원</td>
                <td>2015년 11월 18일</td>
              </tr>
              <tr>
                <td>유도</td>
                <td>2단</td>
                <td>대한유도회</td>
                <td>2013년 11월 27일</td>
              </tr>
              <tr>
                <td>그래픽기술자격</td>
                <td>3급</td>
                <td>한국생산성본부</td>
                <td>2010년 11월 26일</td>
              </tr>
              <tr>
                <td>
                  정보기술자격
                  <br />
                  (한글파워포인트)
                </td>
                <td>A등급</td>
                <td>한국생산성본부</td>
                <td>2009년 12월 3일</td>
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
        </>
      )}
    </>
  )
}
