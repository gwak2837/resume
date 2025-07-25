import { formatDate, formatSession } from './dictionary/utils'
import { certificatesDict } from './dictionary/certificates'

type Props = {
  lang: 'ko' | 'en' | 'zh' | 'ja'
}

export default function OtherCertificates({ lang }: Props) {
  const dict = certificatesDict

  return (
    <details className="mt-4">
      <summary className="w-fit mx-auto text-slate-500 text-sm cursor-pointer hover:text-slate-700 transition">
        {dict.기타자격증보기[lang]}
      </summary>
      <table className="mt-2">
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
            <td>TOPCIT {formatSession(14, lang)}</td>
            <td className="text-center">523{dict.점[lang]}</td>
            <td className="text-center">{dict.과학기술정보통신부[lang]}</td>
            <td className="text-center">{formatDate(2020, 10, 31, lang)}</td>
          </tr>
          <tr>
            <td>TOPCIT {formatSession(13, lang)}</td>
            <td className="text-center">609{dict.점[lang]}</td>
            <td className="text-center">{dict.과학기술정보통신부[lang]}</td>
            <td className="text-center">{formatDate(2020, 6, 20, lang)}</td>
          </tr>
          <tr>
            <td>TOPCIT {formatSession(12, lang)}</td>
            <td className="text-center">488{dict.점[lang]}</td>
            <td className="text-center">{dict.과학기술정보통신부[lang]}</td>
            <td className="text-center">{formatDate(2019, 10, 19, lang)}</td>
          </tr>
          <tr>
            <td>TOPCIT {formatSession(11, lang)}</td>
            <td className="text-center">383{dict.점[lang]}</td>
            <td className="text-center">{dict.과학기술정보통신부[lang]}</td>
            <td className="text-center">{formatDate(2019, 5, 18, lang)}</td>
          </tr>
          <tr>
            <td>TOPCIT {formatSession(10, lang)}</td>
            <td className="text-center">343{dict.점[lang]}</td>
            <td className="text-center">{dict.과학기술정보통신부[lang]}</td>
            <td className="text-center">{formatDate(2018, 10, 20, lang)}</td>
          </tr>
          <tr>
            <td>TOPCIT {formatSession(9, lang)}</td>
            <td className="text-center">397{dict.점[lang]}</td>
            <td className="text-center">{dict.과학기술정보통신부[lang]}</td>
            <td className="text-center">{formatDate(2018, 5, 19, lang)}</td>
          </tr>
          <tr>
            <td>{dict.태권도[lang]}</td>
            <td className="text-center">1{dict.단[lang]}</td>
            <td className="text-center">{dict.국기원[lang]}</td>
            <td className="text-center">{formatDate(2015, 11, 18, lang)}</td>
          </tr>
          <tr>
            <td>{dict.유도[lang]}</td>
            <td className="text-center">2{dict.단[lang]}</td>
            <td className="text-center">{dict.대한유도회[lang]}</td>
            <td className="text-center">{formatDate(2013, 11, 27, lang)}</td>
          </tr>
          <tr>
            <td>{dict.그래픽기술자격[lang]}</td>
            <td className="text-center">3{dict.급[lang]}</td>
            <td className="text-center">{dict.한국생산성본부[lang]}</td>
            <td className="text-center">{formatDate(2010, 11, 26, lang)}</td>
          </tr>
          <tr>
            <td>
              {dict.정보기술자격[lang]}
              <br />
              {dict.한글파워포인트[lang]}
            </td>
            <td className="text-center">A{dict.등급[lang]}</td>
            <td className="text-center">{dict.한국생산성본부[lang]}</td>
            <td className="text-center">{formatDate(2009, 12, 3, lang)}</td>
          </tr>
          <tr>
            <td>{dict.워드프로세서[lang]}</td>
            <td className="text-center">3{dict.급[lang]}</td>
            <td className="text-center">{dict.대한상공회의소[lang]}</td>
            <td className="text-center">{formatDate(2008, 12, 26, lang)}</td>
          </tr>
        </tbody>
      </table>
    </details>
  )
}
