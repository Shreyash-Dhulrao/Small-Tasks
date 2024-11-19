import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addComment} from '../Redux/Files/Comment'

const comment = () => {
    const [comment, setcomment] = useState("")
    const dispatch = useDispatch()
    const commentTarget = useSelector(items=> items.comment.commentTarget)
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(commentTarget)
        dispatch(addComment(comment))
        setcomment("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className='w-full flex gap-2 '>
            <input type="text" placeholder='Type something....' maxLength={100} className='w-full bg-white p-2 outline-none border-none ' value={comment} onChange={(e)=>setcomment(e.currentTarget.value)}/>
            <button type='submit' className='bg-zinc-100  px-2 py-1 rounded-md'>Comment</button>
        </form>

        <div className='h-20 w-full overflow-y-scroll my-2'>
            comments will be appear here got it Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ea in placeat saepe, deleniti beatae voluptas, corrupti sequi laudantium incidunt quos sed, ad voluptatibus nesciunt harum ut mollitia ducimus! Distinctio impedit obcaecati aliquid quas quia assumenda quisquam at, dignissimos, consectetur rerum dolores quam praesentium similique facilis pariatur reiciendis numquam fugiat ut aut! Porro nisi blanditiis nostrum fuga consequatur, impedit necessitatibus, explicabo, hic veritatis id quod laudantium error deserunt tempora fugit dolor! Vero nihil obcaecati soluta, provident non nam harum adipisci illo dignissimos placeat ex, totam magni? Nihil ea, ipsam cupiditate nostrum quasi sunt iusto ut repellendus provident rem laudantium repudiandae iure quisquam neque odio sed sit doloribus, atque quidem tenetur voluptas quae, assumenda eveniet enim! Quam rerum ad laudantium minus, velit maiores voluptas maxime expedita doloremque hic error vitae? Iure rem animi nisi incidunt expedita magni facilis necessitatibus delectus aliquam. Praesentium placeat fugiat eligendi obcaecati neque illo nostrum enim quis voluptas officia ipsa, aut iure eaque quae atque provident deleniti distinctio explicabo sunt nam perspiciatis quam tempora tempore. Ratione consectetur voluptatem, aperiam cupiditate sapiente laboriosam in! Facilis, ea id impedit vero nulla magni itaque eius voluptatem eos consequuntur et neque saepe, eveniet quidem ipsa, fugit explicabo voluptatum adipisci dolores nesciunt praesentium rem soluta illum placeat. Quidem culpa iusto libero repellendus beatae et delectus placeat ipsa dicta ab deserunt, laboriosam cumque, quas tempore similique itaque at reiciendis aperiam rerum accusantium accusamus. Rem, adipisci in. Delectus inventore recusandae saepe aspernatur quaerat quidem facere debitis ab incidunt, beatae quod ullam sed magni sit eaque aliquid porro vero placeat!
        </div>
      
    </div>
  )
}

export default comment
