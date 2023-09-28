import { z } from 'zod'

import { isValidBitcoinAddress } from '@/utils/isValidBitcoinAddress'

export const transferSchema = z
  .object({
    receiverAddress: z.string().refine((value) => isValidBitcoinAddress(value)),
    feeRate: z.number(),
  })
  .strict()

export type TransferSchemaType = z.infer<typeof transferSchema>
