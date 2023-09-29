import { useQuery } from '@tanstack/react-query'

import { getFeesData } from '@/utils/getFeesData'

export function useGetFeesData() {
  return useQuery({
    queryKey: ['fees-data'],
    queryFn: async () => {
      return getFeesData()
    },
    refetchInterval: 10_000,
  })
}
