import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  AddressPurpose,
  BitcoinNetworkType,
  GetAddressOptions,
  GetAddressResponse,
  getAddress,
} from 'sats-connect'

export function useConnectWallet() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      return new Promise<GetAddressResponse>(async (resolve, reject) => {
        const getAddressOptions: GetAddressOptions = {
          payload: {
            purposes: [AddressPurpose.Ordinals, AddressPurpose.Payment],
            message: 'Address for receiving Ordinals and payments',
            network: {
              type: BitcoinNetworkType.Mainnet,
            },
          },
          onFinish: (response) => {
            resolve(response)
          },
          onCancel: () => {
            alert('Request canceled')
            reject('Cancelled')
          },
        }

        await getAddress(getAddressOptions)
      })
    },
    onSuccess(data: GetAddressResponse) {
      localStorage.setItem('connected-wallet-info', JSON.stringify(data))
      queryClient.invalidateQueries(['connected-wallet-info'])
    },
  })
}
