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
    <section className={cn('max-w-md w-full', className)}>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(() => console.log('Wow'))}
          className="flex flex-col gap-6 border border-primaryText p-8 rounded-3xl bg-primaryBackground shadow-lg"
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
          <div className="">
            <p className="mb-2">Fee Rate (6 sats/vB)</p>
            <div className="justify-start items-start gap-2 flex flex-wrap">
              <FeeButton isSelected text="Slow" />
              <FeeButton isSelected={false} text="Medium" />
              <FeeButton isSelected={false} text="Fast" />
            </div>
          </div>
          <p className="">Total Cost: 0.00001878 BTC ($0.50)</p>
          <button
            type="submit"
            disabled={false}
            className={cn(
              'mt-2 border-2 border-black dark:border-white dark:text-white rounded py-2 px-5 font-bold text-lg duration-150 hover:shadow-md flex items-center justify-center gap-4',
              'uppercase'
            )}
          >
            Please enter a valid receive address
          </button>
        </form>
      </FormProvider>
    </section>
  )
}

function FeeButton({
  isSelected,
  text,
  onClick,
}: {
  isSelected: boolean
  text: string
  onClick?: () => void
}) {
  return (
    <button
      className={cn(
        'px-3 py-2 bg-stone-800 rounded-lg border hover:shadow border-stone-800',
        'justify-center items-center gap-1.5 flex duration-100',
        isSelected ? 'bg-opacity-100 shadow-lg' : 'bg-opacity-10 shadow-none'
      )}
      onClick={onClick}
    >
      <p
        className={cn(
          'whitespace-nowrap',
          isSelected ? 'text-stone-200' : 'text-stone-800'
        )}
      >
        {text}
      </p>
    </button>
  )
}
