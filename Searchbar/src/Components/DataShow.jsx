import React, {useState }from 'react'
import Data from './Data'
import Searchbar from './Searchbar'

const DataShow = () => {
    const [first, setfirst] = useState(Data)

  return (
    <div>
        <div>
            <Searchbar  setfirst={setfirst}/>
        </div>
      <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-5 gap-3 md:p-5 p-3'>
      {first.length > 0 ?(
        
        first.map((items , index)=>{
            return (
            <div key={index} className='bg-zinc-200/50 lg:p-3 p-2  rounded-lg flex flex-col gap-1  '>
                    <img src={items.imageURL} alt="" className='bg-white rounded-md' />
                    <div className='p-2'>
                    <h2 className='truncate font-medium lg:text-lg text-md'>{items.name}</h2>
                    <p className='truncate lg:text-md text-sm'>{items.description}</p>
                    <p className='text-sm'>Price : $ {items.price}</p>
                    <p className='text-sm'>Rating : {items.rating}</p>
                    </div>
                </div>
            )
        })
      ): (
        <div> No Data Found...</div>)
      }
      </div>
    </div>
  )
}

export default DataShow
