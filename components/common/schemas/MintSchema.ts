import { z } from 'zod'

import { isValidBitcoinAddress } from '@/utils/isValidBitcoinAddress'

export const mintSchema = z
  .object({
    receiverAddress: z
      .string({ invalid_type_error: 'Invalid receiver address' })
      .refine((value) => isValidBitcoinAddress(value), {
        message: 'Invalid receiver address',
      }),
    tokenSymbol: z.string().min(1).max(75),
    maxSupply: z.coerce.number().int().positive().default(0),
    decimals: z.coerce.number().int().positive().default(0),
    feeRate: z.string(),
  })
  .strict()

export type MintSchemaType = z.infer<typeof mintSchema>
