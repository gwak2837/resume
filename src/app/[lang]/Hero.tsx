import { heroDict } from './dictionary/hero'

import Image from 'next/image'

type Props = {
  lang: 'ko' | 'en' | 'zh' | 'ja'
}

export default function Hero({ lang }: Props) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2">
      <div className="grid grid-cols-3 gap-4 whitespace-nowrap">
        <div className="text-center md:text-left">
          <Image
            src="/images/profile.webp"
            className="w-[180px] h-[180px] rounded-full mx-auto border-2 border-gray-200"
            alt="profile"
            width={712}
            height={712}
            priority
          />
        </div>
        <ul className="flex flex-col gap-1">
          {[
            { label: '이름', value: heroDict.이름[lang] },
            { label: '출생', value: heroDict.생일[lang] },
            {
              label: '학위',
              value: (
                <a href="/images/학위증.webp" target="_blank">
                  {heroDict.학위[lang]}
                </a>
              ),
            },
            {
              label: '거주',
              value: (
                <a href="https://naver.me/Fcg2bYyc" target="_blank" rel="noreferrer">
                  {heroDict.주소[lang]}
                </a>
              ),
            },
            {
              label: '병역',
              value: (
                <a href="/pdf/병적증명서.pdf" target="_blank">
                  {heroDict.병역[lang]}
                </a>
              ),
            },
          ].map(({ label, value }, i) => (
            <li key={i} className="flex gap-3 items-center">
              <span className="w-6">{label}</span>
              {value}
            </li>
          ))}
          <li className="flex text-sm gap-3 items-center">
            <span className="w-6"></span>
            <a href="/images/2023-military.webp" target="_blank">
              ㄴ{heroDict.KATUSA[lang]}
            </a>
          </li>
          <li className="flex text-sm gap-3 items-center">
            <span className="w-6"></span>ㄴ{heroDict.ROTC[lang]}
          </li>
        </ul>
        <ul className="flex flex-col gap-1">
          {[
            {
              label: '전화',
              value: <a href="tel:010-9203-2837">+82 10-9203-2837</a>,
            },
            {
              label: '메일',
              value: <a href="mailto:gwak2837@google.com">gwak2837@google.com</a>,
            },
            {
              label: '',
              value: <a href="mailto:gwak2837@kakao.com">gwak2837@kakao.com</a>,
            },
            {
              label: <Image src="/images/velog.png" alt="velog" width="16" height="16" />,
              value: (
                <a href="https://velog.io/@gwak2837" target="_blank">
                  velog.io/@gwak2837
                </a>
              ),
            },
            {
              label: <Image src="/images/github.svg" alt="github" width="16" height="16" />,
              value: (
                <a href="https://github.com/gwak2837" target="_blank">
                  github.com/gwak2837
                </a>
              ),
            },
            {
              label: <Image src="/images/LinkedIn_icon.svg" alt="github" width="16" height="16" />,
              value: (
                <a href="https://www.linkedin.com/in/gwak2837/" target="_blank">
                  linkedin.com/in/gwak2837
                </a>
              ),
            },
            {
              label: '취미',
              value: '자전거, 웨이트, 독서',
            },
          ].map(({ label, value }, i) => (
            <li key={i} className="flex gap-3 items-center">
              <span className="w-6">{label}</span>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
