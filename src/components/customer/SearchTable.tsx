"use client"
import { SetStateAction } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  searchQuery: string;
  setPageNumber: React.Dispatch<SetStateAction<number>>;
  setSearchQuery: React.Dispatch<SetStateAction<string>>;
}

export default function SearchTable({
  searchQuery,
  setPageNumber,
  setSearchQuery
}: Props) {
  return (
    <div className="h-[40px] w-full max-w-[25rem] rounded-[4px] border-2 border-[#EDEDEF] bg-white">
      <div className="w-full flex items-center space-x-3 h-full px-4 justify-between">
        <div className="w-[18px]">
          <Icon
            width="18"
            height="18"
            color="#BBBBCB"
            icon="iconamoon:search"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search customers"
            className="focus:outline-none w-full placeholder:text-[#BBBBCB] text-[#6F7079]"
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setPageNumber(1) // Reset to first page on new search
            }}
          />
        </div>
      </div>
    </div>
  )
}