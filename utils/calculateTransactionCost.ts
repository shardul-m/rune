import { satsToBitcoin } from './satsToBitcoin'

export function calculateTransactionCost(
  transactionSizeInVB: number,
  feeRateInSatPerVB: number
): number {
  if (transactionSizeInVB < 0 || feeRateInSatPerVB < 0) {
    throw new Error('Invalid input values')
  }

  const costInSatoshis = transactionSizeInVB * feeRateInSatPerVB

  return satsToBitcoin(costInSatoshis)
}
