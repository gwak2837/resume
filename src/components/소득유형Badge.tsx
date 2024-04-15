export enum 소득Type {
  일반근로자_정규직,
  일반근로자_계약직,
  사업소득자_개인,
  기타소득자,
}

type Props = {
  type: 소득Type
}

export default function 소득유형Badge({ type }: Props) {
  const bgColor =
    type === 소득Type.일반근로자_정규직
      ? 'bg-blue-100'
      : type === 소득Type.일반근로자_계약직
      ? 'bg-amber-100'
      : type === 소득Type.사업소득자_개인
      ? 'bg-emerald-100'
      : 'bg-slate-100'
  const textColor =
    type === 소득Type.일반근로자_정규직
      ? 'text-blue-700'
      : type === 소득Type.일반근로자_계약직
      ? 'text-amber-700'
      : type === 소득Type.사업소득자_개인
      ? 'text-emerald-700'
      : 'text-slate-700'
  return (
    <span
      className={`rounded relative bottom-[1px] text-xs font-semibold px-[6px] py-1 ${textColor} ${bgColor}`}
    >
      {type === 소득Type.일반근로자_정규직 && '일반근로자 (정규직)'}
      {type === 소득Type.일반근로자_계약직 && '일반근로자 (계약직)'}
      {type === 소득Type.사업소득자_개인 && '사업소득자 (개인)'}
      {type === 소득Type.기타소득자 && '기타소득자'}
    </span>
  )
}
