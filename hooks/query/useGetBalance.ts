import { useQuery } from '@tanstack/react-query'

import { checkBitcoinAddressBalance } from '@/utils/checkBitcoinAddressBalance'

export function useGetBalance({ address }: { address?: string }) {
  return useQuery({
    queryKey: ['balance'],
    queryFn: async () => {
      return checkBitcoinAddressBalance(address!)
    },
    enabled: !!address,
  })
}
