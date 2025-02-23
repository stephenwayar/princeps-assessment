import { Icon } from "@iconify/react/dist/iconify.js";
import { Divider } from "@mantine/core";

interface Props {
  totalCount?: number | string;
  activeCount?: number | string;
  overDueCount?: number | string;
  inactiveCount?: number | string;
}
export default function StatsBar({
  totalCount = 0,
  activeCount = 0,
  overDueCount = 0,
  inactiveCount = 0
}: Props) {
  return (
    <div className="overflow-x-scroll px-[1px] pb-3">
      <div className="min-w-[70rem]">
        <div className="grid grid-cols-4 gap-5 w-full">
          <div className="relative">
            {/* Background card (bottom) */}
            <div className="absolute top-2 w-[90%] h-full border-[#EFEFEF] left-[5%] shadow-md border bg-white rounded-[6px]" />

            {/* Main card (top) */}
            <div className="relative w-full p-4 border-[#EFEFEF] border shadow-md flex justify-between rounded-[6px] bg-white">
              <div className="space-y-1 p-4">
                <p className="text-[#5E5F6E]">
                  All Customers
                </p>

                <p className="text-[#44444B] text-4xl font-semibold">
                  {totalCount}
                </p>
              </div>

              <div className="p-2">
                <Icon
                  width="20"
                  height="20"
                  color="#5E5F6E"
                  icon="carbon:information-filled"
                />
              </div>
            </div>
          </div>

          <div className="relative col-span-2">
            {/* Background card (bottom) */}
            <div className="absolute top-2 w-[95%] h-full border-[#EFEFEF] left-[2.5%] shadow-md border bg-white rounded-[6px]" />

            {/* Main card (top) */}
            <div className="flex relative items-center border-[#EFEFEF] border shadow-md rounded-[6px] bg-white">
              <div className="w-full p-4 flex gap-5  justify-between">
                <div className="space-y-1 p-4">
                  <p className="text-[#5E5F6E]">
                    Active customers
                  </p>

                  <p className="text-[#44444B] text-4xl font-semibold">
                    {activeCount}
                  </p>
                </div>

                <div className="p-2">
                  <Icon
                    width="20"
                    height="20"
                    color="#5E5F6E"
                    icon="carbon:information-filled"
                  />
                </div>
              </div>

              <Divider 
                h={75} 
                size='sm' 
                color="#F4F4F4" 
                className="!my-auto" 
                orientation="vertical" 
              />

              <div className="w-full p-4  flex justify-between">
                <div className="space-y-1 p-4">
                  <p className="text-[#5E5F6E]">
                    Overdue customers
                  </p>

                  <p className="text-[#44444B] text-4xl font-semibold">
                    {overDueCount}
                  </p>
                </div>

                <div className="p-2">
                  <Icon
                    width="20"
                    height="20"
                    color="#5E5F6E"
                    icon="carbon:information-filled"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Background card (bottom) */}
            <div className="absolute top-2 w-[90%] h-full border-[#EFEFEF] left-[5%] shadow-md border bg-white rounded-[6px]" />

            {/* Main card (top) */}
            <div className="relative w-full p-4 border-[#EFEFEF] border shadow-md flex justify-between rounded-[6px] bg-white">
              <div className="space-y-1 p-4">
                <p className="text-[#5E5F6E]">
                  Inactive & Dormant
                </p>

                <p className="text-[#44444B] text-4xl font-semibold">
                  {inactiveCount}
                </p>
              </div>

              <div className="p-2">
                <Icon
                  width="20"
                  height="20"
                  color="#5E5F6E"
                  icon="carbon:information-filled"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}