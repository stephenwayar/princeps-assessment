export interface EditCustomerData {
  firstname: string;
  lastname: string;
  telephone: string;
  bvn: string;
  residential_address: string;
  state: string;
  bankcode: string;
  accountnumber: string;
  workplace_name: string;      // Different - not in CustomerFormValues
  workplace_address: string;   // Different - not in CustomerFormValues
  email: string;
  city: string;
  country: string;
  id_card: string;
  voters_card: string;
  drivers_licence: string;
  dob: string;
  company_id: string;
}