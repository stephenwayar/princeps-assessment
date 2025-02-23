import Image from "next/image";
import notData from '@/assets/svgs/no-data-undraw.svg'

export default function NoData() {
  return (
    <div className="py-20 not-even:space-y-5 rounded-[8px]">
      <Image
        priority
        width={150}
        src={notData}
        alt='empty data'
        className="mx-auto"
      />

      <p className="text-center font-semibold text-lg text-[#101928]">
        No data
      </p>
    </div>
  )
}