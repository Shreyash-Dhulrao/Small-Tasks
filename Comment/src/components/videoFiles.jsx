import React from 'react'
import { videos } from './Data'
import Comment from './comment'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const VideoFiles = () => {
    const [commentTarget , setCommentTarget] = useState(useSelector(items=>items.comment.commentTarget))
  return (
    <div className='grid grid-cols-3 gap-3 p-3'>
      {videos.map((items)=>{
        return (
            <div key={items.id} onChange={()=>setCommentTarget(items.id)} className='bg-zinc-200 p-5 flex flex-col gap-3'>
                <div className='w-full h-32 bg-white p-2'>
                    {items.id}
                </div>
                <div>
                    <h2 className='font-semibold text-xl'>{items.title}</h2>
                    <div>
                        <p>Likes: {items.likes}</p>
                        <Comment />
                    </div>
                </div>

            </div>
        )
      })}
    </div>
  )
}

export default VideoFiles
