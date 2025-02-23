"use client"
import React, { Suspense, lazy } from "react"
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useForm } from '@mantine/form';
import { Loader, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Icon } from "@iconify/react/dist/iconify.js"
import { createCustomer } from "@/services/api/customer";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Lazy load the CustomerForm component
const AddCustomerForm = lazy(() => import('./AddCustomerForm'));

export interface CustomerFormValues {
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

export default function NewCustomerBar() {
  const queryClient = useQueryClient()
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm<CustomerFormValues>({
    initialValues: {
      bvn: '',
      dob: '',
      city: '',
      state: '',
      email: '',
      country: '',
      id_card: '',
      firstname: '',
      lastname: '',
      bankcode: '',
      telephone: '',
      voters_card: '',
      accountnumber: '',
      drivers_licence: '',
      residential_address: '',
      // Hard coded value
      company_id: '3a6f78ab-81b7-438e-a42b-fa28f7b388f9', 
    },
    validate: {
      bvn: (value) => (!value ? 'BVN is required' : null),
      state: (value) => (!value ? 'State is required' : null),
      dob: (value) => (!value ? 'Date of birth is required' : null),
      bankcode: (value) => (!value ? 'Bank code is required' : null),
      lastname: (value) => (!value ? 'Last name is required' : null),
      firstname: (value) => (!value ? 'First name is required' : null),
      telephone: (value) => (!value ? 'Phone number is required' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      residential_address: (value) => (!value ? 'Address is required' : null),
      accountnumber: (value) => (!value ? 'Account number is required' : null),
    },
  });

  const mutation = useMutation({
    // Create new customer with form data
    mutationFn: (payload: CustomerFormValues) => createCustomer(payload),

    onError: (error: AxiosError<{ errors: Record<string, string[]>, message: string }>) => {
      if (error.response?.data?.errors) {
        const apiErrors = error.response.data.errors;

        // Set form errors for other fields
        Object.entries(apiErrors).forEach(([field, messages]) => {
          form.setFieldError(field, messages[0]);
        });
      }
    },

    onSuccess: (data) => {
      toast.error(`Successfuly added ${form.values.firstname} ${form.values.lastname}!`)

      // Invalidate 'customers' to refresh cached data
      queryClient.invalidateQueries({
        queryKey: ['customers', 1, ''] 
      })
    },
  })

  const handleSubmit = (values: CustomerFormValues) => {
    mutation.mutate(values)
  };

  return (
    <React.Fragment>
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <p className="font-semibold text-[#0053A6] text-xl">
            Customers
          </p>

          <p className="text-[#44444B]">
            Create, edit and manage your customers.
          </p>
        </div>

        <div>
          <button onClick={open} className="bg-[#0053A6] space-x-2 flex items-center w-full text-white rounded-[6px] h-[36px] border shadow border-[#13497f]">
            <div className="w-[36px] h-full flex justify-center items-center lg:justify-end">
              <Icon
                width="19"
                height="19"
                color="white"
                icon="mingcute:user-add-2-line"
              />
            </div>

            <p className="hidden lg:block">
              Add new customer
            </p>

            <div className="border-l-2 border-[#13497f] hidden lg:block w-[36px] h-full lg:flex lg:items-center justify-center">
              <Icon
                width="19"
                height="19"
                color="white"
                icon="iconamoon:arrow-down-2-bold"
              />
            </div>
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
            New Customer
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
          <AddCustomerForm
            form={form}
            mutation={mutation}
            handleSubmit={handleSubmit}
          />
        </Suspense>
      </Modal>
    </React.Fragment>
  )
}