import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
    name: "history",
    initialState: {
        newHistory: []
    },
    reducers: {
        addHistory: (state, action) => {
            if (action.payload === "") {
                return
            }
            else {
                let a = {
                    history: action.payload
                }
                state.newHistory.push(a)
            }
        },
        removeHistory: (state, action) => {
            state.newHistory = state.newHistory.filter(items => items.history !== action.payload)
        }
    }
})

export const { addHistory , removeHistory } = historySlice.actions;
export default historySlice.reducer;