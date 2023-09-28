import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { cn } from '@/utils/cn'
import { transferSchema } from '../../schemas/TransferSchema'

export function TransferForm({ className }: { className?: string }) {
  const methods = useForm({
    defaultValues: {},
    resolver: zodResolver(transferSchema),
  })

  return (
    <section className={cn('', className)}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(console.log)}></form>
      </FormProvider>
    </section>
  )
}
