"use client"
import React from "react"
import { Input } from '@mantine/core';
import { Modal } from "@mantine/core";
import { useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates';
import { useDisclosure } from "@mantine/hooks";
import { Icon } from "@iconify/react/dist/iconify.js"

interface CustomerFormValues {
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
      company_id: '',
      voters_card: '',
      accountnumber: '',
      drivers_licence: '',
      residential_address: '',
    },
    validate: {
      bvn: (value) => (!value ? 'BVN is required' : null),
      state: (value) => (!value ? 'State is required' : null),
      dob: (value) => (!value ? 'Date of birth is required' : null),
      bankcode: (value) => (!value ? 'Bank code is required' : null),
      lastname: (value) => (!value ? 'Last name is required' : null),
      firstname: (value) => (!value ? 'First name is required' : null),
      company_id: (value) => (!value ? 'Company ID is required' : null),
      telephone: (value) => (!value ? 'Phone number is required' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      residential_address: (value) => (!value ? 'Address is required' : null),
      accountnumber: (value) => (!value ? 'Account number is required' : null),
    },
  });

  const handleSubmit = (values: CustomerFormValues) => {
    console.log(values);
    // Handle form submission
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
            <div className="w-[36px] h-full flex items-center justify-end">
              <Icon
                width="19"
                height="19"
                color="white"
                icon="mingcute:user-add-2-line"
              />
            </div>

            <p>
              Add new customer
            </p>

            <div className="border-l-2 border-[#13497f] w-[36px] h-full flex items-center justify-center">
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
        <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input.Wrapper
              label="First Name"
              error={form.errors.firstname}
              labelProps={{
                style: { color: '#44444B' }
              }}
            >
              <Input
                placeholder="Enter first name"
                {...form.getInputProps('firstname')}
              />
            </Input.Wrapper>

            <Input.Wrapper
              label="Last Name"
              error={form.errors.lastname}
              labelProps={{
                style: { color: '#44444B' }
              }}
            >
              <Input
                placeholder="Enter last name"
                {...form.getInputProps('lastname')}
              />
            </Input.Wrapper>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input.Wrapper
              label="Email"
              error={form.errors.email}
              labelProps={{
                style: { color: '#44444B' }
              }}
            >
              <Input
                type="email"
                placeholder="Enter email"
                {...form.getInputProps('email')}
              />
            </Input.Wrapper>

            <Input.Wrapper
              label="Phone"
              error={form.errors.telephone}
              labelProps={{
                style: { color: '#44444B' }
              }}
            >
              <Input
                type="number"
                placeholder="Enter phone number"
                {...form.getInputProps('telephone')}
              />
            </Input.Wrapper>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input.Wrapper
              label="BVN"
              error={form.errors.bvn}
              labelProps={{
                style: { color: '#44444B' }
              }}
            >
              <Input
                placeholder="Enter BVN"
                {...form.getInputProps('bvn')}
              />
            </Input.Wrapper>

            <Input.Wrapper
              label="Date of Birth"
              labelProps={{
                style: { color: '#44444B' }
              }}
            >
              <DateInput
                placeholder="Select date"
                {...form.getInputProps('dob')}
              />
            </Input.Wrapper>
          </div>

          <Input.Wrapper
            label="Address"
            error={form.errors.residential_address}
            labelProps={{
              style: { color: '#44444B' }
            }}
          >
            <Input
              placeholder="Enter residential address"
              {...form.getInputProps('residential_address')}
            />
          </Input.Wrapper>

          <div className="grid grid-cols-3 gap-4">
            <Input.Wrapper
              label="State"
              error={form.errors.state}
              labelProps={{
                style: { color: '#44444B' }
              }}
            >
              <Input
                placeholder="Enter state"
                {...form.getInputProps('state')}
              />
            </Input.Wrapper>

            <Input.Wrapper
              label="City"
              error={form.errors.city}
              labelProps={{
                style: { color: '#44444B' }
              }}
            >
              <Input
                placeholder="Enter city"
                {...form.getInputProps('city')}
              />
            </Input.Wrapper>

            <Input.Wrapper
              label="Country"
              error={form.errors.country}
              labelProps={{
                style: { color: '#44444B' }
              }}
            >
              <Input
                placeholder="Enter country"
                {...form.getInputProps('country')}
              />
            </Input.Wrapper>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input.Wrapper
              label="Bank Code"
              error={form.errors.bankcode}
              labelProps={{
                style: { color: '#44444B' }
              }}
            >
              <Input
                placeholder="Enter bank code"
                {...form.getInputProps('bankcode')}
              />
            </Input.Wrapper>

            <Input.Wrapper
              label="Account Number"
              error={form.errors.accountnumber}
              labelProps={{
                style: { color: '#44444B' }
              }}
            >
              <Input
                placeholder="Enter account number"
                {...form.getInputProps('accountnumber')}
              />
            </Input.Wrapper>
          </div>

          <Input.Wrapper
            label="Company ID"
            error={form.errors.company_id}
            labelProps={{
              style: { color: '#44444B' }
            }}
          >
            <Input
              placeholder="Enter company ID"
              {...form.getInputProps('company_id')}
            />
          </Input.Wrapper>

          <div className="grid grid-cols-3 gap-4">
            <Input.Wrapper
              label="ID Card"
              error={form.errors.id_card}
              labelProps={{
                style: { color: '#44444B' }
              }}
            >
              <Input
                placeholder="Optional"
                {...form.getInputProps('id_card')}
              />
            </Input.Wrapper>

            <Input.Wrapper
              label="Voters Card"
              error={form.errors.voters_card}
              labelProps={{
                style: { color: '#44444B' }
              }}
            >
              <Input
                placeholder="Optional"
                {...form.getInputProps('voters_card')}
              />
            </Input.Wrapper>

            <Input.Wrapper
              label="Driver's License"
              error={form.errors.drivers_licence}
              labelProps={{
                style: { color: '#44444B' }
              }}
            >
              <Input
                placeholder="Optional"
                {...form.getInputProps('drivers_licence')}
              />
            </Input.Wrapper>
          </div>

          <div className="flex justify-center mt-6">
            <button type="submit" className="bg-[#0053A6] space-x-2 w-full text-white rounded-[6px] h-[40px] border shadow border-[#13497f]">
              Create Customer
            </button>
          </div>
        </form>
      </Modal>
    </React.Fragment>
  )
}