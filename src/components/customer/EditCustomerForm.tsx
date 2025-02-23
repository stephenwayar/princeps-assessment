import { AxiosError } from "axios";
import { DateInput } from "@mantine/dates"
import { Input, Loader } from "@mantine/core"
import { UseFormReturnType } from "@mantine/form"
import { UseMutationResult } from "@tanstack/react-query";
import { EditCustomerFormValues } from "./CustomerCard";

interface Props {
  handleSubmit: (values: EditCustomerFormValues) => void;
  mutation: UseMutationResult<any, AxiosError<{
    errors: Record<string, string[]>;
    message: string;
  }, any>, EditCustomerFormValues, unknown>;
  form: UseFormReturnType<EditCustomerFormValues, (values: EditCustomerFormValues) => EditCustomerFormValues>
}

export default function EditCustomerForm({ form, handleSubmit, mutation }: Props) {
  return (
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
            disabled={mutation.isPending}
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
            disabled={mutation.isPending}
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
            disabled={mutation.isPending}
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
            disabled={mutation.isPending}
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
            disabled={mutation.isPending}
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
            disabled={mutation.isPending}
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
          disabled={mutation.isPending}
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
            disabled={mutation.isPending}
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
            disabled={mutation.isPending}
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
            disabled={mutation.isPending}
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
            disabled={mutation.isPending}
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
            disabled={mutation.isPending}
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
          disabled
          placeholder="Enter company ID"
          {...form.getInputProps('company_id')}
        />
      </Input.Wrapper>

      <div className="grid grid-cols-2 gap-4">
        <Input.Wrapper
          label="Workplace Name"
          error={form.errors.workplace_name}
          labelProps={{
            style: { color: '#44444B' }
          }}
        >
          <Input
            placeholder="Enter workplace name"
            disabled={mutation.isPending}
            {...form.getInputProps('workplace_name')}
          />
        </Input.Wrapper>

        <Input.Wrapper
          label="Workplace Address"
          error={form.errors.workplace_address}
          labelProps={{
            style: { color: '#44444B' }
          }}
        >
          <Input
            placeholder="Enter workplace address"
            disabled={mutation.isPending}
            {...form.getInputProps('workplace_address')}
          />
        </Input.Wrapper>
      </div>

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
            disabled={mutation.isPending}
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
            disabled={mutation.isPending}
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
            disabled={mutation.isPending}
            {...form.getInputProps('drivers_licence')}
          />
        </Input.Wrapper>
      </div>

      <div className="flex justify-center mt-6">
        <button
          type="submit"
          disabled={mutation.isPending}
          className="bg-[#0053A6] space-x-2 w-full disabled:opacity-50 text-white rounded-[6px] flex items-center justify-center h-[40px] border shadow border-[#13497f]"
        >
          {mutation.isPending ?
            <Loader color="white" size="xs" /> :
            'Save Changes'
          }
        </button>
      </div>
    </form>
  )
}