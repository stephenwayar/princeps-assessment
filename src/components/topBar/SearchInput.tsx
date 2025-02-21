import { Icon } from "@iconify/react/dist/iconify.js";

export default function SearchInput() {
  return (
    <div className="h-[40px] w-full max-w-[40rem] rounded-[4px] ml-[25%] border-2 border-[#EDEDEF] bg-[#FAFAFC]">
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
            placeholder="Search customer details"
            className="focus:outline-none w-full placeholder:text-[#BBBBCB] text-[#6F7079]"
          />
        </div>

        <div className="flex w-fit items-center space-x-2">
          <div className="bg-[#EAECF2] h-6 flex items-center justify-center px-2 rounded-[6px]">
            <Icon
              width="16"
              height="16"
              color="#6F7079"
              icon="solar:command-outline"
            />
          </div>

          <p className="h-6 text-center whitespace-nowrap px-2 bg-[#EAECF2] pt-[0.25px] rounded-[6px] text-sm text-[#6F7079]">
            / Ctrl K
          </p>
        </div>
      </div>
    </div>
  )
}