import { useMutation } from '@tanstack/react-query'
import {
  BitcoinNetworkType,
  SignTransactionOptions,
  signTransaction,
} from 'sats-connect'
import * as btc from 'micro-btc-signer'
import { hex, base64 } from '@scure/base'

export function useCreateIssuance() {
  return useMutation({
    mutationFn: async ({ address }: { address: string }) => {
      const internalPubKey = hex.decode(
        'a1731c4957674b1f93a4c54bc76a21439fe396c82dcc9bd62c4f04ec8c660793'
      )
      const p2tr = btc.p2tr(internalPubKey, undefined, btc.NETWORK)

      const output = {
        txid: '119c3ee81c4e240f6c11f454a67694eefe67053877298266c27d3af7dc03f584',
        vout: 0,
        status: {
          confirmed: true,
          block_height: 809846,
          block_hash:
            '000000000000000000047b388f903b3c539bd53440f6598b3a24beff686e92ed',
          block_time: 1695978918,
        },
        value: 100000,
      }

      const tx = new btc.Transaction()

      tx.addInput({
        txid: output.txid,
        index: 0,
        witnessUtxo: {
          script: p2tr.script,
          amount: BigInt(output.value),
        },
        tapInternalKey: internalPubKey,
        sighashType: btc.SignatureHash.SINGLE | btc.SignatureHash.ANYONECANPAY,
      })

      // Add outputs
      const recipient =
        'bc1pxdrptw7jqe6cclfsj0u2f7jg06shwfuduaalrke50v4kznewgpgq43dx7u'

      tx.addOutputAddress(recipient, BigInt(200000), btc.NETWORK)

      // Generate the base64 encoded PSBT that can be
      // passed to a compatible wallet for signing
      const psbt = tx.toPSBT(0)
      const psbtB64 = base64.encode(psbt)

      const signPsbtOptions: SignTransactionOptions = {
        payload: {
          network: {
            type: BitcoinNetworkType.Mainnet,
          },
          message: 'Review Transaction',
          psbtBase64: psbtB64,
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
