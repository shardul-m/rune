import './globals.css'
import type { Metadata } from 'next'
import { Inter, Courier_Prime } from 'next/font/google'
import Providers from './providers'
import { Navbar } from '@/components/Navbar'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: 'normal',
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: 'normal',
  display: 'swap',
  preload: true,
  variable: '--font-courier-prime',
})

export const metadata: Metadata = {
  title: 'Runescan',
  description: 'Block explorer for BTC',
  icons: ['favicon.ico'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`px-10 bg-primaryBackground ${inter.className} ${courierPrime.className}`}
        style={{
          backgroundImage: `url(/bg.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100vw 100vh',
          backgroundAttachment: 'scroll',
        }}
      >
        <Providers>
          <>
            <Navbar />
            {children}
          </>
        </Providers>
      </body>
    </html>
  )
}
