type Utxo = {
  txid: string
  vout: number
  status: {
    confirmed: boolean
    block_height: number
    block_hash: string
    block_time: number
  }
  value: number
}

export async function getBitcoinAddressUtxos(address: string) {
  try {
    const apiUrl = `https://blockstream.info/api/address/${address}/utxo`

    const response = await fetch(apiUrl, { cache: 'no-cache' })

    if (response.status !== 200) return null
    const utxos = await response.json()

    return utxos as Utxo[]
  } catch (error) {
    console.error(`An error occurred: ${error}`)
    return null
  }
}
