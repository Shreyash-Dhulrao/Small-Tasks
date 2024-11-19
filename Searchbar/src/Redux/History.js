import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
    name: "history",
    initialState : {
        newHistory:[
            {
                history:"some history"
            }
        ]
    },
    reducers: {
        addHistory : (state, action) =>{
            console.log(action.payload)
            if(action.payload=== ""){
                return
            }
            else{
                let a = {
                    history: action.payload
                }
                state.newHistory.push(a)
            }
            console.log(state.history)
        }
    }
})

export const { addHistory } = historySlice.actions;
export default historySlice.reducer;