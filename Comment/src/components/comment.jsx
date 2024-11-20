import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addComment} from '../Redux/Files/Comment'

const comment = ({target}) => {
    const [comment, setcomment] = useState("")
    const dispatch = useDispatch()
    const handleSubmit =(e)=>{
        e.preventDefault();
        const a = {
            comment, 
            target
        }
        dispatch(addComment(a))
        setcomment("")
    }
    const commentData = useSelector(items=> items.comment.commentText)

  return (
    <div>
        <form onSubmit={handleSubmit} className='w-full flex gap-2 '>
            <input type="text" placeholder='Type something....' maxLength={100} className='w-full bg-white p-2 outline-none border-none ' value={comment} onChange={(e)=>setcomment(e.currentTarget.value)}/>
            <button type='submit' className='bg-zinc-100  px-2 py-1 rounded-md'>Comment</button>
        </form>

        <div className='h-20 w-full overflow-y-scroll my-2'>
            {
                commentData.map((items , index)=>{
                    if(items.target === target){
                        return (
                            <p key={index}>{items.comment}</p>
                        )
                      }    
                  })
            }
        </div>
      
    </div>
  )
}

export default comment
