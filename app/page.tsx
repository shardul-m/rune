import axios from 'axios'
import { Transaction } from '@prisma/client'

import Search from '@/components/Search'
import Table from '@/components/Table'
import Table2 from '@/components/Table2'

const backendURL = process.env.BACKEND_URL

async function getOneTransaction(txId: string): Promise<Transaction | null> {
  try {
    const response = await axios.get(`${backendURL}/tx/${txId}`)
    return response.data
  } catch (e) {
    return null
  }
}

export default async function Home({ searchParams }: { searchParams: any }) {
  let searchTransaction: Transaction | null = null
  let isError = false

  if (searchParams && searchParams?.q && searchParams.q != '') {
    try {
      searchTransaction = await getOneTransaction(searchParams.q)
    } catch (e) {
      isError = true
    }
  }

  return (
    <main className="flex container mx-auto flex-col items-center min-h-screen py-20 pt-32">
      <div>
        <h1 className="text-4xl mb-4 text-center font-bold">
          Search Transactions / Issuances
        </h1>
        <div className="w-full flex flex-col">
          <Search />

          {isError && <p>Invalid Tx</p>}
          {searchTransaction && (
            <div className="mt-5">
              <Table transactions={[searchTransaction]} />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center w-full mt-14">
        <h1 className="text-4xl mb-4 text-center font-bold">
          Recent Transactions / Issuances
        </h1>
        <Table2 />
      </div>
    </main>
  )
}
