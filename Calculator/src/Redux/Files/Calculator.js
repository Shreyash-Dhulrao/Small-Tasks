import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    buttons: ["CE","√" , "%","/",9,8,7,"x",6,5,4,"-",3,2,1,"+",0,"00",".","="]
}

export const newSlice = createSlice({
    name:"calculator",
    initialState,
    reducers:{
        addition:(state , action)=>{
            console.log(action.payload);
        }
    }
})

export const {addition} = newSlice.actions;
export default newSlice.reducer