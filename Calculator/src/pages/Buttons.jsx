import React from 'react'
import { useSelector } from 'react-redux'

const Buttons = () => {
    const buttons = useSelector(state=>state.calculator.buttons)
    buttons.map((items , index)=>{
        console.log(typeof(items))
        console.log()
    })
  return (
    <div>
       <div className='w-full flex flex-col items-center justify-center mt-3'>
        <div className='md:w-1/2 w-full'>
        <div className=' w-full bg-red-300'>
            <input type="number" className='w-full outline-none border border-zinc-500 p-3 ps-5'/>
        </div>
      <div className='grid grid-cols-4 gap-4 p-4 bg-zinc-100 w-full'>
      {buttons.map((items, index)=>{
        return(
            <div key={index} className='flex items-center justify-center '>
                <button className={`${items[index]%3 === 0 ? "bg-red-300" :" bg-zinc-300"} w-full p-4 rounded-xl`}>{items}</button>
            </div>
        )
      })}
      </div>
        </div>
       </div>
    </div>
  )
}

export default Buttons
