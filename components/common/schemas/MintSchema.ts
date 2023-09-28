import { z } from 'zod'

import { isValidBitcoinAddress } from '@/utils/isValidBitcoinAddress'

export const mintSchema = z
  .object({
    receiverAddress: z.string().refine((value) => isValidBitcoinAddress(value)),
    tokenSymbol: z.string().min(1).max(75),
    maxSupply: z.coerce.number().default(0),
    decimals: z.coerce.number().default(0),
    feeRate: z.number(),
  })
  .strict()

export type MintSchemaType = z.infer<typeof mintSchema>
