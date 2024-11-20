import React, { useState } from 'react'
import videos from './Data'
import Comment from './comment'
import { useSelector } from 'react-redux'

const VideoFiles = () => {
  const [dataTrack, setDataTrack] = useState(null)
  const commentData = useSelector(items=> items.comment.commentText)

  const countOccurrences = (array, targetObject) => {
    return array.reduce((count, obj) => {
      if (obj.target === targetObject) {
        return count + 1;
      }
      return count;
    }, 0);
  };


  return (
    <div className='grid grid-cols-3 gap-3 p-3'>
      {videos.map((items)=>{
        const commentCount = countOccurrences(commentData, items.id);
        return (
            <div key={items.id} onClick={()=>setDataTrack(items.id)} className='bg-zinc-200 p-5 flex flex-col gap-3'>
                <div className='w-full h-32 bg-white p-2'>
                    {items.id}
                </div>
                <div>
                    <h2 className='font-semibold text-xl'>{items.title}</h2>
                    <div>
                        <p>Likes: {items.likes}</p>
                        <p>Comments: {commentCount}</p>
                        <Comment  target={items.id}/>
                    </div>
                </div>

            </div>
        )
      })}
    </div>
  )
}

export default VideoFiles
