import 'server-only'

export const 작성일 = {
  ko: '2025.07.27',
  en: 'July 27, 2025',
  zh: '2025年7月27日',
  ja: '2025年7月27日',
}

export const generalDict = {
  작성일: 작성일,
  이력서: {
    ko: '이력서',
    en: 'Resume',
    zh: '个人简历',
    ja: '履歴書',
  },
  한줄소개: {
    ko: (
      <>
        고객의 불편을 해결하는 제품을 구현하고, 그 과정에서 얻은 엔지니어링 기술을 다른 사람과
        공유하면서 '제품과 기술이 왜 존재하는지' 계속 질문합니다.
      </>
    ),
    en: (
      <>
        I'm Logan Gwak, a <b>frontend developer</b> who builds products that solve real customer
        problems. I focus on understanding user needs, addressing business challenges, and sharing
        the engineering knowledge I gain while continuously questioning why products and
        technologies exist.
      </>
    ),
    zh: (
      <>
        我是致力于研发真正能够解决顾客问题、满足顾客商务需求产品；乐于共享开发过程中收获的新知识且热衷于探索其理论依据的
        <b>前端工程师</b>郭泰昱。
      </>
    ),
    ja: (
      <>
        お客様の不便さを解決する製品を企画しながら、お客様の声に耳を傾けてビジネス問題を解決し、製品を開発する途中で得た知識を他人と共有しながら技術の存在理由を悩む
        <b>フロントエンド開発者</b>郭泰昱です。
      </>
    ),
  },
  개발경력: {
    ko: '개발 경력',
    en: 'Work Experience',
    zh: '工作经历',
    ja: '職務経歴',
  },
  학력: {
    ko: '학력',
    en: 'Education',
    zh: '学历',
    ja: '学歴',
  },
  개발경험: {
    ko: '경험',
    en: 'Experience',
    zh: '经验',
    ja: '経験',
  },
  경력기간: {
    ko: `(1년 11개월, ${작성일.ko} 기준)`,
    en: `(1 year 11 months, as of ${작성일.en})`,
    zh: `(1年11个月，截至${작성일.zh})`,
    ja: `(1年11ヶ月、${작성일.ja}基準)`,
  },
}
