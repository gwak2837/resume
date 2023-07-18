'use client'

import { MouseEvent, useState } from 'react'

export default function OtherCertificates() {
  const [show, setShow] = useState(false)

  function toggleShow(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    e.stopPropagation()
    setShow((prev) => !prev)
  }

  return (
    <>
      <a href="/" target="_blank" rel="noreferrer">
        <button className="w-full text-center my-4 text-slate-500 text-sm" onClick={toggleShow}>
          {show ? '기타 자격증 숨기기' : '기타 자격증 보기'}
        </button>
      </a>

      {show && (
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
              <td>TOPCIT 제14회</td>
              <td className="text-center">523점</td>
              <td className="text-center">과학기술정보통신부</td>
              <td className="text-center">2020년 10월 31일</td>
            </tr>
            <tr>
              <td>TOPCIT 제13회</td>
              <td className="text-center">609점</td>
              <td className="text-center">과학기술정보통신부</td>
              <td className="text-center">2020년 6월 20일</td>
            </tr>
            <tr>
              <td>TOPCIT 제12회</td>
              <td className="text-center">488점</td>
              <td className="text-center">과학기술정보통신부</td>
              <td className="text-center">2019년 10월 19일</td>
            </tr>
            <tr>
              <td>TOPCIT 제11회</td>
              <td className="text-center">383점</td>
              <td className="text-center">과학기술정보통신부</td>
              <td className="text-center">2019년 5월 18일</td>
            </tr>
            <tr>
              <td>TOPCIT 제10회</td>
              <td className="text-center">343점</td>
              <td className="text-center">과학기술정보통신부</td>
              <td className="text-center">2018년 10월 20일</td>
            </tr>
            <tr>
              <td>TOPCIT 제9회</td>
              <td className="text-center">397점</td>
              <td className="text-center">과학기술정보통신부</td>
              <td className="text-center">2018년 5월 19일</td>
            </tr>
            <tr>
              <td>태권도</td>
              <td className="text-center">1단</td>
              <td className="text-center">국기원</td>
              <td className="text-center">2015년 11월 18일</td>
            </tr>
            <tr>
              <td>유도</td>
              <td className="text-center">2단</td>
              <td className="text-center">대한유도회</td>
              <td className="text-center">2013년 11월 27일</td>
            </tr>
            <tr>
              <td>그래픽기술자격</td>
              <td className="text-center">3급</td>
              <td className="text-center">한국생산성본부</td>
              <td className="text-center">2010년 11월 26일</td>
            </tr>
            <tr>
              <td>
                정보기술자격
                <br />
                (한글파워포인트)
              </td>
              <td className="text-center">A등급</td>
              <td className="text-center">한국생산성본부</td>
              <td className="text-center">2009년 12월 3일</td>
            </tr>
            <tr>
              <td>워드프로세서</td>
              <td className="text-center">3급</td>
              <td className="text-center">대한상공회의소</td>
              <td className="text-center">2008년 12월 26일</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  )
}
