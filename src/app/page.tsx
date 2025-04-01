import { API_URL } from "@/config/env";
import { notFound } from "next/navigation";
import StatsBar from "@/components/customer/StatsBar";
import CustomersTable from "@/components/customer/CustomersTable";
import NewCustomerBar from "@/components/customer/NewCustomerBar";
import { CustomerApiResponse } from "@/services/types/customer.types";

async function getCustomers(): Promise<CustomerApiResponse> {
  try {
    const res = await fetch(`${API_URL}/customers?page_size=10`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      // For specific HTTP errors, you can handle them differently
      if (res.status === 404) {
        notFound(); // This will trigger the not-found.tsx page
      }

      // For other errors, throw an error that will be caught by error.tsx
      throw new Error(`Failed to fetch customers: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error; // Re-throw to be caught by the error boundary
  }
}

export default async function Home() {
  const customers = await getCustomers();

  return (
    <div className="space-y-6">
      <NewCustomerBar />

      <StatsBar
        activeCount='-' // N/A for display
        overDueCount='-'  // N/A for display
        inactiveCount='-'  // N/A for display
        totalCount={customers.data.pagination.total || 0}
      />

      <CustomersTable initialData={customers} />
    </div>
  );
}