import 'server-only'
import { formatDate } from './utils'

export const 작성일 = {
  ko: formatDate(2025, 11, 26, 'ko'),
  en: formatDate(2025, 11, 26, 'en'),
  zh: formatDate(2025, 11, 26, 'zh'),
  ja: formatDate(2025, 11, 26, 'ja'),
}

export const generalDict = {
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
  히어로태그라인: {
    ko: '다만, 사랑하고 살아가는 프론트엔드 개발자',
    en: '다만, 사랑하고 살아가는 프론트엔드 개발자',
    zh: '다만, 사랑하고 살아가는 프론트엔드 개발자',
    ja: '다만, 사랑하고 살아가는 프론트엔드 개발자',
  },
  개발경력: {
    ko: '개발 경력',
    en: 'Work Experience',
    zh: '工作经历',
    ja: '職務経歴',
  },
  경력기간: {
    ko: `(2년 3개월, ${작성일.ko} 기준)`,
    en: `(2 years 3 months, as of ${작성일.en})`,
    zh: `(2年3个月，截至${작성일.zh})`,
    ja: `(2年3ヶ月、${작성일.ja}基準)`,
  },
  학력: {
    ko: '학력',
    en: 'Education',
    zh: '学历',
    ja: '学歴',
  },
  자격증: {
    ko: '자격증',
    en: 'Certificates',
    zh: '证书',
    ja: '資格',
  },
  기술스택: {
    ko: '기술 스택',
    en: 'Tech Stack',
    zh: '技术栈',
    ja: '技術スタック',
  },
  추가정보: {
    ko: '추가 정보',
    en: 'Additional Information',
    zh: '附加信息',
    ja: '追加情報',
  },
  개발경험: {
    ko: '개발 경험',
    en: 'Development Experience',
    zh: '开发经验',
    ja: '開発経験',
  },
  개발활동: {
    ko: '개발 활동',
    en: 'Development Activities',
    zh: '开发活动',
    ja: '開発活動',
  },
  수상: {
    ko: '수상',
    en: 'Awards',
    zh: '获奖',
    ja: '受賞',
  },
  소개: {
    ko: '소개',
    en: 'About',
    zh: '介绍',
    ja: '紹介',
  },
  문제해결경험: {
    ko: '문제 해결 경험',
    en: 'Problem Solving Experience',
    zh: '解决问题的经验',
    ja: '問題解決経験',
  },
  직무성취경험: {
    ko: '직무 성취 경험',
    en: 'Job Achievement Experience',
    zh: '工作成就经验',
    ja: '職務達成経験',
  },
  가치관및신조: {
    ko: '가치관 및 신조',
    en: 'Values and Beliefs',
    zh: '价值观与信念',
    ja: '価値観と信条',
  },
  이루고싶은것: {
    ko: '이루고 싶은 것',
    en: 'What I Want to Achieve',
    zh: '想要实现的目标',
    ja: '成し遂げたいこと',
  },
  성격의장단점: {
    ko: '성격의 장단점',
    en: 'Personality Strengths and Weaknesses',
    zh: '性格的优缺点',
    ja: '性格の長所と短所',
  },
  급여있음: {
    ko: '(급여 O, 4대보험 X)',
    en: '(Paid, No Social Insurance)',
    zh: '(有薪资，无社保)',
    ja: '(給与あり、社会保険なし)',
  },
  급여없음: {
    ko: '(급여 X)',
    en: '(Unpaid)',
    zh: '(无薪资)',
    ja: '(無給)',
  },
  약950자: {
    ko: '약 950자',
    en: 'About 950 words',
    zh: '约950字',
    ja: '約950文字',
  },
  약900자: {
    ko: '약 900자',
    en: 'About 900 words',
    zh: '约900字',
    ja: '約900文字',
  },
  약850자: {
    ko: '약 850자',
    en: 'About 850 words',
    zh: '约850字',
    ja: '約850文字',
  },
  약300자: {
    ko: '약 300자',
    en: 'About 300 words',
    zh: '约300字',
    ja: '約300文字',
  },
  작성자: {
    ko: '작성자: 곽태욱',
    en: 'Author: Taeuk Gwak',
    zh: '作者: 郭泰昱',
    ja: '作成者: 郭泰昱',
  },
}
