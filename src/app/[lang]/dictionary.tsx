import { PropsWithChildren } from 'react'
import 'server-only'

const SubText = ({ children }: PropsWithChildren) => (
  <span className="text-gray-500 font-medium text-xs">{children}</span>
)

export const dict = {
  작성일: {
    ko: '2025.07.27',
    en: 'Jul 27th, 2025',
    zh: '2025年7月27日',
    ja: '2025年 7月 27日',
  },
  이력서: {
    ko: '이력서',
    en: 'Resume',
    zh: '个人简历',
    ja: '履歴書',
  },
  이름: {
    ko: '곽태욱 (Logan Gwak, 郭泰昱)',
    en: 'Logan Gwak (곽태욱, 郭泰昱)',
    zh: '郭泰昱（곽태욱，Logan Gwak）',
    ja: '郭泰昱 (곽태욱, Logan Gwak)',
  },
  생일: {
    ko: '1998.04.12 (남, 한국인)',
    en: 'April 12, 1998 (Male, Korean)',
    zh: '1998年4月12日（男，韩国人）',
    ja: '1998年 4月 12日 (男, 韓国人)',
  },
  학위: {
    ko: '중앙대학교 컴퓨터공학부 학사',
    en: <>BCompSc at Chung-Ang Univ.</>,
    zh: '首尔中央大学计算机学部本科毕业',
    ja: '中央大学コンピューター工学部学士',
  },
  주소: {
    ko: '서울특별시 강동구 천호동',
    en: 'Gangdong-gu, Seoul, R.O.K.',
    zh: '韩国首尔特别市江东区千戶洞',
    ja: '大韓民国ソウル特別市江東区千戸洞',
  },
  병역: {
    ko: '군필 (육군 병장 만기전역)',
    en: <>ROK Army SGT, Honorable</>,
    zh: '已服役（韩国陆军兵长满期服役）',
    ja: '除隊 (大韓民国陸軍兵長満期除隊)',
  },
  ROTC: {
    ko: 'ROTC 2019.01 ~ 2020.09',
    en: 'ROTC Jan. 2019 - Sept. 2020',
    zh: 'ROTC 2019年1月～2020年9月',
    ja: 'ROTC 2019.01 ~ 2020.09',
  },
  KATUSA: {
    ko: '카투사 2022.03 ~ 2023.07',
    en: 'KATUSA Mar. 2022 - July 2023',
    zh: 'KATUSA 2022年3月～2023年7月',
    ja: 'KATUSA 2022.03 ~ 2023.07',
  },
  한줄소개: {
    ko: (
      <>
        고객의 불편을 해결하는 제품을 구현하고, 그 과정에서 얻은 엔지니어링 기술을 다른 사람과
        공유하면서 ‘제품과 기술이 왜 존재하는지’ 계속 질문합니다.
      </>
    ),
    en: (
      <>
        I&apos;m Logan Gwak, a <b>frontend developer</b> who listens to customers while planning
        products that solve customer inconveniences, solves business problems, and shares the
        knowledge gained during product development with others to think about the reason for the
        existence of technology.
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
  학력: {
    ko: '학력',
    en: 'Education',
    zh: '学历',
    ja: '学歴',
  },
  학력_이름: {
    ko: '이름',
    en: 'Name',
    zh: '学校',
    ja: '学校',
  },
  세부: {
    ko: '세부',
    en: 'Detail',
    zh: '详细',
    ja: '詳細',
  },
  기간: {
    ko: '기간',
    en: 'Period',
    zh: '时期',
    ja: '期間',
  },
  비고: {
    ko: '비고',
    en: 'Note',
    zh: '绩点',
    ja: '備考',
  },
  중앙대학교: {
    ko: '중앙대학교',
    en: 'Chung-Ang Univ.',
    zh: '首尔中央大学',
    ja: '中央大学',
  },
  학력_학위: {
    ko: '컴퓨터공학부 학사',
    en: 'BCompSc',
    zh: '计算机学部本科',
    ja: 'コンピューター工学部学士',
  },
  학력_기간: {
    ko: '2017.03 ~ 2022.02',
    en: 'Mar. 2017 - Feb. 2022',
    zh: '2017年3月～2022年2月',
    ja: '2017年 3月 ~ 2022年 2月',
  },
  학력_전체학점: {
    ko: '전체 학점: 4.1 / 4.5 (163 학점)',
    en: 'Total GPA: 4.05 / 4.5',
    zh: '总体学分：4.1 / 4.5（163分）',
    ja: '',
  },
  학력_전공학점: {
    ko: '전공 학점: 4.0 / 4.5 (89 학점)',
    en: 'Major GPA: 4.04 / 4.5',
    zh: '专业学分：4.0 / 4.5（89分）',
    ja: '',
  },
  호남고등학교: {
    ko: '호남고등학교',
    en: 'Honam High School',
    zh: '湖南高级中学（韩国）',
    ja: '',
  },
  호남고등학교_세부: {
    ko: '이과',
    en: 'Natural Sciences',
    zh: '理科',
    ja: '',
  },
  호남고등학교_기간: {
    ko: '2014.03 ~ 2017.02',
    en: 'Mar. 2014 - Feb. 2017',
    zh: '2014年3月～2017年2月',
    ja: '2014年 3月 ~ 2017年 2月',
  },
  호남고등학교_성적: {
    ko: '평균 내신: 1.45',
    en: 'Grade Average: 1.45',
    zh: '平均成绩：1.45',
    ja: '',
  },
  화산중학교: {
    ko: '화산중학교',
    en: 'Hwasan Middle School',
    zh: '华山中学校（韩国）',
    ja: '華山中学校',
  },
  기숙형자율학교: {
    ko: '기숙형 자율학교',
    en: 'Boarding, Autonomous',
    zh: '寄宿制教育',
    ja: '',
  },
  화산중학교_기간: {
    ko: '2011.03 ~ 2014.02',
    en: 'Mar. 2011 - Feb. 2014',
    zh: '2011年3月～2014年2月',
    ja: '2011年 3月 ~ 2014年 2月',
  },
  화산중학교_성적: {
    ko: '졸업 등수: 전교 4등 (남자 수석)',
    en: 'Graduation Rank: 4th',
    zh: '毕业排名：第四名',
    ja: '',
  },
  개발경력: {
    ko: '개발 경력',
    en: 'Work Experience',
    zh: '工作经历',
    ja: '職務経歴',
  },
  개발경험: {
    ko: '경험',
    en: 'Experience',
    zh: '',
    ja: '',
  },
  현재: {
    ko: '현재',
    en: 'Current',
    zh: '现在',
    ja: '現在',
  },
  리디주: {
    ko: '리디(주)',
    en: 'RIDI Corp.',
    zh: 'RIDI株式会社',
    ja: 'RIDI株式会社',
  },
  리디_기간: {
    ko: '2023.11.27 ~ 현재',
    en: 'Nov 27, 2023 ~ Present',
    zh: '2023年11月27日 ~ 至今',
    ja: '2023年11月27日 ~ 現在',
  },
  매출: {
    ko: '매출',
    en: 'Revenue',
    zh: '销售额',
    ja: '売上',
  },
  리디_매출: {
    ko: '2024년 2,354억원 (연결)',
    en: '₩235.4B (2024, Consolidated)',
    zh: '2,354亿韩元（2024年,合并）',
    ja: '2,354億ウォン（2024年,連結）',
  },
  총원: {
    ko: '총원',
    en: 'Employees',
    zh: '总人数',
    ja: '総人員',
  },
  리디_총원: {
    ko: '2024년 12월 445명',
    en: '445 (Dec 2024)',
    zh: '445人(2024年12月)',
    ja: '445名(2024年12月)',
  },
  리디_설명: {
    ko: '글로벌 시장을 무대로 웹툰, 웹소설, 만화, 전자책 등을 온라인으로 제공하는 콘텐츠 플랫폼 기업',
    en: 'Global content platform providing webtoons, web novels, manga, and e-books online',
    zh: '面向全球市场提供网络漫画、网络小说、漫画、电子书等在线内容平台企业',
    ja: 'グローバル市場でウェブトゥーン、ウェブ小説、漫画、電子書籍などをオンラインで提供するコンテンツプラットフォーム企業',
  },
  리디웹_팀: {
    ko: (
      <>
        Frontend Engineer <SubText>(Junior)</SubText> · Web Team <SubText>(6명)</SubText>
      </>
    ),
    en: (
      <>
        Frontend Engineer <SubText>(Junior)</SubText> · Web Team <SubText>(6 members)</SubText>
      </>
    ),
    zh: (
      <>
        前端工程师 <SubText>(初级)</SubText> · Web团队 <SubText>(6人)</SubText>
      </>
    ),
    ja: (
      <>
        フロントエンドエンジニア <SubText>(ジュニア)</SubText> · Webチーム <SubText>(6名)</SubText>
      </>
    ),
  },
  리디웹_기간: {
    ko: '2024.04 ~ 현재',
    en: 'Apr 2024 ~ Present',
    zh: '2024年4月 ~ 至今',
    ja: '2024年4月 ~ 現在',
  },
  리디웹_설명: {
    ko: (
      <>
        국내 전자책 시장에서{' '}
        <a href="https://blog.toss.im/article/fabonika-03-ridi" target="_blank">
          점유율 50% 이상
        </a>
        을 차지하는 리디 웹 사이트 신규 기능 개발 및 유지보수
      </>
    ),
    en: (
      <>
        Development and maintenance of new features for RIDI website, which holds{' '}
        <a href="https://blog.toss.im/article/fabonika-03-ridi" target="_blank">
          over 50% market share
        </a>{' '}
        in the Korean e-book market
      </>
    ),
    zh: (
      <>
        开发和维护占韩国电子书市场
        <a href="https://blog.toss.im/article/fabonika-03-ridi" target="_blank">
          50%以上份额
        </a>
        的RIDI网站新功能
      </>
    ),
    ja: (
      <>
        韓国の電子書籍市場で
        <a href="https://blog.toss.im/article/fabonika-03-ridi" target="_blank">
          シェア50%以上
        </a>
        を占めるRIDIウェブサイトの新機能開発およびメンテナンス
      </>
    ),
  },
  성과평가: {
    ko: '성과 평가',
    en: 'Performance Review',
    zh: '绩效评估',
    ja: '成果評価',
  },
  성과평가_기준: {
    ko: '(기준: Outstanding, Excellent, Good, Moderate, Need Improvement)',
    en: '(Scale: Outstanding, Excellent, Good, Moderate, Need Improvement)',
    zh: '（标准：Outstanding, Excellent, Good, Moderate, Need Improvement）',
    ja: '（基準：Outstanding, Excellent, Good, Moderate, Need Improvement）',
  },
  성과평가_결과: {
    ko: '2024-09 Excellent',
    en: '2024-09 Excellent',
    zh: '2024-09 Excellent',
    ja: '2024-09 Excellent',
  },
  세부결과: {
    ko: '(세부 결과)',
    en: '(Detailed Results)',
    zh: '（详细结果）',
    ja: '（詳細結果）',
  },
  만화이북_출시: {
    ko: '만화e북 웹 뷰어 출시',
    en: 'Manga E-book Web Viewer Launch',
    zh: '漫画电子书网页阅读器上线',
    ja: '漫画電子書籍ウェブビューアーローンチ',
  },
  만화이북_설명: {
    ko: '일본 디지털 만화 시장의 성장에 발맞춰 기존 리디 웹 뷰어에서 만화e북 파일도 열람할 수 있도록 지원함. 사용자가 웹에서 바로 만화를 감상할 수 있게 해서, 출시 이후 만화e북 판매 매출이 전월 대비 3.61% 증가하는 데 기여했고, 만화e북 신규 고객의 웹 뷰어 사용율이 5%로 증가함. 구체적으로 모바일 / PC 웹뷰어 전환율이 각각 8.5%p / 99%p 증가했고, 뷰어 이탈율이 각각 5%p / 99%p 감소했으며, 뷰어 오픈 시간이 각각 91% / 99% 단축됨.',
    en: 'Enabled manga e-book viewing in the existing RIDI web viewer to align with the growth of the Japanese digital manga market. This allowed users to read manga directly on the web, contributing to a 3.61% month-over-month increase in manga e-book sales revenue and increasing web viewer usage among new manga e-book customers to 5%. Specifically, mobile/PC web viewer conversion rates increased by 8.5%p/99%p respectively, viewer bounce rates decreased by 5%p/99%p, and viewer loading times were reduced by 91%/99%.',
    zh: '配合日本数字漫画市场的增长，在现有RIDI网页阅读器中支持漫画电子书文件的浏览。使用户能够直接在网页上欣赏漫画，上线后漫画电子书销售收入环比增长3.61%，新漫画电子书客户的网页阅读器使用率增加到5%。具体而言，移动端/PC端网页阅读器转化率分别提升8.5%p/99%p，阅读器跳出率分别降低5%p/99%p，阅读器打开时间分别缩短91%/99%。',
    ja: '日本のデジタル漫画市場の成長に合わせて、既存のRIDIウェブビューアで漫画電子書籍ファイルも閲覧できるようにサポート。ユーザーがウェブで直接漫画を楽しめるようにし、リリース後、漫画電子書籍の売上高が前月比3.61%増加することに貢献し、漫画電子書籍の新規顧客のウェブビューア使用率が5%に増加。具体的には、モバイル/PCウェブビューアのコンバージョン率がそれぞれ8.5%p/99%p増加し、ビューアの離脱率がそれぞれ5%p/99%p減少し、ビューアのオープン時間がそれぞれ91%/99%短縮。',
  },
  AB테스트: {
    ko: 'A/B 테스트',
    en: 'A/B Testing',
    zh: 'A/B测试',
    ja: 'A/Bテスト',
  },
  AB테스트_설명: {
    ko: '총 10만 명의 사용자를 대상으로 2주간 여러 UI 개선안에 대한 A/B 테스트를 진행함. 사용자 중 50%는 기존 UI를 유지했고, 나머지 50%는 여러 그룹으로 나누어 각기 다른 UI 개선안을 제공함. 실험 결과, 새로운 UI를 사용하는 특정 그룹에서 매출 등 주요 가드레일 지표가 유지되는 동시에, KPI인 사용자 참여율이 10%p, 유료 전환율이 5%p 상승한 것을 확인함. 이 데이터를 바탕으로 해당 UI 개선안을 프로덕션 환경에 최종 배포함. 이를 통해 UI 개선 효과를 데이터 기반으로 평가하고 가장 효율적인 UI를 식별할 수 있었음.',
    en: 'Conducted A/B testing of multiple UI improvements with 100,000 users over 2 weeks. 50% of users retained the existing UI, while the remaining 50% were divided into groups with different UI improvements. Results showed that specific groups with new UI maintained key guardrail metrics like revenue while achieving 10%p increase in user engagement (KPI) and 5%p increase in paid conversion rate. Based on this data, the UI improvement was deployed to production. This enabled data-driven evaluation of UI improvement effects and identification of the most efficient UI.',
    zh: '对10万名用户进行了为期2周的多个UI改进方案A/B测试。50%的用户保留现有UI，其余50%分成多个组，提供不同的UI改进方案。实验结果显示，使用新UI的特定组在保持收入等主要护栏指标的同时，KPI用户参与率提升10%p，付费转化率提升5%p。基于这些数据，将该UI改进方案最终部署到生产环境。通过这种方式，能够基于数据评估UI改进效果并识别最高效的UI。',
    ja: '合計10万人のユーザーを対象に2週間、複数のUI改善案についてA/Bテストを実施。ユーザーの50%は既存のUIを維持し、残り50%は複数のグループに分けて異なるUI改善案を提供。実験の結果、新しいUIを使用する特定のグループで売上などの主要ガードレール指標が維持されると同時に、KPIであるユーザーエンゲージメント率が10%p、有料転換率が5%p上昇したことを確認。このデータに基づいて該当UI改善案をプロダクション環境に最終デプロイ。これによりUI改善効果をデータベースで評価し、最も効率的なUIを識別することができた。',
  },
  E2E테스트: {
    ko: 'E2E 테스트 자동화',
    en: 'E2E Test Automation',
    zh: 'E2E测试自动化',
    ja: 'E2Eテスト自動化',
  },
  E2E테스트_설명: {
    ko: 'Playwright로 30여 개 핵심 사용자 시나리오의 E2E 테스트 자동화 파이프라인을 구축함. 프로덕션 배포 전 수동으로 진행하던 QA 업무를 E2E 테스트로 자동화하여, 배포 전 리그레션 테스트에 소요되는 시간을 평균 31분 → 18분으로 42% 단축시켜 배포 생산성을 향상시킴.',
    en: 'Built E2E test automation pipeline for 30+ core user scenarios using Playwright. Automated manual QA tasks before production deployment with E2E tests, reducing pre-deployment regression testing time from average 31 minutes to 18 minutes (42% reduction), improving deployment productivity.',
    zh: '使用Playwright构建了30多个核心用户场景的E2E测试自动化管道。通过E2E测试自动化了生产部署前的手动QA工作，将部署前回归测试时间从平均31分钟缩短到18分钟（减少42%），提高了部署生产力。',
    ja: 'Playwrightで30余りのコア・ユーザーシナリオのE2Eテスト自動化パイプラインを構築。プロダクションデプロイ前に手動で行っていたQA業務をE2Eテストで自動化し、デプロイ前のリグレッションテストに要する時間を平均31分→18分に42%短縮させ、デプロイ生産性を向上。',
  },
  백엔드API개발: {
    ko: 'Node.js 기반 백엔드 API 개발',
    en: 'Node.js Backend API Development',
    zh: '基于Node.js的后端API开发',
    ja: 'Node.js基盤バックエンドAPI開発',
  },
  백엔드API개발_REST: {
    ko: 'REST API 리팩토링: 필요한 데이터만 보내주는 신규 REST API를 설계하고 기존 로직을 리팩토링하여 응답 크기를 40.5 kB → 20.5 kB로 절반 가까이 줄임.',
    en: 'REST API Refactoring: Designed new REST API that sends only necessary data and refactored existing logic, reducing response size from 40.5 kB to 20.5 kB (nearly 50% reduction).',
    zh: 'REST API重构：设计仅发送必要数据的新REST API并重构现有逻辑，将响应大小从40.5 kB减少到20.5 kB（减少近50%）。',
    ja: 'REST APIリファクタリング：必要なデータのみを送信する新しいREST APIを設計し、既存のロジックをリファクタリングして、レスポンスサイズを40.5 kB→20.5 kBに半分近く削減。',
  },
  백엔드API개발_GraphQL: {
    ko: 'GraphQL API 확장: 작품 정보 페이지에 쿠폰 프로모션 배너를 신규로 노출하기 위해 GraphQL 스키마 타입을 새로 정의하고, 쿠폰 도메인 데이터베이스 쿼리 및 GraphQL resolver를 구현하여 UI와 연동함.',
    en: 'GraphQL API Extension: Defined new GraphQL schema types to expose coupon promotion banners on product information pages, implemented coupon domain database queries and GraphQL resolvers, and integrated with UI.',
    zh: 'GraphQL API扩展：为在作品信息页面新增优惠券促销横幅，定义了新的GraphQL模式类型，实现了优惠券领域数据库查询和GraphQL解析器，并与UI集成。',
    ja: 'GraphQL API拡張：作品情報ページにクーポンプロモーションバナーを新規に露出するためにGraphQLスキーマタイプを新たに定義し、クーポンドメインデータベースクエリおよびGraphQLリゾルバーを実装してUIと連動。',
  },
  만타_팀: {
    ko: (
      <>
        Frontend Engineer <SubText>(Junior)</SubText> · Engineering Team <SubText>(10명)</SubText>
      </>
    ),
    en: (
      <>
        Frontend Engineer <SubText>(Junior)</SubText> · Engineering Team{' '}
        <SubText>(10 members)</SubText>
      </>
    ),
    zh: (
      <>
        前端工程师 <SubText>(初级)</SubText> · 工程团队 <SubText>(10人)</SubText>
      </>
    ),
    ja: (
      <>
        フロントエンドエンジニア <SubText>(ジュニア)</SubText> · エンジニアリングチーム{' '}
        <SubText>(10名)</SubText>
      </>
    ),
  },
  만타_기간: {
    ko: '2023.11 ~ 2024.03',
    en: 'Nov 2023 ~ Mar 2024',
    zh: '2023年11月 ~ 2024年3月',
    ja: '2023年11月 ~ 2024年3月',
  },
  만타_설명: {
    ko: (
      <>
        북미 웹툰 시장{' '}
        <a
          href="https://files-scs.pstatic.net/2024/01/03/mpZT5kjudA/%EC%9B%B9%ED%88%B0%EC%82%B0%EC%97%85_%EB%B0%B8%EB%A5%98%ED%8C%8C%EC%9D%B8%EB%8D%94.pdf"
          target="_blank"
        >
          점유율 2위
        </a>
        인 글로벌 웹툰 서비스 Manta의 React Native 앱 & Next.js 웹 개발
      </>
    ),
    en: (
      <>
        Developed React Native app & Next.js web for Manta, a global webtoon service with{' '}
        <a
          href="https://files-scs.pstatic.net/2024/01/03/mpZT5kjudA/%EC%9B%B9%ED%88%B0%EC%82%B0%EC%97%85_%EB%B0%B8%EB%A5%98%ED%8C%8C%EC%9D%B8%EB%8D%94.pdf"
          target="_blank"
        >
          2nd largest market share
        </a>{' '}
        in North American webtoon market
      </>
    ),
    zh: (
      <>
        开发北美网络漫画市场
        <a
          href="https://files-scs.pstatic.net/2024/01/03/mpZT5kjudA/%EC%9B%B9%ED%88%B0%EC%82%B0%EC%97%85_%EB%B0%B8%EB%A5%98%ED%8C%8C%EC%9D%B8%EB%8D%94.pdf"
          target="_blank"
        >
          份额第二
        </a>
        的全球网络漫画服务Manta的React Native应用和Next.js网站
      </>
    ),
    ja: (
      <>
        北米ウェブトゥーン市場
        <a
          href="https://files-scs.pstatic.net/2024/01/03/mpZT5kjudA/%EC%9B%B9%ED%88%B0%EC%82%B0%EC%97%85_%EB%B0%B8%EB%A5%98%ED%8C%8C%EC%9D%B8%EB%8D%94.pdf"
          target="_blank"
        >
          シェア2位
        </a>
        のグローバルウェブトゥーンサービスMantaのReact NativeアプリとNext.jsウェブ開発
      </>
    ),
  },
  프랑스어출시: {
    ko: '프랑스어 출시',
    en: 'French Language Launch',
    zh: '法语版本上线',
    ja: 'フランス語版リリース',
  },
  프랑스어출시_설명: {
    ko: '프랑스어를 사용하는 사용자를 위해 국가별 화폐 및 날짜 형식, 언어별 텍스트 길이에 따른 디자인 차이, 콘텐츠 연령 등급 관련 현지 법률 등을 고려한 국제화(i18n) 디자인을 적용함.',
    en: 'Applied internationalization (i18n) design for French-speaking users, considering country-specific currency and date formats, design differences based on text length in different languages, and local laws regarding content age ratings.',
    zh: '为法语用户应用国际化（i18n）设计，考虑了特定国家的货币和日期格式、不同语言文本长度的设计差异以及内容年龄分级相关的当地法律。',
    ja: 'フランス語を使用するユーザーのために、国別通貨および日付形式、言語別テキスト長によるデザインの違い、コンテンツ年齢等級関連の現地法律などを考慮した国際化（i18n）デザインを適用。',
  },
  연관검색어: {
    ko: '연관 검색어 기능',
    en: 'Related Search Terms Feature',
    zh: '相关搜索词功能',
    ja: '関連検索語機能',
  },
  연관검색어_설명: {
    ko: '사용자 검색 경험을 향상시키기 위해 프론트엔드에 연관 검색어 기능을 적용함. 출시 대비 사용자의 검색 화면 체류 시간이 20% 이상 증가하는 등 사용자가 원하는 콘텐츠를 빠르게 찾을 수 있게 함.',
    en: 'Implemented related search terms feature on frontend to enhance user search experience. Increased user search screen retention time by over 20% compared to launch, enabling users to quickly find desired content.',
    zh: '在前端实现相关搜索词功能以提升用户搜索体验。与上线前相比，用户搜索屏幕停留时间增加20%以上，使用户能够快速找到所需内容。',
    ja: 'ユーザー検索体験を向上させるためにフロントエンドに関連検索語機能を適用。リリース前と比較してユーザーの検索画面滞在時間が20%以上増加するなど、ユーザーが望むコンテンツを素早く見つけられるようにした。',
  },
  센트리오류분류: {
    ko: 'Sentry 오류 분류 시스템 구축',
    en: 'Sentry Error Classification System',
    zh: 'Sentry错误分类系统构建',
    ja: 'Sentryエラー分類システム構築',
  },
  센트리오류분류_설명: {
    ko: (
      <>
        기존에 오류가 <code className="text-xs">Unknown Error</code>로 보고되어 디버깅이 어려웠던
        문제를 해결하기 위해 클라이언트 측 오류 필터링 시스템을 구축함. 네트워크 오류(status code
        0)를 별도로 분류하고, 오류 유형별 커스텀 태그를 적용하여 오류 원인을 체계적으로 분류함. 이를
        통해 전체 오류의 약 35%를 차지하던 네트워크 오류를 식별하고, 나머지 오류를 5개 주요
        카테고리(API 응답 오류, 렌더링 오류, 상태 관리 오류, 서드파티 SDK 오류, 사용자 권한 오류)로
        분류하여, 주간 오류 분석 회의 시간을 평균 1시간에서 45분으로 25% 단축시킴.
      </>
    ),
    en: (
      <>
        Built client-side error filtering system to solve debugging difficulties caused by errors
        being reported as <code className="text-xs">Unknown Error</code>. Classified network errors
        (status code 0) separately and applied custom tags by error type to systematically
        categorize error causes. Identified network errors accounting for ~35% of total errors and
        classified remaining errors into 5 main categories (API response errors, rendering errors,
        state management errors, third-party SDK errors, user permission errors), reducing weekly
        error analysis meeting time from average 1 hour to 45 minutes (25% reduction).
      </>
    ),
    zh: (
      <>
        构建客户端错误过滤系统，解决错误报告为<code className="text-xs">Unknown Error</code>
        导致调试困难的问题。单独分类网络错误（状态码0），按错误类型应用自定义标签系统地分类错误原因。识别出占总错误约35%的网络错误，将其余错误分为5个主要类别（API响应错误、渲染错误、状态管理错误、第三方SDK错误、用户权限错误），将每周错误分析会议时间从平均1小时缩短到45分钟（减少25%）。
      </>
    ),
    ja: (
      <>
        既存でエラーが<code className="text-xs">Unknown Error</code>
        として報告されデバッグが困難だった問題を解決するために、クライアント側エラーフィルタリングシステムを構築。ネットワークエラー（status
        code
        0）を別途分類し、エラータイプ別カスタムタグを適用してエラー原因を体系的に分類。これにより全体エラーの約35%を占めていたネットワークエラーを識別し、残りのエラーを5つの主要カテゴリ（APIレスポンスエラー、レンダリングエラー、状態管理エラー、サードパーティSDKエラー、ユーザー権限エラー）に分類して、週間エラー分析会議時間を平均1時間から45分に25%短縮。
      </>
    ),
  },
  토스뱅크주: {
    ko: '토스뱅크(주)',
    en: 'Toss Bank',
    zh: 'Toss Bank',
    ja: 'トスバンク',
  },
  토스뱅크_기간: {
    ko: '2023.08.07 ~ 2023.11.06 (3개월)',
    en: 'Aug 7, 2023 ~ Nov 6, 2023 (3 months)',
    zh: '2023年8月7日 ~ 2023年11月6日（3个月）',
    ja: '2023年8月7日 ~ 2023年11月6日（3ヶ月）',
  },
  토스뱅크_매출: {
    ko: '2023년 1조 2,609억원 (개별)',
    en: '₩1.26T (2023, Separate)',
    zh: '1兆2,609亿韩元（2023年,个别）',
    ja: '1兆2,609億ウォン（2023年,個別）',
  },
  토스뱅크_총원: {
    ko: '2023년 12월 533명',
    en: '533 (Dec 2023)',
    zh: '533人(2023年12月)',
    ja: '533名(2023年12月)',
  },
  토스뱅크_설명: {
    ko: '토스의 운영사인 (주)비바리퍼블리카에서 만든 대한민국의 3번째 인터넷 전문 은행',
    en: "Korea's 3rd internet-only bank created by Viva Republica, the operator of Toss",
    zh: '由Toss运营商Viva Republica创建的韩国第三家互联网专业银行',
    ja: 'トスの運営会社である（株）ビバリパブリカが作った大韓民国の3番目のインターネット専門銀行',
  },
  루모스: {
    ko: '토스뱅크 루모스 (여신 심사·관리·운영 시스템)',
    en: 'Toss Bank Lumos (Loan Management·Operation System)',
    zh: 'Toss Bank Lumos（贷款审查·管理·运营系统）',
    ja: 'トスバンクルモス（与信審査・管理・運営システム）',
  },
  루모스_팀: {
    ko: (
      <>
        Admin Developer <SubText>(계약직)</SubText> · Housing Loan Squad <SubText>(12명)</SubText>
      </>
    ),
    en: (
      <>
        Admin Developer <SubText>(Contract)</SubText> · Housing Loan Squad{' '}
        <SubText>(12 members)</SubText>
      </>
    ),
    zh: (
      <>
        管理开发者 <SubText>(合同工)</SubText> · 住房贷款小组 <SubText>(12人)</SubText>
      </>
    ),
    ja: (
      <>
        アドミン開発者 <SubText>(契約職)</SubText> · Housing Loan Squad <SubText>(12名)</SubText>
      </>
    ),
  },
  루모스_기간: {
    ko: '2023.08 ~ 2023.11',
    en: 'Aug 2023 ~ Nov 2023',
    zh: '2023年8月 ~ 2023年11月',
    ja: '2023年8月 ~ 2023年11月',
  },
  루모스_설명: {
    ko: '대출 관련 프로세스 자동화로 토스씨엑스 담당자의 업무 효율성을 높이며, 대출 고객의 불편함을 최소화하는 토스뱅크 여신 심사·관리·운영 시스템을 Next.js 및 Toss Design System 기반으로 개발',
    en: 'Developed Toss Bank loan review·management·operation system based on Next.js and Toss Design System to improve Toss CX staff work efficiency through loan process automation and minimize inconvenience for loan customers',
    zh: '基于Next.js和Toss Design System开发Toss Bank贷款审查·管理·运营系统，通过贷款流程自动化提高Toss CX员工的工作效率，并最大限度减少贷款客户的不便',
    ja: 'Next.jsおよびToss Design Systemベースでトスバンク与信審査・管理・運営システムを開発し、貸出関連プロセスの自動化でトスCX担当者の業務効率を高め、貸出顧客の不便を最小化',
  },
  전월세보증금대출: {
    ko: '전월세보증금대출 출시',
    en: 'Rental Deposit Loan Launch',
    zh: '租房押金贷款上线',
    ja: '伝貰保証金ローンリリース',
  },
  전월세보증금대출_설명: {
    ko: (
      <>
        토스뱅크 개발자 및 토스CX 담당자와 협업하여 대출 서류 심사, 사후 관리, 지킴 보증 관련 기능을
        출시함으로써, 토스뱅크 개인 담보대출 부문에서
        <a href="https://www.sisajournal-e.com/news/articleView.html?idxno=401727" target="_blank">
          {' '}
          약 2,000억원 대출 잔액 증가
        </a>
        에 기여함.
      </>
    ),
    en: (
      <>
        Collaborated with Toss Bank developers and Toss CX staff to launch loan document review,
        post-management, and guarantee protection features, contributing to{' '}
        <a href="https://www.sisajournal-e.com/news/articleView.html?idxno=401727" target="_blank">
          approximately ₩200B increase
        </a>{' '}
        in personal collateral loan balance at Toss Bank.
      </>
    ),
    zh: (
      <>
        与Toss Bank开发人员和Toss CX员工合作，推出贷款文件审查、后期管理和保证保护相关功能，为Toss
        Bank个人担保贷款部门
        <a href="https://www.sisajournal-e.com/news/articleView.html?idxno=401727" target="_blank">
          约2,000亿韩元贷款余额增长
        </a>
        做出贡献。
      </>
    ),
    ja: (
      <>
        トスバンク開発者およびトスCX担当者と協業して貸出書類審査、事後管理、保証関連機能をリリースすることで、トスバンク個人担保貸出部門で
        <a href="https://www.sisajournal-e.com/news/articleView.html?idxno=401727" target="_blank">
          約2,000億ウォンの貸出残高増加
        </a>
        に貢献。
      </>
    ),
  },
  CI최적화: {
    ko: 'CI 최적화',
    en: 'CI Optimization',
    zh: 'CI优化',
    ja: 'CI最適化',
  },
  CI최적화_설명: {
    ko: 'Docker 이미지 레이어에 원격 클라우드 캐싱을 적용하여 프로젝트 빌드 시간을 평균 300초에서 210초로 30% 단축함.',
    en: 'Applied remote cloud caching to Docker image layers, reducing project build time from average 300 seconds to 210 seconds (30% reduction).',
    zh: '将远程云缓存应用于Docker镜像层，将项目构建时间从平均300秒缩短到210秒（减少30%）。',
    ja: 'Dockerイメージレイヤーにリモートクラウドキャッシングを適用し、プロジェクトビルド時間を平均300秒から210秒に30%短縮。',
  },
  선언형프로그래밍: {
    ko: '선언형 프로그래밍',
    en: 'Declarative Programming',
    zh: '声明式编程',
    ja: '宣言型プログラミング',
  },
  선언형프로그래밍_설명: {
    ko: 'Suspense와 ErrorBoundary 개념을 이용해 네트워크 상태를 선언적으로 관리하고, React Query를 사용해 응답 순서가 보장되지 않는 네트워크 요청을 비동기로 관리함. 또한 Promise를 활용해 Modal, Dialog 컴포넌트 상태를 선언적으로 관리하고, Funnel 패턴을 활용해 다단계 페이지 이동도 선언적으로 관리함. 그리고 연관된 코드는 가까운 곳에 배치하여 컴포넌트 응집도를 높이고, 로직 세부 구현은 hook으로 숨겨 코드 파악에 필수적인 정보가 잘 보이도록 개선함.',
    en: 'Managed network state declaratively using Suspense and ErrorBoundary concepts, and handled asynchronous network requests with unguaranteed response order using React Query. Also managed Modal and Dialog component states declaratively using Promise, and multi-step page navigation declaratively using Funnel pattern. Improved code readability by placing related code close together to increase component cohesion and hiding logic implementation details in hooks to highlight essential information.',
    zh: '使用Suspense和ErrorBoundary概念声明式管理网络状态，使用React Query异步管理响应顺序不保证的网络请求。使用Promise声明式管理Modal、Dialog组件状态，使用Funnel模式声明式管理多步骤页面导航。通过将相关代码放置在一起提高组件内聚性，将逻辑细节实现隐藏在hook中以突出必要信息，改善代码可读性。',
    ja: 'SuspenseとErrorBoundaryの概念を利用してネットワーク状態を宣言的に管理し、React Queryを使用してレスポンス順序が保証されないネットワークリクエストを非同期で管理。またPromiseを活用してModal、Dialogコンポーネント状態を宣言的に管理し、Funnelパターンを活用して多段階ページ移動も宣言的に管理。そして関連するコードは近い場所に配置してコンポーネント凝集度を高め、ロジック詳細実装はhookで隠してコード把握に必須な情報がよく見えるように改善。',
  },
  '': {
    ko: '',
    en: '',
    zh: '',
    ja: '',
  },
}
