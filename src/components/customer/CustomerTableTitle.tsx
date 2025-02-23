interface Props {
  getGridClass: () => void;
  visibleColumns: {
    col1: boolean;
    col2: boolean;
    col3: boolean;
    col4: boolean;
    col5: boolean;
    col6: boolean;
    col7: boolean;
    col8: boolean;
  }
}

export default function CustomerTableTitle({ getGridClass, visibleColumns }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="h-12 w-16 border-y-2 border-[#EDEDEF]">

      </div>

      <div className="w-full">
        <div className={`grid gap-4 ${getGridClass()} h-12 border-y-2 border-[#EDEDEF]`}>
          {visibleColumns.col1 && (
            <div className="max-w-full h-full items-center flex">
              <p className="text-[#5E5F6E] truncate">
                Name
              </p>
            </div>
          )}

          {visibleColumns.col2 && (
            <div className="max-w-full h-full items-center flex">
              <p className="text-[#5E5F6E] truncate">
                Email
              </p>
            </div>
          )}

          {visibleColumns.col3 && (
            <div className="max-w-full h-full items-center flex">
              <p className="text-[#5E5F6E] truncate">
                Phone number
              </p>
            </div>
          )}

          {visibleColumns.col4 && (
            <div className="max-w-full h-full items-center flex">
              <p className="text-[#5E5F6E] truncate">
                Status
              </p>
            </div>
          )}

          {visibleColumns.col5 && (
            <div className="max-w-full h-full items-center flex">
              <p className="text-[#5E5F6E] truncate">
                Joined at
              </p>
            </div>
          )}

          {visibleColumns.col6 && (
            <div className="max-w-full h-full items-center flex">
              <p className="text-[#5E5F6E] truncate">
                Customer ID
              </p>
            </div>
          )}

          {visibleColumns.col7 && (
            <div className="max-w-full h-full items-center flex">
              <p className="text-[#5E5F6E] truncate">
                Loan product
              </p>
            </div>
          )}

          {visibleColumns.col8 && (
            <div className="max-w-full h-full items-center flex">
              <p className="text-[#5E5F6E] truncate">
                Work ID / Details
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="h-12 w-16 border-y-2 border-[#EDEDEF]">

      </div>
    </div>
  )
}