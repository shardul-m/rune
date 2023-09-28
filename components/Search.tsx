'use client'

import { useState } from 'react'
import Link from 'next/link'

const Search = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <input
        type="text"
        className="p-2 mb-2 border-black border-2"
        placeholder="Enter Tx ID"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Link
        href={`/?q=${value}`}
        className="bg-primaryText font-bold text-center text-white p-2"
      >
        Search
      </Link>
    </>
  )
}

export default Search
