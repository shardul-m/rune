export function truncateBitcoinAddress(
  address: string,
  length: number
): string {
  if (length >= 8 && length <= address.length) {
    const prefix = address.substring(0, 4)
    const suffix = address.substring(address.length - 4)
    return `${prefix}...${suffix}`
  } else {
    return address
  }
}
