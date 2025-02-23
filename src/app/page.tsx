import { API_URL } from "@/config/env";
import StatsBar from "@/components/customer/StatsBar";
import CustomersTable from "@/components/customer/CustomersTable";
import NewCustomerBar from "@/components/customer/NewCustomerBar";
import { CustomerApiResponse, ICustomer } from "@/services/types/customer.types";

async function getCustomers(): Promise<CustomerApiResponse> {
  const res = await fetch(`${API_URL}/customers?page_size=10`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch customers');
  }

  return res.json();
}

export default async function Home() {
  const customers = await getCustomers();

  return (
    <div className="space-y-6">
      <NewCustomerBar />

      <StatsBar
        activeCount={`-`}
        overDueCount={`-`}
        inactiveCount={`-`}
        totalCount={customers.data.pagination.total || 0}
      />

      <CustomersTable initialData={customers} />
    </div>
  );
}