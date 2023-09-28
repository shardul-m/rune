import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { cn } from '@/utils/cn'
import { mintSchema } from '../../schemas/MintSchema'

export function MintForm({ className }: { className?: string }) {
  const methods = useForm({
    defaultValues: {},
    resolver: zodResolver(mintSchema),
  })
  return (
    <section className={cn('', className)}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(console.log)}></form>
      </FormProvider>
    </section>
  )
}
