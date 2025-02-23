export type ICustomerStatus = "overdue" | "active" | "dormant" | "inactive" 

export interface ICustomer {
  created_at: string;
  email: string;
  first_name: string;
  id: string;
  is_blacklisted: number;
  is_bulk_uploaded: number;
  last_name: string;
  telephone: string;
  upload_history_id: string;
  status: ICustomerStatus;
  loan_product?: string;
  work_id?: string;
}

export interface EditCustomerData {
  dob: string;
  bvn: string;
  city: string;
  email: string;
  state: string;
  country: string;
  firstname: string;
  lastname: string;
  id_card: string;
  bankcode: string;
  telephone: string;
  company_id: string;
  voters_card: string;
  accountnumber: string;
  workplace_name: string;
  drivers_licence: string;
  workplace_address: string;
  residential_address: string;
}

export interface AddCustomerDate {
  bvn: string;
  dob: string;
  city: string;
  state: string;
  email: string;
  country: string;
  firstname: string;
  lastname: string;
  telephone: string;
  bankcode: string;
  id_card?: string;
  company_id: string;
  voters_card?: string;
  accountnumber: string;
  drivers_licence?: string;
  residential_address: string;
}

export interface CustomerApiResponse {
  status: string;
  message: string;
  data: {
    data: ICustomer[];
    pagination: {
      total: number;
      count: number;
      perPage: number;
      currentPage: number;
      totalPages: number;
      links: {
        first: string;
        last: string;
        prev: string | null;
        next: string | null;
      }
    }
  }
}