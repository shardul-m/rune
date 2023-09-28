'use client'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import FormInput from '../FormInput'

import { MintSchemaType, mintSchema } from '../../schemas/MintSchema'

import { cn } from '@/utils/cn'

const defaultValues: MintSchemaType = {
  receiverAddress: '',
  tokenSymbol: '',
  maxSupply: 0,
  decimals: 0,
  feeRate: 0,
}

export function MintForm({ className }: { className?: string }) {
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(mintSchema),
  })
  return (
    <section className={cn('max-w-sm w-full', className)}>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(() => console.log('Wow'))}
          className="flex flex-col gap-6 border border-primaryText p-8 rounded-3xl bg-primaryBackground shadow-md"
        >
          <FormInput
            label="Rune Receiver Address"
            name="receiverAddress"
            placeholder="Address to receive token to"
          />
          <FormInput
            label="Rune Token Symbol"
            name="tokenSymbol"
            placeholder="Symbol of token (e.g. RUNE)"
          />
          <FormInput
            label="Max Supply"
            name="maxSupply"
            placeholder="Supply to mint"
          />
          <FormInput
            label="Decimals"
            name="decimals"
            placeholder="Max decimals"
          />
          <button
            type="submit"
            disabled={false}
            className={cn(
              'mt-2 border-2 border-black dark:border-white dark:text-white rounded py-2 px-5 font-bold text-lg duration-150 hover:shadow-md flex items-center justify-center gap-4'
            )}
          >
            Submit
          </button>
        </form>
      </FormProvider>
    </section>
  )
}
