import { createSlice } from "@reduxjs/toolkit";
import Videos from '../../components/Data'

const initialState = {
    commentText: [],
}

export const commentSlice = createSlice({
    name: "comment",
    initialState, 
    reducers:{
        addComment: (state, action) =>{
            Videos.map((items)=>{
                if(action.payload.target === items.id){
                    state.commentText.push(action.payload)
                }
            })
        },
        removeComment: (state, action) =>{},
        editComment:(state,action)=>{}
    }
})

export const {addComment, removeComment , editComment} = commentSlice.actions

export default commentSlice.reducer