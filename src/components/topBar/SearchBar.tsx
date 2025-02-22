import Link from "next/link";
import SearchInput from "./SearchInput";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function SearchBar() {
  return (
    <div className="border-b-2 border-[#EDEDEF] px-4 sm:px-8 h-[64px] flex items-center lg:justify-between justify-end space-x-20 sticky top-0 z-10 bg-white">
      <div className="hidden lg:block lg:w-full">
        <div className="flex items-center justify-nd w-full">
          <SearchInput />
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button className="border-2 text-sm text-[#0053A6] font-semibold bg-[#F2F6FA] rounded-full flex items-center justify-center h-[40px]  w-[40px]  border-[#EDEDEF]">
          <Icon
            width="18"
            height="18"
            color="#6C6B72"
            icon="ri:question-line"
          />
        </button>

        <button className="border-2 text-sm text-[#0053A6] font-semibold bg-[#F2F6FA] rounded-full flex items-center justify-center h-[40px] w-[40px] border-[#EDEDEF]">
          <Icon
            width="18"
            height="18"
            color="#6C6B72"
            icon="solar:bell-outline"
          />
        </button>

        <Link href='#dashboard/account'>
          <button className="border-2 text-center text-sm text-[#0053A6] font-semibold bg-[#F2F6FA] rounded-full h-[40px] w-[40px] border-[#EDEDEF]">
            JA
          </button>
        </Link>
      </div>
    </div>
  )
}