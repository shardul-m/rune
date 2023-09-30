export function calculateTransactionSize(
  numInputs: number,
  numOutputs: number
): number {
  // Constants for average transaction size in bytes per input and output
  const inputSizeInBytes = 148 // Typical P2PKH input size
  const outputSizeInBytes = 34 // Typical P2PKH output size
  const overheadSizeInBytes = 10 // A rough estimate for transaction overhead

  // Calculate the estimated transaction size in bytes
  const transactionSizeInBytes =
    numInputs * inputSizeInBytes +
    numOutputs * outputSizeInBytes +
    overheadSizeInBytes

  // Calculate virtual bytes (vB) using the SegWit weight formula
  const vB = transactionSizeInBytes * 4

  return vB
}

// Example usage
const numInputs = 2 // Replace with the actual number of inputs
const numOutputs = 1 // Replace with the actual number of outputs
const estimatedTransactionSizeInVB = calculateTransactionSize(
  numInputs,
  numOutputs
)
console.log(`Estimated transaction size: ${estimatedTransactionSizeInVB} vB`)
