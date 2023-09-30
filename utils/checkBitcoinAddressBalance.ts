export async function checkBitcoinAddressBalance(address: string) {
  try {
    const apiUrl = `https://blockstream.info/api/address/${address}/utxo`

    const response = await fetch(apiUrl, { cache: 'no-cache' })

    if (response.status !== 200) return null
    const utxos = await response.json()

    const balance = utxos.reduce(
      (total: number, utxo: any) => total + utxo.value,
      0
    )

    return balance as number
  } catch (error) {
    console.error(`An error occurred: ${error}`)
    return null
  }
}
