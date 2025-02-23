import { ICustomerStatus } from "@/services/types/customer.types"

interface Props { status: ICustomerStatus }

export default function CustomerStatusBadge({ status }: Props) {
  const textColor = {
    overdue: '#FFFFFF',
    active: '#235939',
    dormant: '#FFFFFF',
    inactive: '#866E0C',
  }[status.toLowerCase()]

  const bgColor = {
    overdue: '#30B0C7',
    active: '#B9F0D1',
    dormant: '#A2845E',
    inactive: '#F9E69A',
  }[status.toLowerCase()]

  const label = {
    overdue: 'Overdue',
    active: 'Active',
    dormant: 'Dormant',
    inactive: 'Inactive',
  }[status.toLowerCase()]

  return (
    <div style={{ backgroundColor: bgColor }} className="w-fit rounded-full py-1 px-3">
      <p style={{ color: textColor }} className="text-sm">
        {label}
      </p>
    </div>
  )
}