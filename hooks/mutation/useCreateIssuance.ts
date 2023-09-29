import { useMutation } from '@tanstack/react-query'
import {
  BitcoinNetworkType,
  SignTransactionOptions,
  signTransaction,
} from 'sats-connect'

export function useCreateIssuance() {
  return useMutation({
    mutationFn: async ({ address }: { address: string }) => {
      const signPsbtOptions: SignTransactionOptions = {
        payload: {
          network: {
            type: BitcoinNetworkType.Mainnet,
          },
          message: 'Review Transaction',
          psbtBase64: ``,
          broadcast: false,
          inputsToSign: [
            {
              address,
              signingIndexes: [0],
              sigHash: 0,
            },
          ],
        },
        onFinish: (response) => {
          console.log(response.psbtBase64)
          alert(response.psbtBase64)
        },
        onCancel: () => alert('Canceled'),
      }

      await signTransaction(signPsbtOptions)
    },
  })
}
