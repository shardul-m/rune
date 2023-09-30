export async function btcToUsdExchangeRate() {
  return fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=USD`,
    { cache: 'no-store' }
  )
    .then((res) => res.json())
    .then(
      (data) =>
        data as {
          bitcoin: {
            usd: number
          }
        }
    )
}
