import React, {  useState } from 'react'
import Data from './Data'
import { useDispatch } from 'react-redux'
import { addHistory } from '../Redux/History'
import { Link } from 'react-router-dom'

const Searchbar = ({ setfirst }) => {
    const [search, setsearch] = useState('')
    const [val, setval] = useState(true)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();

        let Filter = Data.filter((items) => {
            let a = items.name.toLowerCase().includes(search.toLowerCase())
            return a 
        })
        dispatch(addHistory(search))

        if (Filter.length > 0) {
            setfirst(Filter)
        }
        else if (Filter !== true) {
            setfirst(<p>No Data Found...</p>)
        }
        else {
            setfirst(Data)
        }
    }

    return (
        <div>
            <div className='flex justify-center p-3'>
                <h2 className='font-semibold md:text-2xl text-xl'>E-Commerce Website</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit} className='flex items-center justify-center px-3.5 relative '>
                    <div className='md:w-1/2 w-full justify-between flex'>
                    <input type="text" value={search} onChange={(e) => {setsearch(e.currentTarget.value) , setval(true)}} placeholder='Search Product...' className='relative w-full py-2 px-4 bg-transparent border-b border-black outline-none' />
                    <button type='submit' className='border-b border-black py-2 px-3'>Search</button>
                    </div>
                    {search.length > 0 && (
                        <div className='md:w-1/2 w-full h-0 top-10 absolute flex flex-col grid grid-row-2 '>
                            {Data.filter((items) => {
                                let a = items.name.toLowerCase();
                                let b = search.toLowerCase();
                                return b && a.startsWith(b)
                            }).map((items, index) => {
                                return (
                                    <div className='w-full bg-zinc-300/50 backdrop-blur-xl' key={index}>
                                       {val && <button className='md:block hidden w-full text-start p-2'  onClick={() => {setsearch(items.name), setval(false)}}>{items.name}</button>}
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </form>
            </div>
            <div>
                <Link to="/history">History</Link>
            </div>
        </div>
    )
}

export default Searchbar
