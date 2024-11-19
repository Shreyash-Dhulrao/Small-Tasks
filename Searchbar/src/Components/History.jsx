import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const History = () => {
    const data = useSelector(items=> items.history.newHistory || [])
    console.log(data)
  return (
    <div>
        <div>
            <Link to="/" className='px-5 py-2 m-3 bg-zinc-200'> ← Back</Link>
        </div>
        <div className='flex items-center justify-center'>
            <h2 className='text-xl font-semibold'>History</h2>
        </div>
        <div className='p-3 flex flex-col gap-5'>
        {data.map((item, index) => (
          <div key={index}>
            {item.history}
          </div>
        ))}
        </div>
    </div>
  )
}

export default History
