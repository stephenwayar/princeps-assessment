"use client"
import { useState } from "react";
import { Checkbox, Popover } from "@mantine/core";
import { Icon } from "@iconify/react/dist/iconify.js";

interface EditColumnsButtonProps {
  visibleColumns: Record<string, boolean>;
  onToggleColumn: (columnId: string) => void;
}

export default function EditColumnsButton({ visibleColumns, onToggleColumn }: EditColumnsButtonProps) {
  const [opened, setOpened] = useState(false);
  const [tempColumns, setTempColumns] = useState(visibleColumns);

  const columnLabels = {
    col1: 'Name',            // Fixed column
    col2: 'Email',
    col3: 'Phone number',
    col4: 'Status',
    col5: 'Joined at',
    col6: 'Customer ID',
    col7: 'Loan product',
    col8: 'Work ID'
  };

  const handleTempToggle = (columnId: string) => {
    setTempColumns(prev => ({
      ...prev,
      [columnId]: !prev[columnId]
    }));
  };

  const handleDisplayColumns = () => {
    // Apply all changes at once
    Object.entries(tempColumns).forEach(([columnId, isVisible]) => {
      if (visibleColumns[columnId] !== isVisible) {
        onToggleColumn(columnId);
      }
    });
    setOpened(false);
  };

  // Reset temp state when opening popover
  const handleOpen = () => {
    setTempColumns(visibleColumns);
    setOpened(true);
  };

  return (
    <div>
      <Popover
        width={200}
        withArrow
        shadow="md"
        opened={opened}
        position="bottom"
        onChange={setOpened}
      >
        <Popover.Target>
          <button
            onClick={handleOpen}
            className="flex items-center border-2 border-[#ECF0F3] rounded-[6px] h-[40px] px-4 space-x-2"
          >
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

        <Popover.Dropdown className="!p-0 space-y-2">
          <div className="text-sm text-[#121212] px-4 pt-3 flex items-center justify-between">
            <p>Edit columns</p>

            <button onClick={() => {
              setOpened(false);
            }}>
              x
            </button>
          </div>

          <div className="text-sm pt-2 space-y-2">
            <p className="text-[#5E5F6E] px-4">
              FIXED COLUMNS
            </p>

            <div className="px-4 py-3 border-b border-[#ECF0F3] bg-[#f2f6fb]">
              <p className="text-[#0053A6]">
                {columnLabels.col1}
              </p>
            </div>
          </div>

          <div className="text-sm space-y-2">
            <p className="text-[#5E5F6E] px-4">
              AVAILABLE COLUMNS
            </p>

            <div className="space-y-1">
              {Object.entries(tempColumns).slice(1).map(([columnId, isVisible]) => (
                <div key={columnId} className={`border-[#ECF0F3] border-b ${isVisible && 'bg-[#f2f6fb]'} px-4 py-3`}>
                  <Checkbox
                    size="sm"
                    color="#0053A6"
                    checked={isVisible}
                    onChange={() => handleTempToggle(columnId)}
                    label={
                      <p className={`${isVisible ? 'text-[#0053A6]' : 'text-[#44444B]'}`}>
                        {columnLabels[columnId as keyof typeof columnLabels]}
                      </p>
                    }
                  />
                </div>
              ))}
            </div>

            <div className="px-3">
              <button
                onClick={handleDisplayColumns}
                className="bg-[#0053A6] space-x-2 justify-center flex items-center w-full text-white rounded-[6px] h-[36px] border shadow border-[#13497f]"
              >
                <Icon
                  width="19"
                  height="19"
                  color="white"
                  icon="ci:settings"
                />
                <p>
                  Display columns
                </p>
              </button>
            </div>
          </div>
        </Popover.Dropdown>
      </Popover>
    </div>
  )
}