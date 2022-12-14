/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

import OtherCertificates from './OtherCertificates'

export default function HomePage() {
  return (
    <main className="mx-auto mb-8 max-w-[720px]">
      <a href="https://gwak2837.vercel.app" target="_blank" rel="noreferrer">
        <h1 className="text-4xl mb-6 font-semibold	w-full">μ΄λ ₯μ</h1>
      </a>
      <div>
        <div className="grid gap-4 grid-cols-[2fr_3fr]">
          <Image src="/images/1.jpeg" alt="asd" width="270" height="270" />
          <table className="border-none w-fit	">
            <tbody>
              <tr>
                <td className="border-none p-px">π§&nbsp;&nbsp;</td>
                <td className="border-none p-px">κ³½νμ± (Taeuk Gwak, ι­ζ³°ζ±)</td>
              </tr>
              <tr>
                <td className="border-none p-px">π</td>
                <td className="border-none p-px">1998λ 4μ 12μΌ (λ¨)</td>
              </tr>
              <tr>
                <td className="border-none p-px">π</td>
                <td className="border-none p-px">μ€μλνκ΅ μ»΄ν¨ν°κ³΅νλΆ νμ¬</td>
              </tr>
              <tr>
                <td className="border-none p-px">π </td>
                <td className="border-none p-px">μμΈμ κ°λκ΅¬ μ²νΈλ</td>
              </tr>
              <tr>
                <td className="border-none p-px">πͺ</td>
                <td className="border-none p-px">ROTC 2019λ 1μ ~ 2020λ 9μ</td>
              </tr>
              <tr>
                <td className="border-none p-px"></td>
                <td className="border-none p-px">μΉ΄ν¬μ¬ 2022λ 3μ ~ 2023λ 7μ (1λ 4κ°μ)</td>
              </tr>
              <tr>
                <td className="border-none p-px">π±</td>
                <td className="border-none p-px">
                  <a href="tel:010-9203-2837">010-9203-2837</a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-px">βοΈ</td>
                <td className="border-none p-px">
                  <a href="mailto:gwak2837@kakao.com">gwak2837@kakao.com</a>
                </td>
              </tr>
              <tr>
                <td className="border-none p-px">
                  <Image src="/images/github.svg" alt="github" width="16" height="16" />
                </td>
                <td className="border-none p-px">
                  <a href="https://github.com/gwak2837" target="_blank" rel="noreferrer">
                    github.com/gwak2837
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
        κ³ κ°μ λΆνΈν¨μ ν΄κ²°νλ μ νμ κΈ°ννλ©΄μ κ³ κ°μ λͺ©μλ¦¬μ κ· κΈ°μΈμ¬ λΉμ¦λμ€ λ¬Έμ λ₯Ό
        ν΄κ²°νκ³ , μ νμ κ°λ°νλ λμ€ μ»μ μ§μμ λ€λ₯Έ μ¬λκ³Ό κ³΅μ νλ©΄μ κΈ°μ μ μ‘΄μ¬ μ΄μ λ₯Ό
        κ³ λ―Όνλ <b>νλ‘ νΈμλ κ°λ°μ</b> κ³½νμ±μλλ€.
      </p>
      <h2 className="text-3xl my-8 ">μκ°</h2>
      <p className="my-4 	">
        μ§μ  λ§λ  κΈ°ννΈλ§ν¬ λμλ¦¬μ μννΈμ¨μ΄ κ°λ°μλ‘ μμν΄, νλ³΅ν λ€λμ₯λ¨μ νλ‘ νΈμλ μΈν΄,
        (μ£Ό)νμ€νμ νλ‘ νΈμλ μΈν΄, Headstart Silicon Valleyμ νλ‘μ νΈ κ΄λ¦¬μ, μ λ(Sindy)
        μ°½μν, (μ£Ό)μνμΉ΄μ΄λ‘±μ MVP κ°λ°νμ₯, (μ£Ό)λννΈμ»΄νΌλμ μλΉμ€ κ°λ°νμ₯ λ±μμ λ€μν
        νλ‘μ νΈλ₯Ό μννλ©° μλΉμ€κ° μΈμμ λμ€κΈ° μν κ°λ° μ£ΌκΈ° κ³Όμ μ μ λΆ κ²½ννμ΅λλ€. μ²«
        μ°½μνμΈ μ λμμ μλΉμ€λ₯Ό μ²μλΆν° κ΅¬μΆν΄μΌ νλ€λ³΄λ μ¬λ¬ κ°λ° λΆμΌλ₯Ό κ²½ννμ΅λλ€.
      </p>
      <p className="my-4 	">
        κ·Έλ¬λ©΄μ μλΉμ€λ₯Ό μ λ§λ€λ €λ©΄ λλ£μμ νμμ΄ μ€μνλ¨ κ²κ³Ό, λμ λλ£μ μ±μ₯μ΄ μλ°λμΌ
        μ’μ μλΉμ€κ° λμ¬ μ μλ€λ κ²μ κΉ¨λ¬μμ΅λλ€. μμ΄λμ΄κ° νλ‘ν νμμ΄ λκ³  νλ‘ν νμμ΄
        μ ν μμ€μΌλ‘ μ±μ₯νλ κ³Όμ μμ, λμ λλ£κ° μ±μ₯νκ³  μ°λ¦¬κ° μν μ‘°μ§μ΄ μ±μ₯νλ €λ©΄ νμν
        κ²μ΄ λ¬΄μμΌκΉ κ³ λ―Όνλ©΄μ, μ λ μ°½μνμμ 'μΉ΄νμ νΉμμ λ΄μλ΄λ μ¬μ©μ μ£Όλ SNSν λμ νΈ
        μ λ³΄ κ³΅μ  κ³΅κ°' μλΉμ€λ₯Ό κΈ°ννκ³ , νλ‘ νΈμλ/λ°±μλ κ°λ°μμ ν΄λΌμ°λ μμ§λμ΄λ‘μ μλΉμ€λ₯Ό
        μ²μλΆν° ν€μ μ΅λλ€.
      </p>
      <p className="	">
        νμ¬λ νλ‘ νΈμλ λΆμΌλ₯Ό μ§μ€μ μΌλ‘ νκ΅¬νκ³  μκ³ , λ°±μλ λ° ν΄λΌμ°λ λΆμΌ λ± μλΉμ€ μΆμλ₯Ό
        μν΄ νμν λΆμΌλ‘ κ΄μ¬μ¬λ₯Ό λνκ³  μμ΅λλ€.
      </p>
      <Image src="/images/mbti.png" alt="asd" width="2716" height="1200" />
      <h2 className="text-3xl my-8 ">νλ ₯</h2>
      <table>
        <thead>
          <tr>
            <td>μ΄λ¦</td>
            <td>μΈλΆ</td>
            <td>κΈ°κ°</td>
            <td>λΉκ³ </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-semibold">μ€μλνκ΅</td>
            <td>μ»΄ν¨ν°κ³΅νλΆ νμ¬</td>
            <td>2017λ 3μ ~ 2022λ 2μ</td>
            <td>
              μ μ²΄ νμ : 4.1 / 4.5 (163 νμ ) <br />
              μ κ³΅ νμ : 4.0 / 4.5 (89 νμ )
            </td>
          </tr>
          <tr>
            <td className="font-semibold">νΈλ¨κ³ λ±νκ΅</td>
            <td>μ΄κ³Ό μ‘Έμ</td>
            <td>2014λ 3μ ~ 2017λ 2μ </td>
            <td>νκ·  λ΄μ : 1.45</td>
          </tr>
          <tr>
            <td className="font-semibold">μμ£Όνμ°μ€νκ΅</td>
            <td>μ‘Έμ</td>
            <td>2011λ 3μ ~ 2014λ 2μ </td>
            <td>μ‘Έμ λ±μ: λ¨μ μμ (μ μ²΄ 4λ±)</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-3xl my-8">μκ²©μ¦</h2>
      <table>
        <thead>
          <tr>
            <td>μ΄λ¦</td>
            <td>λ΄μ©</td>
            <td>μ£Όκ΄</td>
            <td>μΌμ</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TOPCIT 15ν</td>
            <td>627μ  (μ κ΅­ 4λ±)</td>
            <td>κ³ΌνκΈ°μ μ λ³΄ν΅μ λΆ</td>
            <td>2021λ 5μ 22μΌ</td>
          </tr>
          <tr>
            <td>G-TELP (Level 2)</td>
            <td>82μ </td>
            <td>κ΅­μ νμ€νΈ μ°κ΅¬μ</td>
            <td>2020λ 5μ 3μΌ</td>
          </tr>
        </tbody>
      </table>
      <OtherCertificates />
      <h2 className="text-3xl my-8">
        κ°λ° κ²½λ ₯ <span className="text-base">(1λ)</span>
      </h2>
      <ul>
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>
              (μ£Ό)λννΈμ»΄νΌλ{' '}
              <a
                href="https://www.saramin.co.kr/zf_user/company-info/view?csn=eFE2Qks5TzVpanROVE5pQW9ZbGMyZz09"
                target="_blank"
                rel="noreferrer"
              >
                @μ¬λμΈ
              </a>
            </b>
            <div>2022λ 2μ 14μΌ ~ 3μ 13μΌ (1κ°μ)</div>
          </div>
          <div>μ§μ±: κ°λ°νμ₯</div>
          <div>μ§κΈ: μΈν΄</div>
          <div>μ­ν : 'λ€μ μΌνκ³  μΆμ μ¬μ±μ μνΈμ±μ₯ νλ«νΌ' λΉλ§μ΄μμ¦ κ°λ°</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>
              (μ£Ό)μνμΉ΄μ΄λ‘±{' '}
              <a
                href="https://www.saramin.co.kr/zf_user/company-info/view?csn=TTNPako4L0s0cVFhdktlYjlwZ0JZUT09"
                target="_blank"
                rel="noreferrer"
              >
                @μ¬λμΈ
              </a>
            </b>
            <div>2021λ 11μ 9μΌ ~ 2022λ 2μ 8μΌ (3κ°μ)</div>
          </div>
          <div>μ§μ±: κ°λ°νμ₯</div>
          <div>μ§κΈ: μΈν΄</div>
          <div>μ­ν : '4050 μ¬μ± μ μ© μ»€λ?€λν°' μνμΉ΄μ΄λ‘± κΈ°ν λ° MVP κ°λ°</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>
              (μ£Ό)νμ€ν{' '}
              <a
                href="https://www.saramin.co.kr/zf_user/company-info/view?csn=VUxtcFBINlJLR2wra01lNlhjbEV0QT09"
                target="_blank"
                rel="noreferrer"
              >
                @μ¬λμΈ
              </a>
            </b>
            <div>2020λ 9μ 1μΌ ~ 12μ 31μΌ (4κ°μ)</div>
          </div>
          <div>μ§μ±: Frontend κ°λ°νμ</div>
          <div>μ§κΈ: μΈν΄</div>
          <div>μ­ν : 'νμ€ν μλΉμ€ κ΄λ¦¬μ(Admin) νμ΄μ§' κΈ°ν λ° κ°λ°</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>
              (μ£Ό)νλ³΅ν λ€λμ₯λ¨{' '}
              <a
                href="https://www.saramin.co.kr/zf_user/company-info/view?csn=VHFyWXhFL2E1N1hYMkhEZmUxK05SZz09"
                target="_blank"
                rel="noreferrer"
              >
                @μ¬λμΈ
              </a>
            </b>
            <div>2019λ 12μ 23μΌ ~ 2020λ 2μ 21μΌ (2κ°μ)</div>
          </div>
          <div>μ§μ±: κ°λ°λΆμ</div>
          <div>μ§κΈ: μΈν΄</div>
          <div>μ­ν : 'λ°©νμΆ λ¦¬λ·° μΉμ¬μ΄νΈ' κΈ°ν/λμμΈ λ° MVP κ°λ°</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>μ€μλνκ΅ μ μΈμ μ€νμ€ μ€νμ€</b>
            <div>2019λ 3μ 26μΌ ~ 5μ 31μΌ (2κ°μ)</div>
          </div>
          <div>μ§μ±: SW κ°λ°νμ</div>
          <div>μ§κΈ: μΈν΄</div>
          <div>
            μ­ν : μ μΈμ  μμ ν΅κ³ λΆμ κ°λ° λ³΄μ‘° (C++), OpenMP λΌμ΄λΈλ¬λ¦¬ κΈ°λ° λ³λ ¬μ²λ¦¬λ‘ μν κ³μ°
            μ±λ₯ μ΅μ ν
          </div>
        </li>
      </ul>
      <h2 className="text-3xl my-8">νλ‘μ νΈ</h2>
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>μ΄λ ₯μ</h4>
        <div>λ³ΈμΈ</div>
        <div>2022λ 12μ 12μΌ ~ νμ¬</div>
      </div>
      <div className="flex gap-0.5 my-2">
        <a
          href="https://github.com/gwak2837/resume"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">resume</h5>
          </div>
        </a>
        <a
          href="https://gwak2837.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/vercel.png" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              gwak2837.vercel.app
            </h5>
          </div>
        </a>
      </div>
      <div>
        Notion, Confluence, Google Docs λ± μ¨λΌμΈ κΈ°λ° λ¬Έμ νΈμ§κΈ°λ PDF λ³ν κΈ°λ₯μ΄ λ―Έν‘ν΄, κΉλν
        λ¬Έμ μΈμ λ° PDF λ³νμ λͺ©μ μΌλ‘ νλ‘μ νΈλ₯Ό μμν¨. μ΄λ ₯μλ₯Ό μμ±νλλ° νμ΄ λ€μ§λ§, νΉμ 
        νμμ μ½λ©μ΄μ§ μκ³  μμ±ν  μ μμ΄μ μ’μ
      </div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white"
            alt="next.js"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"
            alt="tailwind"
          />
        </a>
        <a href="https://vercel.com/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white"
            alt="Vercel Badge"
          />
        </a>
      </div>
      <ol>
        <li>λΉ λ₯Έ κ°λ°μ μν΄ Next.jsμ TailwindCSS, Vercelμ μ΄μ©ν¨</li>
      </ol>
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>μΏ ν‘ κ°κ²© μλ¦¬λ―Έ</h4>
        <div>λ³ΈμΈ</div>
        <div>2022λ 11μ 22μΌ ~ νμ¬</div>
      </div>
      <div className="flex gap-0.5 my-2">
        <a
          href="https://github.com/gwak2837/yeou"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">yeou</h5>
          </div>
        </a>
        <a
          href="https://github.com/gwak2837/yeou-backend"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300	">
              yeou-backend
            </h5>
          </div>
        </a>
        <a
          href="https://yeou.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/vercel.png" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 		">
              yeou.vercel.app
            </h5>
          </div>
        </a>
      </div>
      <div>
        μμκ°κ° λ³νλ μΏ ν‘μ κ°κ²©μ μΆμ νμ¬ μλ¦Όμ λ°κΈ° μν΄ νλ‘μ νΈλ₯Ό μμν¨. μ΄ν μ΄ κΈ°λ₯μ
        μΏ ν‘ ννΈλμ€μ μ ν΄ URLκ³Ό μ°κ³ν΄ μμμ μ»μ μμ μ
      </div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white"
            alt="next.js"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"
            alt="tailwind"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=react-query&logoColor=white"
            alt="react-query"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Fastify-000000?style=flat-square&logo=fastify&logoColor=white"
            alt="fastify"
          />
        </a>
        <a href="https://web.dev/progressive-web-apps/" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=PWA&logoColor=white"
            alt="PWA Badge"
          />
        </a>
        <a href="https://en.wikipedia.org/wiki/HTTP/2" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/HTTP2-4285F4?style=flat-square&logo=google-chrome&logoColor=white"
            alt="HTTP2 Badge"
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
      <ol>
        <li>
          Apollo server μ¬μ©νλ€κ° Apolloλ μλ²μ HTTP2λ₯Ό μ μ©ν  μ μμ΄μ HTTP2λ₯Ό μ§μνλ
          Fastifyλ‘ λ³κ²½ν¨. Fastify μΆμ²μΈ λ²€μΉλ§ν¬μλ Fastifyκ° Apolloλ³΄λ€ λͺ λ°° λΉ λ₯΄λ€κ³  ν΄μ
          Fastifyλ₯Ό μ νν¨
        </li>
        <li>GraphQLμ μ μ°κ² λΌμ Apoll clientλ₯Ό react queryλ‘ λ³κ²½ν¨</li>
        <li>
          Next.js νμ΄μ§ revalidationμ μν΄ Next.js api κΈ°λ₯μ νμ©ν¨. μ΄λ lru-cacheλ₯Ό ν΅ν΄ μμ²­
          λΉλλ₯Ό μ νν¨. λν font λ‘λ© μλ κ°μ κ³Ό font μ§μ° λ‘λ©μΌλ‘ μΈν cumulative layout shift
          λ°©μ§λ₯Ό μν΄ @next/fontλ₯Ό μ¬μ©ν¨
        </li>
        <li>
          μ§κΈκΉμ§ Styled componentsλ₯Ό μ¬μ©νλλ° Tailwind npm μ£Όκ° λ€μ΄λ‘λ μκ° κΈκ²©ν μ¦κ°νκΈ°λ
          νκ³ , Styled componentsλ₯Ό μ¬μ©νλ©΄ νλ‘μ νΈ κ·λͺ¨κ° μ»€μ§ μλ‘ css λ²λ€ ν¬κΈ°κ° μ νμΌλ‘
          μ¦κ°νλκΉ, ν° νλ‘μ νΈμμ css λ²λ€ ν¬κΈ°λ₯Ό μ€μ΄κΈ° μν΄ Tailwindλ₯Ό μ¬μ©νλ €κ³  ν¨. κ·Έλλ₯Ό
          μν΄ μ°μ΅ν  κ²Έ Tailwindλ₯Ό μ νν¨
        </li>
        <li>
          Push APIλ₯Ό μΉμμ»€λ‘ μ§μ  κ΅¬ννλ€κ° Push API κ΄λ ¨ UI κ΅¬ν λ° UX κ°μ νλλ° νμ΄ λ§μ΄
          λ€μ΄μ FlareLaneμ μ νν¨. λμ€μ νλ‘μ νΈ κ·λͺ¨κ° μ»€μ Έμ μ±λ₯ λ° λΉμ© λ¬Έμ κ° λ°μνλ©΄ λ€μ
          μ§μ  μΉμμ»€λ‘ κ΅¬νν  μμ μ
        </li>
      </ol>
      <div className="border w-full my-6" />
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-4 my-4">
        <h4>μμ λ΄</h4>
        <div>λ³ΈμΈ</div>
        <div>2022λ 6μ 1μΌ ~ 10μ 31μΌ (5κ°μ)</div>
      </div>
      <div className="flex gap-0.5 my-2">
        <a
          href="https://github.com/gwak2837/jayudam"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">jayudam</h5>
          </div>
        </a>
        <a
          href="https://github.com/gwak2837/jayudam-backend"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/github.svg" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              jayudam-backend
            </h5>
          </div>
        </a>
        <a
          href="https://jayudam.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="hover:no-underline	p-1 hover:bg-slate-100 rounded-lg focus:no-underline"
        >
          <div className="flex gap-1 items-center">
            <Image src="/images/vercel.png" alt="github" width="16" height="16" />
            <h5 className="underline-offset-4	underline text-black decoration-gray-300 ">
              jayudam.vercel.app
            </h5>
          </div>
        </a>
      </div>
      <div>κ³΅κ³΅λ³΄κ±΄ μ¦μ§μ μν κ°μΈκ° λ³΄κ±΄κΈ°λ‘ QRμ½λ μ΅λͺ μΈμ¦ μλΉμ€</div>
      <div className="flex flex-wrap gap-1 my-2">
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Apollo client-311C87?style=flat-square&logo=Apollo GraphQL&logoColor=white"
            alt="react-query"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Recoil.js-3578e5?style=flat-square&logo=&logoColor=white"
            alt="next.js"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/React Form-EC5990?style=flat-square&logo=react-hook-form&logoColor=white"
            alt="fastify"
          />
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Apollo server-311C87?style=flat-square&logo=Apollo GraphQL&logoColor=white"
            alt="tailwind"
          />
        </a>
        <a href="https://en.wikipedia.org/wiki/HTTP/2" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/HTTP2-4285F4?style=flat-square&logo=google-chrome&logoColor=white"
            alt="HTTP2 Badge"
          />
        </a>
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
        <a href="https://en.wikipedia.org/wiki/HTTP/2_Server_Push" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/Server Push-4285F4?style=flat-square&logo=google-chrome&logoColor=white"
            alt="Server Push Badge"
          />
        </a>
        <a href="https://en.wikipedia.org/wiki/WebRTC" rel="noreferrer" target="_blank">
          <img
            src="https://img.shields.io/badge/WebRTC-333333?style=flat-square&logo=webrtc&logoColor=white"
            alt="WebRTC Badge"
          />
        </a>
      </div>
      <ol>
        <li>
          λ€νΈμν¬ μμ²­ λ° μλ΅ λ°μ΄ν°μ input μλ ₯κ° λ°μ΄ν° κ΄λ¦¬λ₯Ό μ μΈν, React μ μ­ μν κ΄λ¦¬λ₯Ό
          μν΄ Recoil.jsλ₯Ό μ νν¨. λ€νΈμν¬ μμ²­ λ° μλ΅ λ°μ΄ν°λ Apollo clientλ‘ κ΄λ¦¬νκ³ , input
          μλ ₯κ° λ°μ΄ν°λ React formμΌλ‘ κ΄λ¦¬ν¨
        </li>
        <li>
          μΉμμΌλ³΄λ€ κ°λ²Όμ΄ HTTP2 Server pushλ₯Ό μ¬μ©ν΄ μ±ν κΈ°λ₯μ κ΅¬νν¨. μΉμμΌμ μ¬μ©νλ©΄
          μλ²μμ μλ°©ν₯ ν΅μ μ΄ κ°λ₯ν΄ μλ²κ° λ¨Όμ  λ°μ΄λλ¦¬ λ°μ΄ν°λ₯Ό λ³΄λΌ μ μλλ°, λ³Έ
          νλ‘μ νΈμμ  μλ²μμ λ°μ΄λλ¦¬ λ°μ΄ν°λ₯Ό λ¨Όμ  λ³΄λ΄λ κ²½μ°κ° μμ΄ Server pushλ‘λ μ λΉνλ€κ³ 
          νλ¨ν¨. λΈλΌμ°μ μ EventSource κΈ°λ₯μ νμ©νλ©΄ HTTP2 μλ²μμ λΈλΌμ°μ λ‘ λ¨Όμ  μμ²­ν  μ
          μμ
        </li>
        <li>λΈλΌμ°μ  μΉ΄λ©λΌλ₯Ό μ΄μ©ν΄ QR μ½λ μ€μΊ κΈ°λ₯μ κ΅¬νν¨</li>
      </ol>
      <Image
        src="/images/jayudam.png"
        alt="jayudam architecture"
        width="1920"
        height="1080"
        className="border"
      />
      <div className="border w-full my-6" />
      <h4 className="my-8">2022λ μ΄μ  νλ‘μ νΈ λͺ©λ‘</h4>
      <a
        href="https://gwak2837.notion.site/Resume-3fb93cf3019243fc8fd9103975f2872f"
        target="_blank"
        rel="noreferrer"
      >
        Notion
      </a>
      <h2 className="text-3xl my-8">κΈ°μ </h2>
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
          <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"
              alt="tailwind Badge"
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
          <a href="https://www.figma.com/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=black"
              alt="Figma Badge"
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
            />
          </a>
          <a href="https://www.docker.com/" rel="noreferrer" target="_blank">
            <img
              src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"
              alt="Docker Badge"
            />
          </a>
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
        </div>
        <div className="flex gap-1">
          <a href="https://expressjs.com/" rel="noreferrer">
            <img
              src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"
              alt="Express Badge"
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
        <li>Recoil.js, Context API κΈ°λ₯μΌλ‘ μ μ­ μνλ₯Ό κ΄λ¦¬ν¨</li>
        <li>React Query, Apollo client, useSWR λ± λ€νΈμν¬ μμ²­ λ° μλ΅ λ°μ΄ν°λ₯Ό κ΄λ¦¬ν¨</li>
        <li>Next.js νλ μμν¬ κΈ°λ° SSRλ₯Ό κ°λ°ν¨</li>
        <li>
          PWAλ₯Ό μ μ©ν΄ λͺ¨λ°μΌ μ κ·Όμ±μ λμ΄κ³ , λΈλΌμ°μ  Notification/Push APIλ‘ μ¬μ©μ μ¬λ°©λ¬Έμ¨μ
          ν₯μν¨
        </li>
        <li>Virtual DOMμ μ‘΄μ¬ μμμ μΈμ  Reconciliationμ΄ λ°μνλμ§ κ³ λ―Όν¨</li>
        <li>
          ν¨μ μ»΄ν¬λνΈμ ν΄λμ€ μ»΄ν¬λνΈλ₯Ό λΉκ΅νλ©° μ¬λ¬ useEffectκ° μ΄λ€ μμλ‘ μ€νλλμ§ κ³ λ―Όν¨
        </li>
        <li>ν¨μν νλ‘κ·Έλλ°μμ λμ€λ ν΄λ‘μ  κ°λμ νμ©ν΄ useStateλ₯Ό κ°λ¨νκ² μ§μ  κ΅¬νν¨</li>
        <li>λ©λͺ¨μ΄μ μ΄μ κ°λμ μ΄μ©ν useMemo, useCallbackμ νμ©ν΄ μ»΄ν¬λνΈ λ λλ§μ μ΅μ νν¨</li>
      </dl>
      <h3 className="text-2xl my-4">HTML Β· CSS</h3>
      <dl>
        <li>
          W3C μΉ νμ€κ³Ό μΉ μ κ·Όμ±(a11y)μ μ§ν€λ € λΈλ ₯νλ©° ν¬λ‘μ€ λΈλΌμ°μ§μ λμν  μ μμ (IE11
          μ μΈ)
        </li>
        <li>Semantic HTML, SCSS λ¬Έλ²μ μ΅μν¨</li>
        <li>keyframe, transition λ±μ νμ©ν μ λλ©μ΄μ κ΅¬ν κ°λ₯ν¨</li>
        <li>λ§μ°μ€ Drag&Drop κΈ°λ₯κ³Ό μ€ν¬λ‘€ μ΄λ²€νΈλ₯Ό νμ©ν μ λλ©μ΄μ κ΅¬ν κ°λ₯ν¨</li>
        <li>Figma, Zeplin, Adobe XDμ κ°μ λμμΈ ν΄μ μ΄μ©ν΄ λμμ΄λμ νμν¨</li>
        <li>μμ CSSλ₯Ό μ΄μ©ν΄ Drawer, Modal, Carouselμ μ§μ  κ΅¬ν κ°λ₯ν¨</li>
      </dl>
      <h3 className="text-2xl my-4">JavaScript</h3>
      <dl>
        <li>ES2022 κΉμ§μ λ¬Έλ² λ° JavaScript μμ§μμ μ¬μ©λλ λΉλκΈ° κ°λμ μ΅μν¨</li>
        <li>TypeScriptμ type μλ μμ± λΌμ΄λΈλ¬λ¦¬λ₯Ό μ¬μ©ν΄ κ°λ° μμ°μ±μ λμ</li>
        <li>esbuild, Webpack λ²λ€λ¬λ₯Ό μ¬μ©ν΄ Docker μ΄λ―Έμ§ ν¬κΈ°λ₯Ό μ€μ</li>
        <li>Promise, async await, generator λ¬Έλ²μ μ¬μ©ν΄ λΉλκΈ° μμμ κ΅¬ν κ°λ₯ν¨</li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            target="_blank"
            rel="noreferrer"
          >
            Intersection Observer API
          </a>
          λ₯Ό μ¬μ©ν΄ λ¬΄νμ€ν¬λ‘€ νμ΄μ§λ€μ΄μμ κ΅¬νν¨
        </li>
        <li>
          λΈλΌμ°μ μ{' '}
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
          &nbsp;κΈ°λ₯μ μ¬μ©ν  μ μμ
        </li>
        <li>μΉμμΌ λλ HTTP/2 Push κΈ°λ₯μ νμ©ν΄ μΌλμΌ μ±ν κΈ°λ₯μ κ΅¬νν¨</li>
      </dl>
      <h3 className="text-2xl my-4">Backend</h3>
      <dl>
        <li>Fastify, Next.js, Express.js, Koa.js λΌμ΄λΈλ¬λ¦¬λ‘ REST API μλ²λ₯Ό κ°λ°ν¨</li>
        <li>Apollo Serverλ₯Ό μ¬μ©ν΄ GraphQL API μλ²λ₯Ό κ°λ°ν¨</li>
        <li>Jestλ₯Ό μ¬μ©ν μ λ νμ€νΈ μλν(CI) κ²½νμ΄ μμ</li>
        <li>Dockerfile, compose.yaml νμΌμ μ¬μ©ν΄ μλ² μΈνλΌ μ€μ , μ»¨νμ΄λ κ΄λ¦¬λ₯Ό μλνν¨</li>
        <li>κ°λ¨ν PostgreSQL μΏΌλ¦¬ λΉλ λ° ORMμ μ§μ  κ΅¬νν¨</li>
        <li>
          BFF κ°λμ νμ©ν΄ νλ‘ νΈμλ κ°λ³ νμ΄μ§μ μ΅μ νλ μλν¬μΈνΈλ₯Ό μ€κ³ Β· κ΅¬νν  μ μμ
        </li>
      </dl>
      <h3 className="text-2xl my-4">PostgreSQL</h3>
      <dl>
        <li>
          μΈλν€μ junction νμ΄λΈμ μ¬μ©ν΄ νμ΄λΈ κ° μΌλμΌ, μΌλλ€, λ€λλ€ κ΄κ³λ₯Ό μ€μ ν  μ μμ
        </li>
        <li>JOIN ν€μλλ₯Ό νμ©ν΄ μ¬λ¬ νμ΄λΈμμ λ°μ΄ν°λ₯Ό κ°μ Έμ¬ μ μμ</li>
        <li>COPY ν€μλλ₯Ό μ¬μ©ν΄ λ°μ΄ν°λ² μ΄μ€ λ°μ΄ν°λ₯Ό CSV νμΌλ‘ κ΄λ¦¬ν  μ μμ</li>
        <li>νΈλμ­μμΌλ‘ μ¬λ¬ SQLλ¬Έμ νλμ λΌλ¦¬μ  λ¨μλ‘ κ΄λ¦¬ν  μ μμ</li>
        <li>ν¨μ, νλ‘μμ , νΈλ¦¬κ±°, PL/pgSQLμ μ¬μ©ν΄ SQL μμ²­ νμλ₯Ό μ€μΌ μ μμ</li>
        <li>
          SQL κ° κ²½μμ‘°κ±΄μ΄ μμ λ μλλ κ²°κ³Όλ₯Ό μ»κΈ° μν΄ νΉμ  νμ΄λΈ λλ λ μ½λλ₯Ό μ κΈ μ μμ
        </li>
        <li>Offset Pagination, Keyset Pagination μΏΌλ¦¬λ₯Ό κ΅¬νν  μ μμ</li>
      </dl>
      <h3 className="text-2xl my-4">Cloud</h3>
      <dl>
        <li>ν΄λΌμ°λ κ°μ λ¨Έμ μ Docker κΈ°λ° SSL μ μ© PostgreSQL μλ²μ Redis μλ²λ₯Ό κ΅¬μΆν¨</li>
        <li>Cloud Buildμ Cloud Runμ νμ©ν΄ Docker μ΄λ―Έμ§ λΉλ Β· λ°°ν¬λ₯Ό μλν(CI Β· CD)ν¨</li>
        <li>Cloud Functionμ μ¬μ©ν Slack μλ¦Όλ΄ κ°λ° κ°λ₯ν¨</li>
        <li>GCP VPC λ€νΈμν¬μμ λ°©νλ²½ κ·μΉμ μ€μ ν΄ μμ²­ IP λλ ν¬νΈ λ²μλ₯Ό μ νν¨</li>
        <li>Cloud Storageμ μ΄λ―Έμ§ νμΌμ λμ μΌλ‘ μλ‘λνκ³  μλΉμ€ νμ</li>
        <li>Cloud SQL λ° AWS RDSμ ν΄λΌμ°λ DB μλ²λ₯Ό κ΅¬μΆνμ</li>
        <li>AWS RDS, AWS EC2, AWS S3, Oracle Instance, κ°λΉμ ν΄λΌμ°λλ₯Ό μ¬μ©ν κ²½νμ΄ μμ</li>
      </dl>
      <h3 className="text-2xl my-4">μΈλΆ API</h3>
      <dl>
        <li>μΉ΄μΉ΄μ€ OAuth, Google OAuth, λΉλ°ν€ OAuth, λ€μ΄λ² OAuth λ±κ³Ό μ°λ κ°λ₯ν¨</li>
        <li>μΉ΄μΉ΄μ€νμ΄, ν μ€νμ΄λ₯Ό μ¬μ©ν΄ κ²°μ  μμ€νμ μλνν  μ μμ</li>
        <li>Google Analyticsλ₯Ό νμ©ν μ¬μ΄νΈ ν΅κ³ λΆμ κ²½νμ΄ μμ</li>
        <li>λ€μ΄λ²μ§λ APIλ₯Ό νμ©ν΄ μ§λ κΈ°λ₯μ κ°λ°ν  μ μμ</li>
        <li>μ±λν‘ API, Telegram API, SOLAPIλ₯Ό νμ©ν΄ μ¬μ©μμκ² μλ¦Όμ© λ©μμ§λ₯Ό λ³΄λΌ μ μμ</li>
      </dl>
      <h2 className="text-3xl my-8">κ²½ν</h2>
      <ul>
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>μΉ΄ν¬μ¬ 1μ§μ­λ μ λ³΄μμ κ³Ό (λλμ²)</b>
            <div>2022λ 12μ 1μΌ ~ 2023λ 7μ 23μΌ (7κ°μ)</div>
          </div>
          <div>μ§μ±: μ μ°λ³</div>
          <div>
            μ­ν : 1μ§μ­λ λ΄ νκ΅­κ΅° μ»΄ν¨ν° μ€μΉ.μλ¦¬.μ μ§λ³΄μ, νμ VBS(Visual basic script)λ‘ μλ¬΄
            μλν
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>μΉ΄ν¬μ¬ λ―Έ8κ΅° μ 176μ¬μ κ΄λ¦¬μ§μλ (λλμ²)</b>
            <div>2022λ 5μ 11μΌ ~ 11μ 30μΌ (6κ°μ)</div>
          </div>
          <div>μ§μ±: SW Maintenance Team member</div>
          <div>
            μ­ν : λ―Έκ΅° μκΈ κ΄λ¦¬ μμ€ν(DJMS, Defense Joint Military pay Service), λ―Έκ΅° μκΈ κ΄λ¦¬
            μΉμ¬μ΄νΈ(MMPA, Master Military Pay Account) μ μ§λ³΄μ
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>λΉμλμ½λ© (μ½λ©νμ)</b>
            <div>2021λ 8μ 25μΌ ~ 9μ 30μΌ (1κ°μ)</div>
          </div>
          <div>μ§μ±: μΉ κ°λ° μμ κ°μ¬</div>
          <div>
            μ­ν : μ΄λ±νμ/μ€νμμ λμμΌλ‘ HTML/CSS/JS κ°λ λ° μκΈ°μκ° μΉνμ΄μ§ μ μ μμ (μ£Ό
            2ν, 1ν 3μκ°)
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>κ³ΌμΈ</b>
            <div>2021λ 8μ 9μΌ ~ 2022λ 2μ 6μΌ (6κ°μ)</div>
          </div>
          <div>
            μ­ν : λνμμ λμμΌλ‘ νλ‘ νΈμλ/λ°±μλ/ν΄λΌμ°λ κ°λ λ° μΈμ€νκ·Έλ¨ ν΄λ‘  μ½λ© μμ (μ£Ό
            3ν, 1ν 2μκ°)
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>Purdue University μ¨λΌμΈ ν΄μΈκ΅μ‘</b>
            <div>2021λ 7μ 5μΌ ~ 8μ 20μΌ (2κ°μ)</div>
          </div>
          <div>μ§μ±: νλ‘μ νΈ νμ</div>
          <div>
            μ­ν : 'UAV ground scanning systems to find people or groups' λΌλ¬Έ μμ±, νμ΅ λ°μ΄ν° μμ§
            λ° κ°κ³΅
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>μΏ λ²λ€ν°μ€ κΈ°λ° ν΄λΌμ°λ μμ€ν μμ§λμ΄ μμ± κ³Όμ </b>
            <div>2021λ 5μ 31μΌ ~ 11μ 9μΌ (5κ°μ)</div>
          </div>
          <div>μ§μ±: νλ‘μ νΈ νμ₯</div>
          <div>μ­ν : Docker κΈ°λ° μ¬λ¦¬νμ€νΈ μΉμ¬μ΄νΈ κ΅¬μΆ, k8sμ CI/CD κΈ°λ° CRUD κ²μν κ΅¬μΆ</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>μ λ(SINDY, Signature in Dessert) μ°½μ</b>
            <div>2021λ 2μ 25μΌ ~ 10μ 31μΌ (8κ°μ)</div>
          </div>
          <div>μ§μ±: κ°λ°νμ₯ (Frontend/Backend/Cloud)</div>
          <div>
            μ­ν : 'μΉ΄νμ νΉμμ λ΄μλ΄λ μ¬μ©μ μ£Όλ SNSν λμ νΈ μ λ³΄ κ³΅μ  κ³΅κ°' λμ νΈν κΈ°ν λ°
            κ°λ°
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>Headstart Silicon Valley, Inc.</b>
            <div>2021λ 1μ 4μΌ ~ 2μ 5μΌ (1κ°μ)</div>
          </div>
          <div>μ§μ±: νλ‘μ νΈ νμ₯</div>
          <div>μ­ν : βμμ±μΈμ κΈ°λ° λΈλκ²μ μλΉμ€β Icezam κΈ°ν λ° κ°λ°</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>μ€μλνκ΅ 2019λ 2νκΈ° SW κΈ°μ΄ κ΅κ³Όλͺ© λ©ν </b>
            <div>2019λ 9μ 16μΌ ~ 12μ 13μΌ (3κ°μ)</div>
          </div>
          <div>μ§μ±: βμ»΄ν¨νμ  μ¬κ³ μ λ¬Έμ  ν΄κ²°β μμ μ‘°κ΅</div>
          <div>μ­ν : μμ μ€ μκ°μμ Scratch νλ‘κ·Έλλ° κ΄λ ¨ μ§μ μλ΅ λ° κ³Όμ  μ±μ </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-2 gap-4 my-4">
            <b>(μ£Ό)λ¦¬μμΉλ©</b>
            <div>2017λ 7μ 31μΌ ~ 8μ 25μΌ (1κ°μ)</div>
          </div>
          <div>μ§μ±: μ°κ΅¬4ν νμ</div>
          <div>μ§κΈ: μΈν΄</div>
          <div>μ­ν : μ€λ¬Έ μ‘°μ¬ λ°μ΄ν° ν΅κ³ λΆμ (μμ), μ€λ¬Έμ§ μμ± (μλ)</div>
        </li>
      </ul>
      <h2 className="text-3xl my-8">μμ</h2>
      <ul>
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>2022 μΈμ² μ€λ§νΈκ΄κ΄ λ°μ΄ν° μμ΄λμ΄ κ³΅λͺ¨μ </b>
            <div>μΈμ²κ΄κ΄κ³΅μ¬</div>
            <div>2022λ 12μ 9μΌ</div>
          </div>
          <div>
            μ¬νμΌμ§ μλκΈ°λ‘ μλΉμ€ μμ΄λμ΄ μ μ{' '}
            <a
              href="https://www.asiatoday.co.kr/view.php?key=20221216010008397"
              rel="noreferrer"
              target="_blank"
            >
              (2λ±, 150λ§μ)
            </a>
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>MMO ν΄μ»€ν€ 2ν</b>
            <div>
              MMO&nbsp;
              <span className="text-xs">(ITκ΅μ‘νμ¬)</span>
            </div>
            <div>2022λ 11μ 27μΌ</div>
          </div>
          <div>
            κ²°μ μλμκ² μ€ ν¬λ¦¬μ€λ§μ€ μ λ¬Ό ν¬λΌμ°λνλ© μλΉμ€{' '}
            <a
              href="https://morning-kayak-412.notion.site/MMO-2-4-4-5-0-96f0009dd4e94f3cb817ed7d051bfe93"
              rel="noreferrer"
              target="_blank"
            >
              (2λ±, 5λ§μ)
            </a>
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>2021 AI ν΄μ»€ν€</b>
            <div>μ μ£Όνν¬λΈλ²¨λ¦¬</div>
            <div>2022λ 1μ 22μΌ</div>
          </div>
          <div>μμμ½μ© μμμλ¬Ό λ°μ΄ν° κΈ°λ° μ¬μν μλΉμ€ μμ΄λμ΄ μ μ (μμ)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>2021 κ²½ν¬λνκ΅ μΊ νΌμ€νμ΄ μμ£Ό μ€ννΈμ μΊ νΌ 2κΈ°</b>
            <div>κ²½ν¬λνκ΅ μΊ νΌμ€νμ΄</div>
            <div>2021λ 11μ 1μΌ</div>
          </div>
          <div>Sindy μ°½μν μ μ  (2021λ 11μ 1μΌ ~ 2022λ 8μ 31μΌ, 10κ°μ)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>2021λ 3μ°¨ ν¬μ€μ½ μ°½μμΈνλ² μ΄νμ€μΏ¨</b>
            <div>POSCO</div>
            <div>2021λ 10μ 18μΌ</div>
          </div>
          <div>Sindy μ°½μν μ μ  (2021λ 10μ 18μΌ ~ 10μ 29μΌ, 2μ£Ό)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>2021λλ LINC+ Start-up Members</b>
            <div>μ€μλνκ΅ LINC+μ¬μλ¨</div>
            <div>2021λ 7μ 1μΌ</div>
          </div>
          <div>Sindy μ°½μν μ μ  (2021λ 7μ 1μΌ ~ 12μ 31μΌ, 6κ°μ) (200λ§μ)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>2021 μ€μ μ°½μκ΅μ‘ 1κΈ°</b>
            <div>μ€μλ²€μ²κΈ°μλΆ</div>
            <div>2021λ 6μ 1μΌ</div>
          </div>
          <div>Sindy μ°½μν μ μ  λ° 2λ¨κ³ μ§μΆ (2021λ 6μ 1μΌ ~ 7μ 31μΌ, 2κ°μ)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>2021 λμκ΅¬ μ€ννΈμ νλ© μ¬μ</b>
            <div>λμκ΅¬μ²­</div>
            <div>2021λ 2μ 5μΌ</div>
          </div>
          <div>Sindy μ°½μν μ μ  (2021λ 2μ 5μΌ ~ 11μ 30μΌ, 10κ°μ) (500λ§μ)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>2020λ C-λμμΈμ½νΉ μμΉ΄λ°λ―Έ κ²½μ§λν</b>
            <div>μ€μλ κ΅μνμ΅κ°λ°μΌν°</div>
            <div>2020λ 12μ 3μΌ</div>
          </div>
          <div>βλ²λ €μ§λ μμ¬λ₯Ό μλ‘μ΄ μνμΌλ‘βλ₯Ό μ£Όμ λ‘ μ¬μκ³νμ μμ±</div>
          <div>βμ¨λΌμΈ μνμ© μ ν μ ν΅ νλ«νΌβ κΈ°νμΌλ‘ λμ(1λ±, 250λ§μ) μμ λ° νΉν μΆμ</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>κ΅­κ°μ°μμ₯νμ (μ΄κ³΅κ³)</b>
            <div>νκ΅­μ₯νμ¬λ¨</div>
            <div>2019λ 8μ 14μΌ</div>
          </div>
          <div>2019-1νκΈ° ~ 2020-2νκΈ° μ μ‘μ₯νκΈ (4κ° νκΈ°)</div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>2018 μ°½μICTκ³΅κ³Όλν νμ μ </b>
            <div>μ€μλ μ°½μICTκ³΅κ³Όλν</div>
            <div>2018λ 11μ 30μΌ</div>
          </div>
          <div>
            νλ°° μνμ°¨ μλ₯΄λ°μ΄νΈμμ μ΄μ½ν κ·Όλ¬΄ νκ²½μ μ£Όμ λ‘ 'μ΄λ‘ μ λνΌμ μμ μλ°μ' VR μμ
            μ μ λ° μ°μμ μμ&nbsp;
            <a href="https://www.youtube.com/watch?v=ruqZIWGwH-I" rel="noreferrer" target="_blank">
              YouTube
            </a>
          </div>
        </li>
        <div className="border w-full my-6" />
        <li>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 my-2">
            <b>BBR BlockCamp λΈλ‘μ²΄μΈ ν΄μ»€ν€</b>
            <div>BBR, λμΌν°</div>
            <div>2018λ 10μ 29μΌ</div>
          </div>
          <div>
            λΈλ‘μ²΄μΈ κΈ°λ° μ μν¬ν μμ€ν(e-voting) κΈ°ν λ° κ°λ°{' '}
            <a href="https://bond687.wixsite.com/bbreview" rel="noreferrer" target="_blank">
              (νΌμΉ­μ)
            </a>
          </div>
        </li>
      </ul>
      <div className="w-full text-center text-slate-800 text-sm mt-8">2022λ 12μ 14μΌ</div>
      <div className="w-full text-center text-slate-800 text-sm">μμ±μ: κ³½νμ±</div>
    </main>
  )
}
