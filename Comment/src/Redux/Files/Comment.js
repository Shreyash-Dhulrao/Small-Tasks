import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    commentLength: 0,
    commentText: "",
    commentTarget: 0,
    
}

export const commentSlice = createSlice({
    name: "comment",
    initialState, 
    reducers:{
        addComment: (state, action) =>{
            console.log(action.payload);
            
        },
        removeComment: (state, action) =>{},
        editComment:(state,action)=>{}
    }
})

export const {addComment, removeComment , editComment} = commentSlice.actions

export default commentSlice.reducer