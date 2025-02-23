"use client"
import React, { SetStateAction } from "react";
import { Dispatch, useState } from "react";
import { Checkbox, Popover } from "@mantine/core";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ICustomer } from "@/services/types/customer.types";

interface Props {
  customersData: ICustomer[];
  setFilteredCustomers: Dispatch<SetStateAction<ICustomer[]>>
}

interface FilterState {
  dates: {
    sevenDays: boolean;
    thirtyDays: boolean;
    threeMonths: boolean;
  };
  status: {
    active: boolean;
    inactive: boolean;
    overdue: boolean;
    dormant: boolean;
  }
}

export default function FilterButton({ customersData, setFilteredCustomers }: Props) {
  const [opened, setOpened] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    dates: {
      sevenDays: false,
      thirtyDays: false,
      threeMonths: false
    },
    status: {
      active: false,
      inactive: false,
      overdue: false,
      dormant: false
    }
  });

  const handleOpen = () => {
    setOpened(true);
  };

  // Toggle individual date filter options (7 days, 30 days, 3 months)
  const handleDateFilter = (key: keyof FilterState['dates']) => {
    setFilters(prev => ({
      ...prev,
      dates: {
        ...prev.dates,
        [key]: !prev.dates[key]  // Toggle the selected date filter
      }
    }));
  };

  // Toggle individual status filter options (active, inactive, etc)
  const handleStatusFilter = (key: keyof FilterState['status']) => {
    setFilters(prev => ({
      ...prev,
      status: {
        ...prev.status,
        [key]: !prev.status[key]  // Toggle the selected status filter
      }
    }));
  };

  // Check if any filter (date or status) is currently selected
  const isAnyFilterSelected = Object.values(filters.dates).some(value => value) ||
    Object.values(filters.status).some(value => value);

  const applyFilters = () => {
    let filtered = [...customersData];

    // Apply date filters if any date filter is selected
    if (Object.values(filters.dates).some(value => value)) {
      filtered = filtered.filter(customer => {
        const createdDate = new Date(customer.created_at);
        const now = new Date();
        // Calculate days difference between current date and customer creation date
        const daysDiff = (now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24);

        return (
          (filters.dates.sevenDays && daysDiff <= 7) ||      // Within last 7 days
          (filters.dates.thirtyDays && daysDiff <= 30) ||    // Within last 30 days
          (filters.dates.threeMonths && daysDiff <= 90)      // Within last 90 days
        );
      });
    }

    // Apply status filters if any status filter is selected
    if (Object.values(filters.status).some(value => value)) {
      filtered = filtered.filter(customer => {
        return (
          // Match customer status with selected status filters
          (filters.status.active && customer.status.toLowerCase() === 'active') ||
          (filters.status.inactive && customer.status.toLowerCase() === 'inactive') ||
          (filters.status.overdue && customer.status.toLowerCase() === 'overdue') ||
          (filters.status.dormant && customer.status.toLowerCase() === 'dormant')
        );
      });
    }

    setFilteredCustomers(filtered);  // Update filtered results
    setOpened(false);               // Close filter popover
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
              icon="lets-icons:filter"
            />
            <p className="text-[#44444B] text-sm">
              Filter
            </p>
          </button>
        </Popover.Target>

        <Popover.Dropdown className="!p-0 space-y-3">
          <div className="text-sm text-[#121212] px-4 pt-3 flex items-center justify-between">
            <p>By Date created</p>
            <button onClick={() => setOpened(false)}>x</button>
          </div>

          <div className="text-sm space-y-2">
            <div className="space-y-1">
              <div className={`border-[#ECF0F3] border-b ${filters.dates.sevenDays && 'bg-[#f2f6fb]'} px-4 py-3`}>
                <Checkbox
                  size="sm"
                  color="#0053A6"
                  checked={filters.dates.sevenDays}
                  onChange={() => handleDateFilter('sevenDays')}
                  label={<p className={`${filters.dates.sevenDays ? 'text-[#0053A6]' : 'text-[#44444B]'}`}>Past 7 days</p>}
                />
              </div>

              <div className={`border-[#ECF0F3] border-b ${filters.dates.thirtyDays && 'bg-[#f2f6fb]'} px-4 py-3`}>
                <Checkbox
                  size="sm"
                  color="#0053A6"
                  checked={filters.dates.thirtyDays}
                  onChange={() => handleDateFilter('thirtyDays')}
                  label={<p className={`${filters.dates.thirtyDays ? 'text-[#0053A6]' : 'text-[#44444B]'}`}>Past 30 days</p>}
                />
              </div>

              <div className={`border-[#ECF0F3] border-b ${filters.dates.threeMonths && 'bg-[#f2f6fb]'} px-4 py-3`}>
                <Checkbox
                  size="sm"
                  color="#0053A6"
                  checked={filters.dates.threeMonths}
                  onChange={() => handleDateFilter('threeMonths')}
                  label={<p className={`${filters.dates.threeMonths ? 'text-[#0053A6]' : 'text-[#44444B]'}`}>Past 3 months</p>}
                />
              </div>
            </div>

            <div className="text-sm text-[#121212] px-4 py-2">
              <p>By Status</p>
            </div>

            <div className="space-y-1">
              {Object.entries(filters.status).map(([key, value]) => (
                <div key={key} className={`border-[#ECF0F3] border-b ${value && 'bg-[#f2f6fb]'} px-4 py-3`}>
                  <Checkbox
                    size="sm"
                    color="#0053A6"
                    checked={value}
                    onChange={() => handleStatusFilter(key as keyof FilterState['status'])}
                    label={
                      <p className={`${value ? 'text-[#0053A6]' : 'text-[#44444B]'}`}>
                        {key.charAt(0).toUpperCase() + key.slice(1)} customers
                      </p>
                    }
                  />
                </div>
              ))}
            </div>

            <div className="px-3">
              <button
                onClick={isAnyFilterSelected ? applyFilters : () => {
                  setFilteredCustomers(customersData); // Reset to original data
                  setFilters({
                    dates: {
                      sevenDays: false,
                      thirtyDays: false,
                      threeMonths: false
                    },
                    status: {
                      active: false,
                      inactive: false,
                      overdue: false,
                      dormant: false
                    }
                  });
                  setOpened(false);
                }}
                className="bg-[#0053A6] space-x-2 justify-center flex items-center w-full text-white rounded-[6px] h-[36px] border shadow border-[#13497f]"
              >
                <Icon
                  width="19"
                  height="19"
                  color="white"
                  icon={isAnyFilterSelected ? "lets-icons:filter" : "system-uicons:reset"}
                />
                <p>
                  {isAnyFilterSelected ? 'Filter' : 'Reset'}
                </p>
              </button>
            </div>
          </div>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
}