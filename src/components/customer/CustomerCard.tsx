import React, { Suspense, lazy } from "react";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { Icon } from "@iconify/react/dist/iconify.js";
import { editCustomer } from "@/services/api/customer";
import { Checkbox, Loader, Modal } from "@mantine/core";
import CustomerStatusBadge from "./CustomerStatusBadge";
import { ICustomer } from "@/services/types/customer.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Lazy load the component
const EditCustomerForm = lazy(() => import('./EditCustomerForm'));

export interface EditCustomerFormValues {
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

interface Props {
  pageNumber: number;
  customerData: ICustomer;
  debouncedSearch: string;
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

export default function CustomerCard({
  pageNumber, 
  getGridClass, 
  customerData, 
  visibleColumns, 
  debouncedSearch,
}: Props) {
  const queryClient = useQueryClient()
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm <EditCustomerFormValues>({
    initialValues: {
      dob: '',
      bvn: '',
      city: '',
      state: '',
      country: '',
      id_card: '',
      bankcode: '',
      voters_card: '',
      accountnumber: '',
      workplace_name: '', 
      drivers_licence: '',
      workplace_address: '',
      residential_address: '',
      email: customerData.email ?? '',
      lastname: customerData.last_name ?? '',
      firstname: customerData.first_name ?? '',
      telephone: customerData.telephone ?? '',
      // Hard coded value
      company_id: '3a6f78ab-81b7-438e-a42b-fa28f7b388f9',
    },
    validate: {
      firstname: (value) => (!value ? 'First name is required' : null),
      lastname: (value) => (!value ? 'Last name is required' : null),
      email: (value) => {
        if (!value) return 'Email is required';
        return /^\S+@\S+$/.test(value) ? null : 'Invalid email format';
      },
      telephone: (value) => {
        if (!value) return 'Phone number is required';
        return value.length === 11 ? null : 'Phone number must be 11 digits';
      },
      bvn: (value) => {
        if (!value) return 'BVN is required';
        return value.length === 11 ? null : 'BVN must be 11 digits';
      },
      dob: (value) => (!value ? 'Date of birth is required' : null),
      residential_address: (value) => (!value ? 'Residential address is required' : null),
      state: (value) => (!value ? 'State is required' : null),
      city: (value) => (!value ? 'City is required' : null),
      country: (value) => (!value ? 'Country is required' : null),
      bankcode: (value) => (!value ? 'Bank code is required' : null),
      accountnumber: (value) => {
        if (!value) return 'Account number is required';
        return value.length === 10 ? null : 'Account number must be 10 digits';
      },
      workplace_name: (value) => (!value ? 'Workplace name is required' : null),
      workplace_address: (value) => (!value ? 'Workplace address is required' : null),
    },
  });

  const mutation = useMutation({
    // Create new customer with form data
    mutationFn: (payload: EditCustomerFormValues) => editCustomer(customerData.id.toString(), payload),

    onError: (error: AxiosError<{ errors: Record<string, string[]>, message: string }>) => {
      if (error.response?.data?.errors) {
        const apiErrors = error.response.data.errors;

        // Set form field errors
        Object.entries(apiErrors).forEach(([field, messages]) => {
          form.setFieldError(field, messages[0]);
        });
      } else {
        // Handle unexpected errors
        toast.error('An unexpected error occurred. Please try again.');
      }
    },

    onSuccess: () => {
      toast.error(`Successfuly updated ${form.values.firstname} ${form.values.lastname}'s data`)

      // Invalidate 'customers' to refresh cached data
      queryClient.invalidateQueries({
        queryKey: ['customers', pageNumber, debouncedSearch]
      })
    },
  })

  const handleSubmit = (values: EditCustomerFormValues) => {
    mutation.mutate(values)
  };

  return (
    <React.Fragment>
      <div className="flex items-center justify-between">
        <div className="h-12 w-16 border-b-2 flex items-center border-[#EDEDEF]">
          <Checkbox color="#0053A6" />
        </div>

        <div className="w-full">
          <div className={`grid gap-4 ${getGridClass()} h-12 border-b-2 border-[#EDEDEF]`}>
            {visibleColumns.col1 && (
              <div className="max-w-full h-full items-center flex">
                <p className="text-[#121212] font-semibold truncate">
                  {customerData.first_name} {customerData.last_name}
                </p>
              </div>
            )}

            {visibleColumns.col2 && (
              <div className="max-w-full h-full items-center flex">
                <p className="text-[#44444B] truncate">
                  {customerData.email}
                </p>
              </div>
            )}

            {visibleColumns.col3 && (
              <div className="max-w-full h-full items-center flex">
                <p className="text-[#44444B] truncate">
                  {customerData.telephone}
                </p>
              </div>
            )}

            {visibleColumns.col4 && (
              <div className="max-w-full h-full items-center flex">
                <CustomerStatusBadge status={customerData.status} />
              </div>
            )}

            {visibleColumns.col5 && (
              <div className="max-w-full h-full items-center flex">
                <p className="text-[#44444B] truncate">
                  {customerData.created_at}
                </p>
              </div>
            )}

            {visibleColumns.col6 && (
              <div className="max-w-full h-full items-center flex">
                <p className="text-[#44444B] truncate">
                  {customerData.id}
                </p>
              </div>
            )}

            {visibleColumns.col7 && (
              <div className="max-w-full h-full items-center flex">
                <p className="text-[#44444B] truncate">
                  {customerData.loan_product ?? '-'}
                </p>
              </div>
            )}

            {visibleColumns.col8 && (
              <div className="max-w-full h-full items-center flex">
                <p className="text-[#44444B] truncate">
                  {customerData.work_id ?? '-'}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="h-12 w-16 border-b-2 border-[#EDEDEF] flex items-center">
          <button onClick={open}>
            <Icon
              width="18"
              height="18"
              color="#44444B"
              icon="bi:three-dots-vertical"
            />
          </button>
        </div>
      </div>

      <Modal
        size='lg'
        opened={opened}
        onClose={close}
        withCloseButton={false}
        title={
          <p className="font-semibold text-[#44444B]">
            Edit {customerData.first_name} {customerData.last_name}
          </p>
        }
        overlayProps={{
          blur: 3,
          backgroundOpacity: 0.55,
        }}
      >
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-[200px]">
              <Loader color="#0053A6" size="md" />
            </div>
          }
        >
          <EditCustomerForm
            form={form}
            mutation={mutation}
            handleSubmit={handleSubmit}
          />
        </Suspense>
      </Modal>
    </React.Fragment>
  )
}