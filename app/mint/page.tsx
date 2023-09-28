'use client'

import { MintForm } from '@/components/common/form-elements/forms/MintForm'

export default function MintPage() {
  return (
    <main className="w-full min-h-screen flex-wrap lg:flex-nowrap px-4 py-20 flex items-start justify-center gap-10">
      <div className="w-full max-w-md flex flex-col gap-8 items-start justify-start text-primaryText order-2 lg:order-1">
        <div>
          <h1 className="font-bold text-4xl">Runes Deployer</h1>
          <h2 className="text-lg font-bold">
            using PrefixVarint and base26(A=1) encoding
          </h2>
          <p className="opacity-70">
            Important: Do not transfer the UTXO you receive, until wallets add
            runes support, or you may burn your runes.
          </p>
        </div>
        <div className="">
          <p className="font-bold text-xl">PrefixVariant</p>
          <p className="opacity-70">
            Uses PrefixVarint from original rune blog post, some implementations
            do not implement this correctly and are not compatible.
          </p>
        </div>
        <div className="">
          <p className="font-bold text-xl">Optimized</p>
          <p className="opacity-70">
            PrefixVarint significantly reduces the transfer size, and allows
            significantly more transfers per transaction
          </p>
        </div>
        <div className="">
          <p className="font-bold text-xl">Warning</p>
          <p className="opacity-70">
            Only the first issuance of a token may be valid, depending on the
            indexer. This may also not be the final spec, and future specs may
            be incompatible with this version.
          </p>
        </div>
        <div className="w-full">
          <p className="font-bold text-xl">Support our efforts by donating @</p>
          <div className="border border-primaryText p-2 block w-full">
            <input
              className="w-full bg-transparent"
              value={'bc1q8pstd959zlj59l24qxct3hkjrzpaza8m92vn6q'}
              readOnly
            />
          </div>
        </div>
      </div>
      <MintForm className="order-1 lg:order-2" />
    </main>
  )
}
