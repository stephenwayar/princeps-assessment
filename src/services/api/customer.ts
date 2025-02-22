import { http } from "@/config/axios";
import { EditCustomerData } from "../types/customer.types";
import { CustomerFormValues } from "@/components/customer/NewCustomerBar";

export const createCustomer = async (payload: CustomerFormValues) => {
  const url = '/customers'
  const res = await http.post(url, payload);

  return res.data;
};

export const editCustomer = async (customerId: string, payload: EditCustomerData) => {
  const url = `/customers/${customerId}`
  const res = await http.patch(url, payload);

  return res.data;
};