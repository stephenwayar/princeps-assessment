"use client"
import { Popover } from "@mantine/core";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function EditColumnsButton() {
  return (
    <div>
      <Popover
        width={120}
        position="bottom"
        withArrow
        shadow="md"
      >
        <Popover.Target>
          <button className="flex items-center border-2 border-[#ECF0F3] rounded-[6px] h-[40px] px-4 space-x-2">
            <Icon
              width="18"
              height="18"
              color="#44444B"
              icon="ci:settings"
            />

            <p className="text-[#44444B] text-sm">
              Edit columns
            </p>
          </button>
        </Popover.Target>

        <Popover.Dropdown className="p-0">
          Hello
        </Popover.Dropdown>
      </Popover>
    </div>
  )
}