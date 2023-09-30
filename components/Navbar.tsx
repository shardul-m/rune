'use client'

import { useEffect, useState } from 'react'
import { AddressPurpose } from 'sats-connect'
import Link from 'next/link'

import { useConnectWallet } from '@/hooks/mutation/useConnectWallet'
import { useGetConnectedWalletInfo } from '@/hooks/query/useGetConnectedWalletInfo'

import { cn } from '@/utils/cn'
import { truncateBitcoinAddress } from '@/utils/truncateBitcoinAddress'

export function Navbar() {
  const [top, setTop] = useState(false)

  const { data } = useGetConnectedWalletInfo()
  const { mutate } = useConnectWallet()

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.scrollY > 20)
    }
    window.addEventListener('scroll', scrollHandler)

    scrollHandler()

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <header
      className={cn(
        ' flex items-center justify-center fixed top-0 left-0 right-0  px-4 w-full h-[70px] z-50 duration-200',
        top
          ? 'bg-[#E4DABD] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50'
          : 'bg-transparent'
      )}
    >
      <nav className="flex gap-4 items-center justify-between container mx-auto h-full">
        <Link href={'/'}>
          <h1 className="font-bold text-primaryText text-3xl">Runescan</h1>
        </Link>

        <button
          className="px-4 py-2 font-bold bg-primaryBackground border border-primaryText rounded-xl"
          onClick={() => mutate()}
          disabled={!!data?.addresses.length}
        >
          {!!data?.addresses?.length
            ? truncateBitcoinAddress(
                data.addresses.find(
                  (obj) => obj.purpose === AddressPurpose.Payment
                )?.address!,
                8
              )
            : 'Login'}
        </button>
      </nav>
    </header>
  )
}
