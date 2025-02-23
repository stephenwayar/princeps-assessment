import { http, httpNoAuth } from "@/config/axios";
import { AddCustomerDate, EditCustomerData } from "../types/customer.types";

export const createCustomer = async (payload: AddCustomerDate) => {
  const url = '/customers'
  const res = await http.post(url, payload);

  return res.data;
};

export const editCustomer = async (customerId: string, payload: EditCustomerData) => {
  const url = `/customers/${customerId}`
  const res = await http.patch(url, payload);

  return res.data;
};

export const getCustomers = async <T>(page: number, searchText?: string, ): Promise<T> => {
  const url = `/customers?search_text=${searchText}&page=${page}&page_size=10`
  const res = await httpNoAuth.get(url);

  return res.data as T;
}