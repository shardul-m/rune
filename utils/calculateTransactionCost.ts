// export function calculateTransactionCost(
//   transactionSizeInBytes: number,
//   satoshisPerByte: number
// ): number {
//   if (transactionSizeInBytes < 0 || satoshisPerByte < 0) {
//     throw new Error('Invalid input values')
//   }

//   const costInSatoshis = transactionSizeInBytes * satoshisPerByte

//   return costInSatoshis / 100_000_000
// }

export function calculateTransactionCost(
  transactionSizeInVB: number,
  feeRateInSatPerVB: number
): number {
  if (transactionSizeInVB < 0 || feeRateInSatPerVB < 0) {
    throw new Error('Invalid input values')
  }

  // Calculate the cost in satoshis
  const costInSatoshis = transactionSizeInVB * feeRateInSatPerVB

  // Convert satoshis to Bitcoin (1 BTC = 100,000,000 satoshis)
  const costInBitcoin = costInSatoshis / 100000000

  return costInBitcoin
}

// Example usage
const transactionSizeInVB = 200 // Replace with the actual transaction size in vB
const feeRateInSatPerVB = 100 // Replace with the fee rate in satoshis per vB
const transactionCostInBTC = calculateTransactionCost(
  transactionSizeInVB,
  feeRateInSatPerVB
)
console.log(`Transaction cost: ${transactionCostInBTC} BTC`)
