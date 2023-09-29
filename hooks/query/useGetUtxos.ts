import { useQuery } from '@tanstack/react-query'

import { getBitcoinAddressUtxos } from '@/utils/getBitcoinAddressUtxos'

export function useGetBalance({ address }: { address?: string }) {
  return useQuery({
    queryKey: ['utxos'],
    queryFn: async () => {
      return getBitcoinAddressUtxos(address!)
    },
    enabled: !!address,
  })
}
