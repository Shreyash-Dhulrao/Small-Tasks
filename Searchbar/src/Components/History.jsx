import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeHistory } from '../Redux/History'

const History = () => {
    const data = useSelector(items=> items.history.newHistory || [])
    const dispatch = useDispatch()
    const handleDelete =(e)=>{
        e.preventDefault
        const a = e.currentTarget.value
        dispatch(removeHistory(a))
    }

  return (
    <div>
        <div>
            <Link to="/" className='px-5 py-2 m-3 bg-zinc-200'> ← Back</Link>
        </div>
        <div className='flex items-center justify-center'>
            <h2 className='text-xl font-semibold'>History</h2>
        </div>
        <div className='p-3 flex flex-col gap-3 items-center'>
        {data.map((item, index) => (
          <div key={index} className='bg-zinc-200 w-1/2 flex gap-5 items-cener justify-between'>
            <div className='py-3 px-3'>
            <p>{item.history}</p>
            </div>
            <div className='bg-red-500 text-white p-3'>
            <button onClick={handleDelete} value={item.history}>Delete</button>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default History
