import { createSlice } from "@reduxjs/toolkit";
import Videos from '../../components/Data'

const initialState = {
    commentLength: 0,
    commentText: "",
    commentTarget: 0,
}

const vidLen = (e)=>{
    console.log(e)
    Videos.map((items)=>{
        if(e === items.id){
            console.log(items , " Comment ")
        }
    })
}

export const commentSlice = createSlice({
    name: "comment",
    initialState, 
    reducers:{
        addComment: (state, action) =>{
            console.log(action);
            vidLen(action.payload.target)
            console.log(state.commentTarget)
        },
        removeComment: (state, action) =>{},
        editComment:(state,action)=>{}
    }
})

export const {addComment, removeComment , editComment} = commentSlice.actions

export default commentSlice.reducer