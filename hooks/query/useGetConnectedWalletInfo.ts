import { useQuery } from '@tanstack/react-query'
import { GetAddressResponse } from 'sats-connect'

export function useGetConnectedWalletInfo() {
  return useQuery<GetAddressResponse>({
    queryKey: ['connected-wallet-info'],
    queryFn: () => {
      const info =
        localStorage.getItem('connected-wallet-info') ||
        JSON.stringify({ addresses: [] })
      return JSON.parse(info) as GetAddressResponse
    },
    // cacheTime: Infinity,
    // staleTime: Infinity,
  })
}
