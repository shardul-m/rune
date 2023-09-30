export async function getFeesData() {
  return fetch(`https://mempool.space/api/v1/fees/recommended`, {
    cache: 'no-cache',
  })
    .then((res) => res.json())
    .then(
      (data) =>
        data as {
          fastestFee: number
          halfHourFee: number
          hourFee: number
          economyFee: number
          minimumFee: number
        }
    )
}
