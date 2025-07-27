import { certificatesDict } from './dictionary/certificates'
import { formatDate, formatSession } from './dictionary/utils'

type Props = {
  lang: 'ko' | 'en' | 'zh' | 'ja'
}

export default function Certificates({ lang }: Props) {
  const dict = certificatesDict

  return (
    <table>
      <thead>
        <tr>
          <td>{dict.이름[lang]}</td>
          <td>{dict.내용[lang]}</td>
          <td>{dict.주관[lang]}</td>
          <td>{dict.일시[lang]}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a
              href="https://www.q-net.or.kr/crf005.do?id=crf00503&jmCd=1320"
              target="_blank"
              rel="noreferrer"
            >
              {dict.정기기사1회[lang]}
            </a>
          </td>
          <td className="text-center">
            <a href="/pdf/2025-06-13_정보처리기사.pdf" target="_blank">
              {dict.정보처리기사[lang]}
            </a>
          </td>
          <td className="text-center">{dict.과학기술정보통신부[lang]}</td>
          <td className="text-center">{formatDate(2025, 6, 13, lang)}</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.topcit.or.kr/home.do" target="_blank" rel="noreferrer">
              TOPCIT
            </a>{' '}
            {formatSession(15, lang)}
          </td>
          <td className="text-center">
            <a href="/pdf/2021-05-22_TOPCIT_15회.pdf" target="_blank">
              627{dict.점[lang]} ({dict.전국4등[lang]})
            </a>
          </td>
          <td className="text-center">{dict.과학기술정보통신부[lang]}</td>
          <td className="text-center">{formatDate(2021, 5, 22, lang)}</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.g-telp.co.kr:335/" target="_blank" rel="noreferrer">
              G-TELP (Level 2)
            </a>
          </td>
          <td className="text-center">
            <a href="/images/2020-gtelp.webp" target="_blank">
              82{dict.점[lang]}
            </a>
          </td>
          <td className="text-center">{dict.국제테스트연구원[lang]}</td>
          <td className="text-center">{formatDate(2020, 5, 3, lang)}</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hanja.ne.kr/index_original.asp" target="_blank" rel="noreferrer">
              {dict.대한검정회[lang]}
            </a>
          </td>
          <td className="text-center">
            <a href="/images/2009-hanja.webp" target="_blank">
              {dict.준1급[lang]}
            </a>
          </td>
          <td className="text-center">{dict.대한민국한자교육연구회[lang]}</td>
          <td className="text-center">{formatDate(2009, 11, 28, lang)}</td>
        </tr>
      </tbody>
    </table>
  )
}
