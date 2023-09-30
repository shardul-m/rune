export function satsToBitcoin(sats: number) {
  const bitcoinAmount = sats / 100_000_000
  return bitcoinAmount
}
