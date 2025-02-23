"use client"
import { useEffect, useState } from "react";
import NoData from "../common/NoData";
import SearchTable from "./SearchTable";
import FilterButton from "./FIlterButton";
import CustomerCard from "./CustomerCard";
import Pagination from "../common/Pagination";
import { useQuery } from "@tanstack/react-query";
import { useDebouncedValue } from "@mantine/hooks";
import EditColumnsButton from "./EditColumnsButton";
import CustomerTableTitle from "./CustomerTableTitle";
import { getCustomers } from "@/services/api/customer";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CustomerApiResponse, ICustomer } from "@/services/types/customer.types";

interface Props {
  initialData: CustomerApiResponse
}

export default function CustomersTable({ initialData }: Props) {
  const [pageNumber, setPageNumber] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearch] = useDebouncedValue(searchQuery, 500);
  const [filteredCustomers, setFilteredCustomers] = useState<ICustomer[]>(initialData.data.data)
  const [visibleColumns, setVisibleColumns] = useState({
    col1: true,
    col2: true,
    col3: true,
    col4: true,
    col5: true,
    col6: false,
    col7: false,
    col8: false
  });

  const customers = useQuery({
    queryKey: ['customers', pageNumber, debouncedSearch],
    queryFn: () => getCustomers<CustomerApiResponse>(pageNumber, debouncedSearch),
    initialData,
  })

  useEffect(() => {
    if (customers.data) {
      console.log(customers.data)
      setFilteredCustomers(customers.data.data.data)
    }
  }, [customers.data])

  // Count number of visible columns
  const visibleColumnCount = Object.values(visibleColumns).filter(Boolean).length;

  // Get grid class based on number of visible columns
  const getGridClass = () => {
    switch (visibleColumnCount) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-2';
      case 3:
        return 'grid-cols-3';
      case 4:
        return 'grid-cols-4';
      case 5:
        return 'grid-cols-5';
      case 6:
        return 'grid-cols-6';
      case 7:
        return 'grid-cols-7';
      case 8:
        return 'grid-cols-8';
      default:
        return 'grid-cols-5'; // Default to show 5 columns
    }
  };

  const handleColumnToggle = (columnId: string) => {
    setVisibleColumns(prev => ({
      ...prev,
      [columnId]: !prev[columnId as keyof typeof visibleColumns]
    }));
  };

  return (
    <div className="overflow-x-scroll">
      <div className="min-w-[70rem] space-y-5">
        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <SearchTable
              searchQuery={searchQuery}
              setPageNumber={setPageNumber}
              setSearchQuery={setSearchQuery}
            />

            <div className="flex items-center space-x-3">
              <FilterButton

              />

              <EditColumnsButton
                visibleColumns={visibleColumns}
                onToggleColumn={handleColumnToggle}
              />

              <div>
                <button className="flex items-center border-2 border-[#ECF0F3] bg-[#F2F6FA] rounded-[6px] h-[40px] px-4 space-x-2">
                  <Icon
                    width="18"
                    height="18"
                    color="#44444B"
                    icon="solar:download-outline"
                  />

                  <p className="text-[#44444B] text-sm">
                    Export .csv
                  </p>
                </button>
              </div>
            </div>
          </div>

          {debouncedSearch && (
            <div className="flex items-center space-x-2">
              <p className="text-[#44444B] text-sm">
                Search results:
              </p>

              <div className="text-white rounded-[7px] flex items-center space-x-3 bg-[#229EFF] px-2 py-1 text-sm">
                <p >
                  {debouncedSearch}
                </p>

                <button onClick={() => {
                  setSearchQuery('')
                }}>
                  x
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <CustomerTableTitle
            getGridClass={getGridClass}
            visibleColumns={visibleColumns}
          />

          <div className="space-y-2">
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map(c => (
                <CustomerCard
                  key={c.id}
                  customerData={c}
                  pageNumber={pageNumber}
                  getGridClass={getGridClass}
                  visibleColumns={visibleColumns}
                  debouncedSearch={debouncedSearch}
                />
              ))) : (
              <NoData />
            )}
          </div>
        </div>

        <Pagination
          currentPage={pageNumber}
          showingItems={filteredCustomers.length}
          onPageChange={(page) => setPageNumber(page)}
          totalPages={customers.data.data.pagination.totalPages}
        />
      </div>
    </div>
  )
}