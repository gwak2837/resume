import { educationDict } from './dictionary/education'

type Props = {
  lang: 'ko' | 'en' | 'zh' | 'ja'
}

export default function Education({ lang }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <td>{educationDict.학력_이름[lang]}</td>
          <td>{educationDict.세부[lang]}</td>
          <td>{educationDict.기간[lang]}</td>
          <td>{educationDict.비고[lang]}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="font-semibold">
            <a href="https://www.cau.ac.kr" target="_blank" rel="noreferrer">
              {educationDict.중앙대학교[lang]}
            </a>
          </td>
          <td>
            <a href="/images/학위증.webp" target="_blank">
              {educationDict.학력_학위[lang]}
            </a>
            <div className="text-xs">(MAGNA CUM LAUDE)</div>
          </td>
          <td className="text-center">
            <a href="/pdf/중앙대학교-졸업증명서.pdf" target="_blank">
              {educationDict.학력_기간[lang]}
            </a>
          </td>
          <td>
            <a href="/images/2022-univ.webp" target="_blank">
              {educationDict.학력_전체학점[lang]}
            </a>
            <br />
            {educationDict.학력_전공학점[lang]}
          </td>
        </tr>
        <tr>
          <td className="font-semibold">
            <a href="https://school.jbedu.kr/honam-h" target="_blank" rel="noreferrer">
              {educationDict.호남고등학교[lang]}
            </a>
          </td>
          <td>{educationDict.호남고등학교_세부[lang]}</td>
          <td className="text-center">
            <a href="/pdf/호남고등학교-생활기록부.pdf" target="_blank">
              {educationDict.호남고등학교_기간[lang]}
            </a>
          </td>
          <td>
            <a href="/pdf/호남고등학교-성적증명서.pdf" target="_blank">
              {educationDict.호남고등학교_성적[lang]}
            </a>
          </td>
        </tr>
        <tr>
          <td className="font-semibold">
            <a href="https://school.jbedu.kr/jb-hs" target="_blank" rel="noreferrer">
              {educationDict.화산중학교[lang]}
            </a>
          </td>
          <td>{educationDict.기숙형자율학교[lang]}</td>
          <td className="text-center">{educationDict.화산중학교_기간[lang]}</td>
          <td>
            <a href="/pdf/완주화산중학교-성적증명서.pdf" target="_blank">
              {educationDict.화산중학교_성적[lang]}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
