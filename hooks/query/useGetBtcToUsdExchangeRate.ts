import { useQuery } from '@tanstack/react-query'

import { btcToUsdExchangeRate } from '@/utils/btcToUsdExchangeRate'

export function useGetBtcToUsdExchangeRate() {
  return useQuery({
    queryKey: ['exchange-rate', 'bitcoin', 'usd'],
    queryFn: async () => {
      return btcToUsdExchangeRate()
    },
  })
}
