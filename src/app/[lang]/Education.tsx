import { dict } from './dictionary'

type Props = {
  lang: 'ko' | 'en' | 'zh' | 'ja'
}

export default function Education({ lang }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <td>{dict.학력_이름[lang]}</td>
          <td>{dict.세부[lang]}</td>
          <td>{dict.기간[lang]}</td>
          <td>{dict.비고[lang]}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="font-semibold">
            <a href="https://www.cau.ac.kr" target="_blank" rel="noreferrer">
              {dict.중앙대학교[lang]}
            </a>
          </td>
          <td>
            <a href="/images/학위증.webp" target="_blank">
              {dict.학력_학위[lang]}
            </a>
            <div className="text-sm">(MAGNA CUM LAUDE)</div>
          </td>
          <td className="text-center">
            <a href="/pdf/중앙대학교-졸업증명서.pdf" target="_blank">
              {dict.학력_기간[lang]}
            </a>
          </td>
          <td>
            <a href="/images/2022-univ.webp" target="_blank">
              {dict.학력_전체학점[lang]}
            </a>
            <br />
            {dict.학력_전공학점[lang]}
          </td>
        </tr>
        <tr>
          <td className="font-semibold">
            <a href="https://school.jbedu.kr/honam-h" target="_blank" rel="noreferrer">
              {dict.호남고등학교[lang]}
            </a>
          </td>
          <td>{dict.호남고등학교_세부[lang]}</td>
          <td className="text-center">
            <a href="/pdf/호남고등학교-생활기록부.pdf" target="_blank">
              {dict.호남고등학교_기간[lang]}
            </a>
          </td>
          <td>
            <a href="/pdf/호남고등학교-성적증명서.pdf" target="_blank">
              {dict.호남고등학교_성적[lang]}
            </a>
          </td>
        </tr>
        <tr>
          <td className="font-semibold">
            <a href="https://school.jbedu.kr/jb-hs" target="_blank" rel="noreferrer">
              {dict.화산중학교[lang]}
            </a>
          </td>
          <td>{dict.기숙형자율학교[lang]}</td>
          <td className="text-center">{dict.화산중학교_기간[lang]}</td>
          <td>
            <a href="/pdf/완주화산중학교-성적증명서.pdf" target="_blank">
              {dict.화산중학교_성적[lang]}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
